/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonColor } from "../d-theme-white-button-color";
import { loadThemeWhiteDialogColor } from "./load-theme-white-dialog-color";
export var loadThemeWhiteButtonColor = function () {
    DThemeWhite.set("DButtonColor", DThemeWhiteButtonColor);
    loadThemeWhiteDialogColor();
};
//# sourceMappingURL=load-theme-white-button-color.js.map