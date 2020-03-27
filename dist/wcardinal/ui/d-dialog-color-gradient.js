/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDialogCommand } from "./d-dialog-command";
import { DPickerColorGradient } from "./d-picker-color-gradient";
var DDialogColorGradient = /** @class */ (function (_super) {
    __extends(DDialogColorGradient, _super);
    function DDialogColorGradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogColorGradient.prototype.onInit = function (layout, options) {
        _super.prototype.onInit.call(this, layout, options);
        var picker = new DPickerColorGradient(options && options.picker);
        this._picker = picker;
        layout.addChild(picker);
        this.on("ok", function () {
            var data = picker.data;
            var recent = picker.recent;
            if (!recent.contains(data)) {
                recent.add(data.toObject());
            }
        });
    };
    Object.defineProperty(DDialogColorGradient.prototype, "data", {
        get: function () {
            return this._picker.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogColorGradient.prototype, "recent", {
        get: function () {
            return this._picker.recent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogColorGradient.prototype, "picker", {
        get: function () {
            return this._picker;
        },
        enumerable: true,
        configurable: true
    });
    DDialogColorGradient.prototype.onKeyDown = function (e) {
        this._picker.onKeyDown(e);
        return _super.prototype.onKeyDown.call(this, e);
    };
    DDialogColorGradient.prototype.getType = function () {
        return "DDialogColorGradient";
    };
    return DDialogColorGradient;
}(DDialogCommand));
export { DDialogColorGradient };
//# sourceMappingURL=d-dialog-color-gradient.js.map