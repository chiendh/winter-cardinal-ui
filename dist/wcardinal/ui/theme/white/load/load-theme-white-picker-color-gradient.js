/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhitePickerColorGradient } from "../d-theme-white-picker-color-gradient";
import { loadThemeWhitePickerColor } from "./load-theme-white-picker-color";
export var loadThemeWhitePickerColorGradient = function () {
    DThemeWhite.set("DPickerColorGradient", DThemeWhitePickerColorGradient);
    loadThemeWhitePickerColor();
};
//# sourceMappingURL=load-theme-white-picker-color-gradient.js.map