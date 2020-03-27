/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
DThemeWhiteAtlas.add("picker_date_back", 24, 24, "<g>" +
    "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\" fill=\"#fff\" />" +
    "</g>");
var DThemeWhitePickerDatetimeButtonBack = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerDatetimeButtonBack, _super);
    function DThemeWhitePickerDatetimeButtonBack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerDatetimeButtonBack.prototype.getWidth = function () {
        return "auto";
    };
    DThemeWhitePickerDatetimeButtonBack.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeWhitePickerDatetimeButtonBack.prototype.getImageMarginHorizontal = function () {
        return 0;
    };
    DThemeWhitePickerDatetimeButtonBack.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeWhitePickerDatetimeButtonBack.prototype.getImageSource = function (state) {
        return DThemeWhiteAtlas.mappings.picker_date_back;
    };
    DThemeWhitePickerDatetimeButtonBack.prototype.getColor = function () {
        return 0x6f6f6f;
    };
    return DThemeWhitePickerDatetimeButtonBack;
}(DThemeWhiteButtonAmbient));
export { DThemeWhitePickerDatetimeButtonBack };
//# sourceMappingURL=d-theme-white-picker-datetime-button-back.js.map