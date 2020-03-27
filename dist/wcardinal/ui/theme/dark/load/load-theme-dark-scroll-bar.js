/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkScrollBar } from "../d-theme-dark-scroll-bar";
import { DThemeDarkScrollBarThumb } from "../d-theme-dark-scroll-bar-thumb";
export var loadThemeDarkScrollBar = function () {
    DThemeDark.set("DScrollBar", DThemeDarkScrollBar);
    DThemeDark.set("DScrollBarThumb", DThemeDarkScrollBarThumb);
};
//# sourceMappingURL=load-theme-dark-scroll-bar.js.map