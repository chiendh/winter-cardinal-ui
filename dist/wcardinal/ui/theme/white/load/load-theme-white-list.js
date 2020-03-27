/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteList } from "../d-theme-white-list";
import { DThemeWhiteListItem } from "../d-theme-white-list-item";
import { DThemeWhiteListItemSeparator } from "../d-theme-white-list-item-separator";
export var loadThemeWhiteList = function () {
    DThemeWhite.set("DListItemSeparator", DThemeWhiteListItemSeparator);
    DThemeWhite.set("DListItem", DThemeWhiteListItem);
    DThemeWhite.set("DList", DThemeWhiteList);
};
//# sourceMappingURL=load-theme-white-list.js.map