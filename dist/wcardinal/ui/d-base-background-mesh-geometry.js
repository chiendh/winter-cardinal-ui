/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { MeshGeometry } from "pixi.js";
import { DCornerMask } from "./d-corner-mask";
var DBaseBackgroundMeshGeometry = /** @class */ (function (_super) {
    __extends(DBaseBackgroundMeshGeometry, _super);
    function DBaseBackgroundMeshGeometry(texture, width, height, borderSize, cornerMask) {
        var _this = _super.call(this, new Float32Array(56), new Float32Array(56), new Uint16Array(42)) || this;
        _this._width = width;
        _this._height = height;
        _this._texture = texture;
        _this._borderSize = borderSize;
        _this._cornerMask = cornerMask;
        _this._isDirty = true;
        _this._textureId = NaN;
        _this._vertexBuffer = _this.getBuffer("aVertexPosition");
        _this._vertices = _this._vertexBuffer.data;
        _this._uvBuffer = _this.getBuffer("aTextureCoord");
        _this._uvs = _this._uvBuffer.data;
        _this._indexBuffer = _this.getIndex();
        _this._indices = _this._indexBuffer.data;
        return _this;
    }
    Object.defineProperty(DBaseBackgroundMeshGeometry.prototype, "borderSize", {
        get: function () {
            return this._borderSize;
        },
        set: function (borderSize) {
            if (this._borderSize !== borderSize) {
                this._borderSize = borderSize;
                this._isDirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBackgroundMeshGeometry.prototype, "cornerMask", {
        get: function () {
            return this._cornerMask;
        },
        set: function (cornerMask) {
            if (this._cornerMask !== cornerMask) {
                this._cornerMask = cornerMask;
                this._isDirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBackgroundMeshGeometry.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            if (this._width !== width) {
                this._width = width;
                this._isDirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBackgroundMeshGeometry.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            if (this._height !== height) {
                this._height = height;
                this._isDirty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBaseBackgroundMeshGeometry.prototype, "texture", {
        get: function () {
            return this._texture;
        },
        set: function (texture) {
            if (this._texture !== texture) {
                this._texture = texture;
                this._isDirty = true;
                this._textureId = NaN;
            }
        },
        enumerable: true,
        configurable: true
    });
    DBaseBackgroundMeshGeometry.prototype.getTextureId = function () {
        return this._texture._updateID;
    };
    DBaseBackgroundMeshGeometry.prototype.fillVertices = function (iv, array, x0, x1, y0, y1) {
        array[iv + 0] = x0;
        array[iv + 1] = y0;
        array[iv + 2] = x1;
        array[iv + 3] = y0;
        array[iv + 4] = x0;
        array[iv + 5] = y1;
        array[iv + 6] = x1;
        array[iv + 7] = y1;
    };
    DBaseBackgroundMeshGeometry.prototype.fillIndices = function (ii, indices, iv) {
        indices[ii + 0] = iv + 0;
        indices[ii + 1] = iv + 1;
        indices[ii + 2] = iv + 2;
        indices[ii + 3] = iv + 1;
        indices[ii + 4] = iv + 3;
        indices[ii + 5] = iv + 2;
    };
    DBaseBackgroundMeshGeometry.prototype.fillUvsCorner = function (iv, uvs, c, u0, u1, u2, u3, v0, v1, v2, v3) {
        if (c) {
            this.fillVertices(iv, uvs, u0, u1, v0, v1);
        }
        else {
            this.fillVertices(iv, uvs, u3, u2, v0, v1);
        }
    };
    DBaseBackgroundMeshGeometry.prototype.fillUvs = function (iv, uvs, u0, u1, v0, v1) {
        this.fillVertices(iv, uvs, u0, u1, v0, v1);
    };
    DBaseBackgroundMeshGeometry.prototype.update = function () {
        var texture = this.texture;
        if (!texture.valid) {
            return;
        }
        var textureId = this.getTextureId();
        if (this._isDirty || this._textureId !== textureId) {
            this._isDirty = false;
            this._textureId = textureId;
            var vertices = this._vertices;
            var uvs = this._uvs;
            var indices = this._indices;
            var width = this._width;
            var height = this._height;
            var borderSize = this._borderSize;
            var x0 = 0;
            var x1 = Math.min(width * 0.5, borderSize);
            var x2 = Math.max(width * 0.5, width - borderSize);
            var x3 = width;
            var y0 = 0;
            var y1 = Math.min(height * 0.5, borderSize);
            var y2 = Math.max(height * 0.5, height - borderSize);
            var y3 = height;
            var textureUvs = texture._uvs;
            var l = textureUvs.x0;
            var r = textureUvs.x1;
            var t = textureUvs.y0;
            var b = textureUvs.y3;
            var w = (r - l) * (borderSize / texture.width);
            var h = (b - t) * (borderSize / texture.height);
            var u0 = l;
            var u1 = l + w;
            var u2 = r - w;
            var u3 = r;
            var v0 = t;
            var v1 = t + h;
            var v2 = b - h;
            var v3 = b;
            var cornerMask = this._cornerMask;
            var ctl = !(cornerMask & DCornerMask.TOP_LEFT);
            var ctr = !(cornerMask & DCornerMask.TOP_RIGHT);
            var cbl = !(cornerMask & DCornerMask.BOTTOM_LEFT);
            var cbr = !(cornerMask & DCornerMask.BOTTOM_RIGHT);
            // Vertices & UVs
            var iv = 0;
            var ia = 0;
            var ii = 0;
            // Top left
            this.fillVertices(iv, vertices, x0, x1, y0, y1);
            this.fillUvsCorner(iv, uvs, ctl, u0, u1, u2, u3, v0, v1, v2, v3);
            this.fillIndices(ii, indices, ia);
            iv += 8;
            ia += 4;
            ii += 6;
            // Top middle
            this.fillVertices(iv, vertices, x1, x2, y0, y1);
            this.fillUvs(iv, uvs, u1, u2, v0, v1);
            this.fillIndices(ii, indices, ia);
            iv += 8;
            ia += 4;
            ii += 6;
            // Top right
            this.fillVertices(iv, vertices, x3, x2, y0, y1);
            this.fillUvsCorner(iv, uvs, ctr, u0, u1, u2, u3, v0, v1, v2, v3);
            this.fillIndices(ii, indices, ia);
            iv += 8;
            ia += 4;
            ii += 6;
            // Middle
            this.fillVertices(iv, vertices, x0, x3, y1, y2);
            this.fillUvs(iv, uvs, u0, u3, v1, v2);
            this.fillIndices(ii, indices, ia);
            iv += 8;
            ia += 4;
            ii += 6;
            // Bottom left
            this.fillVertices(iv, vertices, x0, x1, y3, y2);
            this.fillUvsCorner(iv, uvs, cbl, u0, u1, u2, u3, v0, v1, v2, v3);
            this.fillIndices(ii, indices, ia);
            iv += 8;
            ia += 4;
            ii += 6;
            // Bottom middle
            this.fillVertices(iv, vertices, x1, x2, y2, y3);
            this.fillUvs(iv, uvs, u1, u2, v2, v3);
            this.fillIndices(ii, indices, ia);
            iv += 8;
            ia += 4;
            ii += 6;
            // Bottom right
            this.fillVertices(iv, vertices, x3, x2, y3, y2);
            this.fillUvsCorner(iv, uvs, cbr, u3, u2, u1, u0, v3, v2, v1, v0);
            this.fillIndices(ii, indices, ia);
            this._vertexBuffer.update();
            this._uvBuffer.update();
            this._indexBuffer.update();
        }
    };
    return DBaseBackgroundMeshGeometry;
}(MeshGeometry));
export { DBaseBackgroundMeshGeometry };
//# sourceMappingURL=d-base-background-mesh-geometry.js.map