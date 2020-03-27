/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DTreeItemState } from "../../d-tree-item-state";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkFont } from "./d-theme-dark-font";
import { DThemeDarkImage } from "./d-theme-dark-image";
DThemeDarkAtlas.add("menu_item_expandable_header_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
    "</g>");
DThemeDarkAtlas.add("menu_item_expandable_header_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
    "</g>");
var DThemeDarkTreeItemToggleIcon = /** @class */ (function (_super) {
    __extends(DThemeDarkTreeItemToggleIcon, _super);
    function DThemeDarkTreeItemToggleIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTreeItemToggleIcon.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeDarkTreeItemToggleIcon.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkTreeItemToggleIcon.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkTreeItemToggleIcon.prototype.getWidth = function () {
        return 14;
    };
    DThemeDarkTreeItemToggleIcon.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeDarkTreeItemToggleIcon.prototype.getPaddingLeft = function () {
        return 0;
    };
    DThemeDarkTreeItemToggleIcon.prototype.getPaddingRight = function () {
        return 0;
    };
    DThemeDarkTreeItemToggleIcon.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeDarkTreeItemToggleIcon.prototype.getImageTintColor = function (state) {
        if ((state & DTreeItemState.SELECTED) && !DBaseStates.isDisabled(state)) {
            return 0x000000;
        }
        return DThemeDarkFont.getColor(state);
    };
    DThemeDarkTreeItemToggleIcon.prototype.getImageSource = function (state) {
        if (state & DTreeItemState.EXPANDED) {
            return DThemeDarkAtlas.mappings.menu_item_expandable_header_opened;
        }
        else if (state & DTreeItemState.COLLAPSED) {
            return DThemeDarkAtlas.mappings.menu_item_expandable_header_closed;
        }
        else {
            return null;
        }
    };
    return DThemeDarkTreeItemToggleIcon;
}(DThemeDarkImage));
export { DThemeDarkTreeItemToggleIcon };
//# sourceMappingURL=d-theme-dark-tree-item-toggle-icon.js.map