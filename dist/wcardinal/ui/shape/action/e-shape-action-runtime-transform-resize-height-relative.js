/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeSizes } from "../e-shape-sizes";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
var EShapeActionRuntimeTransformResizeHeightRelative = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformResizeHeightRelative, _super);
    function EShapeActionRuntimeTransformResizeHeightRelative(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.HEIGHT) || this;
        _this.origin = value.originY;
        _this.reset |= EShapeRuntimeReset.POSITION;
        return _this;
    }
    EShapeActionRuntimeTransformResizeHeightRelative.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var sizeRelative = this.size(shape, time);
            var size = shape.size;
            var writtenHeight = ((runtime.written & EShapeRuntimeReset.HEIGHT) !== 0);
            var oldSizeY = (writtenHeight ? size.y : runtime.size.y);
            size.y = EShapeSizes.toNormalized(oldSizeY * sizeRelative);
            runtime.written |= EShapeRuntimeReset.HEIGHT;
            this.adjustPosition(shape, runtime, 0, oldSizeY - size.y, 0.5, this.origin);
        }
    };
    return EShapeActionRuntimeTransformResizeHeightRelative;
}(EShapeActionRuntimeTransformResize));
export { EShapeActionRuntimeTransformResizeHeightRelative };
//# sourceMappingURL=e-shape-action-runtime-transform-resize-height-relative.js.map