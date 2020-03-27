/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDialogCommand } from "./d-dialog-command";
import { DInputTextAndLabel } from "./d-input-text-and-label";
var DDialogInputText = /** @class */ (function (_super) {
    __extends(DDialogInputText, _super);
    function DDialogInputText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogInputText.prototype.onInit = function (layout, options) {
        var _this = this;
        _super.prototype.onInit.call(this, layout, options);
        var theme = this.theme;
        this._inputAndLabel = new DInputTextAndLabel({
            parent: layout,
            width: "padding", height: "auto",
            input: {
                weight: 1,
                on: {
                    enter: function () {
                        _this.onOk();
                    }
                }
            },
            label: {
                width: theme.getLabelWidth(),
                text: {
                    value: (options != null && options.label != null ?
                        options.label : theme.getLabel())
                }
            },
            space: {
                width: theme.getLabelWidth()
            }
        });
    };
    Object.defineProperty(DDialogInputText.prototype, "input", {
        get: function () {
            return this._inputAndLabel.input;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogInputText.prototype, "value", {
        get: function () {
            return this._inputAndLabel.input.value;
        },
        set: function (value) {
            this._inputAndLabel.input.value = value;
        },
        enumerable: true,
        configurable: true
    });
    DDialogInputText.prototype.getType = function () {
        return "DDialogInputText";
    };
    return DDialogInputText;
}(DDialogCommand));
export { DDialogInputText };
//# sourceMappingURL=d-dialog-input-text.js.map