/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import * as dark from "./wcardinal/ui/theme/dark";
dark.loadThemeDarkAll();
var global = window;
global.wcardinal = global.wcardinal || {};
var dest = global.wcardinal.ui = global.wcardinal.ui || {};
var src = dark;
for (var name_1 in src) {
    dest[name_1] = src[name_1];
}
//# sourceMappingURL=wcardinal-ui-theme-dark.browser.js.map