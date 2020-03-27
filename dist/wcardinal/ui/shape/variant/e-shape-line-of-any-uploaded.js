/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { buildLineOfAnyColor, toLineOfAnyPointCount } from "./build-line-of-any";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeLineOfAnyUploaded = /** @class */ (function (_super) {
    __extends(EShapeLineOfAnyUploaded, _super);
    function EShapeLineOfAnyUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight, pointCountReserved) {
        var _this = _super.call(this, buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight) || this;
        _this.pointId = -1;
        _this.pointCount = 0;
        _this.pointCountReserved = pointCountReserved;
        _this.pointSizeId = -1;
        _this.pointOffsetId = -1;
        _this.pointFillId = -1;
        _this.pointStrokeId = -1;
        return _this;
    }
    EShapeLineOfAnyUploaded.prototype.isCompatible = function (shape) {
        if (_super.prototype.isCompatible.call(this, shape)) {
            var points = shape.points;
            var pointCount = toLineOfAnyPointCount(points ? points.length : 0);
            return pointCount === this.pointCountReserved;
        }
        return false;
    };
    EShapeLineOfAnyUploaded.prototype.updateLineOfAnyColorFill = function (buffer, shape, points, vcountPerPoint) {
        var pointFill = points.fill;
        var pointFillId = pointFill.id;
        var isPointFillChanged = (pointFillId !== this.pointFillId);
        var fill = shape.fill;
        var isFillEnabled = shape.visible && fill.enable;
        var colorFill = fill.color;
        var alphaFill = (isFillEnabled ? fill.alpha : 0);
        var isFillChanged = (colorFill !== this.colorFill || alphaFill !== this.alphaFill);
        if (isPointFillChanged || isFillChanged) {
            this.colorFill = colorFill;
            this.alphaFill = alphaFill;
            this.pointFillId = pointFillId;
            buffer.updateColorFills();
            buildLineOfAnyColor(this.vertexOffset, vcountPerPoint, pointFill, this.pointCountReserved, buffer.colorFills, isFillEnabled, colorFill, alphaFill);
        }
    };
    EShapeLineOfAnyUploaded.prototype.updateLineOfAnyColorStroke = function (buffer, shape, points, vcountPerPoint) {
        var pointStroke = points.stroke;
        var pointStrokeId = pointStroke.id;
        var isPointStrokeChanged = (pointStrokeId !== this.pointStrokeId);
        var stroke = shape.stroke;
        var isStrokeEnabled = shape.visible && stroke.enable;
        var colorStroke = stroke.color;
        var alphaStroke = (isStrokeEnabled ? stroke.alpha : 0);
        var isStrokeChanged = (colorStroke !== this.colorStroke || alphaStroke !== this.alphaStroke);
        if (isPointStrokeChanged || isStrokeChanged) {
            this.colorStroke = colorStroke;
            this.alphaStroke = alphaStroke;
            this.pointStrokeId = pointStrokeId;
            buffer.updateColorStrokes();
            buildLineOfAnyColor(this.vertexOffset, vcountPerPoint, pointStroke, this.pointCountReserved, buffer.colorStrokes, isStrokeEnabled, colorStroke, alphaStroke);
        }
    };
    return EShapeLineOfAnyUploaded;
}(EShapeTextUploaded));
export { EShapeLineOfAnyUploaded };
//# sourceMappingURL=e-shape-line-of-any-uploaded.js.map