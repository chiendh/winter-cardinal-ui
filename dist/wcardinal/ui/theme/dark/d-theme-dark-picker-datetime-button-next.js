/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
DThemeDarkAtlas.add("picker_date_next", 24, 24, "<g>" +
    "<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#fff\" />" +
    "</g>");
var DThemeDarkPickerDatetimeButtonNext = /** @class */ (function (_super) {
    __extends(DThemeDarkPickerDatetimeButtonNext, _super);
    function DThemeDarkPickerDatetimeButtonNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkPickerDatetimeButtonNext.prototype.getWidth = function () {
        return "auto";
    };
    DThemeDarkPickerDatetimeButtonNext.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeDarkPickerDatetimeButtonNext.prototype.getImageMarginHorizontal = function () {
        return 0;
    };
    DThemeDarkPickerDatetimeButtonNext.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeDarkPickerDatetimeButtonNext.prototype.getImageSource = function (state) {
        return DThemeDarkAtlas.mappings.picker_date_next;
    };
    DThemeDarkPickerDatetimeButtonNext.prototype.getColor = function () {
        return 0xDEDEDE;
    };
    return DThemeDarkPickerDatetimeButtonNext;
}(DThemeDarkButtonAmbient));
export { DThemeDarkPickerDatetimeButtonNext };
//# sourceMappingURL=d-theme-dark-picker-datetime-button-next.js.map