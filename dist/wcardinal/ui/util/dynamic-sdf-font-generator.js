/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var VERTEX_SHADER = "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nvarying mediump vec2 vTextureCoord;\nvoid main(void) {\n\tgl_Position = vec4(aVertexPosition, 0.0, 1.0);\n\tvTextureCoord = aTextureCoord;\n}\n";
var FRAGMENT_SHADER = "\nprecision mediump float;\n\nvarying mediump vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec2 uSize;\n\nfloat calcDistance( float x, float y, float dx, float dy ) {\n\tfloat xd = x + dx;\n\tfloat yd = y + dy;\n\tfloat u = xd / uSize.x;\n\tfloat v = yd / uSize.y;\n\tfloat ul = (xd - 1.0) / uSize.x;\n\tfloat vt = (yd - 1.0) / uSize.y;\n\n\tfloat m = texture2D(uSampler, vec2(u , v )).a;\n\tfloat l = texture2D(uSampler, vec2(ul, v )).a;\n\tfloat t = texture2D(uSampler, vec2(u , vt)).a;\n\n\tfloat xl = mix( xd - 1.0, xd, (0.5 - l) / (m - l) );\n\tfloat yt = mix( yd - 1.0, yd, (0.5 - t) / (m - t) );\n\n\tbool bl = ( min(l, m) < 0.5 && 0.5 <= max(l, m) );\n\tbool bt = ( min(t, m) < 0.5 && 0.5 <= max(t, m) );\n\n\tfloat ll = (bl ? length( vec2( xl - x, yd - y ) ) : 100.0);\n\tfloat lt = (bt ? length( vec2( xd - x, yt - y ) ) : 100.0);\n\n\treturn min( ll, lt );\n}\n\nfloat calcDistancesY( float x, float y, float dx ) {\n\tfloat d = 100.0;\n\tfor( float dy=-6.0; dy<6.5; dy++ ) {\n\t\td = min( d, calcDistance( x, y, dx, dy ) );\n\t}\n\treturn d;\n}\n\nfloat calcDistances( float x, float y ) {\n\tfloat d = 100.0;\n\tfor( float dx=-6.0; dx<6.5; dx++ ) {\n\t\td = min( d, calcDistancesY( x, y, dx ) );\n\t}\n\treturn d;\n}\n\nvoid main(void) {\n\tfloat t = texture2D(uSampler, vTextureCoord).a;\n\tfloat x = vTextureCoord.x * uSize.x;\n\tfloat y = vTextureCoord.y * uSize.y;\n\tfloat d = min( 6.0, calcDistances( x, y ) ) / 12.0;\n\td = clamp( mix( 0.5 - d, 0.5 + d, step( 0.5, t ) ), 0.0, 1.0 );\n\tgl_FragColor = vec4(1.0, 1.0, 1.0, d);\n}\n";
var DynamicSDFFontGenerator = /** @class */ (function () {
    function DynamicSDFFontGenerator() {
        var _this = this;
        this._gl = null;
        this._texture = null;
        this._shaderProgram = null;
        this._vertexPositionAttribute = NaN;
        this._textureCoordAttribute = NaN;
        this._samplerUniform = NaN;
        this._sizeUniform = NaN;
        this._vb = null;
        this._uvb = null;
        var canvas = this._canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;
        this._onLostBound = function (e) {
            e.preventDefault();
        };
        this._onRestoreBound = function () {
            _this.restore();
        };
        this._onUnloadBound = function () {
            _this.destroy();
        };
        canvas.addEventListener("webglcontextlost", this._onLostBound, false);
        canvas.addEventListener("webglcontextrestored", this._onRestoreBound, false);
        window.addEventListener("unload", this._onUnloadBound, false);
    }
    DynamicSDFFontGenerator.prototype.init = function () {
        var canvas = this._canvas;
        if (canvas != null && (this._gl == null || this._gl.isContextLost())) {
            var config = {
                alpha: true,
                antialias: false,
                depth: false,
                stencil: false,
                premultipliedAlpha: false
            };
            var gl = this._gl = (canvas.getContext("webgl", config) ||
                canvas.getContext("experimental-webgl", config));
            if (gl != null) {
                gl.clearColor(1.0, 1.0, 1.0, 0.0);
                this.makeVertexBuffer();
                this.makeUvBuffer();
                this.makeShaders();
                this._texture = null;
            }
        }
        return this;
    };
    DynamicSDFFontGenerator.prototype.restore = function () {
        this.init();
    };
    DynamicSDFFontGenerator.prototype.getCanvas = function () {
        return this._canvas;
    };
    DynamicSDFFontGenerator.prototype.getShader = function (gl, code, type) {
        var shader = (type ?
            gl.createShader(gl.FRAGMENT_SHADER) :
            gl.createShader(gl.VERTEX_SHADER));
        if (shader != null) {
            gl.shaderSource(shader, code);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                // tslint:disable-next-line: no-console no-unused-expression
                console && console.error("Failed to compile the shader: " + gl.getShaderInfoLog(shader));
                return null;
            }
        }
        return shader;
    };
    DynamicSDFFontGenerator.prototype.makeShaders = function () {
        var gl = this._gl;
        if (gl != null && gl.isContextLost() !== true) {
            var vertexShader = this.getShader(gl, VERTEX_SHADER, false);
            if (vertexShader != null) {
                var fragmentShader = this.getShader(gl, FRAGMENT_SHADER, true);
                if (fragmentShader != null) {
                    var shaderProgram = this._shaderProgram = gl.createProgram();
                    if (shaderProgram != null) {
                        gl.attachShader(shaderProgram, vertexShader);
                        gl.attachShader(shaderProgram, fragmentShader);
                        gl.linkProgram(shaderProgram);
                        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
                            // tslint:disable-next-line: no-console no-unused-expression
                            console && console.error("Failed to link the program: " + gl.getError());
                            gl.deleteShader(vertexShader);
                            gl.deleteShader(fragmentShader);
                            return null;
                        }
                        else {
                            gl.deleteShader(vertexShader);
                            gl.deleteShader(fragmentShader);
                            gl.useProgram(shaderProgram);
                            this._vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
                            this._textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
                            this._samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
                            this._sizeUniform = gl.getUniformLocation(shaderProgram, "uSize");
                            gl.useProgram(null);
                            return shaderProgram;
                        }
                    }
                    else {
                        gl.deleteShader(vertexShader);
                        gl.deleteShader(fragmentShader);
                    }
                }
                else {
                    gl.deleteShader(vertexShader);
                }
            }
        }
        return null;
    };
    DynamicSDFFontGenerator.prototype.destroyShaders = function () {
        var gl = this._gl;
        if (gl != null && gl.isContextLost() !== true) {
            var shaderProgram = this._shaderProgram;
            if (shaderProgram != null) {
                this._shaderProgram = null;
                gl.useProgram(null);
                gl.deleteProgram(shaderProgram);
            }
        }
    };
    DynamicSDFFontGenerator.prototype.updateTexture = function (source) {
        var gl = this._gl;
        var canvas = this._canvas;
        if (gl != null && gl.isContextLost() !== true && canvas != null) {
            var width = source.width;
            var height = source.height;
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
                gl.viewport(0, 0, width, height);
            }
            var texture = this._texture;
            if (texture == null) {
                texture = this._texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.bindTexture(gl.TEXTURE_2D, null);
            }
            else {
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
                gl.bindTexture(gl.TEXTURE_2D, null);
            }
            return texture;
        }
        return null;
    };
    DynamicSDFFontGenerator.prototype.destroyTexture = function () {
        var gl = this._gl;
        var texture = this._texture;
        if (gl != null && gl.isContextLost() !== true && texture != null) {
            this._texture = null;
            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.deleteTexture(texture);
        }
    };
    DynamicSDFFontGenerator.prototype.makeVertexBuffer = function () {
        var gl = this._gl;
        if (gl != null && gl.isContextLost() !== true) {
            var vb = this._vb = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vb);
            var vertices = [
                -1.0, +1.0,
                +1.0, +1.0,
                -1.0, -1.0,
                +1.0, -1.0
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            return vb;
        }
        return null;
    };
    DynamicSDFFontGenerator.prototype.destroyVertexBuffer = function () {
        var gl = this._gl;
        var vb = this._vb;
        if (gl != null && gl.isContextLost() !== true && vb != null) {
            this._vb = null;
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            gl.deleteBuffer(vb);
        }
    };
    DynamicSDFFontGenerator.prototype.makeUvBuffer = function () {
        var gl = this._gl;
        if (gl != null && gl.isContextLost() !== true) {
            var uvb = this._uvb = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, uvb);
            var uvs = [
                0.0, 0.0,
                1.0, 0.0,
                0.0, 1.0,
                1.0, 1.0
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
            return uvb;
        }
        return null;
    };
    DynamicSDFFontGenerator.prototype.destroyUvBuffer = function () {
        var gl = this._gl;
        var uvb = this._uvb;
        if (gl != null && gl.isContextLost() !== true && uvb != null) {
            this._uvb = null;
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            gl.deleteBuffer(uvb);
        }
    };
    DynamicSDFFontGenerator.prototype.render = function () {
        var gl = this._gl;
        var canvas = this._canvas;
        var shaderProgram = this._shaderProgram;
        var vb = this._vb;
        var uvb = this._uvb;
        var texture = this._texture;
        if (gl != null && gl.isContextLost() !== true && canvas != null &&
            shaderProgram != null && vb != null && uvb != null && texture != null) {
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(shaderProgram);
            gl.bindBuffer(gl.ARRAY_BUFFER, vb);
            var vertexPositionAttribute = this._vertexPositionAttribute;
            gl.enableVertexAttribArray(vertexPositionAttribute);
            gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, uvb);
            var textureCoordAttribute = this._textureCoordAttribute;
            gl.enableVertexAttribArray(textureCoordAttribute);
            gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(this._samplerUniform, 0);
            gl.uniform2f(this._sizeUniform, canvas.width, canvas.height);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            gl.useProgram(null);
        }
    };
    DynamicSDFFontGenerator.prototype.read = function (copyCanvas) {
        var gl = this._gl;
        var canvas = this._canvas;
        if (gl != null && gl.isContextLost() !== true && canvas != null) {
            var width = canvas.width;
            var height = canvas.height;
            copyCanvas.width = width;
            copyCanvas.height = height;
            var copyContext = copyCanvas.getContext("2d");
            if (copyContext != null) {
                copyContext.drawImage(canvas, 0, 0);
            }
        }
    };
    DynamicSDFFontGenerator.prototype.destroy = function () {
        this.destroyVertexBuffer();
        this.destroyUvBuffer();
        this.destroyShaders();
        var canvas = this._canvas;
        if (canvas != null) {
            this._canvas = null;
            canvas.removeEventListener("webglcontextlost", this._onLostBound, false);
            canvas.removeEventListener("webglcontextrestored", this._onRestoreBound, false);
            window.removeEventListener("unload", this._onUnloadBound, false);
        }
        var gl = this._gl;
        if (gl != null) {
            this._gl = null;
            var WebGLLoseContext = gl.getExtension("WEBGL_lose_context");
            if (WebGLLoseContext != null) {
                WebGLLoseContext.loseContext();
            }
        }
    };
    DynamicSDFFontGenerator.getInstance = function () {
        if (DynamicSDFFontGenerator._INSTANCE == null) {
            DynamicSDFFontGenerator._INSTANCE = new DynamicSDFFontGenerator();
        }
        return DynamicSDFFontGenerator._INSTANCE;
    };
    DynamicSDFFontGenerator._INSTANCE = null;
    return DynamicSDFFontGenerator;
}());
export { DynamicSDFFontGenerator };
//# sourceMappingURL=dynamic-sdf-font-generator.js.map