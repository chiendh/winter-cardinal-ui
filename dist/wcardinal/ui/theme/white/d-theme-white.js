/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
var DThemeWhite = /** @class */ (function () {
    function DThemeWhite() {
        this._instances = {};
    }
    DThemeWhite.prototype.get = function (type) {
        var instance = this._instances[type];
        if (instance != null) {
            return instance;
        }
        else {
            var klass = DThemeWhite._classes[type];
            if (klass != null) {
                instance = this._instances[type] = new klass();
                return instance;
            }
            else {
                throw new Error("No theme for the type '" + type + "'");
            }
        }
    };
    DThemeWhite.prototype.getAtlas = function () {
        return DThemeWhiteAtlas;
    };
    DThemeWhite.set = function (type, themeClass) {
        this._classes[type] = themeClass;
    };
    DThemeWhite._classes = {};
    return DThemeWhite;
}());
export { DThemeWhite };
//# sourceMappingURL=d-theme-white.js.map