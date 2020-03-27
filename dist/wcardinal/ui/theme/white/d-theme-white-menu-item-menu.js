/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteMenuItem } from "./d-theme-white-menu-item";
DThemeWhiteAtlas.add("menu_item_mark_next", 14, 20, "<g>" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"5 16 11 10 5 4\"></polyline>" +
    "</g>");
var DThemeWhiteMenuItemMenu = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemMenu, _super);
    function DThemeWhiteMenuItemMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemMenu.prototype.getImageSource = function (state) {
        return DThemeWhiteAtlas.mappings.menu_item_mark_next;
    };
    DThemeWhiteMenuItemMenu.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeWhiteMenuItemMenu.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeWhiteMenuItemMenu.prototype.getImageMarginHorizontal = function () {
        return 12;
    };
    return DThemeWhiteMenuItemMenu;
}(DThemeWhiteMenuItem));
export { DThemeWhiteMenuItemMenu };
//# sourceMappingURL=d-theme-white-menu-item-menu.js.map