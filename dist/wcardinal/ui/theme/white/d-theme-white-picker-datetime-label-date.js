/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeWhiteText } from "./d-theme-white-text";
var DThemeWhitePickerDatetimeLabelDate = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerDatetimeLabelDate, _super);
    function DThemeWhitePickerDatetimeLabelDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerDatetimeLabelDate.prototype.getWidth = function () {
        return 30;
    };
    DThemeWhitePickerDatetimeLabelDate.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhitePickerDatetimeLabelDate.prototype.getTextStyleClipping = function () {
        return false;
    };
    DThemeWhitePickerDatetimeLabelDate.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeWhitePickerDatetimeLabelDate.prototype.getColor = function () {
        return 0x6f6f6f;
    };
    DThemeWhitePickerDatetimeLabelDate.prototype.getFontWeight = function () {
        return "bold";
    };
    return DThemeWhitePickerDatetimeLabelDate;
}(DThemeWhiteText));
export { DThemeWhitePickerDatetimeLabelDate };
//# sourceMappingURL=d-theme-white-picker-datetime-label-date.js.map