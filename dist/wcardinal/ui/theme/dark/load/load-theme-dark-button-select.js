/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonSelect } from "../d-theme-dark-button-select";
import { loadThemeDarkDialogSelect } from "./load-theme-dark-dialog-select";
export var loadThemeDarkButtonSelect = function () {
    DThemeDark.set("DButtonSelect", DThemeDarkButtonSelect);
    loadThemeDarkDialogSelect();
};
//# sourceMappingURL=load-theme-dark-button-select.js.map