/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButton } from "./d-button";
import { DDialogDate } from "./d-dialog-date";
import { DDialogDates } from "./d-dialog-dates";
var DButtonDate = /** @class */ (function (_super) {
    __extends(DButtonDate, _super);
    function DButtonDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DButtonDate.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._dialogOptions = options && options.dialog;
        this.on("active", function () {
            var currentTime = _this._textValueComputed.getTime();
            var dialog = _this.dialog;
            dialog.current = new Date(currentTime);
            dialog.new = new Date(currentTime);
            dialog.page = new Date(currentTime);
            dialog.open().then(function () {
                var dateNew = dialog.new;
                var dateCurrent = dialog.current;
                _this.text = new Date(dateNew.getTime());
                _this.emit("change", dateNew, dateCurrent, _this);
            });
        });
    };
    Object.defineProperty(DButtonDate.prototype, "dialog", {
        get: function () {
            var dialog = this._dialog;
            if (dialog == null) {
                var dialogOptions = this._dialogOptions;
                if (dialogOptions != null) {
                    dialog = new DDialogDate(this._dialogOptions);
                }
                else {
                    dialog = DDialogDates.getInstance();
                }
                this._dialog = dialog;
            }
            return dialog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DButtonDate.prototype, "value", {
        get: function () {
            return this._textValueComputed;
        },
        set: function (value) {
            if (this._textValueComputed.getTime() !== value.getTime()) {
                this.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    DButtonDate.prototype.getType = function () {
        return "DButtonDate";
    };
    return DButtonDate;
}(DButton));
export { DButtonDate };
//# sourceMappingURL=d-button-date.js.map