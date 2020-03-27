/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogColor } from "../d-theme-white-dialog-color";
import { loadThemeWhitePickerColor } from "./load-theme-white-picker-color";
export var loadThemeWhiteDialogColor = function () {
    DThemeWhite.set("DDialogColor", DThemeWhiteDialogColor);
    loadThemeWhitePickerColor();
};
//# sourceMappingURL=load-theme-white-dialog-color.js.map