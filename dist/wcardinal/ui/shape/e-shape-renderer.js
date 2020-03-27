/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { BLEND_MODES, ObjectRenderer, Shader, utils } from "pixi.js";
import { DynamicAtlasItemImage } from "../util/dynamic-atlas-item-image";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeRendererIterator } from "./e-shape-renderer-iterator";
var VERTEX_SHADER = "\nattribute vec2 aPosition;\nattribute vec3 aClipping;\nattribute vec2 aStep;\nattribute vec4 aAntialias;\nattribute vec4 aColorFill;\nattribute vec4 aColorStroke;\nattribute vec2 aUv;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mediump float pixelScale;\nuniform mediump float antialiasWeight;\n\nvarying mediump vec3 vClipping;\nvarying mediump vec2 vStep;\nvarying mediump vec4 vAntialias;\nvarying mediump vec4 vColorFill;\nvarying mediump vec4 vColorStroke;\nvarying mediump vec2 vUv;\n\nvec2 toInverse( in vec2 v ) {\n\treturn vec2( -v.y, v.x );\n}\n\nvec2 toTransformedPosition( in vec2 v ) {\n\treturn (projectionMatrix * translationMatrix * vec3(v, 1.0)).xy;\n}\n\nvec4 toAntialias01( in vec4 antialias, in float scale ) {\n\t// Taylor series of 1 / ( 1 - a ) = 1 + a + a^2 + ....\n\treturn 1.0 + min( vec4( 1.0 ), antialias * scale );\n}\n\nvec4 toAntialias2( in vec2 step, in vec4 antialias, in float scale ) {\n\tfloat x = min( 0.4, step.x * scale );\n\tfloat y = 0.5 - antialias.x;\n\tfloat z = 0.5 - antialias.x - step.y;\n\treturn vec4( y, z, y - max( 0.01, y - x ), z - max( 0.01, z - x ) );\n}\n\nvec2 toPosition3456( in float type, in vec2 p, in vec2 pprev, in vec2 pnext, in float strokeWidth, out float shift ) {\n\tvec2 d0 = p - pprev;\n\tvec2 d1 = pnext - p;\n\tfloat l0 = dot( d0, d0 );\n\tfloat l1 = dot( d1, d1 );\n\tvec2 nd0 = normalize( toInverse( d0 ) );\n\tvec2 nd1 = normalize( toInverse( d1 ) );\n\tvec2 n0 = 0.00001 < l0 ? nd0 : nd1;\n\tvec2 n1 = 0.00001 < l1 ? nd1 : nd0;\n\tvec2 n0i = toInverse( n0 );\n\tvec2 n1i = toInverse( n1 );\n\tfloat direction = sign( 4.5 - type );\n\n\t// Offset\n\tfloat cross = dot( n0i, n1 );\n\tfloat crossInverse = ( 0.00001 < abs( cross ) ? 1.0 / cross : 0.0 );\n\tfloat b = dot(n1 - n0, n0) * crossInverse;\n\tfloat offsetSize = direction * strokeWidth * 0.5;\n\tvec2 offset = n1 + n1i * b;\n\n\t// Miter\n\tvec2 pmiter = p + offsetSize * offset;\n\tfloat miterAngle0 = dot( n0i, pmiter - pprev );\n\tfloat miterAngle1 = dot( n1i, pmiter - pnext );\n\tfloat miterLength = dot( offset, offset );\n\tfloat miterSide = direction * cross;\n\n\t// Bevel\n\tvec2 n = ( type == 4.0 || type == 6.0 ? n1 : n0 );\n\tvec2 pbevel = p + offsetSize * n;\n\n\t//\n\tvec2 presult = (\n\t\t0.0 <= miterAngle0 || miterAngle1 < 0.0 || miterSide < 0.0 ?\n\t\tpbevel : pmiter\n\t);\n\t/*\n\tvec2 presult = (\n\t\tmiterAngle0 < 0.0 && 0.0 <= miterAngle1 && miterLength < 50.0 ?\n\t\tpmiter : pbevel\n\t);\n\t*/\n\tvec2 ni = ( type == 4.0 || type == 6.0 ? n1i : n0i );\n\tshift = dot( ni, p - presult );\n\treturn toTransformedPosition( presult );\n}\n\nvec2 toStep3456( in float type ) {\n\treturn ( type < 4.5 ? vec2( 1.0, 0.0 ) : vec2( 0.0, 1.0 ) );\n}\n\nvec4 toAntialias3456( in float strokeWidth, in float scale ) {\n\tfloat a = antialiasWeight / max( 0.0001, strokeWidth );\n\treturn toAntialias01( vec4( a, a, a, a ), scale );\n}\n\nfloat toDotAndDashScale( in float scale, in float strokeWidthScale ) {\n\treturn (\n\t\tscale == 4.0 || scale == 5.0 || scale == 6.0 || scale == 7.0 ?\n\t\tstrokeWidthScale : 1.0\n\t);\n}\n\nvec4 toColorStroke3456( in float shift, in float scale ) {\n\tfloat x = aColorFill.x + shift;\n\tfloat y = scale * aColorFill.y;\n\tfloat z = scale * aColorFill.z;\n\tfloat w = aColorFill.w;\n\treturn vec4( x, y, z, w );\n}\n\nfloat toStrokeWidthScale( in float scale ) {\n\treturn (\n\t\tscale == 3.0 || scale == 7.0 ?\n\t\tpixelScale : (\n\t\t\tscale == 1.0 || scale == 5.0 ?\n\t\t\tmin( 1.0, pixelScale ) : (\n\t\t\t\tscale == 2.0 || scale == 6.0 ?\n\t\t\t\tmax( 1.0, pixelScale ) : 1.0\n\t\t\t)\n\t\t)\n\t);\n}\n\nvoid main(void) {\n\tvec2 p012 = toTransformedPosition( aPosition );\n\n\tfloat type = aClipping.z;\n\n\t// type === 0 or 1\n\tvec4 a01 = toAntialias01( aAntialias, pixelScale );\n\n\t// type === 2\n\tvec4 a2 = toAntialias2( aStep, aAntialias, pixelScale );\n\n\t// type === 3, 4, 5 or 6\n\tfloat shift3456 = 0.0;\n\tfloat strokeWidthScale = toStrokeWidthScale( aStep.y );\n\tfloat strokeWidth = strokeWidthScale * aStep.x;\n\tvec2 p3456 = toPosition3456( type, aPosition, aAntialias.xy, aAntialias.zw, strokeWidth, shift3456 );\n\tvec2 step3456 = toStep3456( type );\n\tvec4 a3456 = toAntialias3456( strokeWidth, pixelScale );\n\tvec4 colorStroke3456 = toColorStroke3456( shift3456, toDotAndDashScale( aStep.y, strokeWidthScale ) );\n\n\t//\n\tgl_Position = vec4( ( 2.5 < type ? p3456 : p012 ), 0.0, 1.0 );\n\tvAntialias = ( 1.5 < type ? ( 2.5 < type ? a3456 : a2 ) : a01 );\n\tvClipping = aClipping;\n\tvStep = ( 2.5 < type ? step3456 : aStep );\n\tvColorFill = ( 2.5 < type ? aColorStroke : aColorFill );\n\tvColorStroke = ( 2.5 < type ? colorStroke3456 : aColorStroke );\n\tvUv = aUv;\n}";
var FRAGMENT_SHADER_NO_AA = "\nvarying mediump vec3 vClipping;\nvarying mediump vec2 vStep;\nvarying mediump vec4 vAntialias;\nvarying mediump vec4 vColorFill;\nvarying mediump vec4 vColorStroke;\nvarying mediump vec2 vUv;\n\nuniform sampler2D sampler;\nuniform mediump float pixelScale;\n\nvoid main(void) {\n\tvec4 texture = texture2D(sampler, vUv);\n\tfloat type = vClipping.z;\n\tvec2 v0 = vStep;\n\tvec2 v1 = vClipping.xy;\n\tvec2 v2 = v0 * vAntialias.xy;\n\tvec2 v3 = v1 * vAntialias.zw;\n\tvec2 d01 = ( v0.x < v0.y ? vec2( v0.y, v2.y ) : vec2( v0.x, v2.x ) );\n\tvec2 d02 = ( v1.x < v1.y ? vec2( v1.y, v3.y ) : vec2( v1.x, v3.x ) );\n\tvec4 d0 = vec4( d01.x, d02.x, d01.y, d02.y );\n\tvec4 d1 = vec4( dot( v0, v0 ), dot( v1, v1 ), dot( v2, v2 ), dot( v3, v3 ) );\n\tvec4 d = ( type == 1.0 ? d1 : d0 );\n\tvec2 s = step( vec2( 1.0 ), d.xy );\n\tvec4 color01 = texture * (vColorStroke * (s.x - s.y) + vColorFill * (1.0 - s.x));\n\n\tfloat l = vColorStroke.x;\n\tfloat lp0 = vColorStroke.y;\n\tfloat lp1 = vColorStroke.z;\n\tfloat lt = vColorStroke.w;\n\tfloat lm = mod( l, lp0 + lp1 );\n\tfloat ls0 = step( 0.0, lm );\n\tfloat ls1 = step( lp0, lm );\n\tfloat ls2 = ( 0.0 <= lt ? 1.0 - step( lt, l ) : 1.0 );\n\tvec4 color3456 = color01 * ( ls0 - ls1 ) * ls2;\n\n\tvec2 a0 = vAntialias.xy;\n\tvec2 a1 = vAntialias.zw;\n\tvec2 a2 = vec2( texture.a );\n\tvec2 a = smoothstep( a0 - a1, a0 + a1, a2 );\n\tvec4 color2 = a.x * vColorFill + ( a.y - a.x ) * vColorStroke;\n\tgl_FragColor = ( type == 2.0 ? color2 : (2.5 < type ? color3456 : color01) );\n}";
var FRAGMENT_SHADER = "\nvarying mediump vec3 vClipping;\nvarying mediump vec2 vStep;\nvarying mediump vec4 vAntialias;\nvarying mediump vec4 vColorFill;\nvarying mediump vec4 vColorStroke;\nvarying mediump vec2 vUv;\n\nuniform sampler2D sampler;\nuniform mediump float pixelScale;\n\nvoid main(void) {\n\tvec4 texture = texture2D(sampler, vUv);\n\tfloat type = vClipping.z;\n\tvec2 v0 = vStep;\n\tvec2 v1 = vClipping.xy;\n\tvec2 v2 = v0 * vAntialias.xy;\n\tvec2 v3 = v1 * vAntialias.zw;\n\tvec2 d01 = ( v0.x < v0.y ? vec2( v0.y, v2.y ) : vec2( v0.x, v2.x ) );\n\tvec2 d02 = ( v1.x < v1.y ? vec2( v1.y, v3.y ) : vec2( v1.x, v3.x ) );\n\tvec4 d0 = vec4( d01.x, d02.x, d01.y, d02.y );\n\tvec4 d1 = vec4( dot( v0, v0 ), dot( v1, v1 ), dot( v2, v2 ), dot( v3, v3 ) );\n\tvec4 d = ( type == 1.0 ? d1 : d0 );\n\tvec2 s = smoothstep( 1.0 - (d.zw - d.xy), vec2( 1.0 ), d.xy );\n\tvec4 color01 = texture * (vColorStroke * (s.x - s.y) + vColorFill * (1.0 - s.x));\n\n\tfloat l = vColorStroke.x;\n\tfloat lp0 = vColorStroke.y;\n\tfloat lp1 = vColorStroke.z;\n\tfloat lt = vColorStroke.w;\n\tfloat ld = 0.5 * pixelScale;\n\tfloat lm = mod( l, lp0 + lp1 );\n\tfloat ls0 = smoothstep( 0.0, 0.0 + ld, lm );\n\tfloat ls1 = smoothstep( lp0, lp0 + ld, lm );\n\tfloat ls2 = ( 0.0 <= lt ? 1.0 - smoothstep( lt - ld, lt, l ) : 1.0 );\n\tvec4 color3456 = color01 * ( ls0 - ls1 ) * ls2;\n\n\tvec2 a0 = vAntialias.xy;\n\tvec2 a1 = vAntialias.zw;\n\tvec2 a2 = vec2( texture.a );\n\tvec2 a = smoothstep( a0 - a1, a0 + a1, a2 );\n\tvec4 color2 = a.x * vColorFill + ( a.y - a.x ) * vColorStroke;\n\tgl_FragColor = ( type == 2.0 ? color2 : (2.5 < type ? color3456 : color01) );\n}";
var EShapeRenderer = /** @class */ (function (_super) {
    __extends(EShapeRenderer, _super);
    function EShapeRenderer(renderer) {
        var _this = _super.call(this, renderer) || this;
        EShapeRenderer.SHADER = EShapeRenderer.SHADER || Shader.from(VERTEX_SHADER, FRAGMENT_SHADER);
        _this._shader = EShapeRenderer.SHADER;
        _this._iterator = new EShapeRendererIterator();
        _this._bufferSizeMax = _this.getBufferSizeMax(renderer);
        return _this;
    }
    EShapeRenderer.prototype.getBufferSizeMax = function (renderer) {
        var context = renderer.context;
        var extensions = context.extensions;
        if (1 < context.webGLVersion || !!extensions.uint32ElementIndex) {
            return 1431655765; // 2^32 / 3
        }
        return 21845; // 2^16 / 3
    };
    EShapeRenderer.prototype.updateAtlas = function (shape, atlas, fontAtlases, defaultTexture, baseTexture) {
        // Texture
        // Do not access the shape.image.src here.
        // It slows down the rendering speed significantly.
        var imageSrc = shape.imageSrc;
        if (imageSrc != null) {
            var textureItem = atlas.get(imageSrc);
            if (textureItem != null) {
                shape.texture = textureItem.texture;
            }
            else {
                var newTextureItem = new DynamicAtlasItemImage(shape.image, baseTexture);
                shape.texture = newTextureItem.texture;
                atlas.set(newTextureItem.id, newTextureItem);
            }
        }
        else {
            shape.texture = defaultTexture;
        }
        // Font texture atlas
        var text = shape.text;
        var textValue = text.value;
        if (0 < textValue.length) {
            fontAtlases.add(text.family, textValue);
        }
    };
    EShapeRenderer.prototype.updateAtlases = function (shapes, atlas, fontAtlases, defaultTexture, baseTexture) {
        for (var i = 0, imax = shapes.length; i < imax; ++i) {
            var shape = shapes[i];
            this.updateAtlas(shape, atlas, fontAtlases, defaultTexture, baseTexture);
            var children = shape.children;
            for (var j = 0, jmax = children.length; j < jmax; ++j) {
                var child = children[j];
                this.updateAtlas(child, atlas, fontAtlases, defaultTexture, baseTexture);
                this.updateAtlases(child.children, atlas, fontAtlases, defaultTexture, baseTexture);
            }
        }
    };
    EShapeRenderer.prototype.updateFontAtlas = function (shape, atlas, fontAtlases, defaultTexture) {
        var text = shape.text;
        var fontAtlas = fontAtlases.get(text.family);
        if (fontAtlas != null) {
            var textureItem = atlas.get(fontAtlas.id);
            if (textureItem != null) {
                text.atlas = fontAtlas;
                text.texture = textureItem.texture;
            }
            else {
                text.atlas = undefined;
                text.texture = defaultTexture;
            }
        }
        else {
            text.atlas = undefined;
            text.texture = defaultTexture;
        }
    };
    EShapeRenderer.prototype.updateFontAtlases = function (shapes, atlas, fontAtlases, defaultTexture) {
        for (var i = 0, imax = shapes.length; i < imax; ++i) {
            var shape = shapes[i];
            this.updateFontAtlas(shape, atlas, fontAtlases, defaultTexture);
            var children = shape.children;
            for (var j = 0, jmax = children.length; j < jmax; ++j) {
                var child = children[j];
                this.updateFontAtlas(child, atlas, fontAtlases, defaultTexture);
                this.updateFontAtlases(child.children, atlas, fontAtlases, defaultTexture);
            }
        }
    };
    EShapeRenderer.prototype.render_ = function (container, shapes, isDirty) {
        var renderer = this.renderer;
        var shader = this._shader;
        if (shader != null && 0 < shapes.length) {
            var resolution = renderer.resolution;
            var buffers = container.getBuffers();
            var antialiasWeight = container.getAntialiasWeight(resolution);
            // Update textures
            if (isDirty) {
                // Atlases
                var atlas = container.getAtlas(resolution);
                var fontAtlases = container.getFontAtlases();
                atlas.begin();
                fontAtlases.begin();
                var defaultTexture = atlas.getDefaultTexture();
                var baseTexture = atlas.getBaseTexture();
                this.updateAtlases(shapes, atlas, fontAtlases, defaultTexture, baseTexture);
                fontAtlases.end();
                fontAtlases.update(atlas);
                this.updateFontAtlases(shapes, atlas, fontAtlases, defaultTexture);
                atlas.end();
                atlas.repack();
                // Update buffers
                this.updateBuffers(shapes, buffers, renderer, antialiasWeight);
            }
            // Render buffers
            shader.uniforms.pixelScale = container.toPixelScale(resolution);
            shader.uniforms.antialiasWeight = antialiasWeight;
            shader.uniforms.translationMatrix = container.worldTransform.toArray(true);
            renderer.shader.bind(shader, false);
            renderer.state.setBlendMode(utils.correctBlendMode(BLEND_MODES.NORMAL, true));
            var buffersLength = buffers.length;
            if (1 < buffersLength) {
                for (var i = 0; i < buffersLength; ++i) {
                    buffers[i].upload();
                }
            }
            for (var i = 0; i < buffersLength; ++i) {
                buffers[i].render(shader);
            }
        }
    };
    EShapeRenderer.prototype.updateBuffers = function (shapes, buffers, renderer, antialiasWeight) {
        var iterator = this._iterator;
        iterator.reset(shapes);
        var ib = 0;
        var bufferSize = 0;
        var bufferSizeBase = 5000;
        var bufferSizeMax = this._bufferSizeMax;
        while (iterator.get() != null) {
            var buffer = null;
            var noMoreThanOne = false;
            if (0 < bufferSize) {
                buffer = new EShapeBuffer(bufferSize, renderer);
                buffers.splice(ib, 0, buffer);
                noMoreThanOne = true;
            }
            else if (ib < buffers.length) {
                buffer = buffers[ib];
                noMoreThanOne = false;
            }
            else {
                buffer = new EShapeBuffer(bufferSizeBase, renderer);
                buffers.push(buffer);
                noMoreThanOne = false;
            }
            if (buffer.update(iterator, antialiasWeight, noMoreThanOne)) {
                bufferSize = 0;
                ib += 1;
            }
            else {
                bufferSize = buffer.indexCountRequested;
                if (bufferSize <= bufferSizeMax) {
                    bufferSize = Math.ceil(bufferSize / bufferSizeBase) * bufferSizeBase;
                    bufferSize = Math.min(bufferSize, bufferSizeMax);
                }
                else {
                    // No way to render
                    break;
                }
            }
        }
        if (ib < buffers.length) {
            for (var jb = ib, ibmax = buffers.length; jb < ibmax; ++jb) {
                buffers[jb].destroy();
            }
            buffers.length = ib;
        }
    };
    EShapeRenderer.SHADER = null;
    return EShapeRenderer;
}(ObjectRenderer));
export { EShapeRenderer };
//# sourceMappingURL=e-shape-renderer.js.map