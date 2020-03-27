/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Buffer, Geometry, Mesh, Point, Rectangle, Shader, Texture, utils } from "pixi.js";
import { DApplications } from "./d-applications";
var VERTEX_SHADER = "\nattribute vec2 aPosition;\nattribute vec2 aUv;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\n\nvarying vec2 vUv;\nvarying vec4 vColor;\n\nvoid main(void) {\n\tvec3 position = vec3(aPosition.x, aPosition.y, 1.0);\n\tgl_Position = vec4((projectionMatrix * translationMatrix * position).xy, 0.0, 1.0);\n\tvUv = aUv;\n\tvColor = aColor;\n}\n";
var FRAGMENT_SHADER = "\nvarying vec2 vUv;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void) {\n\tvec4 texture = texture2D(uSampler, vUv);\n\tfloat cy = step( 1.0, mod( gl_FragCoord.y / 10.0, 2.0 ) );\n\tfloat cx = step( 1.0, mod( gl_FragCoord.x / 10.0 + cy, 2.0 ) );\n\tfloat c = mix( 0.75, 0.65, cx );\n\tgl_FragColor = texture * vec4( mix( vec3( c ), vColor.xyz, vColor.a ), 1.0 );\n}";
var DPickerColorGradientDataView = /** @class */ (function (_super) {
    __extends(DPickerColorGradientDataView, _super);
    function DPickerColorGradientDataView(nPointsPerData, vertices, uvs, colors, indices, parts, geometry, shader) {
        var _this = _super.call(this, geometry, shader) || this;
        _this.interactive = true;
        _this.interactiveChildren = false;
        _this.cursor = "pointer";
        _this._nPointsPerData = nPointsPerData;
        _this._vertices = vertices;
        _this._uvs = uvs;
        _this._colors = colors;
        _this._indices = indices;
        _this._lastHitIndex = -1;
        _this._workColor = [0, 0, 0];
        _this._workPoint = new Point();
        _this._parts = parts;
        shader.uniforms.uSampler.on("update", function () {
            _this.update();
            DApplications.update(_this);
        });
        _this.update();
        return _this;
    }
    DPickerColorGradientDataView.prototype.getRectangle = function (index) {
        var parts = this._parts;
        if (0 <= index && index < parts.length) {
            return parts[index].rect;
        }
        return null;
    };
    DPickerColorGradientDataView.prototype.setRectangle = function (index, x, y, width, height) {
        var parts = this._parts;
        if (0 <= index && index < parts.length) {
            var rect = parts[index].rect;
            rect.x = x;
            rect.y = y;
            rect.width = width;
            rect.height = height;
        }
    };
    DPickerColorGradientDataView.prototype.getData = function (index) {
        var parts = this._parts;
        if (0 <= index && index < parts.length) {
            return parts[index].data;
        }
        return null;
    };
    DPickerColorGradientDataView.prototype.setData = function (index, data) {
        var parts = this._parts;
        if (0 <= index && index < parts.length) {
            parts[index].data = data;
        }
    };
    DPickerColorGradientDataView.prototype.getLastHitIndex = function () {
        return this._lastHitIndex;
    };
    DPickerColorGradientDataView.prototype.setColors = function (ic, colors, rgb, alpha) {
        colors[ic + 0] = rgb[0];
        colors[ic + 1] = rgb[1];
        colors[ic + 2] = rgb[2];
        colors[ic + 3] = alpha;
        colors[ic + 4] = rgb[0];
        colors[ic + 5] = rgb[1];
        colors[ic + 6] = rgb[2];
        colors[ic + 7] = alpha;
    };
    DPickerColorGradientDataView.prototype.setColorsHex = function (ic, colors, color, alpha) {
        var rgb = utils.hex2rgb(color, this._workColor);
        this.setColors(ic, colors, rgb, alpha);
    };
    DPickerColorGradientDataView.prototype.setColorsWhite = function (ic, colors) {
        var rgb = this._workColor;
        rgb[0] = 1;
        rgb[1] = 1;
        rgb[2] = 1;
        this.setColors(ic, colors, rgb, 0);
    };
    DPickerColorGradientDataView.prototype.setColorsPoint = function (ic, data, index, colors) {
        var point = data.points[index];
        if (point != null) {
            this.setColorsHex(ic, colors, point.color, point.alpha);
        }
        else {
            this.setColorsWhite(ic, colors);
        }
    };
    DPickerColorGradientDataView.prototype.setVertices = function (iv, vertices, position, rect) {
        var y = rect.y + rect.height * position;
        vertices[iv + 0] = rect.x;
        vertices[iv + 1] = y;
        vertices[iv + 2] = rect.x + rect.width;
        vertices[iv + 3] = y;
    };
    DPickerColorGradientDataView.prototype.setUvs = function (iv, uvs, position, textureUvs) {
        var x0 = textureUvs.x0 + (textureUvs.x3 - textureUvs.x0) * position;
        var y0 = textureUvs.y0 + (textureUvs.y3 - textureUvs.y0) * position;
        var x1 = textureUvs.x1 + (textureUvs.x2 - textureUvs.x1) * position;
        var y1 = textureUvs.y1 + (textureUvs.y2 - textureUvs.y1) * position;
        uvs[iv + 0] = x0;
        uvs[iv + 1] = y0;
        uvs[iv + 2] = x1;
        uvs[iv + 3] = y1;
    };
    DPickerColorGradientDataView.prototype.newIndices = function (ii, iv, size, indices) {
        for (var i = 0; i < size; ++i) {
            indices[ii + 0] = iv + 0;
            indices[ii + 1] = iv + 1;
            indices[ii + 2] = iv + 2;
            indices[ii + 3] = iv + 2;
            indices[ii + 4] = iv + 1;
            indices[ii + 5] = iv + 3;
            ii += 6;
            iv += 2;
        }
        return indices;
    };
    DPickerColorGradientDataView.prototype._calculateBounds = function () {
        var rect = this._parts[0].rect;
        var bounds = this._bounds;
        var work = this._workPoint;
        work.set(rect.x, rect.y);
        bounds.addPoint(work);
        work.set(rect.x + rect.width, rect.y + rect.height);
        bounds.addPoint(work);
    };
    DPickerColorGradientDataView.prototype.update = function () {
        var vertices = this._vertices;
        var uvs = this._uvs;
        var colors = this._colors;
        var indices = this._indices;
        var texture = this.shader.uniforms.uSampler;
        if (texture._uvs == null) {
            texture.updateUvs();
        }
        var textureUvs = texture._uvs;
        var iv = 0;
        var nv = 0;
        var ic = 0;
        var ii = 0;
        var parts = this._parts;
        for (var i = 0, imax = parts.length; i < imax; ++i) {
            var data = parts[i].data;
            var rect = parts[i].rect;
            if (data == null) {
                this.setVertices(iv, vertices, 0, rect);
                this.setUvs(iv, uvs, 0, textureUvs);
                this.setColorsWhite(ic, colors);
                this.setVertices(iv + 4, vertices, 1, rect);
                this.setUvs(iv, uvs, 1, textureUvs);
                this.setColorsWhite(ic + 8, colors);
                this.newIndices(ii, nv, 1, indices);
                iv += 4 * 2;
                ic += 4 * 4;
                nv += 4;
                ii += 6;
            }
            else {
                this.setVertices(iv, vertices, 0, rect);
                this.setUvs(iv, uvs, 0, textureUvs);
                this.setColorsPoint(ic, data, 0, colors);
                iv += 2 * 2;
                ic += 2 * 4;
                var pointSize = data.points.length;
                for (var j = 0, jmax = Math.min(pointSize, this._nPointsPerData); j < jmax; ++j) {
                    var point = data.points[j];
                    this.setVertices(iv, vertices, point.position, rect);
                    this.setUvs(iv, uvs, point.position, textureUvs);
                    this.setColorsHex(ic, colors, point.color, point.alpha);
                    iv += 2 * 2;
                    ic += 2 * 4;
                }
                this.setVertices(iv, vertices, 1, rect);
                this.setUvs(iv, uvs, 1, textureUvs);
                this.setColorsPoint(ic, data, pointSize - 1, colors);
                iv += 2 * 2;
                ic += 2 * 4;
                this.newIndices(ii, nv, pointSize + 1, indices);
                ii += (pointSize + 1) * 6;
                nv += (pointSize + 2) * 2;
            }
        }
        this.size = ii;
        var geometry = this.geometry;
        geometry.getBuffer("aPosition").update();
        geometry.getBuffer("aUv").update();
        geometry.getBuffer("aColor").update();
        geometry.getIndex().update();
    };
    DPickerColorGradientDataView.prototype.containsPoint = function (point) {
        var local = this.toLocal(point, undefined, this._workPoint);
        var parts = this._parts;
        for (var i = 0, imax = parts.length; i < imax; ++i) {
            var rect = parts[i].rect;
            if (rect.contains(local.x, local.y)) {
                this._lastHitIndex = i;
                return true;
            }
        }
        return false;
    };
    DPickerColorGradientDataView.from = function (size, nPointsPerData, texture) {
        if (texture === void 0) { texture = Texture.WHITE; }
        var vertices = new Float32Array(size * (nPointsPerData + 2) * 2 * 2);
        var uvs = new Float32Array(size * (nPointsPerData + 2) * 2 * 2);
        var colors = new Float32Array(size * (nPointsPerData + 2) * 2 * 4);
        var indices = new Uint16Array(size * (nPointsPerData + 1) * 6);
        var parts = [];
        for (var i = 0; i < size; ++i) {
            parts.push({
                data: null,
                rect: new Rectangle()
            });
        }
        var geometry = new Geometry()
            .addIndex(new Buffer(indices, false, true))
            .addAttribute("aPosition", new Buffer(vertices, false, false), 2)
            .addAttribute("aUv", new Buffer(uvs, false, false), 2)
            .addAttribute("aColor", new Buffer(colors, false, false), 4);
        var shader = Shader.from(VERTEX_SHADER, FRAGMENT_SHADER, { uSampler: texture });
        return new DPickerColorGradientDataView(nPointsPerData, vertices, uvs, colors, indices, parts, geometry, shader);
    };
    return DPickerColorGradientDataView;
}(Mesh));
export { DPickerColorGradientDataView };
//# sourceMappingURL=d-picker-color-gradient-data-view.js.map