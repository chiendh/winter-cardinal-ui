/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
var DThemeDark = /** @class */ (function () {
    function DThemeDark() {
        this._instances = {};
    }
    DThemeDark.prototype.get = function (type) {
        var instance = this._instances[type];
        if (instance != null) {
            return instance;
        }
        else {
            var klass = DThemeDark._classes[type];
            if (klass != null) {
                instance = this._instances[type] = new klass();
                return instance;
            }
            else {
                throw new Error("No theme for the type '" + type + "'");
            }
        }
    };
    DThemeDark.prototype.getAtlas = function () {
        return DThemeDarkAtlas;
    };
    DThemeDark.set = function (type, themeClass) {
        this._classes[type] = themeClass;
    };
    DThemeDark._classes = {};
    return DThemeDark;
}());
export { DThemeDark };
//# sourceMappingURL=d-theme-dark.js.map