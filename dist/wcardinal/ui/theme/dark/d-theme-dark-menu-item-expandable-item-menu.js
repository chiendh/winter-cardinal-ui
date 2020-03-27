/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkMenuItemMenu } from "./d-theme-dark-menu-item-menu";
var DThemeDarkMenuItemExpandableItemMenu = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemExpandableItemMenu, _super);
    function DThemeDarkMenuItemExpandableItemMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemExpandableItemMenu.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeDarkMenuItemExpandableItemMenu;
}(DThemeDarkMenuItemMenu));
export { DThemeDarkMenuItemExpandableItemMenu };
//# sourceMappingURL=d-theme-dark-menu-item-expandable-item-menu.js.map