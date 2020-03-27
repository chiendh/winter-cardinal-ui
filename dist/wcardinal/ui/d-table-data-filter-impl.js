/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { isFunction } from "./util/is-function";
var DTableDataFilterImpl = /** @class */ (function (_super) {
    __extends(DTableDataFilterImpl, _super);
    function DTableDataFilterImpl(parent) {
        var _this = _super.call(this) || this;
        _this._id = 0;
        _this._idUpdated = -1;
        _this._isApplied = false;
        _this._sorterId = -1;
        _this._parent = parent;
        _this._filter = null;
        _this._filtered = null;
        return _this;
    }
    Object.defineProperty(DTableDataFilterImpl.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataFilterImpl.prototype.apply = function () {
        this._isApplied = true;
        this._id += 1;
        this._parent.update();
    };
    DTableDataFilterImpl.prototype.unapply = function () {
        if (this._isApplied) {
            this._isApplied = false;
            this._id += 1;
            this._parent.update();
        }
    };
    DTableDataFilterImpl.prototype.isApplied = function () {
        return this._isApplied;
    };
    DTableDataFilterImpl.prototype.newFiltered = function () {
        var filter = this._filter;
        if (filter != null) {
            var filtered = [];
            var parent_1 = this._parent;
            var sorter = parent_1.sorter;
            var rows = parent_1.rows;
            if (isFunction(filter)) {
                var indicesSorted = sorter.indices;
                if (indicesSorted) {
                    for (var i = 0, imax = indicesSorted.length; i < imax; ++i) {
                        var indexSorted = indicesSorted[i];
                        if (filter(rows[indexSorted], indexSorted)) {
                            filtered.push(i);
                        }
                    }
                }
                else {
                    for (var i = 0, imax = rows.length; i < imax; ++i) {
                        if (filter(rows[i], i)) {
                            filtered.push(i);
                        }
                    }
                }
            }
            else {
                var indicesSorted = sorter.indices;
                if (indicesSorted) {
                    for (var i = 0, imax = indicesSorted.length; i < imax; ++i) {
                        var indexSorted = indicesSorted[i];
                        if (filter.test(rows[indexSorted], indexSorted)) {
                            filtered.push(i);
                        }
                    }
                }
                else {
                    for (var i = 0, imax = rows.length; i < imax; ++i) {
                        if (filter.test(rows[i], i)) {
                            filtered.push(i);
                        }
                    }
                }
            }
            return filtered;
        }
        else {
            return null;
        }
    };
    DTableDataFilterImpl.prototype.get = function () {
        return this._filter;
    };
    DTableDataFilterImpl.prototype.set = function (filter) {
        if (this._filter !== filter) {
            this._filter = filter;
        }
    };
    DTableDataFilterImpl.prototype.toDirty = function () {
        this._id += 1;
    };
    DTableDataFilterImpl.prototype.update = function () {
        if (this._id !== this._idUpdated || this._parent.sorter.id !== this._sorterId) {
            this._idUpdated = this._id;
            this._sorterId = this._parent.sorter.id;
            if (this._isApplied) {
                this._filtered = this.newFiltered();
                this.emit("change", this);
            }
            else if (this._filtered != null) {
                this._filtered = null;
                this.emit("change", this);
            }
        }
    };
    Object.defineProperty(DTableDataFilterImpl.prototype, "indices", {
        get: function () {
            this.update();
            return this._filtered;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataFilterImpl.prototype.map = function (sortedIndex) {
        var result = sortedIndex;
        var indicesFiltered = this.indices;
        if (indicesFiltered) {
            var index = indicesFiltered.indexOf(result);
            if (0 <= index) {
                result = index;
            }
            else {
                return null;
            }
        }
        return result;
    };
    DTableDataFilterImpl.prototype.unmap = function (index) {
        var result = index;
        var indicesFiltered = this.indices;
        if (indicesFiltered) {
            result = indicesFiltered[result];
        }
        return result;
    };
    return DTableDataFilterImpl;
}(utils.EventEmitter));
export { DTableDataFilterImpl };
//# sourceMappingURL=d-table-data-filter-impl.js.map