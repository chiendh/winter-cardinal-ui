/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkSelect } from "../d-theme-dark-select";
import { DThemeDarkSelectMultiple } from "../d-theme-dark-select-multiple";
import { loadThemeDarkDropdown } from "./load-theme-dark-dropdown";
export var loadThemeDarkSelect = function () {
    DThemeDark.set("DSelectMultiple", DThemeDarkSelectMultiple);
    DThemeDark.set("DSelect", DThemeDarkSelect);
    loadThemeDarkDropdown();
};
//# sourceMappingURL=load-theme-dark-select.js.map