/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DTextBase } from "./d-text-base";
var DSliderLabel = /** @class */ (function (_super) {
    __extends(DSliderLabel, _super);
    function DSliderLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DSliderLabel.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
        this._value = options && options.value || 0;
    };
    Object.defineProperty(DSliderLabel.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    DSliderLabel.prototype.getType = function () {
        return "DSliderLabel";
    };
    return DSliderLabel;
}(DTextBase));
export { DSliderLabel };
//# sourceMappingURL=d-slider-label.js.map