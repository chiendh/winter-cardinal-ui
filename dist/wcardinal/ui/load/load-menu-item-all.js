/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { loadMenuItem } from "./load-menu-item";
import { loadMenuItemExpandable } from "./load-menu-item-expandable";
import { loadMenuSidedItem } from "./load-menu-sided-item";
import { loadMenuSidedItemExpandable } from "./load-menu-sided-item-expandable";
export var loadMenuItemAll = function () {
    loadMenuItem();
    loadMenuItemExpandable();
    loadMenuSidedItem();
    loadMenuSidedItemExpandable();
};
//# sourceMappingURL=load-menu-item-all.js.map