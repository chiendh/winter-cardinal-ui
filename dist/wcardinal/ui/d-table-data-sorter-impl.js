/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DTableDataOrder } from "./d-table-data-sorter";
import { isFunction } from "./util/is-function";
var DTableDataSorterImpl = /** @class */ (function (_super) {
    __extends(DTableDataSorterImpl, _super);
    function DTableDataSorterImpl(parent) {
        var _this = _super.call(this) || this;
        _this._id = 0;
        _this._idUpdated = -1;
        _this._isApplied = false;
        _this._parent = parent;
        _this._comparator = null;
        _this._sorted = null;
        _this._order = DTableDataOrder.ASCENDING;
        return _this;
    }
    Object.defineProperty(DTableDataSorterImpl.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataSorterImpl.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (order) {
            this._order = order;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataSorterImpl.prototype.apply = function () {
        this._isApplied = true;
        this._id += 1;
        this._parent.update();
    };
    DTableDataSorterImpl.prototype.unapply = function () {
        if (this._isApplied) {
            this._isApplied = false;
            this._id += 1;
            this._parent.update();
        }
    };
    DTableDataSorterImpl.prototype.isApplied = function () {
        return this._isApplied;
    };
    DTableDataSorterImpl.prototype.newSorted = function () {
        var comparator = this._comparator;
        if (comparator != null) {
            var parent_1 = this._parent;
            var sorted = [];
            var rows = parent_1.rows;
            for (var i = 0, imax = rows.length; i < imax; ++i) {
                sorted.push(i);
            }
            sorted.sort(this.toComparator(rows, comparator));
            return sorted;
        }
        else {
            return null;
        }
    };
    DTableDataSorterImpl.prototype.toComparator = function (rows, comparator) {
        var order = this._order;
        if (isFunction(comparator)) {
            if (order === DTableDataOrder.ASCENDING) {
                return function (indexA, indexB) {
                    return comparator(rows[indexA], rows[indexB], indexA, indexB);
                };
            }
            else {
                return function (indexA, indexB) {
                    return comparator(rows[indexB], rows[indexA], indexB, indexA);
                };
            }
        }
        else {
            if (order === DTableDataOrder.ASCENDING) {
                return function (indexA, indexB) {
                    return comparator.compare(rows[indexA], rows[indexB], indexA, indexB);
                };
            }
            else {
                return function (indexA, indexB) {
                    return comparator.compare(rows[indexB], rows[indexA], indexB, indexA);
                };
            }
        }
    };
    DTableDataSorterImpl.prototype.get = function () {
        return this._comparator;
    };
    DTableDataSorterImpl.prototype.set = function (comparator) {
        if (this._comparator !== comparator) {
            this._comparator = comparator;
        }
    };
    DTableDataSorterImpl.prototype.toDirty = function () {
        this._id += 1;
    };
    DTableDataSorterImpl.prototype.update = function () {
        if (this._id !== this._idUpdated) {
            this._idUpdated = this._id;
            if (this._isApplied) {
                this._sorted = this.newSorted();
                this.emit("change", this);
            }
            else if (this._sorted != null) {
                this._sorted = null;
                this.emit("change", this);
            }
        }
    };
    Object.defineProperty(DTableDataSorterImpl.prototype, "indices", {
        get: function () {
            this.update();
            return this._sorted;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataSorterImpl.prototype.map = function (unmappedIndex) {
        var result = unmappedIndex;
        var indicesSorted = this.indices;
        if (indicesSorted) {
            var index = indicesSorted.indexOf(result);
            if (0 <= index) {
                result = index;
            }
            else {
                return null;
            }
        }
        return result;
    };
    DTableDataSorterImpl.prototype.unmap = function (index) {
        var result = index;
        var indicesSorted = this.indices;
        if (indicesSorted) {
            result = indicesSorted[result];
        }
        return result;
    };
    return DTableDataSorterImpl;
}(utils.EventEmitter));
export { DTableDataSorterImpl };
//# sourceMappingURL=d-table-data-sorter-impl.js.map