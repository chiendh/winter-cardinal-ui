/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeSizes } from "../e-shape-sizes";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
var EShapeActionRuntimeTransformResizeWidthAbsolute = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformResizeWidthAbsolute, _super);
    function EShapeActionRuntimeTransformResizeWidthAbsolute(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.WIDTH) || this;
        _this.origin = value.originX;
        _this.reset |= EShapeRuntimeReset.POSITION;
        return _this;
    }
    EShapeActionRuntimeTransformResizeWidthAbsolute.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var sizeAbsolute = this.size(shape, time);
            var size = shape.size;
            var writtenWidth = ((runtime.written & EShapeRuntimeReset.WIDTH) !== 0);
            var oldSizeX = (writtenWidth ? size.x : runtime.size.x);
            size.x = EShapeSizes.toNormalized(sizeAbsolute);
            runtime.written |= EShapeRuntimeReset.WIDTH;
            this.adjustPosition(shape, runtime, oldSizeX - size.x, 0, this.origin, 0.5);
        }
    };
    return EShapeActionRuntimeTransformResizeWidthAbsolute;
}(EShapeActionRuntimeTransformResize));
export { EShapeActionRuntimeTransformResizeWidthAbsolute };
//# sourceMappingURL=e-shape-action-runtime-transform-resize-width-absolute.js.map