/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DisplayObject } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DBaseStates } from "./d-base-states";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DMenuBarBlocker } from "./d-menu-bar-blocker";
import { DMenuBarItem } from "./d-menu-bar-item";
import { DMenuContext } from "./d-menu-context";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilOverlay } from "./util/util-overlay";
var DMenuBar = /** @class */ (function (_super) {
    __extends(DMenuBar, _super);
    function DMenuBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuBar.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.FOCUS_ROOT, true);
        if (options != null && options.items != null) {
            var items = options.items;
            UtilClickOutside.apply(this, function () {
                _this.close();
            });
            var onItemStateChangeBound = function (newState, oldState, item) {
                _this.onItemStateChange(newState, oldState, item);
            };
            for (var i = 0, imax = items.length; i < imax; ++i) {
                var itemOrItemOptions = items[i];
                var item = (itemOrItemOptions instanceof DisplayObject ? itemOrItemOptions :
                    ("space" in itemOrItemOptions ? new DLayoutSpace(itemOrItemOptions) :
                        new DMenuBarItem(itemOrItemOptions)));
                if (item instanceof DMenuBarItem) {
                    item.on("statechange", onItemStateChangeBound);
                }
                this.addChild(item);
            }
        }
        this.on("select", function () {
            _this.close();
        });
        this._context = null;
        this._blocker = new DMenuBarBlocker(this);
        this._overlay = new UtilOverlay(options);
    };
    DMenuBar.prototype.onItemStateChange = function (newState, oldState, item) {
        var context = this._context;
        if (context == null) {
            if (!DBaseStates.isDisabled(newState)) {
                if (DBaseStates.isPressed(newState)) {
                    if (item.menu.isHidden()) {
                        item.setPressed(false);
                        this.open(item);
                    }
                }
            }
        }
        else {
            if (!DBaseStates.isDisabled(newState)) {
                if (DBaseStates.isHovered(newState) && !DBaseStates.isHovered(oldState)) {
                    var menu = item.menu;
                    if (menu.isHidden()) {
                        menu.open(item, this, context);
                    }
                }
            }
        }
    };
    DMenuBar.prototype.getContext = function () {
        return this._context;
    };
    DMenuBar.prototype.getCloseable = function () {
        return this;
    };
    DMenuBar.prototype.open = function (item) {
        var context = this._context;
        if (context == null) {
            var layer = this._overlay.pick(this);
            layer.stage.addChild(this._blocker);
            context = this._context = new DMenuContext(this);
            context.trim(item);
            context.add(this);
            item.menu.open(item, this, context);
        }
    };
    DMenuBar.prototype.close = function () {
        var context = this._context;
        if (context != null) {
            this._context = null;
            context.remove(this);
            var blocker = this._blocker;
            var parent_1 = blocker.parent;
            if (parent_1) {
                parent_1.removeChild(blocker);
            }
        }
    };
    DMenuBar.prototype.getType = function () {
        return "DMenuBar";
    };
    return DMenuBar;
}(DLayoutHorizontal));
export { DMenuBar };
//# sourceMappingURL=d-menu-bar.js.map