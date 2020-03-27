/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkMenuItemText } from "./d-theme-dark-menu-item-text";
DThemeDarkAtlas.add("menu_item_mark_check_active", 14, 14, "<g>" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"1 6.5 5 11 13 2.5\"></polyline>" +
    "</g>");
DThemeDarkAtlas.add("menu_item_mark_check_inactive", 14, 14, "<g></g>");
var DThemeDarkMenuItemCheck = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemCheck, _super);
    function DThemeDarkMenuItemCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemCheck.prototype.getBackgroundColor = function (state) {
        return _super.prototype.getBackgroundColor.call(this, state & ~DBaseState.ACTIVE);
    };
    DThemeDarkMenuItemCheck.prototype.getColor = function (state) {
        return _super.prototype.getColor.call(this, state & ~DBaseState.ACTIVE);
    };
    DThemeDarkMenuItemCheck.prototype.getImageSource = function (state) {
        if (DBaseStates.isActive(state)) {
            return DThemeDarkAtlas.mappings.menu_item_mark_check_active;
        }
        return DThemeDarkAtlas.mappings.menu_item_mark_check_inactive;
    };
    DThemeDarkMenuItemCheck.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeDarkMenuItemCheck.prototype.getImageMarginHorizontal = function () {
        return 7;
    };
    return DThemeDarkMenuItemCheck;
}(DThemeDarkMenuItemText));
export { DThemeDarkMenuItemCheck };
//# sourceMappingURL=d-theme-dark-menu-item-check.js.map