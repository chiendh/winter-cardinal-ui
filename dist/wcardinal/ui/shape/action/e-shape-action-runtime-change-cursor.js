/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var nameDefault = function () { return null; };
var EShapeActionRuntimeChangeCursor = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeCursor, _super);
    function EShapeActionRuntimeChangeCursor(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.CURSOR) || this;
        _this.name = _this.toExpression(value.name, nameDefault, "null");
        return _this;
    }
    EShapeActionRuntimeChangeCursor.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var name_1 = this.name(shape, time);
            if (name_1 != null) {
                shape.cursor = name_1;
                runtime.written |= this.reset;
            }
        }
    };
    return EShapeActionRuntimeChangeCursor;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeChangeCursor };
//# sourceMappingURL=e-shape-action-runtime-change-cursor.js.map