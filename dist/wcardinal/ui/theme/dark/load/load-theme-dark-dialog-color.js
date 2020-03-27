/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogColor } from "../d-theme-dark-dialog-color";
import { loadThemeDarkPickerColor } from "./load-theme-dark-picker-color";
export var loadThemeDarkDialogColor = function () {
    DThemeDark.set("DDialogColor", DThemeDarkDialogColor);
    loadThemeDarkPickerColor();
};
//# sourceMappingURL=load-theme-dark-dialog-color.js.map