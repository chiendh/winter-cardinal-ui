/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButton } from "./d-button";
import { DMenu } from "./d-menu";
var DMenuBarItem = /** @class */ (function (_super) {
    __extends(DMenuBarItem, _super);
    function DMenuBarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuBarItem.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._menu = this.toMenu(this.theme, options);
        this._menu.on("select", function (value, item, menu) {
            _this.onSelect(value, item, menu);
        });
    };
    DMenuBarItem.prototype.toMenu = function (theme, options) {
        var menu = options && options.menu;
        if (menu instanceof DMenu) {
            return menu;
        }
        else {
            return new DMenu(this.toMenuOptions(theme, menu));
        }
    };
    DMenuBarItem.prototype.newMenu = function (theme, options) {
        return new DMenu(this.toMenuOptions(theme, options));
    };
    DMenuBarItem.prototype.toMenuOptions = function (theme, options) {
        options = options || {};
        if (options.fit == null) {
            options.fit = false;
        }
        return options;
    };
    DMenuBarItem.prototype.close = function () {
        this._menu.close();
    };
    Object.defineProperty(DMenuBarItem.prototype, "menu", {
        get: function () {
            return this._menu;
        },
        enumerable: true,
        configurable: true
    });
    DMenuBarItem.prototype.onSelect = function (value, item, menu) {
        var parent = this.parent;
        if (parent != null) {
            parent.emit("select", value, item, menu);
        }
    };
    DMenuBarItem.prototype.getType = function () {
        return "DMenuBarItem";
    };
    return DMenuBarItem;
}(DButton));
export { DMenuBarItem };
//# sourceMappingURL=d-menu-bar-item.js.map