/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkPickerDate } from "../d-theme-dark-picker-date";
import { loadThemeDarkPickerDatetime } from "./load-theme-dark-picker-datetime";
export var loadThemeDarkPickerDate = function () {
    DThemeDark.set("DPickerDate", DThemeDarkPickerDate);
    loadThemeDarkPickerDatetime();
};
//# sourceMappingURL=load-theme-dark-picker-date.js.map