/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DApplications } from "./d-applications";
import { DButton } from "./d-button";
import { DDialogColor } from "./d-dialog-color";
import { DPickerColorAndAlpha } from "./d-picker-color-and-alpha";
var DButtonColor = /** @class */ (function (_super) {
    __extends(DButtonColor, _super);
    function DButtonColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DButtonColor.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        var colorAndAlpha = this._textValueComputed;
        this._value = new DPickerColorAndAlpha(colorAndAlpha, function (color) {
            colorAndAlpha.color = color;
            _this.onColorChange();
        }, function (alpha) {
            colorAndAlpha.alpha = alpha;
            _this.updateTextForcibly();
        });
        this.on("active", function () {
            var dialog = _this.dialog;
            dialog.current.color = colorAndAlpha.color;
            dialog.current.alpha = colorAndAlpha.alpha;
            dialog.new.color = colorAndAlpha.color;
            dialog.new.alpha = colorAndAlpha.alpha;
            dialog.open().then(function () {
                var dialogNew = dialog.new;
                var dialogCurrent = dialog.current;
                colorAndAlpha.color = dialogNew.color;
                colorAndAlpha.alpha = dialogNew.alpha;
                _this.onColorChange();
                _this.emit("change", dialogNew, dialogCurrent, _this);
            });
        });
    };
    DButtonColor.prototype.toImageTintOptions = function (tint) {
        var _this = this;
        var color = function () { return _this._textValueComputed.color; };
        if (tint) {
            return {
                color: tint.color || color,
                alpha: tint.alpha
            };
        }
        return {
            color: color
        };
    };
    DButtonColor.prototype.toImageOptions = function (theme, options) {
        if (options) {
            return {
                source: options.source,
                tint: this.toImageTintOptions(options.tint),
                align: options.align,
                margin: options.margin
            };
        }
        return {
            tint: this.toImageTintOptions()
        };
    };
    DButtonColor.prototype.onColorChange = function () {
        if (this._images[0].updateTint()) {
            DApplications.update(this);
        }
        this.updateTextForcibly();
    };
    DButtonColor.prototype.updateTextForcibly = function () {
        this.onTextChange();
        this.createOrUpdateText();
    };
    Object.defineProperty(DButtonColor.prototype, "dialog", {
        get: function () {
            var dialog = this._dialog;
            if (dialog == null) {
                var options = this._options;
                var dialogOptions = options && options.dialog;
                if (dialogOptions != null) {
                    dialog = new DDialogColor(dialogOptions);
                }
                else {
                    if (DButtonColor.DIALOG == null) {
                        DButtonColor.DIALOG = new DDialogColor();
                    }
                    dialog = DButtonColor.DIALOG;
                }
                this._dialog = dialog;
            }
            return dialog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DButtonColor.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    DButtonColor.prototype.getType = function () {
        return "DButtonColor";
    };
    return DButtonColor;
}(DButton));
export { DButtonColor };
//# sourceMappingURL=d-button-color.js.map