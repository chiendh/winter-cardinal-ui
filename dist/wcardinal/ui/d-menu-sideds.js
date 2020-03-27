/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DMenus } from "./d-menus";
var DMenuSideds = /** @class */ (function () {
    function DMenuSideds() {
    }
    DMenuSideds.addItemCreator = function (creator) {
        this.CREATORS.push(creator);
    };
    DMenuSideds.setItemCreatorDefault = function (creator) {
        this.CREATOR_DEFAULT = creator;
    };
    DMenuSideds.newItem = function (options, sticky) {
        return DMenus.newItemOf(this.CREATORS, this.CREATOR_DEFAULT, options, sticky) ||
            DMenus.newItem(options, sticky);
    };
    DMenuSideds.newItems = function (parent, items, sticky) {
        DMenus.newItemsOf(this, parent, items, sticky);
    };
    DMenuSideds.CREATORS = [];
    DMenuSideds.CREATOR_DEFAULT = null;
    return DMenuSideds;
}());
export { DMenuSideds };
//# sourceMappingURL=d-menu-sideds.js.map