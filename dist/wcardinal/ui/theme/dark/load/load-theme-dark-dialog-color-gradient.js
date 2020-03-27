/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogColorGradient } from "../d-theme-dark-dialog-color-gradient";
import { loadThemeDarkPickerColorGradient } from "./load-theme-dark-picker-color-gradient";
export var loadThemeDarkDialogColorGradient = function () {
    DThemeDark.set("DDialogColorGradient", DThemeDarkDialogColorGradient);
    loadThemeDarkPickerColorGradient();
};
//# sourceMappingURL=load-theme-dark-dialog-color-gradient.js.map