/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButton } from "./d-button";
import { DDialogTime } from "./d-dialog-time";
import { DDialogTimes } from "./d-dialog-times";
import { DPickerTimes } from "./d-picker-times";
var DButtonTime = /** @class */ (function (_super) {
    __extends(DButtonTime, _super);
    function DButtonTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DButtonTime.prototype.init = function (options) {
        var _this = this;
        this._dialogOptions = options && options.dialog;
        this._datetimeMask = DPickerTimes.toMask(options && options.dialog && options.dialog.picker);
        _super.prototype.init.call(this, options);
        this.on("active", function () {
            var currentTime = _this._textValueComputed.getTime();
            var dialog = _this.dialog;
            dialog.current = new Date(currentTime);
            dialog.new = new Date(currentTime);
            dialog.open().then(function () {
                var dateNew = dialog.new;
                var dateCurrent = dialog.current;
                _this.text = new Date(dateNew.getTime());
                _this.emit("change", dateNew, dateCurrent, _this);
            });
        });
    };
    DButtonTime.prototype.getDatetimeMask = function () {
        return this._datetimeMask;
    };
    Object.defineProperty(DButtonTime.prototype, "dialog", {
        get: function () {
            var dialog = this._dialog;
            if (dialog == null) {
                var dialogOptions = this._dialogOptions;
                if (dialogOptions != null) {
                    dialog = new DDialogTime(this._dialogOptions);
                }
                else {
                    dialog = DDialogTimes.getInstance();
                }
                this._dialog = dialog;
            }
            return dialog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DButtonTime.prototype, "value", {
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
    DButtonTime.prototype.getType = function () {
        return "DButtonTime";
    };
    return DButtonTime;
}(DButton));
export { DButtonTime };
//# sourceMappingURL=d-button-time.js.map