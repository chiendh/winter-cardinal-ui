/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeSizes } from "../e-shape-sizes";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
var EShapeActionRuntimeTransformResizeSizeAbsolute = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformResizeSizeAbsolute, _super);
    function EShapeActionRuntimeTransformResizeSizeAbsolute(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.SIZE) || this;
        _this.originX = value.originX;
        _this.originY = value.originY;
        _this.reset |= EShapeRuntimeReset.POSITION;
        return _this;
    }
    EShapeActionRuntimeTransformResizeSizeAbsolute.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var sizeAbsolute = EShapeSizes.toNormalized(this.size(shape, time));
            var size = shape.size;
            var writtenWidth = ((runtime.written & EShapeRuntimeReset.WIDTH) !== 0);
            var writtenHeight = ((runtime.written & EShapeRuntimeReset.HEIGHT) !== 0);
            var oldSizeX = (writtenWidth ? size.x : runtime.size.x);
            var oldSizeY = (writtenHeight ? size.y : runtime.size.y);
            size.set(sizeAbsolute, sizeAbsolute);
            runtime.written |= EShapeRuntimeReset.SIZE;
            this.adjustPosition(shape, runtime, oldSizeX - size.x, oldSizeY - size.y, this.originX, this.originY);
        }
    };
    return EShapeActionRuntimeTransformResizeSizeAbsolute;
}(EShapeActionRuntimeTransformResize));
export { EShapeActionRuntimeTransformResizeSizeAbsolute };
//# sourceMappingURL=e-shape-action-runtime-transform-resize-size-absolute.js.map