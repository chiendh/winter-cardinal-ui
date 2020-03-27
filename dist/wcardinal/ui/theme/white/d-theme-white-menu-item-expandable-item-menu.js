/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteMenuItemMenu } from "./d-theme-white-menu-item-menu";
var DThemeWhiteMenuItemExpandableItemMenu = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemExpandableItemMenu, _super);
    function DThemeWhiteMenuItemExpandableItemMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemExpandableItemMenu.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeWhiteMenuItemExpandableItemMenu;
}(DThemeWhiteMenuItemMenu));
export { DThemeWhiteMenuItemExpandableItemMenu };
//# sourceMappingURL=d-theme-white-menu-item-expandable-item-menu.js.map