/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DisplayObject } from "pixi.js";
var DMenus = /** @class */ (function () {
    function DMenus() {
    }
    DMenus.addItemCreator = function (creator) {
        this.CREATORS.push(creator);
    };
    DMenus.setItemCreatorDefault = function (creator) {
        this.CREATOR_DEFAULT = creator;
    };
    DMenus.setMenuCreator = function (creator) {
        this.MENU_CREATOR = creator;
    };
    DMenus.newItemOf = function (creators, creatorDefault, options, sticky) {
        for (var i = 0, imax = creators.length; i < imax; ++i) {
            var created = creators[i](options, sticky);
            if (created != null) {
                return created;
            }
        }
        if (creatorDefault) {
            return creatorDefault(options, sticky);
        }
        return null;
    };
    DMenus.newItem = function (options, sticky) {
        return this.newItemOf(this.CREATORS, this.CREATOR_DEFAULT, options, sticky);
    };
    DMenus.newItemsOf = function (creator, parent, items, sticky) {
        for (var i = 0, imax = items.length; i < imax; ++i) {
            var item = items[i];
            if (item instanceof DisplayObject) {
                parent.addChild(item);
            }
            else if (item != null) {
                var created = creator.newItem(item, sticky);
                if (created != null) {
                    parent.addChild(created);
                }
                else {
                    throw new Error("No matching menu item creator found: " + JSON.stringify(item));
                }
            }
        }
    };
    DMenus.newItems = function (parent, items, sticky) {
        this.newItemsOf(this, parent, items, sticky);
    };
    DMenus.newMenu = function (options) {
        if (this.MENU_CREATOR != null) {
            return this.MENU_CREATOR(options);
        }
        else {
            throw new Error("Missing DMenu creator.");
        }
    };
    DMenus.CREATORS = [];
    DMenus.CREATOR_DEFAULT = null;
    return DMenus;
}());
export { DMenus };
//# sourceMappingURL=d-menus.js.map