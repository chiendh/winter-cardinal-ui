/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSelect } from "../d-theme-white-select";
import { DThemeWhiteSelectMultiple } from "../d-theme-white-select-multiple";
import { loadThemeWhiteDropdown } from "./load-theme-white-dropdown";
export var loadThemeWhiteSelect = function () {
    DThemeWhite.set("DSelectMultiple", DThemeWhiteSelectMultiple);
    DThemeWhite.set("DSelect", DThemeWhiteSelect);
    loadThemeWhiteDropdown();
};
//# sourceMappingURL=load-theme-white-select.js.map