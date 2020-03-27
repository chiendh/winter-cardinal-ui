/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DTreeItemState } from "../../d-tree-item-state";
import { DThemeDarkFont } from "./d-theme-dark-font";
import { DThemeDarkImage } from "./d-theme-dark-image";
var DThemeDarkTreeItemTextAndImage = /** @class */ (function (_super) {
    __extends(DThemeDarkTreeItemTextAndImage, _super);
    function DThemeDarkTreeItemTextAndImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTreeItemTextAndImage.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeDarkTreeItemTextAndImage.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkTreeItemTextAndImage.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkTreeItemTextAndImage.prototype.getWidth = function () {
        return "100%";
    };
    DThemeDarkTreeItemTextAndImage.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeDarkTreeItemTextAndImage.prototype.getPaddingLeft = function () {
        return 0;
    };
    DThemeDarkTreeItemTextAndImage.prototype.getPaddingRight = function () {
        return 0;
    };
    DThemeDarkTreeItemTextAndImage.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeDarkTreeItemTextAndImage.prototype.getImageSource = function (state) {
        return null;
    };
    DThemeDarkTreeItemTextAndImage.prototype.getColor = function (state) {
        if ((state & DTreeItemState.SELECTED) && !DBaseStates.isDisabled(state)) {
            return 0x000000;
        }
        return DThemeDarkFont.getColor(state);
    };
    return DThemeDarkTreeItemTextAndImage;
}(DThemeDarkImage));
export { DThemeDarkTreeItemTextAndImage };
//# sourceMappingURL=d-theme-dark-tree-item-text-and-image.js.map