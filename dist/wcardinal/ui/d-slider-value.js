/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DTextBase } from "./d-text-base";
var DSliderValue = /** @class */ (function (_super) {
    __extends(DSliderValue, _super);
    function DSliderValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DSliderValue.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
        this._value = options && options.value || 0;
        this._rounder = this.toRounder(options);
    };
    DSliderValue.prototype.toRounder = function (options) {
        var rounder = options && options.rounder;
        if (rounder) {
            return rounder;
        }
        var precision = (options && options.precision) ? options.precision : this.theme.getPrecision();
        return function (value) {
            var base = Math.pow(10, precision);
            return Math.round(value * base) / base;
        };
    };
    Object.defineProperty(DSliderValue.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DSliderValue.prototype, "rounder", {
        get: function () {
            return this._rounder;
        },
        enumerable: true,
        configurable: true
    });
    DSliderValue.prototype.getType = function () {
        return "DSliderValue";
    };
    return DSliderValue;
}(DTextBase));
export { DSliderValue };
//# sourceMappingURL=d-slider-value.js.map