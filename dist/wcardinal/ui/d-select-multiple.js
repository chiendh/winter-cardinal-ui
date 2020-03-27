/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDropdownBase } from "./d-dropdown-base";
import { DMenuItemCheck } from "./d-menu-item-check";
import { DMenuItemMenu } from "./d-menu-item-menu";
var DSelectMultiple = /** @class */ (function (_super) {
    __extends(DSelectMultiple, _super);
    function DSelectMultiple(options) {
        return _super.call(this, options) || this;
    }
    DSelectMultiple.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._onSelectedBound = function (value, child) {
            if (child instanceof DMenuItemCheck) {
                var oldValues = _this._values;
                var newValues = [];
                var newItems = [];
                var menu = _this.menu;
                if (child.isActive()) {
                    _this.updateMenuItems(menu, oldValues, value, undefined, newValues, newItems);
                }
                else {
                    _this.updateMenuItems(menu, oldValues, undefined, value, newValues, newItems);
                }
                _this._values = newValues;
                _this.onSelected(newValues, oldValues, newItems, true);
            }
            else {
                _this.emit("menuselect", value, child, _this);
            }
        };
        this._onClosedBound = function () {
            _this.onClosed();
        };
        // Default value
        this._values = [];
        if (options && options.values !== undefined) {
            this.values = options.values;
        }
    };
    DSelectMultiple.prototype.onSelected = function (newValues, oldValues, items, emit) {
        // Chante texts
        this.text = items;
        // Event
        if (emit) {
            this.emit("change", newValues, oldValues, items, this);
        }
    };
    DSelectMultiple.prototype.onClosed = function () {
        var menu = this.menu;
        menu.off("select", this._onSelectedBound);
        menu.off("close", this._onClosedBound);
    };
    DSelectMultiple.prototype.start = function () {
        var menu = this.menu;
        menu.on("select", this._onSelectedBound);
        menu.on("close", this._onClosedBound);
        this.updateMenuItems(menu, this._values);
        _super.prototype.start.call(this);
    };
    Object.defineProperty(DSelectMultiple.prototype, "values", {
        /**
         * Returns a selected value or null.
         */
        get: function () {
            return this._values;
        },
        /**
         * Sets to the specified value.
         */
        set: function (values) {
            var oldValues = this._values;
            if (!this.isSameValues(values, oldValues)) {
                var newValues = [];
                var newItems = [];
                this.updateMenuItems(this.menu, values, undefined, undefined, newValues, newItems);
                this._values = newValues;
                this.onSelected(newValues, oldValues, newItems, false);
            }
        },
        enumerable: true,
        configurable: true
    });
    DSelectMultiple.prototype.isSameValues = function (a, b) {
        if (a.length === b.length) {
            for (var i = 0, imax = a.length; i < imax; ++i) {
                if (b.indexOf(a[i]) < 0) {
                    return false;
                }
            }
        }
        return false;
    };
    DSelectMultiple.prototype.updateMenuItems = function (menu, oldValues, addedValue, removedValue, newValues, newItems) {
        var children = menu.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child instanceof DMenuItemMenu) {
                this.updateMenuItems(child.menu, oldValues, addedValue, removedValue, newValues, newItems);
            }
            else if (child instanceof DMenuItemCheck) {
                var childValue = child.value;
                if (removedValue !== undefined && removedValue === childValue) {
                    child.setActive(false);
                }
                else if ((addedValue !== undefined && child.value === addedValue) || 0 <= oldValues.indexOf(child.value)) {
                    if (newValues) {
                        newValues.push(child.value);
                    }
                    if (newItems) {
                        newItems.push(child);
                    }
                    child.setActive(true);
                }
                else {
                    child.setActive(false);
                }
            }
        }
    };
    DSelectMultiple.prototype.getType = function () {
        return "DSelectMultiple";
    };
    return DSelectMultiple;
}(DDropdownBase));
export { DSelectMultiple };
//# sourceMappingURL=d-select-multiple.js.map