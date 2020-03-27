/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteMenuItemText } from "./d-theme-white-menu-item-text";
DThemeWhiteAtlas.add("menu_item_mark_check_active", 14, 14, "<g>" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"1 6.5 5 11 13 2.5\"></polyline>" +
    "</g>");
DThemeWhiteAtlas.add("menu_item_mark_check_inactive", 14, 14, "<g></g>");
var DThemeWhiteMenuItemCheck = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemCheck, _super);
    function DThemeWhiteMenuItemCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemCheck.prototype.getBackgroundColor = function (state) {
        return _super.prototype.getBackgroundColor.call(this, state & ~DBaseState.ACTIVE);
    };
    DThemeWhiteMenuItemCheck.prototype.getColor = function (state) {
        return _super.prototype.getColor.call(this, state & ~DBaseState.ACTIVE);
    };
    DThemeWhiteMenuItemCheck.prototype.getImageSource = function (state) {
        if (DBaseStates.isActive(state)) {
            return DThemeWhiteAtlas.mappings.menu_item_mark_check_active;
        }
        else {
            return DThemeWhiteAtlas.mappings.menu_item_mark_check_inactive;
        }
    };
    DThemeWhiteMenuItemCheck.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeWhiteMenuItemCheck.prototype.getImageMarginHorizontal = function () {
        return 7;
    };
    return DThemeWhiteMenuItemCheck;
}(DThemeWhiteMenuItemText));
export { DThemeWhiteMenuItemCheck };
//# sourceMappingURL=d-theme-white-menu-item-check.js.map