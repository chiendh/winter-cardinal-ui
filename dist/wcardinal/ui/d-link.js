/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DisplayObject, interaction } from "pixi.js";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DMenus } from "./d-menus";
import { isString } from "./util/is-string";
import { UtilClipboard } from "./util/util-clipboard";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DLink = /** @class */ (function () {
    function DLink(theme, options) {
        if (options) {
            this._url = options.url;
            this._target = options.target;
            this._checker = options.checker;
            this._menuOptions = options.menu;
        }
        this._theme = theme;
    }
    Object.defineProperty(DLink.prototype, "url", {
        get: function () {
            var url = this._url;
            if (isString(url)) {
                return url;
            }
            else if (url == null) {
                return null;
            }
            else {
                return url();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DLink.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DLink.prototype, "menu", {
        get: function () {
            var _this = this;
            var menu = this._menu;
            if (menu == null) {
                var options = this._menuOptions || this._theme.getLinkMenuOptions();
                menu = this.toMenu(options);
                this._menu = menu;
                menu.on("select", function (value, item, closeable) {
                    _this.onMenuSelect(value, item, closeable);
                });
            }
            return menu;
        },
        enumerable: true,
        configurable: true
    });
    DLink.prototype.toMenu = function (options) {
        if (options instanceof DisplayObject) {
            return options;
        }
        return this.newMenu(options);
    };
    DLink.prototype.newMenu = function (options) {
        return DMenus.newMenu(options);
    };
    DLink.prototype.onMenuSelect = function (value, item, closeable) {
        var _this = this;
        switch (value) {
            case DLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW:
                this.open(true);
                break;
            case DLinkMenuItemId.COPY_LINK_ADDRESS:
                var url = this.url;
                if (url != null) {
                    if (isString(url)) {
                        this.copy(url);
                    }
                    else {
                        url.then(function (resolved) {
                            if (resolved != null) {
                                _this.copy(resolved);
                            }
                        });
                    }
                }
                break;
        }
    };
    DLink.prototype.copy = function (url) {
        var a = document.createElement("a");
        a.href = url;
        UtilClipboard.copy(a.href);
    };
    DLink.prototype.apply = function (target, onSelect) {
        var _this = this;
        var onClick = function (e) {
            if (target.isActionable()) {
                onSelect(e);
            }
        };
        var onLongClick = function (e) {
            if (target.isActionable()) {
                var menu = _this.menu;
                if (menu.isHidden()) {
                    menu.open(target);
                }
            }
        };
        if (this._target === DLinkTarget.NEW_WINDOW) {
            UtilPointerEvent.onClick(target, onClick);
        }
        else {
            UtilPointerEvent.onLongClick(target, onClick, onLongClick);
        }
    };
    DLink.prototype.open = function (inNewWindow) {
        var _this = this;
        var url = this.url;
        if (url != null) {
            if (isString(url)) {
                this.check(url, inNewWindow);
            }
            else {
                url.then(function (resolved) {
                    if (resolved) {
                        _this.check(resolved, inNewWindow);
                    }
                });
            }
        }
    };
    DLink.prototype.check = function (url, inNewWindow) {
        var _this = this;
        var checker = this._checker;
        if (checker) {
            var checked = checker();
            if (checked === true) {
                this.exec(url, inNewWindow);
            }
            else if (checked === false) {
                // DO NOTHING
            }
            else {
                checked.then(function (resolved) {
                    if (resolved) {
                        _this.exec(url, inNewWindow);
                    }
                });
            }
        }
        else {
            this.exec(url, inNewWindow);
        }
    };
    DLink.prototype.exec = function (url, inNewWindow) {
        if (inNewWindow) {
            var a_1 = document.createElement("a");
            a_1.href = url;
            a_1.target = "_blank";
            a_1.style.display = "none";
            a_1.rel = "noopener noreferrer";
            document.body.appendChild(a_1);
            a_1.click();
            setTimeout(function () {
                document.body.removeChild(a_1);
            }, 100);
        }
        else {
            window.location.href = url;
        }
    };
    DLink.prototype.inNewWindow = function (e) {
        if (this._target === DLinkTarget.NEW_WINDOW) {
            return true;
        }
        else if (e != null) {
            var oe = (e instanceof interaction.InteractionEvent ? e.data.originalEvent : e);
            return ((oe.ctrlKey || oe.shiftKey || oe.altKey || oe.metaKey) ||
                ("button" in oe && oe.button !== 0));
        }
        else {
            return false;
        }
    };
    return DLink;
}());
export { DLink };
//# sourceMappingURL=d-link.js.map