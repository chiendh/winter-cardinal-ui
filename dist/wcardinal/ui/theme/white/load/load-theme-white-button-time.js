/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonTime } from "../d-theme-white-button-time";
import { loadThemeWhiteDialogTime } from "./load-theme-white-dialog-time";
export var loadThemeWhiteButtonTime = function () {
    DThemeWhite.set("DButtonTime", DThemeWhiteButtonTime);
    loadThemeWhiteDialogTime();
};
//# sourceMappingURL=load-theme-white-button-time.js.map