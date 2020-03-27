/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { MeshGeometry } from "pixi.js";
import { DDynamicTextMeasure } from "./d-dynamic-text-measure";
var DDynamicTextGeometry = /** @class */ (function (_super) {
    __extends(DDynamicTextGeometry, _super);
    function DDynamicTextGeometry() {
        var _this = _super.call(this, new Float32Array(64), new Float32Array(64), new Uint16Array(48)) || this;
        _this.width = 0;
        _this.height = 0;
        _this.clipped = false;
        return _this;
    }
    DDynamicTextGeometry.prototype.update = function (text, atlas, clippingWidth) {
        var vertexBuffer = this.getBuffer("aVertexPosition");
        var uvBuffer = this.getBuffer("aTextureCoord");
        var indexBuffer = this.getIndex();
        var result = DDynamicTextMeasure.measure(text, atlas, clippingWidth);
        var requiredTextSize = Math.ceil(result.count / 8) << 3;
        var requiredVertexSize = requiredTextSize << 3;
        if (vertexBuffer.data.length < requiredVertexSize) {
            vertexBuffer.data = new Float32Array(requiredVertexSize);
            uvBuffer.data = new Float32Array(requiredVertexSize);
        }
        var requiredIndexSize = requiredTextSize * 6;
        if (indexBuffer.data.length < requiredIndexSize) {
            indexBuffer.data = new Uint16Array(requiredIndexSize);
        }
        var vertices = vertexBuffer.data;
        var uvs = uvBuffer.data;
        var indices = indexBuffer.data;
        if (atlas != null) {
            var count = result.count;
            var characters = result.characters;
            for (var i = 0; i < count; ++i) {
                var character = characters[i];
                this.writeCharacter(vertices, uvs, indices, i, character.x, character.y, character.character, atlas.width, atlas.height);
            }
            for (var i = count, imax = vertices.length >> 3; i < imax; ++i) {
                this.writeCharacterEmpty(vertices, uvs, indices, i);
            }
            this.width = result.width;
            this.height = result.height;
            this.clipped = result.clipped;
        }
        else {
            for (var i = 0, imax = vertices.length >> 3; i < imax; ++i) {
                this.writeCharacterEmpty(vertices, uvs, indices, i);
            }
            this.width = 0;
            this.height = 0;
            this.clipped = false;
        }
        vertexBuffer.update();
        uvBuffer.update();
        indexBuffer.update();
    };
    DDynamicTextGeometry.prototype.writeCharacter = function (vertices, uvs, indices, index, x, y, character, width, height) {
        var offsetX = character.x - character.origin.x;
        var offsetY = 0;
        var iv = index << 3;
        vertices[iv + 0] = x + offsetX;
        vertices[iv + 1] = y + offsetY;
        vertices[iv + 2] = x + offsetX + character.width;
        vertices[iv + 3] = y + offsetY;
        vertices[iv + 4] = x + offsetX + character.width;
        vertices[iv + 5] = y + offsetY + character.height;
        vertices[iv + 6] = x + offsetX;
        vertices[iv + 7] = y + offsetY + character.height;
        var x0 = character.x / width;
        var y0 = character.y / height;
        var x1 = (character.x + character.width) / width;
        var y1 = (character.y + character.height) / height;
        uvs[iv + 0] = x0;
        uvs[iv + 1] = y0;
        uvs[iv + 2] = x1;
        uvs[iv + 3] = y0;
        uvs[iv + 4] = x1;
        uvs[iv + 5] = y1;
        uvs[iv + 6] = x0;
        uvs[iv + 7] = y1;
        var ii = index * 6;
        var vo = index << 2;
        indices[ii + 0] = vo + 0;
        indices[ii + 1] = vo + 1;
        indices[ii + 2] = vo + 3;
        indices[ii + 3] = vo + 1;
        indices[ii + 4] = vo + 2;
        indices[ii + 5] = vo + 3;
    };
    DDynamicTextGeometry.prototype.writeCharacterEmpty = function (vertices, uvs, indices, index) {
        var iv = index << 3;
        vertices[iv + 0] = 0;
        vertices[iv + 1] = 0;
        vertices[iv + 2] = 0;
        vertices[iv + 3] = 0;
        vertices[iv + 4] = 0;
        vertices[iv + 5] = 0;
        vertices[iv + 6] = 0;
        vertices[iv + 7] = 0;
        uvs[iv + 0] = 0;
        uvs[iv + 1] = 0;
        uvs[iv + 2] = 0;
        uvs[iv + 3] = 0;
        uvs[iv + 4] = 0;
        uvs[iv + 5] = 0;
        uvs[iv + 6] = 0;
        uvs[iv + 7] = 0;
        var ii = index * 6;
        var vo = index << 2;
        indices[ii + 0] = vo + 0;
        indices[ii + 1] = vo + 1;
        indices[ii + 2] = vo + 3;
        indices[ii + 3] = vo + 1;
        indices[ii + 4] = vo + 2;
        indices[ii + 5] = vo + 3;
    };
    return DDynamicTextGeometry;
}(MeshGeometry));
export { DDynamicTextGeometry };
//# sourceMappingURL=d-dynamic-text-geometry.js.map