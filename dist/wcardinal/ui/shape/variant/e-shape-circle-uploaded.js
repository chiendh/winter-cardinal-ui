/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildCircleClipping, buildCircleIndex, buildCircleStep, buildCircleUv, buildCircleVertex, CIRCLE_WORLD_SIZE } from "./build-circle";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeCircleUploaded = /** @class */ (function (_super) {
    __extends(EShapeCircleUploaded, _super);
    function EShapeCircleUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeCircleUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Clippings & indices
        var buffer = this.buffer;
        buffer.updateClippings();
        buffer.updateIndices();
        var voffset = this.vertexOffset;
        buildCircleClipping(buffer.clippings, voffset);
        buildCircleIndex(buffer.indices, voffset, this.indexOffset);
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeCircleUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        this.updateCircleVertexAndStep(buffer, shape);
        this.updateColor(buffer, shape);
        this.updateCircleUv(buffer, shape);
        this.updateText(buffer, shape);
    };
    EShapeCircleUploaded.prototype.updateCircleVertexAndStep = function (buffer, shape) {
        var size = shape.size;
        var sizeX = size.x;
        var sizeY = size.y;
        var isSizeChanged = (sizeX !== this.sizeX || sizeY !== this.sizeY);
        var transformLocalId = this.toTransformLocalId(shape);
        var isTransformChanged = (this.transformLocalId !== transformLocalId);
        var stroke = shape.stroke;
        var strokeWidth = (stroke.enable ? stroke.width : 0);
        var strokeAlign = stroke.align;
        var isStrokeChanged = (this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth);
        if (isSizeChanged || isTransformChanged || isStrokeChanged) {
            this.sizeX = sizeX;
            this.sizeY = sizeY;
            this.transformLocalId = transformLocalId;
            this.strokeWidth = strokeWidth;
            this.strokeAlign = strokeAlign;
            // Invalidate the text layout to update the text layout.
            this.textSpacingHorizontal = NaN;
            // Buffer
            buffer.updateVertices();
            buffer.updateSteps();
            buildCircleVertex(buffer.vertices, this.vertexOffset, 0, 0, sizeX, sizeY, strokeAlign, strokeWidth, shape.transform.internalTransform, CIRCLE_WORLD_SIZE);
            buildCircleStep(buffer.steps, buffer.clippings, this.vertexOffset, strokeWidth, this.antialiasWeight, CIRCLE_WORLD_SIZE);
        }
    };
    EShapeCircleUploaded.prototype.updateCircleUv = function (buffer, shape) {
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            buffer.updateUvs();
            var textureUvs = this.toTextureUvs(texture);
            buildCircleUv(buffer.uvs, this.vertexOffset, textureUvs);
        }
    };
    return EShapeCircleUploaded;
}(EShapeTextUploaded));
export { EShapeCircleUploaded };
//# sourceMappingURL=e-shape-circle-uploaded.js.map