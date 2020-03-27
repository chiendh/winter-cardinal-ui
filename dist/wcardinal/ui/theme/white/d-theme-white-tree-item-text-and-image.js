/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteImage } from "./d-theme-white-image";
var DThemeWhiteTreeItemTextAndImage = /** @class */ (function (_super) {
    __extends(DThemeWhiteTreeItemTextAndImage, _super);
    function DThemeWhiteTreeItemTextAndImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTreeItemTextAndImage.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhiteTreeItemTextAndImage.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteTreeItemTextAndImage.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhiteTreeItemTextAndImage.prototype.getWidth = function () {
        return "100%";
    };
    DThemeWhiteTreeItemTextAndImage.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeWhiteTreeItemTextAndImage.prototype.getPaddingLeft = function () {
        return 0;
    };
    DThemeWhiteTreeItemTextAndImage.prototype.getPaddingRight = function () {
        return 0;
    };
    DThemeWhiteTreeItemTextAndImage.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeWhiteTreeItemTextAndImage.prototype.getImageSource = function (state) {
        return null;
    };
    return DThemeWhiteTreeItemTextAndImage;
}(DThemeWhiteImage));
export { DThemeWhiteTreeItemTextAndImage };
//# sourceMappingURL=d-theme-white-tree-item-text-and-image.js.map