/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButton } from "./d-button";
import { DDialogSelect } from "./d-dialog-select";
var defaultGetter = function (dialog) {
    // Assumes the dialog.value is VALUE.
    return dialog.value;
};
var defaultSetter = function () {
    // DO NOTHING
};
var DButtonSelect = /** @class */ (function (_super) {
    __extends(DButtonSelect, _super);
    function DButtonSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DButtonSelect.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, this.toOptions(options));
        var getter = (options && options.getter) || defaultGetter;
        var setter = (options && options.setter) || defaultSetter;
        this.on("active", function () {
            var dialog = _this.dialog;
            setter(dialog, _this._textValueComputed);
            dialog.open().then(function () {
                var newValue = getter(dialog);
                var oldValue = _this._textValueComputed;
                if (newValue !== oldValue) {
                    _this.text = newValue;
                    _this.emit("change", newValue, oldValue, _this);
                }
            });
        });
    };
    Object.defineProperty(DButtonSelect.prototype, "dialog", {
        get: function () {
            var dialog = this._dialog;
            if (dialog == null) {
                var options = this._options;
                var dialogOptions = options && options.dialog;
                if (dialogOptions && ("open" in dialogOptions)) {
                    dialog = dialogOptions;
                }
                else {
                    // Assumes DIALOG === DDialogSelect<DIALOG_VALUE>.
                    dialog = new DDialogSelect(dialogOptions);
                }
                this._dialog = dialog;
            }
            return dialog;
        },
        enumerable: true,
        configurable: true
    });
    DButtonSelect.prototype.toOptions = function (options) {
        var _a, _b, _c;
        if (options) {
            // Try to copy text.formatter to dialog.item.text.formatter at first
            var formatter = (_a = options.text) === null || _a === void 0 ? void 0 : _a.formatter;
            if (formatter !== undefined) {
                var dialog = options.dialog;
                if (!(dialog && "open" in dialog)) {
                    dialog = dialog || {};
                    var item = dialog.item = dialog.item || {};
                    var text = item.text = item.text || {};
                    if (text.formatter === undefined) {
                        // Assumes formatter is ( value: DIALOG_VALUE | null, caller: any ) => string.
                        text.formatter = formatter;
                    }
                }
            }
            else {
                // Try to copy dialog.item.text.formatter to text.formatter
                var dialog = options.dialog;
                if (!(dialog && "open" in dialog)) {
                    var dialogFormatter = (_c = (_b = dialog === null || dialog === void 0 ? void 0 : dialog.item) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.formatter;
                    if (dialogFormatter !== undefined) {
                        var text = options.text = options.text || {};
                        if (text.formatter === undefined) {
                            // Assumes dialogFormatter is ( value: VALUE | null, caller: any ) => string.
                            text.formatter = dialogFormatter;
                        }
                    }
                }
            }
        }
        return options;
    };
    Object.defineProperty(DButtonSelect.prototype, "value", {
        get: function () {
            return this._textValueComputed;
        },
        set: function (value) {
            this.text = value;
        },
        enumerable: true,
        configurable: true
    });
    DButtonSelect.prototype.getType = function () {
        return "DButtonSelect";
    };
    return DButtonSelect;
}(DButton));
export { DButtonSelect };
//# sourceMappingURL=d-button-select.js.map