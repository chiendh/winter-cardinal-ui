/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDialogCommand } from "./d-dialog-command";
import { DPickerDate } from "./d-picker-date";
var DDialogDate = /** @class */ (function (_super) {
    __extends(DDialogDate, _super);
    function DDialogDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogDate.prototype.onInit = function (layout, options) {
        _super.prototype.onInit.call(this, layout, options);
        var picker = new DPickerDate(options && options.picker);
        this._picker = picker;
        layout.addChild(picker);
    };
    Object.defineProperty(DDialogDate.prototype, "current", {
        get: function () {
            return this._picker.current;
        },
        set: function (dateCurrent) {
            this._picker.current = dateCurrent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogDate.prototype, "new", {
        get: function () {
            return this._picker.new;
        },
        set: function (dateNew) {
            this._picker.new = dateNew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogDate.prototype, "page", {
        get: function () {
            return this._picker.new;
        },
        set: function (datePage) {
            this._picker.page = datePage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogDate.prototype, "picker", {
        get: function () {
            return this._picker;
        },
        enumerable: true,
        configurable: true
    });
    DDialogDate.prototype.getType = function () {
        return "DDialogDate";
    };
    return DDialogDate;
}(DDialogCommand));
export { DDialogDate };
//# sourceMappingURL=d-dialog-date.js.map