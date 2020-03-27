/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
var isEqual = function (a, b) {
    if (a.direction !== b.direction) {
        return false;
    }
    var ap = a.points;
    var bp = b.points;
    if (ap.length !== bp.length) {
        return false;
    }
    for (var j = 0, jmax = ap.length; j < jmax; ++j) {
        var apj = ap[j];
        var bpj = bp[j];
        if (apj.color !== bpj.color || apj.alpha !== bpj.alpha || apj.position !== bpj.position) {
            return false;
        }
    }
    return true;
};
var DPickerColorGradientRecent = /** @class */ (function (_super) {
    __extends(DPickerColorGradientRecent, _super);
    function DPickerColorGradientRecent(recents, capacity) {
        var _this = _super.call(this) || this;
        _this._recents = recents;
        _this._capacity = capacity;
        return _this;
    }
    DPickerColorGradientRecent.prototype.getCapacity = function () {
        return this._capacity;
    };
    DPickerColorGradientRecent.prototype.get = function (index) {
        var recents = this._recents;
        if (0 <= index && index < recents.length) {
            return recents[recents.length - 1 - index];
        }
        return null;
    };
    DPickerColorGradientRecent.prototype.set = function (index, points) {
        var recents = this._recents;
        if (0 <= index && index < recents.length) {
            var result = recents[recents.length - 1 - index];
            recents[recents.length - 1 - index] = points;
            this.emit("change", this);
            return result;
        }
        return null;
    };
    DPickerColorGradientRecent.prototype.contains = function (points) {
        var recents = this._recents;
        for (var i = 0, imax = recents.length; i < imax; ++i) {
            if (isEqual(recents[i], points)) {
                return true;
            }
        }
        return false;
    };
    DPickerColorGradientRecent.prototype.add = function (points) {
        var recents = this._recents;
        recents.push(points);
        if (this._capacity < recents.length) {
            recents.shift();
        }
        this.emit("change", this);
        return this;
    };
    DPickerColorGradientRecent.prototype.pop = function () {
        var recents = this._recents;
        var result = recents.shift();
        if (result != null) {
            this.emit("change", this);
            return result;
        }
        return null;
    };
    DPickerColorGradientRecent.prototype.size = function () {
        return this._recents.length;
    };
    return DPickerColorGradientRecent;
}(utils.EventEmitter));
export { DPickerColorGradientRecent };
//# sourceMappingURL=d-picker-color-gradient-recent.js.map