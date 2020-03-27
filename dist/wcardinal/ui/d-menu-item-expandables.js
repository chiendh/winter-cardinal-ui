/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DMenus } from "./d-menus";
var DMenuItemExpandables = /** @class */ (function () {
    function DMenuItemExpandables() {
    }
    DMenuItemExpandables.addItemCreator = function (creator) {
        this.CREATORS.push(creator);
    };
    DMenuItemExpandables.setItemCreatorDefault = function (creator) {
        this.CREATOR_DEFAULT = creator;
    };
    DMenuItemExpandables.newItem = function (options, sticky) {
        return DMenus.newItemOf(this.CREATORS, this.CREATOR_DEFAULT, options, sticky) ||
            DMenus.newItem(options, sticky);
    };
    DMenuItemExpandables.newItems = function (parent, items, sticky) {
        DMenus.newItemsOf(this, parent, items, sticky);
    };
    DMenuItemExpandables.CREATORS = [];
    DMenuItemExpandables.CREATOR_DEFAULT = null;
    return DMenuItemExpandables;
}());
export { DMenuItemExpandables };
//# sourceMappingURL=d-menu-item-expandables.js.map