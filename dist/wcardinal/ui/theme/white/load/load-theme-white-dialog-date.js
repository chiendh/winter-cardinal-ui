/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogDate } from "../d-theme-white-dialog-date";
import { loadThemeWhitePickerDate } from "./load-theme-white-picker-date";
export var loadThemeWhiteDialogDate = function () {
    DThemeWhite.set("DDialogDate", DThemeWhiteDialogDate);
    loadThemeWhitePickerDate();
};
//# sourceMappingURL=load-theme-white-dialog-date.js.map