/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkMenuItem } from "./d-theme-dark-menu-item";
DThemeDarkAtlas.add("menu_item_mark_next", 14, 20, "<g>" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"5 16 11 10 5 4\"></polyline>" +
    "</g>");
var DThemeDarkMenuItemMenu = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemMenu, _super);
    function DThemeDarkMenuItemMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemMenu.prototype.getImageSource = function (state) {
        return DThemeDarkAtlas.mappings.menu_item_mark_next;
    };
    DThemeDarkMenuItemMenu.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeDarkMenuItemMenu.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkMenuItemMenu.prototype.getImageMarginHorizontal = function () {
        return 12;
    };
    return DThemeDarkMenuItemMenu;
}(DThemeDarkMenuItem));
export { DThemeDarkMenuItemMenu };
//# sourceMappingURL=d-theme-dark-menu-item-menu.js.map