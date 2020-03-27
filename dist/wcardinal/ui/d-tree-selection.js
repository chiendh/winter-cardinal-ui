/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DTreeSelection = /** @class */ (function () {
    function DTreeSelection() {
        this._selection = [];
    }
    /**
     * Select an item.
     * Add item data to this._selection if it not exist in this._selection.
     *
     * @param item Reference data of item want to remove in “value” array.
     */
    DTreeSelection.prototype.add = function (item) {
        if (this._selection.indexOf(item) === -1) {
            this._selection.push(item);
        }
    };
    /**
     * Un-select an item.
     * remove item data to this._selection if it exist in this._selection.
     *
     * @param item Reference data of item want to remove in “value” array.
     */
    DTreeSelection.prototype.remove = function (item) {
        var itemIndex = this._selection.indexOf(item);
        if (itemIndex !== -1) {
            this._selection.splice(itemIndex, 1);
        }
    };
    /**
     * Select/un-select an item.
     * If item data not exist in this._selection, add it to this._selection.
     * If item data exist in this._selection, remove it to this._selection.
     *
     * @param item Reference data of item want to remove in “value” array.
     */
    DTreeSelection.prototype.toggle = function (item) {
        var itemIndex = this._selection.indexOf(item);
        if (itemIndex !== -1) {
            this._selection.splice(itemIndex, 1);
        }
        else {
            this._selection.push(item);
        }
    };
    /**
     * Un-select all item.
     *
     */
    DTreeSelection.prototype.clear = function () {
        this._selection.length = 0;
    };
    /**
     * Get selected item by index.
     *
     * @param index index of item in this._selection
     *
     * @returns  Reference data of selected item in “value” array.
     */
    DTreeSelection.prototype.get = function (index) {
        var selection = this._selection;
        if (0 <= index && index < selection.length) {
            return selection[index];
        }
        return null;
    };
    /**
     * Check item is selected or not.
     *
     * @param item Reference data of item want to remove in “value” array.
     *
     * @returns selected state of checked item.
     */
    DTreeSelection.prototype.contains = function (item) {
        return this._selection.indexOf(item) !== -1;
    };
    /**
     * Get number of selected .
     *
     * @returns number of selected.
     */
    DTreeSelection.prototype.size = function () {
        return this._selection.length;
    };
    /**
     * Iterate over selected items.
     *
     * @param iteratee  boolean function. If the iteratee explicitly returns false, an iteration stops.
     * @param item data of browsed item.
     */
    DTreeSelection.prototype.each = function (iteratee) {
        for (var _i = 0, _a = this._selection; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!iteratee(item)) {
                return;
            }
        }
    };
    return DTreeSelection;
}());
export { DTreeSelection };
//# sourceMappingURL=d-tree-selection.js.map