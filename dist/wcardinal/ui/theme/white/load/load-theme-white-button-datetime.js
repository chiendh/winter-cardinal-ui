/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonDatetime } from "../d-theme-white-button-datetime";
import { loadThemeWhiteDialogDatetime } from "./load-theme-white-dialog-datetime";
export var loadThemeWhiteButtonDatetime = function () {
    DThemeWhite.set("DButtonDatetime", DThemeWhiteButtonDatetime);
    loadThemeWhiteDialogDatetime();
};
//# sourceMappingURL=load-theme-white-button-datetime.js.map