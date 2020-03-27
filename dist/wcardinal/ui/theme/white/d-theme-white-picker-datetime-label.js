/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeWhiteText } from "./d-theme-white-text";
var DThemeWhitePickerDatetimeLabel = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerDatetimeLabel, _super);
    function DThemeWhitePickerDatetimeLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerDatetimeLabel.prototype.getWidth = function () {
        return 30;
    };
    DThemeWhitePickerDatetimeLabel.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhitePickerDatetimeLabel.prototype.getTextStyleClipping = function () {
        return false;
    };
    DThemeWhitePickerDatetimeLabel.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeWhitePickerDatetimeLabel.prototype.getColor = function () {
        return 0x6f6f6f;
    };
    DThemeWhitePickerDatetimeLabel.prototype.getFontWeight = function () {
        return "bold";
    };
    DThemeWhitePickerDatetimeLabel.prototype.getFontSize = function () {
        return Math.round(_super.prototype.getFontSize.call(this) * 1.25);
    };
    DThemeWhitePickerDatetimeLabel.prototype.newTextValue = function () {
        return new Date();
    };
    DThemeWhitePickerDatetimeLabel.prototype.getTextValue = function (state) {
        return new Date();
    };
    return DThemeWhitePickerDatetimeLabel;
}(DThemeWhiteText));
export { DThemeWhitePickerDatetimeLabel };
//# sourceMappingURL=d-theme-white-picker-datetime-label.js.map