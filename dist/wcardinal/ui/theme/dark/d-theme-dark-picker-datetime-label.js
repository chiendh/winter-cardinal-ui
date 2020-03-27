/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeDarkText } from "./d-theme-dark-text";
var DThemeDarkPickerDatetimeLabel = /** @class */ (function (_super) {
    __extends(DThemeDarkPickerDatetimeLabel, _super);
    function DThemeDarkPickerDatetimeLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkPickerDatetimeLabel.prototype.getWidth = function () {
        return 30;
    };
    DThemeDarkPickerDatetimeLabel.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkPickerDatetimeLabel.prototype.getTextStyleClipping = function () {
        return false;
    };
    DThemeDarkPickerDatetimeLabel.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeDarkPickerDatetimeLabel.prototype.getColor = function () {
        return 0xDEDEDE;
    };
    DThemeDarkPickerDatetimeLabel.prototype.getFontWeight = function () {
        return "bold";
    };
    DThemeDarkPickerDatetimeLabel.prototype.getFontSize = function () {
        return Math.round(_super.prototype.getFontSize.call(this) * 1.25);
    };
    DThemeDarkPickerDatetimeLabel.prototype.newTextValue = function () {
        return new Date();
    };
    DThemeDarkPickerDatetimeLabel.prototype.getTextValue = function (state) {
        return new Date();
    };
    return DThemeDarkPickerDatetimeLabel;
}(DThemeDarkText));
export { DThemeDarkPickerDatetimeLabel };
//# sourceMappingURL=d-theme-dark-picker-datetime-label.js.map