/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import * as white from "./wcardinal/ui/theme/white";
white.loadThemeWhiteAll();
var global = window;
global.wcardinal = global.wcardinal || {};
var dest = global.wcardinal.ui = global.wcardinal.ui || {};
var src = white;
for (var name_1 in src) {
    dest[name_1] = src[name_1];
}
//# sourceMappingURL=wcardinal-ui-theme-white.browser.js.map