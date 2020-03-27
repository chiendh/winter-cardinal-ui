/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var nameDefault = function () { return null; };
var EShapeActionRuntimeEmitEvent = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeEmitEvent, _super);
    function EShapeActionRuntimeEmitEvent(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.NONE) || this;
        _this.name = _this.toExpression(value.name, nameDefault, "null");
        return _this;
    }
    EShapeActionRuntimeEmitEvent.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var name_1 = this.name(shape, time);
            if (name_1 != null) {
                shape.emit(name_1, shape);
                var container = this.toContainer(shape);
                if (container && ("shape" in container)) {
                    container.shape.emit(name_1, shape);
                }
            }
        }
    };
    return EShapeActionRuntimeEmitEvent;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeEmitEvent };
//# sourceMappingURL=e-shape-action-runtime-emit-event.js.map