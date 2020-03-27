/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Texture } from "pixi.js";
import { DApplications } from "./d-applications";
import { DButton } from "./d-button";
import { DDialogColorGradient } from "./d-dialog-color-gradient";
import { DPickerColorGradientDataView } from "./d-picker-color-gradient-data-view";
var DButtonColorGradient = /** @class */ (function (_super) {
    __extends(DButtonColorGradient, _super);
    function DButtonColorGradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DButtonColorGradient.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        var data = this._textValueComputed;
        this._dialogOptions = options && options.dialog;
        if (options == null || options.image == null || options.image.source === undefined) {
            var texture = this.theme.getViewBaseTexture();
            if (texture instanceof Texture) {
                var view = this._view = DPickerColorGradientDataView.from(1, 10, texture);
                view.setRectangle(0, 0, 0, texture.width, texture.height);
                view.setData(0, data);
                view.update();
                this.image = view;
            }
        }
        this.on("active", function () {
            var dialog = _this.dialog;
            dialog.data.fromObject(data);
            dialog.open().then(function () {
                var newValue = dialog.data;
                var oldValue = data.toObject();
                data.fromObject(newValue);
                var view = _this._view;
                if (view != null) {
                    view.update();
                }
                _this.onTextChange();
                _this.createOrUpdateText();
                DApplications.update(_this);
                _this.emit("change", newValue, oldValue, _this);
            });
        });
    };
    Object.defineProperty(DButtonColorGradient.prototype, "dialog", {
        get: function () {
            var dialog = this._dialog;
            if (dialog == null) {
                var dialogOptions = this._dialogOptions;
                if (dialogOptions != null) {
                    dialog = new DDialogColorGradient(this._dialogOptions);
                }
                else {
                    if (DButtonColorGradient.DIALOG == null) {
                        DButtonColorGradient.DIALOG = new DDialogColorGradient();
                    }
                    dialog = DButtonColorGradient.DIALOG;
                }
                this._dialog = dialog;
            }
            return dialog;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DButtonColorGradient.prototype, "value", {
        get: function () {
            return this._textValueComputed;
        },
        enumerable: true,
        configurable: true
    });
    DButtonColorGradient.prototype.getType = function () {
        return "DButtonColorGradient";
    };
    return DButtonColorGradient;
}(DButton));
export { DButtonColorGradient };
//# sourceMappingURL=d-button-color-gradient.js.map