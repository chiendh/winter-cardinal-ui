/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildRectangleRoundedClipping, buildRectangleRoundedIndex, buildRectangleRoundedStep, buildRectangleRoundedUv, buildRectangleRoundedVertex, RECTANGLE_ROUNDED_WORLD_SIZE } from "./build-rectangle-rounded";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeRectangleRoundedUploaded = /** @class */ (function (_super) {
    __extends(EShapeRectangleRoundedUploaded, _super);
    function EShapeRectangleRoundedUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeRectangleRoundedUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Indices
        var buffer = this.buffer;
        buffer.updateIndices();
        buildRectangleRoundedIndex(buffer.indices, this.vertexOffset, this.indexOffset);
        // Text
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeRectangleRoundedUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        this.updateVertexClippingStepAndUv(buffer, shape);
        this.updateColor(buffer, shape);
        this.updateText(buffer, shape);
    };
    EShapeRectangleRoundedUploaded.prototype.updateVertexClippingStepAndUv = function (buffer, shape) {
        var size = shape.size;
        var sizeX = size.x;
        var sizeY = size.y;
        var radius = shape.radius;
        var isSizeChanged = (sizeX !== this.sizeX || sizeY !== this.sizeY || radius !== this.radius);
        var transformLocalId = this.toTransformLocalId(shape);
        var isTransformChanged = (this.transformLocalId !== transformLocalId);
        var stroke = shape.stroke;
        var strokeWidth = (stroke.enable ? stroke.width : 0);
        var strokeAlign = stroke.align;
        var strokeSide = stroke.side;
        var isStrokeChanged = (this.strokeAlign !== strokeAlign ||
            this.strokeWidth !== strokeWidth || this.strokeSide !== strokeSide);
        var corner = shape.corner;
        var isCornerChanged = (corner !== this.corner);
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        var isTextureChanged = (texture !== this.texture || textureTransformId !== this.textureTransformId);
        var isVertexChanged = isSizeChanged || isStrokeChanged;
        if (isVertexChanged || isTransformChanged || isCornerChanged || isTextureChanged) {
            this.sizeX = sizeX;
            this.sizeY = sizeY;
            this.radius = radius;
            this.transformLocalId = transformLocalId;
            this.strokeAlign = strokeAlign;
            this.strokeWidth = strokeWidth;
            this.strokeSide = strokeSide;
            this.corner = corner;
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            if (isVertexChanged || isTransformChanged) {
                // Invalidate the text layout to update the text layout.
                this.textSpacingHorizontal = NaN;
            }
            // Vertices
            var voffset = this.vertexOffset;
            buffer.updateVertices();
            buildRectangleRoundedVertex(buffer.vertices, voffset, 0, 0, sizeX, sizeY, strokeAlign, strokeWidth, radius, shape.transform.internalTransform, RECTANGLE_ROUNDED_WORLD_SIZE);
            // Steps
            if (isVertexChanged || isCornerChanged || isTransformChanged) {
                buffer.updateSteps();
                buildRectangleRoundedStep(buffer.steps, voffset, strokeWidth, strokeSide, corner, this.antialiasWeight, RECTANGLE_ROUNDED_WORLD_SIZE);
            }
            // Clippings
            if (isVertexChanged || isCornerChanged) {
                buffer.updateClippings();
                buildRectangleRoundedClipping(buffer.clippings, voffset, corner, RECTANGLE_ROUNDED_WORLD_SIZE);
            }
            // UVs
            if (isVertexChanged || isTextureChanged) {
                buffer.updateUvs();
                buildRectangleRoundedUv(buffer.uvs, voffset, this.toTextureUvs(texture), RECTANGLE_ROUNDED_WORLD_SIZE);
            }
        }
    };
    return EShapeRectangleRoundedUploaded;
}(EShapeTextUploaded));
export { EShapeRectangleRoundedUploaded };
//# sourceMappingURL=e-shape-rectangle-rounded-uploaded.js.map