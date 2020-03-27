/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";
var DThemeDarkTreeItem = /** @class */ (function (_super) {
    __extends(DThemeDarkTreeItem, _super);
    function DThemeDarkTreeItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR_HOVERED = 0x646464;
        return _this;
    }
    DThemeDarkTreeItem.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        if (DBaseStates.isActive(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        else {
            return null;
        }
    };
    DThemeDarkTreeItem.prototype.getBackgroundAlpha = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0.8;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return 0.2;
        }
        else {
            return 0;
        }
    };
    DThemeDarkTreeItem.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkTreeItem.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkTreeItem.prototype.getWidth = function () {
        return "100%";
    };
    DThemeDarkTreeItem.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeDarkTreeItem.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeDarkTreeItem.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeDarkTreeItem.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeDarkTreeItem.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    DThemeDarkTreeItem.prototype.getPaddingByLevel = function (level) {
        return level * 15;
    };
    return DThemeDarkTreeItem;
}(DThemeDarkLayoutHorizontal));
export { DThemeDarkTreeItem };
//# sourceMappingURL=d-theme-dark-tree-item.js.map