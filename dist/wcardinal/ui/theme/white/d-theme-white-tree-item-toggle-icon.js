/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCornerMask } from "../../d-corner-mask";
import { DTreeItemState } from "../../d-tree-item-state";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteImage } from "./d-theme-white-image";
DThemeWhiteAtlas.add("menu_item_expandable_header_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
    "</g>");
DThemeWhiteAtlas.add("menu_item_expandable_header_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
    "</g>");
var DThemeWhiteTreeItemToggleIcon = /** @class */ (function (_super) {
    __extends(DThemeWhiteTreeItemToggleIcon, _super);
    function DThemeWhiteTreeItemToggleIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTreeItemToggleIcon.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhiteTreeItemToggleIcon.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteTreeItemToggleIcon.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhiteTreeItemToggleIcon.prototype.getWidth = function () {
        return 14;
    };
    DThemeWhiteTreeItemToggleIcon.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeWhiteTreeItemToggleIcon.prototype.getPaddingLeft = function () {
        return 0;
    };
    DThemeWhiteTreeItemToggleIcon.prototype.getPaddingRight = function () {
        return 0;
    };
    DThemeWhiteTreeItemToggleIcon.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeWhiteTreeItemToggleIcon.prototype.getImageSource = function (state) {
        if (state & DTreeItemState.EXPANDED) {
            return DThemeWhiteAtlas.mappings.menu_item_expandable_header_opened;
        }
        else if (state & DTreeItemState.COLLAPSED) {
            return DThemeWhiteAtlas.mappings.menu_item_expandable_header_closed;
        }
        else {
            return null;
        }
    };
    return DThemeWhiteTreeItemToggleIcon;
}(DThemeWhiteImage));
export { DThemeWhiteTreeItemToggleIcon };
//# sourceMappingURL=d-theme-white-tree-item-toggle-icon.js.map