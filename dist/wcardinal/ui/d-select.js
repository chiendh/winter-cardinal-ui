/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDropdownBase } from "./d-dropdown-base";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemMenu } from "./d-menu-item-menu";
var DSelect = /** @class */ (function (_super) {
    __extends(DSelect, _super);
    function DSelect(options) {
        return _super.call(this, options) || this;
    }
    DSelect.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._onSelectedBound = function (value, child) {
            _this.onSelected(value, child, true);
        };
        this._onClosedBound = function () {
            _this.onClosed();
        };
        // Default value
        this._value = null;
        if (options && options.value !== undefined) {
            this.value = options.value;
        }
    };
    DSelect.prototype.onSelected = function (newValue, item, emit) {
        if (this._value !== newValue) {
            // Value
            var oldValue = this._value;
            this._value = newValue;
            // Text
            this.text = item;
            // Event
            if (emit) {
                this.emit("change", newValue, oldValue, item, this);
            }
        }
    };
    DSelect.prototype.onClosed = function () {
        var menu = this.menu;
        menu.off("select", this._onSelectedBound);
        menu.off("close", this._onClosedBound);
    };
    DSelect.prototype.start = function () {
        var menu = this.menu;
        menu.on("select", this._onSelectedBound);
        menu.on("close", this._onClosedBound);
        _super.prototype.start.call(this);
    };
    DSelect.prototype.findMenuItem = function (menu, value) {
        var children = menu.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child instanceof DMenuItemMenu) {
                var result = this.findMenuItem(child.menu, value);
                if (result != null) {
                    return result;
                }
            }
            else if (child instanceof DMenuItem) {
                if (child.value === value) {
                    return child;
                }
            }
        }
        return null;
    };
    Object.defineProperty(DSelect.prototype, "value", {
        /**
         * Returns a selected value or null.
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets to the specified value.
         */
        set: function (value) {
            var item = this.findMenuItem(this.menu, value);
            if (item != null) {
                this.onSelected(value, item, false);
            }
            else {
                this.onSelected(null, null, false);
            }
        },
        enumerable: true,
        configurable: true
    });
    DSelect.prototype.getType = function () {
        return "DSelect";
    };
    return DSelect;
}(DDropdownBase));
export { DSelect };
//# sourceMappingURL=d-select.js.map