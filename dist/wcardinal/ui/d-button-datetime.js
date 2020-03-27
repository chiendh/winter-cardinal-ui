/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButton } from "./d-button";
import { DDialogDatetime } from "./d-dialog-datetime";
import { DDialogDatetimes } from "./d-dialog-datetimes";
import { DPickerDatetimes } from "./d-picker-datetimes";
var DButtonDatetime = /** @class */ (function (_super) {
    __extends(DButtonDatetime, _super);
    function DButtonDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DButtonDatetime.prototype.init = function (options) {
        var _this = this;
        this._dialogOptions = options && options.dialog;
        this._datetimeMask = DPickerDatetimes.toMask(options && options.dialog && options.dialog.picker);
        _super.prototype.init.call(this, options);
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
    DButtonDatetime.prototype.getDatetimeMask = function () {
        return this._datetimeMask;
    };
    Object.defineProperty(DButtonDatetime.prototype, "dialog", {
        get: function () {
            var dialog = this._dialog;
            if (dialog == null) {
                var dialogOptions = this._dialogOptions;
                if (dialogOptions != null) {
                    dialog = new DDialogDatetime(this._dialogOptions);
                }
                else {
                    dialog = DDialogDatetimes.getInstance();
                }
                this._dialog = dialog;
            }
            return dialog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DButtonDatetime.prototype, "value", {
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
    DButtonDatetime.prototype.getType = function () {
        return "DButtonDatetime";
    };
    return DButtonDatetime;
}(DButton));
export { DButtonDatetime };
//# sourceMappingURL=d-button-datetime.js.map