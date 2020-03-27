/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DMenuItemCheck } from "../d-menu-item-check";
import { DMenuItemExpandable } from "../d-menu-item-expandable";
import { DMenuItemExpandableItemCheck } from "../d-menu-item-expandable-item-check";
import { DMenuItemExpandableItemLink } from "../d-menu-item-expandable-item-link";
import { DMenuItemExpandableItemSeparator } from "../d-menu-item-expandable-item-separator";
import { DMenuItemExpandableItemSpace } from "../d-menu-item-expandable-item-space";
import { DMenuItemExpandableItemText } from "../d-menu-item-expandable-item-text";
import { DMenuItemExpandables } from "../d-menu-item-expandables";
import { DMenuItemLink } from "../d-menu-item-link";
import { DMenuItemSeparator } from "../d-menu-item-separator";
import { DMenuItemSpace } from "../d-menu-item-space";
import { DMenus } from "../d-menus";
export var loadMenuItemExpandable = function () {
    DMenus.addItemCreator(function (options) {
        if (DMenuItemExpandable.isCompatible(options)) {
            return new DMenuItemExpandable(options);
        }
        return null;
    });
    DMenuItemExpandables.addItemCreator(function (options) {
        if (DMenuItemCheck.isCompatible(options)) {
            return new DMenuItemExpandableItemCheck(options);
        }
        return null;
    });
    DMenuItemExpandables.addItemCreator(function (options) {
        if (DMenuItemLink.isCompatible(options)) {
            return new DMenuItemExpandableItemLink(options);
        }
        return null;
    });
    DMenuItemExpandables.addItemCreator(function (options) {
        if (DMenuItemSeparator.isCompatible(options)) {
            return new DMenuItemExpandableItemSeparator(options);
        }
        return null;
    });
    DMenuItemExpandables.addItemCreator(function (options) {
        if (DMenuItemSpace.isCompatible(options)) {
            return new DMenuItemExpandableItemSpace(options);
        }
        return null;
    });
    DMenuItemExpandables.setItemCreatorDefault(function (options) {
        return new DMenuItemExpandableItemText(options);
    });
};
//# sourceMappingURL=load-menu-item-expandable.js.map