/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDialogCommand } from "./d-dialog-command";
import { DPickerColor } from "./d-picker-color";
var DDialogColor = /** @class */ (function (_super) {
    __extends(DDialogColor, _super);
    function DDialogColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogColor.prototype.onInit = function (layout, options) {
        _super.prototype.onInit.call(this, layout, options);
        var picker = new DPickerColor(options && options.picker);
        this._picker = picker;
        layout.addChild(picker);
        this.on("ok", function () {
            var recent = picker.recent;
            if (!recent.contains(picker.new)) {
                recent.add(picker.new);
            }
        });
    };
    Object.defineProperty(DDialogColor.prototype, "current", {
        get: function () {
            return this._picker.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogColor.prototype, "new", {
        get: function () {
            return this._picker.new;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogColor.prototype, "recent", {
        get: function () {
            return this._picker.recent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDialogColor.prototype, "picker", {
        get: function () {
            return this._picker;
        },
        enumerable: true,
        configurable: true
    });
    DDialogColor.prototype.getType = function () {
        return "DDialogColor";
    };
    return DDialogColor;
}(DDialogCommand));
export { DDialogColor };
//# sourceMappingURL=d-dialog-color.js.map