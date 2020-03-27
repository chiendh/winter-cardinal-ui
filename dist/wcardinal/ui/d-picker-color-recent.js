/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
var DPickerColorRecent = /** @class */ (function (_super) {
    __extends(DPickerColorRecent, _super);
    function DPickerColorRecent(recents, capacity) {
        var _this = _super.call(this) || this;
        _this._recents = recents;
        _this._capacity = capacity;
        return _this;
    }
    DPickerColorRecent.prototype.get = function (index) {
        var recents = this._recents;
        if (0 <= index && index < recents.length) {
            return recents[recents.length - 1 - index];
        }
        return null;
    };
    DPickerColorRecent.prototype.set = function (index, colorAndAlpha) {
        var recents = this._recents;
        if (0 <= index && index < recents.length) {
            var result = recents[recents.length - 1 - index];
            recents[recents.length - 1 - index] = {
                color: colorAndAlpha.color,
                alpha: colorAndAlpha.alpha
            };
            this.emit("change", this);
            return result;
        }
        return null;
    };
    DPickerColorRecent.prototype.contains = function (colorAndAlpha) {
        var recents = this._recents;
        for (var i = 0, imax = recents.length; i < imax; ++i) {
            var recent = recents[i];
            if (recent.color === colorAndAlpha.color && recent.alpha === colorAndAlpha.alpha) {
                return true;
            }
        }
        return false;
    };
    DPickerColorRecent.prototype.add = function (colorAndAlpha) {
        var recents = this._recents;
        recents.push({
            color: colorAndAlpha.color,
            alpha: colorAndAlpha.alpha
        });
        if (this._capacity < recents.length) {
            recents.shift();
        }
        this.emit("change", this);
        return this;
    };
    DPickerColorRecent.prototype.pop = function () {
        var recents = this._recents;
        var result = recents.shift();
        if (result != null) {
            this.emit("change", this);
            return result;
        }
        return null;
    };
    DPickerColorRecent.prototype.size = function () {
        return this._recents.length;
    };
    return DPickerColorRecent;
}(utils.EventEmitter));
export { DPickerColorRecent };
//# sourceMappingURL=d-picker-color-recent.js.map