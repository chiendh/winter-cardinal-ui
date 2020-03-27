/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DImage } from "./d-image";
import { DTableCellState } from "./d-table-cell-state";
import { DTableDataOrder } from "./d-table-data-sorter";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DTableHeaderCell = /** @class */ (function (_super) {
    __extends(DTableHeaderCell, _super);
    function DTableHeaderCell(options) {
        var _this = _super.call(this, options) || this;
        _this._header = options.header;
        _this._column = options.column;
        _this._comparator = options.column.sorting.comparator;
        var sorting = options.column.sorting;
        if (sorting.enable) {
            UtilPointerEvent.onClick(_this, function (e) {
                _this.onClick();
            });
        }
        return _this;
    }
    Object.defineProperty(DTableHeaderCell.prototype, "sorter", {
        get: function () {
            var _this = this;
            var sorter = this._sorter || null;
            if (sorter == null) {
                var table = this._header.table;
                if (table) {
                    sorter = table.data.sorter;
                    this._sorter = sorter;
                    this._onSorterChangeBound = this._onSorterChangeBound || (function () {
                        _this.onSorterChange();
                    });
                    sorter.on("change", this._onSorterChangeBound);
                }
            }
            return sorter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DTableHeaderCell.prototype, "comparator", {
        get: function () {
            return this._comparator || null;
        },
        enumerable: true,
        configurable: true
    });
    DTableHeaderCell.prototype.onClick = function () {
        var comparator = this._comparator;
        if (comparator) {
            var sorter = this.sorter;
            if (sorter) {
                if (sorter.get() === comparator) {
                    if (sorter.order === DTableDataOrder.ASCENDING) {
                        sorter.order = DTableDataOrder.DESCENDING;
                        sorter.apply();
                    }
                    else {
                        sorter.set(null);
                        sorter.apply();
                    }
                }
                else {
                    sorter.set(comparator);
                    sorter.order = DTableDataOrder.ASCENDING;
                    sorter.apply();
                }
            }
        }
    };
    DTableHeaderCell.prototype.onSorterChange = function () {
        var sorter = this._sorter;
        var comparator = this._comparator;
        if (sorter && comparator) {
            var SORTED_ASCENDING = DTableCellState.SORTED_ASCENDING;
            var SORTED_DESCENDING = DTableCellState.SORTED_DESCENDING;
            if (sorter.isApplied() && sorter.get() === comparator) {
                if (sorter.order === DTableDataOrder.ASCENDING) {
                    this.setStates(SORTED_ASCENDING, SORTED_DESCENDING);
                }
                else {
                    this.setStates(SORTED_DESCENDING, SORTED_ASCENDING);
                }
            }
            else {
                this.setState(SORTED_ASCENDING | SORTED_DESCENDING, false);
            }
        }
    };
    DTableHeaderCell.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
    };
    DTableHeaderCell.prototype.getType = function () {
        return "DTableHeaderCell";
    };
    DTableHeaderCell.prototype.destroy = function () {
        var sorter = this._sorter;
        var onSorterChangeBound = this._onSorterChangeBound;
        if (sorter && onSorterChangeBound) {
            sorter.off("change", onSorterChangeBound);
        }
        this._sorter = undefined;
        this._onSorterChangeBound = undefined;
        this._comparator = undefined;
        _super.prototype.destroy.call(this);
    };
    return DTableHeaderCell;
}(DImage));
export { DTableHeaderCell };
//# sourceMappingURL=d-table-header-cell.js.map