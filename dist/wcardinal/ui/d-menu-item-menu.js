/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DisplayObject } from "pixi.js";
import { DMenuAlign } from "./d-menu-align";
import { DMenuItem } from "./d-menu-item";
import { DMenus } from "./d-menus";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DMenuItemMenu = /** @class */ (function (_super) {
    __extends(DMenuItemMenu, _super);
    function DMenuItemMenu(options) {
        return _super.call(this, options) || this;
    }
    DMenuItemMenu.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        UtilPointerEvent.onClick(this, function () {
            if (_this.isActionable()) {
                _this.open();
            }
        });
        this.initHover(options);
        var menu = this.toMenu(options);
        this._menu = menu;
        menu.on("select", function (value, item, closeable) {
            _this.onMenuSelect(value, item, closeable);
        });
    };
    DMenuItemMenu.prototype.initHover = function (options) {
        var _this = this;
        this.on(UtilPointerEvent.over, function () {
            if (_this.isActionable()) {
                _this.open();
            }
        });
    };
    DMenuItemMenu.prototype.toMenu = function (options) {
        var menu = options.menu;
        if (menu instanceof DisplayObject) {
            return menu;
        }
        return this.newMenu(menu);
    };
    DMenuItemMenu.prototype.newMenu = function (options) {
        return DMenus.newMenu(options);
    };
    Object.defineProperty(DMenuItemMenu.prototype, "menu", {
        get: function () {
            return this._menu;
        },
        enumerable: true,
        configurable: true
    });
    DMenuItemMenu.prototype.getType = function () {
        return "DMenuItemMenu";
    };
    DMenuItemMenu.prototype.open = function () {
        var menu = this._menu;
        if (menu.isHidden()) {
            this.onOpen(menu);
        }
    };
    DMenuItemMenu.prototype.onOpen = function (menu) {
        var context = this.getContext();
        if (context != null) {
            menu.open(this, this.getCloseable(), context);
        }
    };
    DMenuItemMenu.prototype.close = function () {
        this._menu.close();
    };
    DMenuItemMenu.prototype.toggle = function () {
        var menu = this._menu;
        if (menu.isHidden()) {
            this.onOpen(menu);
        }
        else {
            menu.close();
        }
    };
    DMenuItemMenu.prototype.onSelect = function (e) {
        this.open();
        _super.prototype.onSelect.call(this, e);
    };
    DMenuItemMenu.prototype.onMenuSelect = function (value, item, closeable) {
        var next = this.getCloseable();
        if (next != null) {
            next.emit("select", value, item, closeable);
        }
    };
    DMenuItemMenu.isCompatible = function (options) {
        return "menu" in options;
    };
    DMenuItemMenu.toSubMenuOptions = function (options, sticky) {
        var menu = options.menu;
        if (!(menu instanceof DisplayObject)) {
            if (menu.sticky == null) {
                menu.sticky = sticky;
            }
            if (menu.align == null) {
                menu.align = DMenuAlign.RIGHT;
            }
        }
        return options;
    };
    return DMenuItemMenu;
}(DMenuItem));
export { DMenuItemMenu };
//# sourceMappingURL=d-menu-item-menu.js.map