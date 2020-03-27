/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DMenuItemCheck } from "../d-menu-item-check";
import { DMenuItemLink } from "../d-menu-item-link";
import { DMenuItemMenu } from "../d-menu-item-menu";
import { DMenuItemSeparator } from "../d-menu-item-separator";
import { DMenuItemSpace } from "../d-menu-item-space";
import { DMenuItemText } from "../d-menu-item-text";
import { DMenus } from "../d-menus";
export var loadMenuItem = function () {
    DMenus.addItemCreator(function (options) {
        if (DMenuItemCheck.isCompatible(options)) {
            return new DMenuItemCheck(options);
        }
        return null;
    });
    DMenus.addItemCreator(function (options) {
        if (DMenuItemLink.isCompatible(options)) {
            return new DMenuItemLink(options);
        }
        return null;
    });
    DMenus.addItemCreator(function (options, sticky) {
        if (DMenuItemMenu.isCompatible(options)) {
            return new DMenuItemMenu(DMenuItemMenu.toSubMenuOptions(options, sticky));
        }
        return null;
    });
    DMenus.addItemCreator(function (options) {
        if (DMenuItemSeparator.isCompatible(options)) {
            return new DMenuItemSeparator(options);
        }
        return null;
    });
    DMenus.addItemCreator(function (options) {
        if (DMenuItemSpace.isCompatible(options)) {
            return new DMenuItemSpace(options);
        }
        return null;
    });
    DMenus.setItemCreatorDefault(function (options) {
        return new DMenuItemText(options);
    });
};
//# sourceMappingURL=load-menu-item.js.map