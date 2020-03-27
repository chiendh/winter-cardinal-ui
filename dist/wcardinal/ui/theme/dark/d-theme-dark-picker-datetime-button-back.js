/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
DThemeDarkAtlas.add("picker_date_back", 24, 24, "<g>" +
    "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\" fill=\"#fff\" />" +
    "</g>");
var DThemeDarkPickerDatetimeButtonBack = /** @class */ (function (_super) {
    __extends(DThemeDarkPickerDatetimeButtonBack, _super);
    function DThemeDarkPickerDatetimeButtonBack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkPickerDatetimeButtonBack.prototype.getWidth = function () {
        return "auto";
    };
    DThemeDarkPickerDatetimeButtonBack.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeDarkPickerDatetimeButtonBack.prototype.getImageMarginHorizontal = function () {
        return 0;
    };
    DThemeDarkPickerDatetimeButtonBack.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeDarkPickerDatetimeButtonBack.prototype.getImageSource = function (state) {
        return DThemeDarkAtlas.mappings.picker_date_back;
    };
    DThemeDarkPickerDatetimeButtonBack.prototype.getColor = function () {
        return 0xDEDEDE;
    };
    return DThemeDarkPickerDatetimeButtonBack;
}(DThemeDarkButtonAmbient));
export { DThemeDarkPickerDatetimeButtonBack };
//# sourceMappingURL=d-theme-dark-picker-datetime-button-back.js.map