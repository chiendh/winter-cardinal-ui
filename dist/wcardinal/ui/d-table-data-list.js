import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DTableDataFilterImpl } from "./d-table-data-filter-impl";
import { DTableDataListMapped } from "./d-table-data-list-mapped";
import { DTableDataSelectionImpl } from "./d-table-data-selection-impl";
import { DTableDataSorterImpl } from "./d-table-data-sorter-impl";
var DTableDataList = /** @class */ (function (_super) {
    __extends(DTableDataList, _super);
    function DTableDataList(options) {
        var _this = _super.call(this) || this;
        _this._parent = null;
        _this._mapped = new DTableDataListMapped(_this);
        _this._rows = _this.toRows(options && options.rows);
        _this._selection = new DTableDataSelectionImpl(_this, options && options.selection);
        _this._filter = new DTableDataFilterImpl(_this);
        _this._sorter = new DTableDataSorterImpl(_this);
        if (options) {
            // Filter
            var filter = options.filter;
            if (filter) {
                _this._filter.set(filter);
            }
            // Comparator
            var comparator = options.comparator;
            if (comparator) {
                _this._sorter.set(comparator);
            }
            // Events
            var on = options.on;
            if (on) {
                for (var name_1 in on) {
                    var handler = on[name_1];
                    if (handler) {
                        _this.on(name_1, handler);
                    }
                }
            }
        }
        return _this;
    }
    DTableDataList.prototype.bind = function (parent) {
        this._parent = parent;
    };
    DTableDataList.prototype.toRows = function (row) {
        var result = [];
        if (row != null) {
            for (var i = 0, imax = row.length; i < imax; ++i) {
                result.push(row[i]);
            }
        }
        return result;
    };
    Object.defineProperty(DTableDataList.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataList.prototype.update = function () {
        var parent = this._parent;
        if (parent) {
            parent.update();
        }
    };
    DTableDataList.prototype.lock = function () {
        var parent = this._parent;
        if (parent) {
            parent.lock();
        }
    };
    DTableDataList.prototype.unlock = function () {
        var parent = this._parent;
        if (parent) {
            parent.unlock(false);
            parent.update();
        }
    };
    DTableDataList.prototype.size = function () {
        return this._rows.length;
    };
    DTableDataList.prototype.clear = function () {
        var rows = this._rows;
        if (0 < rows.length) {
            rows.length = 0;
            this.lock();
            this._selection.clear();
            this._sorter.toDirty();
            this._filter.toDirty();
            this.unlock();
        }
    };
    DTableDataList.prototype.clearAndAdd = function (row) {
        var rows = this._rows;
        rows.length = 0;
        rows.push(row);
        this.lock();
        this._selection.clear();
        this._sorter.toDirty();
        this._filter.toDirty();
        this.unlock();
    };
    DTableDataList.prototype.clearAndAddAll = function (newRows) {
        var rows = this._rows;
        rows.length = 0;
        for (var i = 0, imax = newRows.length; i < imax; ++i) {
            rows.push(newRows[i]);
        }
        this.lock();
        this._selection.clear();
        this._sorter.toDirty();
        this._filter.toDirty();
        this.unlock();
    };
    DTableDataList.prototype.add = function (row, index) {
        var rows = this._rows;
        var selection = this._selection;
        var sorter = this._sorter;
        var filter = this._filter;
        if (index == null) {
            rows.push(row);
            this.lock();
            sorter.toDirty();
            filter.toDirty();
            this.unlock();
        }
        else if (0 <= index && index < rows.length) {
            rows.splice(index, 0, row);
            this.lock();
            selection.shift(index, 1);
            sorter.toDirty();
            filter.toDirty();
            this.unlock();
        }
    };
    DTableDataList.prototype.addAll = function (newRows, index) {
        var rows = this._rows;
        var rowsLength = rows.length;
        var selection = this._selection;
        var sorter = this._sorter;
        var filter = this._filter;
        if (index == null) {
            var newRowsLength = newRows.length;
            for (var i = 0, imax = newRowsLength; i < imax; ++i) {
                rows.push(newRows[i]);
            }
            this.lock();
            sorter.toDirty();
            filter.toDirty();
            this.unlock();
        }
        else if (0 <= index && index < rowsLength) {
            var newRowsLength = newRows.length;
            for (var i = 0; i < newRowsLength; ++i) {
                rows.splice(index + i, 0, newRows[i]);
            }
            this.lock();
            selection.shift(index, newRowsLength);
            sorter.toDirty();
            filter.toDirty();
            this.unlock();
        }
    };
    DTableDataList.prototype.get = function (index) {
        var rows = this._rows;
        if (0 <= index && index < rows.length) {
            return rows[index];
        }
        return null;
    };
    DTableDataList.prototype.set = function (index, row) {
        var rows = this._rows;
        if (0 <= index && index < rows.length) {
            var result = rows[index];
            rows[index] = row;
            this.lock();
            this._sorter.toDirty();
            this._filter.toDirty();
            this.unlock();
            return result;
        }
        return null;
    };
    DTableDataList.prototype.remove = function (index) {
        var rows = this._rows;
        if (0 <= index && index < rows.length) {
            var result = rows.splice(index, 1)[0];
            this.lock();
            this._selection.remove(index);
            this._sorter.toDirty();
            this._filter.toDirty();
            this.unlock();
            return result;
        }
        return null;
    };
    DTableDataList.prototype.each = function (iteratee, ifrom, ito) {
        var rows = this._rows;
        ifrom = (ifrom != null ? Math.max(0, ifrom) : 0);
        ito = (ito != null ? Math.min(rows.length, ito) : rows.length);
        for (var i = ifrom; i < ito; ++i) {
            var row = rows[i];
            if (iteratee(row, i) === false) {
                break;
            }
        }
    };
    Object.defineProperty(DTableDataList.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataList.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataList.prototype, "sorter", {
        get: function () {
            return this._sorter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataList.prototype, "mapped", {
        get: function () {
            return this._mapped;
        },
        enumerable: true,
        configurable: true
    });
    return DTableDataList;
}(utils.EventEmitter));
export { DTableDataList };
//# sourceMappingURL=d-table-data-list.js.map