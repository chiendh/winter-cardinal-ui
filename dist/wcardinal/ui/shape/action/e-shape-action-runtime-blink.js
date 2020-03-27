/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var EShapeActionRuntimeBlink = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeBlink, _super);
    function EShapeActionRuntimeBlink(value, reset) {
        var _this = _super.call(this, value, reset) || this;
        _this.interval = value.interval;
        return _this;
    }
    EShapeActionRuntimeBlink.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var interval = this.interval;
            var dinterval = (interval << 1);
            var elapsed = (time % dinterval);
            if (elapsed < interval) {
                this.toOff(shape, runtime);
                runtime.effect = time + (interval - elapsed);
            }
            else {
                this.toOn(shape, runtime);
                runtime.effect = time + (dinterval - elapsed);
            }
        }
    };
    EShapeActionRuntimeBlink.prototype.toOn = function (shape, runtime) {
        //
    };
    EShapeActionRuntimeBlink.prototype.toOff = function (shape, runtime) {
        //
    };
    return EShapeActionRuntimeBlink;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeBlink };
//# sourceMappingURL=e-shape-action-runtime-blink.js.map