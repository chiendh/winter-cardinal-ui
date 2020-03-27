/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
var EShapeLabelUploaded = /** @class */ (function (_super) {
    __extends(EShapeLabelUploaded, _super);
    function EShapeLabelUploaded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EShapeLabelUploaded.prototype.init = function (shape) {
        _super.prototype.init.call(this, shape);
        this.initText();
        this.update(shape);
        return this;
    };
    EShapeLabelUploaded.prototype.update = function (shape) {
        var buffer = this.buffer;
        this.updateLabelVertex(buffer, shape);
        this.updateLabelUv(buffer, shape);
        this.updateText(buffer, shape);
    };
    EShapeLabelUploaded.prototype.updateLabelVertex = function (buffer, shape) {
        var size = shape.size;
        var sizeX = size.x;
        var sizeY = size.y;
        var isSizeChanged = (sizeX !== this.sizeX || sizeY !== this.sizeY);
        var transformLocalId = this.toTransformLocalId(shape);
        var isTransformChanged = (this.transformLocalId !== transformLocalId);
        if (isSizeChanged || isTransformChanged) {
            this.sizeX = sizeX;
            this.sizeY = sizeY;
            this.transformLocalId = transformLocalId;
            // Invalidate the text layout to update the text layout.
            this.textSpacingHorizontal = NaN;
        }
    };
    EShapeLabelUploaded.prototype.updateLabelUv = function (buffer, shape) {
        this.texture = this.toTexture(shape);
    };
    return EShapeLabelUploaded;
}(EShapeTextUploaded));
export { EShapeLabelUploaded };
//# sourceMappingURL=e-shape-label-uploaded.js.map