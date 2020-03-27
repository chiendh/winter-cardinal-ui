/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonDate } from "../d-theme-dark-button-date";
import { loadThemeDarkDialogDate } from "./load-theme-dark-dialog-date";
export var loadThemeDarkButtonDate = function () {
    DThemeDark.set("DButtonDate", DThemeDarkButtonDate);
    loadThemeDarkDialogDate();
};
//# sourceMappingURL=load-theme-dark-button-date.js.map