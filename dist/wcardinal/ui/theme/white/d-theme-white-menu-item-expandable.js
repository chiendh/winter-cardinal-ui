/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
var DThemeWhiteMenuItemExpandable = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemExpandable, _super);
    function DThemeWhiteMenuItemExpandable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemExpandable.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0xf0f8ff;
        }
        return null;
    };
    DThemeWhiteMenuItemExpandable.prototype.getBackgroundAlpha = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0.1;
        }
        return 0;
    };
    DThemeWhiteMenuItemExpandable.prototype.getMargin = function () {
        return 0;
    };
    DThemeWhiteMenuItemExpandable.prototype.getWidth = function () {
        return "padding";
    };
    DThemeWhiteMenuItemExpandable.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeWhiteMenuItemExpandable;
}(DThemeWhiteLayoutVertical));
export { DThemeWhiteMenuItemExpandable };
//# sourceMappingURL=d-theme-white-menu-item-expandable.js.map