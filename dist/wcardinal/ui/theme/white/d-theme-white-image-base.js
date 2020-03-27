/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DAlignWith } from "../../d-align-with";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";
var DThemeWhiteImageBase = /** @class */ (function (_super) {
    __extends(DThemeWhiteImageBase, _super);
    function DThemeWhiteImageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteImageBase.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeWhiteImageBase.prototype.getImageAlignVertical = function () {
        return DAlignVertical.MIDDLE;
    };
    DThemeWhiteImageBase.prototype.getImageAlignWith = function () {
        return DAlignWith.TEXT;
    };
    DThemeWhiteImageBase.prototype.getImageMarginHorizontal = function () {
        return 5;
    };
    DThemeWhiteImageBase.prototype.getImageMarginVertial = function () {
        return 5;
    };
    DThemeWhiteImageBase.prototype.getImageTintColor = function (state) {
        return this.getColor(state);
    };
    DThemeWhiteImageBase.prototype.getImageTintAlpha = function (state) {
        return this.getAlpha(state);
    };
    DThemeWhiteImageBase.prototype.getImageSource = function (state) {
        return null;
    };
    DThemeWhiteImageBase.prototype.getSecondaryImageAlignHorizontal = function () {
        return this.getImageAlignHorizontal();
    };
    DThemeWhiteImageBase.prototype.getSecondaryImageAlignVertical = function () {
        return this.getImageAlignVertical();
    };
    DThemeWhiteImageBase.prototype.getSecondaryImageAlignWith = function () {
        return this.getImageAlignWith();
    };
    DThemeWhiteImageBase.prototype.getSecondaryImageMarginHorizontal = function () {
        return this.getImageMarginHorizontal();
    };
    DThemeWhiteImageBase.prototype.getSecondaryImageMarginVertial = function () {
        return this.getImageMarginVertial();
    };
    DThemeWhiteImageBase.prototype.getSecondaryImageTintColor = function (state) {
        return this.getImageTintColor(state);
    };
    DThemeWhiteImageBase.prototype.getSecondaryImageTintAlpha = function (state) {
        return this.getImageTintAlpha(state);
    };
    DThemeWhiteImageBase.prototype.getTertiaryImageAlignHorizontal = function () {
        return this.getImageAlignHorizontal();
    };
    DThemeWhiteImageBase.prototype.getTertiaryImageAlignVertical = function () {
        return this.getImageAlignVertical();
    };
    DThemeWhiteImageBase.prototype.getTertiaryImageAlignWith = function () {
        return this.getImageAlignWith();
    };
    DThemeWhiteImageBase.prototype.getTertiaryImageMarginHorizontal = function () {
        return this.getImageMarginHorizontal();
    };
    DThemeWhiteImageBase.prototype.getTertiaryImageMarginVertial = function () {
        return this.getImageMarginVertial();
    };
    DThemeWhiteImageBase.prototype.getTertiaryImageTintColor = function (state) {
        return this.getImageTintColor(state);
    };
    DThemeWhiteImageBase.prototype.getTertiaryImageTintAlpha = function (state) {
        return this.getImageTintAlpha(state);
    };
    return DThemeWhiteImageBase;
}(DThemeWhiteTextBase));
export { DThemeWhiteImageBase };
//# sourceMappingURL=d-theme-white-image-base.js.map