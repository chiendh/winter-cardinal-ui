/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";
var DThemeDarkMenuItemExpandable = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemExpandable, _super);
    function DThemeDarkMenuItemExpandable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemExpandable.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0x0F0700;
        }
        return null;
    };
    DThemeDarkMenuItemExpandable.prototype.getBackgroundAlpha = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0.1;
        }
        return 0;
    };
    DThemeDarkMenuItemExpandable.prototype.getMargin = function () {
        return 0;
    };
    DThemeDarkMenuItemExpandable.prototype.getWidth = function () {
        return "padding";
    };
    DThemeDarkMenuItemExpandable.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeDarkMenuItemExpandable;
}(DThemeDarkLayoutVertical));
export { DThemeDarkMenuItemExpandable };
//# sourceMappingURL=d-theme-dark-menu-item-expandable.js.map