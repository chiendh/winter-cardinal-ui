/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DThemes = /** @class */ (function () {
    function DThemes() {
    }
    DThemes.setDefaultThemeClass = function (theme) {
        this.DEFAULT_THEME_CLASS = theme;
    };
    DThemes.getDefaultThemeClass = function () {
        return this.DEFAULT_THEME_CLASS;
    };
    DThemes.getInstance = function () {
        if (this.INSTANCE == null) {
            var defaultThemeClass = this.getDefaultThemeClass();
            if (defaultThemeClass == null) {
                throw new Error("No default theme class found");
            }
            this.INSTANCE = new defaultThemeClass();
        }
        return this.INSTANCE;
    };
    DThemes.setInstance = function (instance) {
        var result = this.INSTANCE;
        this.INSTANCE = instance;
        return result;
    };
    DThemes.DEFAULT_THEME_CLASS = null;
    DThemes.INSTANCE = null;
    return DThemes;
}());
export { DThemes };
//# sourceMappingURL=d-themes.js.map