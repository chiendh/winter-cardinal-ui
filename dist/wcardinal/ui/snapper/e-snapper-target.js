/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { ESnapperTargetValue, ESnapperTargetValueType } from "./e-snapper-target-value";
var ESnapperTarget = /** @class */ (function (_super) {
    __extends(ESnapperTarget, _super);
    function ESnapperTarget() {
        var _this = _super.call(this) || this;
        _this.values = [];
        _this._isVisible = true;
        _this._isEnabled = true;
        return _this;
    }
    ESnapperTarget.prototype.isEnabled = function () {
        return this._isEnabled;
    };
    ESnapperTarget.prototype.toggle = function () {
        this._isEnabled = !this._isEnabled;
        this.emit("change", this);
        return this._isEnabled;
    };
    ESnapperTarget.prototype.enable = function () {
        if (this._isEnabled !== true) {
            this._isEnabled = true;
            this.emit("change", this);
        }
    };
    ESnapperTarget.prototype.disable = function () {
        if (this._isEnabled !== false) {
            this._isEnabled = false;
            this.emit("change", this);
        }
    };
    ESnapperTarget.prototype.add = function (target, index) {
        if (index != null) {
            this.values.splice(index, 0, target);
        }
        else {
            this.values.push(target);
        }
        this.emit("change", this);
    };
    ESnapperTarget.prototype.remove = function (index) {
        var values = this.values;
        if (0 <= index && index < values.length) {
            values.splice(index, 1);
            this.emit("change", this);
        }
    };
    ESnapperTarget.prototype.size = function () {
        return this.values.length;
    };
    ESnapperTarget.prototype.replace = function (index, value) {
        var values = this.values;
        if (0 <= index && index < values.length) {
            var result = values[index];
            values[index] = value;
            this.emit("change", this);
            return result;
        }
        return null;
    };
    ESnapperTarget.prototype.swap = function (indexA, indexB) {
        if (indexA !== indexB) {
            var values = this.values;
            var valueA = values[indexA];
            values[indexA] = values[indexB];
            values[indexB] = valueA;
        }
    };
    Object.defineProperty(ESnapperTarget.prototype, "visible", {
        get: function () {
            return this._isVisible;
        },
        set: function (visible) {
            if (this._isVisible !== visible) {
                this._isVisible = visible;
                this.emit("change", this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ESnapperTarget.prototype.snap = function (px, py, x, y) {
        if (this._isEnabled) {
            var values = this.values;
            for (var i = 0, imax = values.length; i < imax; ++i) {
                var value = values[i];
                if (value.type === ESnapperTargetValueType.VERTICAL) {
                    x.set(px, value.position);
                }
                else {
                    y.set(py, value.position);
                }
            }
        }
    };
    ESnapperTarget.prototype.reset = function () {
        this._isEnabled = true;
        this._isVisible = true;
        this.values.length = 0;
        this.emit("change", this);
    };
    ESnapperTarget.prototype.serialize = function () {
        var targets = [];
        var values = this.values;
        for (var i = 0, imax = values.length; i < imax; ++i) {
            targets.push(values[i].serialize());
        }
        return [
            (this._isEnabled ? 1 : 0),
            (this._isVisible ? 1 : 0),
            targets
        ];
    };
    ESnapperTarget.prototype.deserialize = function (serialized) {
        // Availability
        this._isEnabled = (serialized[0] !== 0);
        // Visibility
        this._isVisible = (serialized[1] !== 0);
        // Values
        var sources = serialized[2];
        var values = this.values;
        values.length = 0;
        for (var i = 0, imax = sources.length; i < imax; ++i) {
            var source = sources[i];
            values.push(new ESnapperTargetValue(source[0], source[1]));
        }
        this.emit("change", this);
    };
    return ESnapperTarget;
}(utils.EventEmitter));
export { ESnapperTarget };
//# sourceMappingURL=e-snapper-target.js.map