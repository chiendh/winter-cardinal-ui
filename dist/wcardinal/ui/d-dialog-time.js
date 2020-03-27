/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDialogCommand } from "./d-dialog-command";
import { DPickerTime } from "./d-picker-time";
var DDialogTime = /** @class */ (function (_super) {
    __extends(DDialogTime, _super);
    function DDialogTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogTime.prototype.onInit = function (layout, options) {
        _super.prototype.onInit.call(this, layout, options);
        var picker = new DPickerTime(options && options.picker);
        this._picker = picker;
        layout.addChild(picker);
    };
    Object.defineProperty(DDialogTime.prototype, "current", {
        get: function () {
            return this._picker.current;
        },
        set: function (dateCurrent) {
            this._picker.current = dateCurrent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogTime.prototype, "new", {
        get: function () {
            return this._picker.new;
        },
        set: function (dateNew) {
            this._picker.new = dateNew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogTime.prototype, "picker", {
        get: function () {
            return this._picker;
        },
        enumerable: true,
        configurable: true
    });
    DDialogTime.prototype.getType = function () {
        return "DDialogTime";
    };
    return DDialogTime;
}(DDialogCommand));
export { DDialogTime };
//# sourceMappingURL=d-dialog-time.js.map