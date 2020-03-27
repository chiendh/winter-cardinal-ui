/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeSizes } from "../e-shape-sizes";
import { EShapeActionRuntimeTransformResize } from "./e-shape-action-runtime-transform-resize";
var EShapeActionRuntimeTransformResizeHeightAbsolute = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeTransformResizeHeightAbsolute, _super);
    function EShapeActionRuntimeTransformResizeHeightAbsolute(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.HEIGHT) || this;
        _this.origin = value.originY;
        _this.reset |= EShapeRuntimeReset.POSITION;
        return _this;
    }
    EShapeActionRuntimeTransformResizeHeightAbsolute.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var sizeAbsolute = this.size(shape, time);
            var size = shape.size;
            var writtenHeight = ((runtime.written & EShapeRuntimeReset.HEIGHT) !== 0);
            var oldSizeY = (writtenHeight ? size.y : runtime.size.y);
            size.y = EShapeSizes.toNormalized(sizeAbsolute);
            runtime.written |= EShapeRuntimeReset.HEIGHT;
            this.adjustPosition(shape, runtime, 0, oldSizeY - size.y, 0.5, this.origin);
        }
    };
    return EShapeActionRuntimeTransformResizeHeightAbsolute;
}(EShapeActionRuntimeTransformResize));
export { EShapeActionRuntimeTransformResizeHeightAbsolute };
//# sourceMappingURL=e-shape-action-runtime-transform-resize-height-absolute.js.map