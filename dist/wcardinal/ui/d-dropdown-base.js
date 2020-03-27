/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButtonBase } from "./d-button-base";
import { DMenu } from "./d-menu";
import { isString } from "./util/is-string";
var DDropdownBase = /** @class */ (function (_super) {
    __extends(DDropdownBase, _super);
    function DDropdownBase(options) {
        var _this = _super.call(this, options) || this;
        _this.on("active", function () {
            _this.start();
        });
        return _this;
    }
    DDropdownBase.prototype.toItemText = function (item) {
        if (item) {
            var text = item.text;
            if (isString(text)) {
                return text;
            }
            else if (text != null) {
                var computed = text(item.state);
                if (computed != null) {
                    return computed;
                }
            }
        }
        return null;
    };
    DDropdownBase.prototype.toMenu = function (theme, options) {
        var menu = options && options.menu;
        return (menu instanceof DMenu ? menu :
            new DMenu(this.toMenuOptions(theme, menu)));
    };
    DDropdownBase.prototype.toMenuOptions = function (theme, options) {
        options = options || {};
        if (options.fit == null) {
            options.fit = true;
        }
        return options;
    };
    Object.defineProperty(DDropdownBase.prototype, "menu", {
        get: function () {
            var menu = this._menu;
            if (menu == null) {
                menu = this.toMenu(this.theme, this._options);
                this._menu = menu;
            }
            return menu;
        },
        enumerable: true,
        configurable: true
    });
    DDropdownBase.prototype.getType = function () {
        return "DDropdownBase";
    };
    DDropdownBase.prototype.start = function () {
        this.menu.open(this);
    };
    DDropdownBase.prototype.close = function () {
        this.menu.close();
    };
    return DDropdownBase;
}(DButtonBase));
export { DDropdownBase };
//# sourceMappingURL=d-dropdown-base.js.map