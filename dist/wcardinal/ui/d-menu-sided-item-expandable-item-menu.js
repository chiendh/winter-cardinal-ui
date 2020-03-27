/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DMenuItemExpandableItemMenu } from "./d-menu-item-expandable-item-menu";
var DMenuSidedItemExpandableItemMenu = /** @class */ (function (_super) {
    __extends(DMenuSidedItemExpandableItemMenu, _super);
    function DMenuSidedItemExpandableItemMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuSidedItemExpandableItemMenu.prototype.onOpen = function (menu) {
        menu.open(this, this);
    };
    DMenuSidedItemExpandableItemMenu.prototype.getType = function () {
        return "DMenuSidedItemExpandableItemMenu";
    };
    return DMenuSidedItemExpandableItemMenu;
}(DMenuItemExpandableItemMenu));
export { DMenuSidedItemExpandableItemMenu };
//# sourceMappingURL=d-menu-sided-item-expandable-item-menu.js.map