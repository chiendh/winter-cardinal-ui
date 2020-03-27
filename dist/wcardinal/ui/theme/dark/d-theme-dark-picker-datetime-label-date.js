/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeDarkText } from "./d-theme-dark-text";
var DThemeDarkPickerDatetimeLabelDate = /** @class */ (function (_super) {
    __extends(DThemeDarkPickerDatetimeLabelDate, _super);
    function DThemeDarkPickerDatetimeLabelDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkPickerDatetimeLabelDate.prototype.getWidth = function () {
        return 30;
    };
    DThemeDarkPickerDatetimeLabelDate.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkPickerDatetimeLabelDate.prototype.getTextStyleClipping = function () {
        return false;
    };
    DThemeDarkPickerDatetimeLabelDate.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeDarkPickerDatetimeLabelDate.prototype.getColor = function () {
        return 0xDEDEDE;
    };
    DThemeDarkPickerDatetimeLabelDate.prototype.getFontWeight = function () {
        return "bold";
    };
    return DThemeDarkPickerDatetimeLabelDate;
}(DThemeDarkText));
export { DThemeDarkPickerDatetimeLabelDate };
//# sourceMappingURL=d-theme-dark-picker-datetime-label-date.js.map