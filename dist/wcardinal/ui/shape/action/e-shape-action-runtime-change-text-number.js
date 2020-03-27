/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { NumberFormatters } from "../../util/number-formatters";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var numberDefault = function () { return 0; };
var EShapeActionRuntimeChangeTextNumber = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeTextNumber, _super);
    function EShapeActionRuntimeChangeTextNumber(value, format) {
        var _this = _super.call(this, value, EShapeRuntimeReset.TEXT) || this;
        _this.number = _this.toExpression(value.value, numberDefault, "0");
        format = format.trim();
        _this.formatter = (0 < format.length ? NumberFormatters.create(format) : null);
        return _this;
    }
    EShapeActionRuntimeChangeTextNumber.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var value = this.number(shape, time);
            shape.text.value = (this.formatter != null ? this.formatter.format(value, 0) : String(value));
            runtime.written |= this.reset;
        }
    };
    return EShapeActionRuntimeChangeTextNumber;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeChangeTextNumber };
//# sourceMappingURL=e-shape-action-runtime-change-text-number.js.map