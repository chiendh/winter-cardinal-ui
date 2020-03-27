/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";
var DThemeWhiteTreeItem = /** @class */ (function (_super) {
    __extends(DThemeWhiteTreeItem, _super);
    function DThemeWhiteTreeItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTreeItem.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        else if (DBaseStates.isActive(state)) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        else if (DBaseStates.isHovered(state)) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        }
        else {
            return null;
        }
    };
    DThemeWhiteTreeItem.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteConstants.HIGHLIGHT_ALPHA;
    };
    DThemeWhiteTreeItem.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteTreeItem.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhiteTreeItem.prototype.getWidth = function () {
        return "100%";
    };
    DThemeWhiteTreeItem.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeWhiteTreeItem.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeWhiteTreeItem.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    DThemeWhiteTreeItem.prototype.getPaddingByLevel = function (level) {
        return level * 15;
    };
    return DThemeWhiteTreeItem;
}(DThemeWhiteLayoutHorizontal));
export { DThemeWhiteTreeItem };
//# sourceMappingURL=d-theme-white-tree-item.js.map