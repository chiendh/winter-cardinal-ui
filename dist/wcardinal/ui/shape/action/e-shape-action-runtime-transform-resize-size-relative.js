/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeSizes } from "../e-shape-sizes";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
var EShapeActionRuntimeTransformResizeSizeRelative = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformResizeSizeRelative, _super);
    function EShapeActionRuntimeTransformResizeSizeRelative(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.SIZE) || this;
        _this.originX = value.originX;
        _this.originY = value.originY;
        _this.reset |= EShapeRuntimeReset.POSITION;
        return _this;
    }
    EShapeActionRuntimeTransformResizeSizeRelative.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var sizeRelative = this.size(shape, time);
            var size = shape.size;
            var writtenWidth = ((runtime.written & EShapeRuntimeReset.WIDTH) !== 0);
            var writtenHeight = ((runtime.written & EShapeRuntimeReset.HEIGHT) !== 0);
            var oldSizeX = (writtenWidth ? size.x : runtime.size.x);
            var oldSizeY = (writtenHeight ? size.y : runtime.size.y);
            size.set(EShapeSizes.toNormalized(oldSizeX * sizeRelative), EShapeSizes.toNormalized(oldSizeY * sizeRelative));
            runtime.written |= EShapeRuntimeReset.SIZE;
            this.adjustPosition(shape, runtime, oldSizeX - size.x, oldSizeY - size.y, this.originX, this.originY);
        }
    };
    return EShapeActionRuntimeTransformResizeSizeRelative;
}(EShapeActionRuntimeTransformResize));
export { EShapeActionRuntimeTransformResizeSizeRelative };
//# sourceMappingURL=e-shape-action-runtime-transform-resize-size-relative.js.map