/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DLayoutVertical } from "./d-layout-vertical";
import { DMenuAlign } from "./d-menu-align";
import { DMenuContext } from "./d-menu-context";
import { DMenuItem } from "./d-menu-item";
import { DMenus } from "./d-menus";
import { isString } from "./util/is-string";
import { UtilAttach } from "./util/util-attach";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilOverlay } from "./util/util-overlay";
var DMenu = /** @class */ (function (_super) {
    __extends(DMenu, _super);
    function DMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenu.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._onPrerenderBound = function () {
            _this.onPrerender();
        };
        if (options != null) {
            this._align = (options.align != null ?
                (isString(options.align) ? DMenuAlign[options.align] : options.align) :
                DMenuAlign.BOTTOM);
            this._fit = (options.fit != null ? options.fit : false);
            this._sticky = (options.sticky != null ? options.sticky : false);
        }
        else {
            this._align = DMenuAlign.BOTTOM;
            this._fit = false;
            this._sticky = false;
        }
        this._sub = false;
        this._owner = null;
        this.visible = false;
        this._context = null;
        this.setState(DBaseState.FOCUS_ROOT, true);
        // Event handlers
        UtilClickOutside.apply(this, function () {
            _this.close();
        });
        this.on("select", function () {
            _this.close();
        });
        // Items
        if (options && options.items) {
            DMenus.newItems(this, options.items, this._sticky);
        }
        // Overlay
        this._overlay = new UtilOverlay(options);
    };
    DMenu.prototype.findItem = function (value) {
        var children = this.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child instanceof DMenuItem && child.value === value) {
                return child;
            }
        }
        return null;
    };
    DMenu.prototype.getType = function () {
        return "DMenu";
    };
    DMenu.prototype.getContext = function () {
        return this._context;
    };
    DMenu.prototype.getCloseable = function () {
        return this;
    };
    DMenu.prototype.open = function (owner, closeable, context) {
        if (this.isHidden()) {
            var layer = this._overlay.pick(this);
            this._owner = owner;
            // States
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child instanceof DBase) {
                    child.setState(DBaseState.FOCUSED | DBaseState.HOVERED, false);
                }
            }
            // Position & size
            var renderer = layer.renderer;
            var onPrerenderBound = this._onPrerenderBound;
            if (this._sticky) {
                renderer.on("prerender", onPrerenderBound);
            }
            else {
                renderer.once("prerender", onPrerenderBound);
            }
            if (this._fit) {
                var bounds = owner.getBounds();
                if (bounds != null) {
                    this.width = bounds.width;
                }
            }
            // Target
            this._sub = (context != null);
            context = context || new DMenuContext(owner);
            if (closeable != null) {
                context.trim(closeable);
            }
            context.add(this);
            this._context = context;
            // Stage
            layer.stage.addChild(this);
            // Focus
            this.focus();
            // Show
            _super.prototype.show.call(this);
            // Event
            this.emit("open", this);
        }
        return this;
    };
    DMenu.prototype.onPrerender = function () {
        var owner = this._owner;
        if (owner) {
            var bounds = owner.getBounds();
            if (bounds) {
                if (this._fit) {
                    this.width = bounds.width;
                }
                var layer = this._overlay.picked;
                if (layer) {
                    var theme = this.theme;
                    UtilAttach.attach(this, bounds, theme.getOffsetX(), theme.getOffsetY(), layer.width, layer.height, this._align);
                }
            }
        }
    };
    DMenu.prototype.close = function () {
        if (this.isShown()) {
            var context = this._context;
            if (context) {
                context.remove(this);
            }
            var layer = this._overlay.picked;
            if (layer) {
                layer.renderer.off("prerender", this._onPrerenderBound);
            }
            this._owner = null;
            _super.prototype.hide.call(this);
            var parent_1 = this.parent;
            if (parent_1) {
                parent_1.removeChild(this);
            }
            this.emit("close", this);
        }
        return this;
    };
    DMenu.prototype.onKeyDown = function (e) {
        if (UtilKeyboardEvent.isArrowUpKey(e) || UtilKeyboardEvent.isArrowDownKey(e)) {
            var layer = this._overlay.picked;
            if (layer) {
                var focusController = layer.getFocusController();
                var focused = focusController.getFocused();
                if (focused != null) {
                    var direction = UtilKeyboardEvent.isArrowDownKey(e);
                    var next = focusController.findFocusable(focused, false, focused.hasState(DBaseState.FOCUS_ROOT) || direction, direction);
                    if (next != null) {
                        focusController.setFocused(next, true, true);
                    }
                }
            }
        }
        return _super.prototype.onKeyDown.call(this, e);
    };
    DMenu.prototype.containsGlobalPoint = function (point) {
        return !this._sub;
    };
    return DMenu;
}(DLayoutVertical));
export { DMenu };
DMenus.setMenuCreator(function (options) { return new DMenu(options); });
//# sourceMappingURL=d-menu.js.map