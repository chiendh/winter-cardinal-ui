/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonTime } from "../d-theme-dark-button-time";
import { loadThemeDarkDialogTime } from "./load-theme-dark-dialog-time";
export var loadThemeDarkButtonTime = function () {
    DThemeDark.set("DButtonTime", DThemeDarkButtonTime);
    loadThemeDarkDialogTime();
};
//# sourceMappingURL=load-theme-dark-button-time.js.map