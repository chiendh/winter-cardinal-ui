/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DInput } from "./d-input";
// Option parser
var toStep = function (theme, options) {
    if (options != null) {
        return (options.step != null ? options.step : theme.getStep());
    }
    return null;
};
var toMin = function (theme, options) {
    if (options != null) {
        return (options.min != null ? options.min : theme.getMin());
    }
    return null;
};
var toMax = function (theme, options) {
    if (options != null) {
        return (options.max != null ? options.max : theme.getMax());
    }
    return null;
};
var DInputNumber = /** @class */ (function (_super) {
    __extends(DInputNumber, _super);
    function DInputNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DInputNumber.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        var theme = this.theme;
        this._step = toStep(theme, options);
        this._min = toMin(theme, options);
        this._max = toMax(theme, options);
    };
    Object.defineProperty(DInputNumber.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (step) {
            if (this._step !== step) {
                this._step = step;
                this.updateInputStep();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DInputNumber.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (min) {
            if (this._min !== min) {
                this._min = min;
                this.updateInputMin();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DInputNumber.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (max) {
            if (this._max !== max) {
                this._max = max;
                this.updateInputMax();
            }
        },
        enumerable: true,
        configurable: true
    });
    DInputNumber.prototype.toValue = function (valueAsString) {
        var result = this._editingUnformatter(valueAsString, this);
        if (result === result /* NaN Check */) {
            if (this._min != null && result < this._min) {
                return this._min;
            }
            if (this._max != null && this._max < result) {
                return this._max;
            }
            return result;
        }
        return this.value;
    };
    DInputNumber.prototype.updateInputStep = function () {
        if (this._isElementShown) {
            var element = this._element;
            if (element) {
                this.initInputStep(element);
            }
        }
    };
    DInputNumber.prototype.updateInputMin = function () {
        if (this._isElementShown) {
            var element = this._element;
            if (element) {
                this.initInputMin(element);
            }
        }
    };
    DInputNumber.prototype.updateInputMax = function () {
        if (this._isElementShown) {
            var element = this._element;
            if (element) {
                this.initInputMax(element);
            }
        }
    };
    DInputNumber.prototype.initInputStep = function (input) {
        if (this._step != null) {
            input.step = String(this._step);
        }
        else {
            input.removeAttribute("step");
        }
    };
    DInputNumber.prototype.initInputMin = function (input) {
        if (this._min != null) {
            input.min = "" + this._min;
        }
        else {
            input.removeAttribute("min");
        }
    };
    DInputNumber.prototype.initInputMax = function (input) {
        if (this._max != null) {
            input.max = "" + this._max;
        }
        else {
            input.removeAttribute("max");
        }
    };
    DInputNumber.prototype.onElementAttached = function (element, before, after) {
        _super.prototype.onElementAttached.call(this, element, before, after);
        this.initInputStep(element);
        this.initInputMin(element);
        this.initInputMax(element);
    };
    DInputNumber.prototype.getInputType = function () {
        return "number";
    };
    return DInputNumber;
}(DInput));
export { DInputNumber };
//# sourceMappingURL=d-input-number.js.map