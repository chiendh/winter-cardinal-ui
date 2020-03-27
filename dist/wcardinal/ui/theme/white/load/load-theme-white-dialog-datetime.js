/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogDatetime } from "../d-theme-white-dialog-datetime";
import { loadThemeWhitePickerDatetime } from "./load-theme-white-picker-datetime";
export var loadThemeWhiteDialogDatetime = function () {
    DThemeWhite.set("DDialogDatetime", DThemeWhiteDialogDatetime);
    loadThemeWhitePickerDatetime();
};
//# sourceMappingURL=load-theme-white-dialog-datetime.js.map