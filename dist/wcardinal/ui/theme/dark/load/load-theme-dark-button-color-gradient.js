/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonColorGradient } from "../d-theme-dark-button-color-gradient";
import { loadThemeDarkDialogColorGradient } from "./load-theme-dark-dialog-color-gradient";
export var loadThemeDarkButtonColorGradient = function () {
    DThemeDark.set("DButtonColorGradient", DThemeDarkButtonColorGradient);
    loadThemeDarkDialogColorGradient();
};
//# sourceMappingURL=load-theme-dark-button-color-gradient.js.map