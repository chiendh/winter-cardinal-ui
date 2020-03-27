/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkPickerColorGradient } from "../d-theme-dark-picker-color-gradient";
import { loadThemeDarkPickerColor } from "./load-theme-dark-picker-color";
export var loadThemeDarkPickerColorGradient = function () {
    DThemeDark.set("DPickerColorGradient", DThemeDarkPickerColorGradient);
    loadThemeDarkPickerColor();
};
//# sourceMappingURL=load-theme-dark-picker-color-gradient.js.map