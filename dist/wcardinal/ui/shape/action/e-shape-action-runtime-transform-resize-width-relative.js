/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeSizes } from "../e-shape-sizes";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
var EShapeActionRuntimeTransformResizeWidthRelative = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformResizeWidthRelative, _super);
    function EShapeActionRuntimeTransformResizeWidthRelative(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.WIDTH) || this;
        _this.origin = value.originX;
        _this.reset |= EShapeRuntimeReset.POSITION;
        return _this;
    }
    EShapeActionRuntimeTransformResizeWidthRelative.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var sizeRelative = this.size(shape, time);
            var size = shape.size;
            var writtenWidth = ((runtime.written & EShapeRuntimeReset.WIDTH) !== 0);
            var oldSizeX = (writtenWidth ? size.x : runtime.size.x);
            size.x = EShapeSizes.toNormalized(oldSizeX * sizeRelative);
            runtime.written |= EShapeRuntimeReset.WIDTH;
            this.adjustPosition(shape, runtime, oldSizeX - size.x, 0, this.origin, 0.5);
        }
    };
    return EShapeActionRuntimeTransformResizeWidthRelative;
}(EShapeActionRuntimeTransformResize));
export { EShapeActionRuntimeTransformResizeWidthRelative };
//# sourceMappingURL=e-shape-action-runtime-transform-resize-width-relative.js.map