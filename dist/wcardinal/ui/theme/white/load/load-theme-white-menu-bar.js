/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteMenuBar } from "../d-theme-white-menu-bar";
import { DThemeWhiteMenuBarItem } from "../d-theme-white-menu-bar-item";
import { loadThemeWhiteMenu } from "./load-theme-white-menu";
export var loadThemeWhiteMenuBar = function () {
    DThemeWhite.set("DMenuBarItem", DThemeWhiteMenuBarItem);
    DThemeWhite.set("DMenuBar", DThemeWhiteMenuBar);
    loadThemeWhiteMenu();
};
//# sourceMappingURL=load-theme-white-menu-bar.js.map