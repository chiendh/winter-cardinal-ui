/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DTableDataSelectionType } from "./d-table-data-selection";
import { isString } from "./util/is-string";
var COMPARATOR = function (a, b) {
    return a[0] - b[0];
};
var DTableDataSelectionImpl = /** @class */ (function (_super) {
    __extends(DTableDataSelectionImpl, _super);
    function DTableDataSelectionImpl(parent, options) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._type = _this.toType(options);
        _this._indices = new Set();
        return _this;
    }
    DTableDataSelectionImpl.prototype.toType = function (options) {
        return (options && options.type != null ?
            (isString(options.type) ? DTableDataSelectionType[options.type] : options.type) :
            DTableDataSelectionType.NONE);
    };
    Object.defineProperty(DTableDataSelectionImpl.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataSelectionImpl.prototype.onChange = function () {
        this._parent.update();
        this.emit("change", this);
    };
    DTableDataSelectionImpl.prototype.toggle = function (rowIndex) {
        var indices = this._indices;
        if (indices.has(rowIndex)) {
            indices.delete(rowIndex);
        }
        else {
            indices.add(rowIndex);
        }
        this.onChange();
    };
    DTableDataSelectionImpl.prototype.add = function (rowIndex) {
        var indices = this._indices;
        var oldSize = indices.size;
        indices.add(rowIndex);
        var newSize = indices.size;
        if (oldSize !== newSize) {
            this.onChange();
        }
    };
    Object.defineProperty(DTableDataSelectionImpl.prototype, "first", {
        get: function () {
            var indices = this._indices;
            if (0 < indices.size) {
                var result_1 = NaN;
                indices.forEach(function (index) {
                    if (result_1 !== result_1) {
                        result_1 = index;
                    }
                });
                return result_1;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataSelectionImpl.prototype, "last", {
        get: function () {
            var indices = this._indices;
            if (0 < indices.size) {
                var result_2 = 0;
                indices.forEach(function (index) {
                    result_2 = index;
                });
                return result_2;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    DTableDataSelectionImpl.prototype.addTo = function (rowIndex) {
        var lastRowIndex = this.last;
        if (lastRowIndex != null) {
            this.addRange(lastRowIndex, false, rowIndex, true);
        }
    };
    DTableDataSelectionImpl.prototype.addRange = function (from, includeFrom, to, includeTo) {
        var indices = this._indices;
        var oldSize = indices.size;
        if (from < to) {
            for (var i = from + (includeFrom ? 0 : 1), imax = to + (includeTo ? 1 : 0); i < imax; ++i) {
                indices.add(i);
            }
        }
        else {
            for (var i = to + (includeTo ? 0 : 1), imax = from + (includeFrom ? 1 : 0); i < imax; ++i) {
                indices.add(i);
            }
        }
        var newSize = indices.size;
        if (oldSize !== newSize) {
            this.onChange();
        }
    };
    DTableDataSelectionImpl.prototype.addAll = function (rowIndices) {
        var indices = this._indices;
        var oldSize = indices.size;
        for (var i = 0, imax = rowIndices.length; i < imax; ++i) {
            indices.add(rowIndices[i]);
        }
        var newSize = indices.size;
        if (oldSize !== newSize) {
            this.onChange();
        }
    };
    DTableDataSelectionImpl.prototype.contains = function (rowIndex) {
        return this._indices.has(rowIndex);
    };
    DTableDataSelectionImpl.prototype.remove = function (rowIndex) {
        if (this._indices.delete(rowIndex)) {
            this.onChange();
        }
    };
    DTableDataSelectionImpl.prototype.clear = function () {
        var indices = this._indices;
        if (0 < indices.size) {
            indices.clear();
            this.onChange();
        }
    };
    DTableDataSelectionImpl.prototype.clearAndAdd = function (rowIndex) {
        var indices = this._indices;
        if (!indices.has(rowIndex) || indices.size !== 1) {
            indices.clear();
            indices.add(rowIndex);
            this.onChange();
        }
    };
    DTableDataSelectionImpl.prototype.clearAndAddAll = function (rowIndices) {
        var indices = this._indices;
        if (0 < indices.size || 0 < rowIndices.length) {
            indices.clear();
            for (var i = 0, imax = rowIndices.length; i < imax; ++i) {
                indices.add(rowIndices[i]);
            }
            this.onChange();
        }
    };
    DTableDataSelectionImpl.prototype.shift = function (rowIndex, amount) {
        var shifted = [];
        var indices = this._indices;
        indices.forEach(function (index) {
            if (rowIndex <= index) {
                shifted.push(index);
            }
        });
        var shiftedLength = shifted.length;
        if (0 < shiftedLength) {
            for (var i = 0, imax = shifted.length; i < imax; ++i) {
                indices.delete(shifted[i]);
            }
            for (var i = 0, imax = shifted.length; i < imax; ++i) {
                indices.add(shifted[i] + amount);
            }
            this.onChange();
        }
    };
    DTableDataSelectionImpl.prototype.size = function () {
        return this._indices.size;
    };
    DTableDataSelectionImpl.prototype.isEmpty = function () {
        return this._indices.size === 0;
    };
    Object.defineProperty(DTableDataSelectionImpl.prototype, "indices", {
        /**
         * Returns a copy of an index array of selected rows.
         * The order of indices is an insertion order.
         */
        get: function () {
            var result = [];
            this._indices.forEach(function (index) {
                result.push(index);
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableDataSelectionImpl.prototype, "rows", {
        /**
         * Returns a copy of an array of selected row value.
         * The order is an insertion order.
         */
        get: function () {
            var result = [];
            var parent = this._parent;
            this._indices.forEach(function (index) {
                result.push(parent.get(index));
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns an array of the (index, row value) pairs of selected rows.
     * The order of pairs is an insertion order.
     */
    DTableDataSelectionImpl.prototype.toArray = function () {
        var result = [];
        var parent = this._parent;
        this._indices.forEach(function (index) {
            result.push([index, parent.get(index)]);
        });
        return result;
    };
    /**
     * Returns an sorted array of the (index, row value) pairs of selected rows.
     */
    DTableDataSelectionImpl.prototype.toSortedArray = function () {
        return this.toArray().sort(COMPARATOR);
    };
    DTableDataSelectionImpl.prototype.toObject = function () {
        var result = {};
        var parent = this._parent;
        this._indices.forEach(function (index) {
            result[index] = parent.get(index);
        });
        return result;
    };
    DTableDataSelectionImpl.prototype.toMap = function () {
        var result = new Map();
        var parent = this._parent;
        this._indices.forEach(function (index) {
            result.set(index, parent.get(index));
        });
        return result;
    };
    return DTableDataSelectionImpl;
}(utils.EventEmitter));
export { DTableDataSelectionImpl };
//# sourceMappingURL=d-table-data-selection-impl.js.map