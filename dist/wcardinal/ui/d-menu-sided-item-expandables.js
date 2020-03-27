/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DMenuSideds } from "./d-menu-sideds";
import { DMenus } from "./d-menus";
var DMenuSidedItemExpandables = /** @class */ (function () {
    function DMenuSidedItemExpandables() {
    }
    DMenuSidedItemExpandables.addItemCreator = function (creator) {
        this.CREATORS.push(creator);
    };
    DMenuSidedItemExpandables.setItemCreatorDefault = function (creator) {
        this.CREATOR_DEFAULT = creator;
    };
    DMenuSidedItemExpandables.newItem = function (options, sticky) {
        return DMenus.newItemOf(this.CREATORS, this.CREATOR_DEFAULT, options, sticky) ||
            DMenuSideds.newItem(options, sticky);
    };
    DMenuSidedItemExpandables.newItems = function (parent, items, sticky) {
        DMenus.newItemsOf(this, parent, items, sticky);
    };
    DMenuSidedItemExpandables.CREATORS = [];
    DMenuSidedItemExpandables.CREATOR_DEFAULT = null;
    return DMenuSidedItemExpandables;
}());
export { DMenuSidedItemExpandables };
//# sourceMappingURL=d-menu-sided-item-expandables.js.map