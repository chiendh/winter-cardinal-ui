/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonColorGradient } from "../d-theme-white-button-color-gradient";
import { loadThemeWhiteDialogColorGradient } from "./load-theme-white-dialog-color-gradient";
export var loadThemeWhiteButtonColorGradient = function () {
    DThemeWhite.set("DButtonColorGradient", DThemeWhiteButtonColorGradient);
    loadThemeWhiteDialogColorGradient();
};
//# sourceMappingURL=load-theme-white-button-color-gradient.js.map