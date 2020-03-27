/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapePointsStyle } from "../e-shape-points-style";
import { buildLineClipping, buildLineIndex, buildLineUv, buildLineVertexStepAndColorFill, toLineVertexCount } from "./build-line";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeLineUploaded = /** @class */ (function (_super) {
    __extends(EShapeLineUploaded, _super);
    function EShapeLineUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight) {
        var _this = _super.call(this, buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight) || this;
        _this.pointId = -1;
        _this.pointCount = 0;
        _this.pointsClosed = false;
        _this.length = 1;
        return _this;
    }
    EShapeLineUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        // Clipping & indices
        var buffer = this.buffer;
        buffer.updateIndices();
        buildLineIndex(buffer.indices, this.vertexOffset, this.indexOffset, this.indexCount - this.textIndexCount);
        // Text
        this.initText();
        //
        this.update(shape);
        return this;
    };
    EShapeLineUploaded.prototype.isCompatible = function (shape) {
        if (_super.prototype.isCompatible.call(this, shape)) {
            var points = shape.points;
            var vcount = toLineVertexCount(points ? points.length : 0);
            return vcount === this.vertexCount - this.textVertexCount;
        }
        return false;
    };
    EShapeLineUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        this.updateLineClipping(buffer, shape);
        this.updateLineVertexStepAndColorFill(buffer, shape);
        this.updateColor(buffer, shape);
        this.updateLineUv(buffer, shape);
        this.updateText(buffer, shape);
    };
    EShapeLineUploaded.prototype.updateLineClipping = function (buffer, shape) {
        var points = shape.points;
        if (points) {
            var pointCount = points.length;
            var pointsClosed = (!!(points.style & EShapePointsStyle.CLOSED));
            if (this.pointCount !== pointCount || this.pointsClosed !== pointsClosed) {
                this.pointCount = pointCount;
                this.pointsClosed = pointsClosed;
                // Invalidate the pointId to update the vertices
                this.pointId = -1;
                buffer.updateClippings();
                buildLineClipping(buffer.clippings, this.vertexOffset, this.vertexCount - this.textVertexCount, pointCount, pointsClosed);
            }
        }
    };
    EShapeLineUploaded.prototype.updateLineVertexStepAndColorFill = function (buffer, shape) {
        var points = shape.points;
        if (points) {
            var pointId = points.id;
            var isPointChanged = (pointId !== this.pointId);
            var stroke = shape.stroke;
            var strokeWidth = (stroke.enable ? stroke.width : 0);
            var isStrokeWidthChanged = (strokeWidth !== this.strokeWidth);
            var transformLocalId = this.toTransformLocalId(shape);
            var isTransformChanged = (this.transformLocalId !== transformLocalId);
            if (isPointChanged || isTransformChanged || isStrokeWidthChanged) {
                this.pointId = pointId;
                this.strokeWidth = strokeWidth;
                this.transformLocalId = transformLocalId;
                if (isPointChanged || isTransformChanged) {
                    // Invalidate the text layout to update the text layout.
                    this.textSpacingHorizontal = NaN;
                }
                if (isPointChanged) {
                    // Invalidate the texture transform ID to update the UVs
                    this.textureTransformId = NaN;
                }
                buffer.updateVertices();
                buffer.updateSteps();
                buffer.updateColorFills();
                this.length = buildLineVertexStepAndColorFill(buffer.vertices, buffer.steps, buffer.colorFills, this.vertexOffset, this.vertexCount - this.textVertexCount, this.pointCount, this.pointsClosed, points.values, points.segments, points.style, strokeWidth, shape.transform.internalTransform);
            }
        }
    };
    EShapeLineUploaded.prototype.updateColorFillAndStroke = function (buffer, shape, vertexCount) {
        this.updateColorStroke(buffer, shape, vertexCount);
    };
    EShapeLineUploaded.prototype.updateLineUv = function (buffer, shape) {
        var texture = this.toTexture(shape);
        var textureTransformId = this.toTextureTransformId(texture);
        if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
            this.texture = texture;
            this.textureTransformId = textureTransformId;
            var pointCount = this.pointCount;
            buffer.updateUvs();
            buildLineUv(buffer.uvs, buffer.colorFills, this.vertexOffset, this.vertexCount - this.textVertexCount, pointCount, this.pointsClosed, this.toTextureUvs(texture), this.length);
        }
    };
    return EShapeLineUploaded;
}(EShapeTextUploaded));
export { EShapeLineUploaded };
//# sourceMappingURL=e-shape-line-uploaded.js.map