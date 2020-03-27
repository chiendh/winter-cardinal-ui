/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DAlignWith } from "../../d-align-with";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";
var DThemeDarkImageBase = /** @class */ (function (_super) {
    __extends(DThemeDarkImageBase, _super);
    function DThemeDarkImageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkImageBase.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeDarkImageBase.prototype.getImageAlignVertical = function () {
        return DAlignVertical.MIDDLE;
    };
    DThemeDarkImageBase.prototype.getImageAlignWith = function () {
        return DAlignWith.TEXT;
    };
    DThemeDarkImageBase.prototype.getImageMarginHorizontal = function () {
        return 5;
    };
    DThemeDarkImageBase.prototype.getImageMarginVertial = function () {
        return 5;
    };
    DThemeDarkImageBase.prototype.getImageTintColor = function (state) {
        return this.getColor(state);
    };
    DThemeDarkImageBase.prototype.getImageTintAlpha = function (state) {
        return this.getAlpha(state);
    };
    DThemeDarkImageBase.prototype.getImageSource = function (state) {
        return null;
    };
    DThemeDarkImageBase.prototype.getSecondaryImageAlignHorizontal = function () {
        return this.getImageAlignHorizontal();
    };
    DThemeDarkImageBase.prototype.getSecondaryImageAlignVertical = function () {
        return this.getImageAlignVertical();
    };
    DThemeDarkImageBase.prototype.getSecondaryImageAlignWith = function () {
        return this.getImageAlignWith();
    };
    DThemeDarkImageBase.prototype.getSecondaryImageMarginHorizontal = function () {
        return this.getImageMarginHorizontal();
    };
    DThemeDarkImageBase.prototype.getSecondaryImageMarginVertial = function () {
        return this.getImageMarginVertial();
    };
    DThemeDarkImageBase.prototype.getSecondaryImageTintColor = function (state) {
        return this.getImageTintColor(state);
    };
    DThemeDarkImageBase.prototype.getSecondaryImageTintAlpha = function (state) {
        return this.getImageTintAlpha(state);
    };
    DThemeDarkImageBase.prototype.getTertiaryImageAlignHorizontal = function () {
        return this.getImageAlignHorizontal();
    };
    DThemeDarkImageBase.prototype.getTertiaryImageAlignVertical = function () {
        return this.getImageAlignVertical();
    };
    DThemeDarkImageBase.prototype.getTertiaryImageAlignWith = function () {
        return this.getImageAlignWith();
    };
    DThemeDarkImageBase.prototype.getTertiaryImageMarginHorizontal = function () {
        return this.getImageMarginHorizontal();
    };
    DThemeDarkImageBase.prototype.getTertiaryImageMarginVertial = function () {
        return this.getImageMarginVertial();
    };
    DThemeDarkImageBase.prototype.getTertiaryImageTintColor = function (state) {
        return this.getImageTintColor(state);
    };
    DThemeDarkImageBase.prototype.getTertiaryImageTintAlpha = function (state) {
        return this.getImageTintAlpha(state);
    };
    return DThemeDarkImageBase;
}(DThemeDarkTextBase));
export { DThemeDarkImageBase };
//# sourceMappingURL=d-theme-dark-image-base.js.map