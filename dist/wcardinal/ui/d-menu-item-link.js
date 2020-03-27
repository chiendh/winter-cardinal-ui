/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DLink } from "./d-link";
import { DLinkTarget } from "./d-link-target";
import { DMenuItemLinkState } from "./d-menu-item-link-state";
import { DMenuItemText } from "./d-menu-item-text";
import { isString } from "./util/is-string";
var DMenuItemLink = /** @class */ (function (_super) {
    __extends(DMenuItemLink, _super);
    function DMenuItemLink(options) {
        return _super.call(this, options) || this;
    }
    DMenuItemLink.prototype.toLinkOptions = function (options) {
        if (options) {
            return {
                url: this.toUrl(options.url),
                target: options.target,
                checker: this.toChecker(options.checker),
                menu: options.menu
            };
        }
        return undefined;
    };
    DMenuItemLink.prototype.toUrl = function (url) {
        var _this = this;
        if (isString(url) || url == null) {
            return url;
        }
        else {
            return function () {
                return url(_this);
            };
        }
    };
    DMenuItemLink.prototype.toChecker = function (checker) {
        var _this = this;
        if (checker != null) {
            return function () {
                return checker(_this);
            };
        }
        return undefined;
    };
    DMenuItemLink.prototype.init = function (options) {
        if (options && options.target === DLinkTarget.NEW_WINDOW) {
            options.state = (options.state || DBaseState.NONE) || DMenuItemLinkState.NEW_WINDOW;
        }
        this._link = new DLink(this.theme, this.toLinkOptions(options));
        _super.prototype.init.call(this, options);
    };
    Object.defineProperty(DMenuItemLink.prototype, "url", {
        get: function () {
            return this._link.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DMenuItemLink.prototype, "menu", {
        get: function () {
            return this._link.menu;
        },
        enumerable: true,
        configurable: true
    });
    DMenuItemLink.prototype.initOnClick = function (options) {
        var _this = this;
        this._link.apply(this, function (e) { return _this.onSelect(e); });
    };
    DMenuItemLink.prototype.getType = function () {
        return "DMenuItemLink";
    };
    DMenuItemLink.prototype.onSelect = function (e) {
        _super.prototype.onSelect.call(this, e);
        this.open(this._link.inNewWindow(e));
    };
    DMenuItemLink.prototype.open = function (inNewWindow) {
        this._link.open(inNewWindow);
    };
    DMenuItemLink.prototype.onShortcut = function (e) {
        _super.prototype.onShortcut.call(this, e);
        this.onSelect(e);
    };
    DMenuItemLink.isCompatible = function (options) {
        return "url" in options;
    };
    return DMenuItemLink;
}(DMenuItemText));
export { DMenuItemLink };
//# sourceMappingURL=d-menu-item-link.js.map