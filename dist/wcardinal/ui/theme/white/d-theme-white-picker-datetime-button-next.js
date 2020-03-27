/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
DThemeWhiteAtlas.add("picker_date_next", 24, 24, "<g>" +
    "<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#fff\" />" +
    "</g>");
var DThemeWhitePickerDatetimeButtonNext = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerDatetimeButtonNext, _super);
    function DThemeWhitePickerDatetimeButtonNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerDatetimeButtonNext.prototype.getWidth = function () {
        return "auto";
    };
    DThemeWhitePickerDatetimeButtonNext.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeWhitePickerDatetimeButtonNext.prototype.getImageMarginHorizontal = function () {
        return 0;
    };
    DThemeWhitePickerDatetimeButtonNext.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeWhitePickerDatetimeButtonNext.prototype.getImageSource = function (state) {
        return DThemeWhiteAtlas.mappings.picker_date_next;
    };
    DThemeWhitePickerDatetimeButtonNext.prototype.getColor = function () {
        return 0x6f6f6f;
    };
    return DThemeWhitePickerDatetimeButtonNext;
}(DThemeWhiteButtonAmbient));
export { DThemeWhitePickerDatetimeButtonNext };
//# sourceMappingURL=d-theme-white-picker-datetime-button-next.js.map