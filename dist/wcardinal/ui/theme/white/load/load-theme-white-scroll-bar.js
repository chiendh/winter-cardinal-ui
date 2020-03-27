/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteScrollBar } from "../d-theme-white-scroll-bar";
import { DThemeWhiteScrollBarThumb } from "../d-theme-white-scroll-bar-thumb";
export var loadThemeWhiteScrollBar = function () {
    DThemeWhite.set("DScrollBar", DThemeWhiteScrollBar);
    DThemeWhite.set("DScrollBarThumb", DThemeWhiteScrollBarThumb);
};
//# sourceMappingURL=load-theme-white-scroll-bar.js.map