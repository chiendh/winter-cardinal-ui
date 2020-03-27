/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DButtonBase } from "./d-button-base";
import { DTableBodyRow } from "./d-table-body-row";
import { DTableDataList } from "./d-table-data-list";
import { DTableDataSelectionType } from "./d-table-data-selection";
import { UtilPointerEvent } from "./util/util-pointer-event";
var toRowOptions = function (theme, options, selectionType) {
    var columns = options.columns || [];
    var result = options.row;
    if (result != null) {
        if (result.height == null) {
            result.height = theme.getRowHeight();
        }
        if (result.columns === undefined) {
            result.columns = columns;
        }
        if (result.interactive == null && selectionType !== DTableDataSelectionType.NONE) {
            result.interactive = "SELF";
        }
        if (result.frozen == null) {
            result.frozen = options.frozen;
        }
    }
    else {
        result = {
            columns: columns,
            height: theme.getRowHeight(),
            interactive: (selectionType !== DTableDataSelectionType.NONE ? "SELF" : undefined),
            frozen: options.frozen
        };
    }
    return result;
};
var isDTableData = function (target) {
    return (target != null && "mapped" in target);
};
var DTableBody = /** @class */ (function (_super) {
    __extends(DTableBody, _super);
    function DTableBody(options) {
        var _this = _super.call(this, options) || this;
        _this.setState(DBaseState.UNFOCUSABLE, true);
        _this._data.emit("init", _this._data);
        return _this;
    }
    DTableBody.prototype.init = function (options) {
        this.transform.position.y = options.offset || 0;
        this._onRowChangeBound = function (newValue, oldValue, row, rowIndex, columnIndex) {
            data.emit("change", newValue, oldValue, row, rowIndex, columnIndex, data);
        };
        _super.prototype.init.call(this, options);
        var data = (isDTableData(options.data) ? options.data :
            new DTableDataList(options.data));
        this._data = data;
        data.bind(this);
        var theme = this.theme;
        var rowOptions = toRowOptions(theme, options, data.selection.type);
        this._rowOptions = rowOptions;
        this._rowHeight = (rowOptions.height != null ? rowOptions.height : theme.getRowHeight());
        this._columns = rowOptions.columns || [];
        this._rowIndexMappedStart = 0;
        this._rowIndexMappedEnd = 0;
        this._updateRowsCount = 0;
        this._isUpdateRowsCalled = false;
        this._isUpdateRowsCalledForcibly = false;
        this._workRows = [];
    };
    DTableBody.prototype.onResize = function (newWidth, newHeight, oldWidth, oldHeight) {
        _super.prototype.onResize.call(this, newWidth, newHeight, oldWidth, oldHeight);
        this.update();
    };
    Object.defineProperty(DTableBody.prototype, "selection", {
        get: function () {
            return this._data.selection;
        },
        enumerable: true,
        configurable: true
    });
    DTableBody.prototype.lock = function () {
        this._updateRowsCount += 1;
        if (this._updateRowsCount === 1) {
            this._isUpdateRowsCalled = false;
            this._isUpdateRowsCalledForcibly = false;
        }
    };
    DTableBody.prototype.unlock = function (callIfNeeded) {
        this._updateRowsCount -= 1;
        if (this._updateRowsCount === 0) {
            if (callIfNeeded && this._isUpdateRowsCalled) {
                this.update(this._isUpdateRowsCalledForcibly);
            }
            this._isUpdateRowsCalled = false;
            this._isUpdateRowsCalledForcibly = false;
        }
    };
    /**
     * Updates rows. If the `forcibly` is true, some dirty checkings for
     * avoiding unnecessary state changes are skipped.
     *
     * @param forcibly true to update forcibly
     */
    DTableBody.prototype.update = function (forcibly) {
        if (0 < this._updateRowsCount) {
            this._isUpdateRowsCalled = true;
            if (forcibly) {
                this._isUpdateRowsCalledForcibly = true;
            }
            return;
        }
        var content = this.parent;
        var rows = this.children;
        var height = content.parent.height;
        var rowHeight = this._rowHeight;
        var data = this._data;
        var dataMappedSize = data.mapped.size();
        var oldRowIndexMappedStart = this._rowIndexMappedStart;
        var oldRowIndexMappedEnd = this._rowIndexMappedEnd;
        var oldRowCount = oldRowIndexMappedEnd - oldRowIndexMappedStart;
        var y = this.transform.position.y;
        var newHeight = y + dataMappedSize * rowHeight;
        var newContentHeight = Math.max(height, newHeight);
        var newContentY = Math.max(height - newContentHeight, content.position.y);
        var newRowIndexMappedLowerBound = Math.floor((0 - (newContentY + y)) / rowHeight);
        var newRowIndexMappedUpperBound = Math.floor((height - (newContentY + y)) / rowHeight);
        var newRowIndexMappedStart = newRowIndexMappedLowerBound - (newRowIndexMappedLowerBound % 2 === 0 ? 2 : 1);
        var newRowIndexMappedEnd = newRowIndexMappedUpperBound +
            ((newRowIndexMappedUpperBound - newRowIndexMappedStart + 1) % 2 === 0 ? 3 : 2);
        var newRowCount = newRowIndexMappedEnd - newRowIndexMappedStart;
        if (newRowCount < oldRowCount && oldRowCount - 2 <= newRowCount) {
            newRowCount = oldRowCount;
            newRowIndexMappedEnd = newRowIndexMappedStart + newRowCount;
        }
        if (oldRowCount < newRowCount) {
            for (var i = oldRowCount; i < newRowCount; ++i) {
                var oldRowIndexMapped = oldRowIndexMappedStart + i;
                var newRow = this.newRow((oldRowIndexMapped % 2) === 0);
                this.addChild(newRow);
            }
            oldRowCount = newRowCount;
            oldRowIndexMappedEnd = oldRowIndexMappedStart + oldRowCount;
        }
        else if (newRowCount < oldRowCount) {
            for (var i = oldRowCount - 1; newRowCount <= i; --i) {
                this.removeChild(rows[i]);
            }
            oldRowCount = newRowCount;
            oldRowIndexMappedEnd = oldRowIndexMappedStart + oldRowCount;
        }
        this._rowIndexMappedStart = newRowIndexMappedStart;
        this._rowIndexMappedEnd = newRowIndexMappedEnd;
        var rowIndexMappedStartDelta = newRowIndexMappedStart - oldRowIndexMappedStart;
        var rowIndexMappedStartDeltaAbs = Math.abs(rowIndexMappedStartDelta);
        var rowsLength = rows.length;
        if (0 < rowIndexMappedStartDeltaAbs && rowIndexMappedStartDeltaAbs < rowsLength) {
            var work = this._workRows;
            if (0 < rowIndexMappedStartDelta) {
                for (var i = 0; i < rowIndexMappedStartDeltaAbs; ++i) {
                    work.push(this.resetRow(rows[i]));
                }
                for (var i = rowIndexMappedStartDeltaAbs; i < rowsLength; ++i) {
                    rows[i - rowIndexMappedStartDeltaAbs] = rows[i];
                }
                for (var i = 0; i < rowIndexMappedStartDeltaAbs; ++i) {
                    rows[rowsLength - rowIndexMappedStartDeltaAbs + i] = work[i];
                }
            }
            else {
                for (var i = 0; i < rowIndexMappedStartDeltaAbs; ++i) {
                    work.push(this.resetRow(rows[rowsLength - rowIndexMappedStartDeltaAbs + i]));
                }
                for (var i = rowsLength - rowIndexMappedStartDeltaAbs - 1; 0 <= i; --i) {
                    rows[i + rowIndexMappedStartDeltaAbs] = rows[i];
                }
                for (var i = 0; i < rowIndexMappedStartDeltaAbs; ++i) {
                    rows[i] = work[i];
                }
            }
            work.length = 0;
        }
        var selection = data.selection;
        data.mapped.each(function (datum, supplimental, index, unmappedIndex) {
            var row = rows[index - newRowIndexMappedStart];
            row.position.y = index * rowHeight;
            if (selection.contains(unmappedIndex)) {
                row.setStates(DBaseState.ACTIVE, DBaseState.DISABLED);
            }
            else {
                row.setStates(DBaseState.NONE, DBaseState.ACTIVE | DBaseState.DISABLED);
            }
            row.set(datum, supplimental, unmappedIndex, forcibly);
        }, newRowIndexMappedStart, newRowIndexMappedStart + rowsLength);
        for (var i = 0; newRowIndexMappedStart + i < 0 && i < rowsLength; ++i) {
            var row = rows[i];
            row.position.y = (newRowIndexMappedStart + i) * rowHeight;
            row.setStates(DBaseState.DISABLED, DBaseState.ACTIVE);
            row.unset();
        }
        for (var i = rowsLength - 1; dataMappedSize <= newRowIndexMappedStart + i && 0 <= i; --i) {
            var row = rows[i];
            row.position.y = (newRowIndexMappedStart + i) * rowHeight;
            row.setStates(DBaseState.DISABLED, DBaseState.ACTIVE);
            row.unset();
        }
        this.lock();
        content.position.y = newContentY;
        content.height = newContentHeight;
        this.height = newHeight;
        this.unlock(false);
    };
    DTableBody.prototype.resetRow = function (row) {
        row.blur(true);
        var cells = row.children;
        for (var i = 0, imax = cells.length; i < imax; ++i) {
            var cell = cells[i];
            if (cell instanceof DBase) {
                cell.setPressed(false);
            }
        }
        return row;
    };
    DTableBody.prototype.newRow = function (isEven) {
        var options = this._rowOptions;
        options.even = isEven;
        var result = new DTableBodyRow(options);
        result.on("rowchange", this._onRowChangeBound);
        return result;
    };
    DTableBody.prototype.onParentMove = function (x, y) {
        _super.prototype.onParentMove.call(this, x, y);
        this.updateFrozenCellPosition(x);
    };
    DTableBody.prototype.updateFrozenCellPosition = function (x) {
        var frozen = this._rowOptions.frozen;
        if (frozen != null && 0 < frozen) {
            var rows = this.children;
            for (var i = 0, imax = rows.length; i < imax; ++i) {
                rows[i].updateFrozenCellPosition(x);
            }
        }
    };
    DTableBody.prototype.getClippingRect = function (target, result) {
        _super.prototype.getClippingRect.call(this, target, result);
        var parent = this.parent;
        if (parent) {
            var shiftY = -parent.transform.position.y;
            result.y += shiftY;
            result.height -= shiftY;
        }
    };
    DTableBody.prototype.onRowClicked = function (e) {
        if (this.isActionable()) {
            var local = DTableBody.WORK_ON_CLICK;
            local.copyFrom(e.data.global);
            this.toLocal(local, undefined, local, false);
            if (0 <= this.parent.position.y + local.y) {
                var rowIndexMapped = Math.floor(local.y / this._rowHeight);
                var data = this._data;
                var mapped = data.mapped;
                var selection = data.selection;
                if (0 <= rowIndexMapped && rowIndexMapped < mapped.size()) {
                    var isSingle = (selection.type === DTableDataSelectionType.SINGLE);
                    var isNotSingle = !isSingle;
                    var originalEvent = e.data.originalEvent;
                    var ctrlKey = originalEvent.ctrlKey;
                    var shiftKey = originalEvent.shiftKey;
                    var rowIndex = mapped.unmap(rowIndexMapped);
                    if (isSingle || selection.isEmpty() || !(isNotSingle && (ctrlKey || shiftKey))) {
                        selection.clearAndAdd(rowIndex);
                    }
                    else if (ctrlKey) {
                        selection.toggle(rowIndex);
                    }
                    else if (shiftKey) {
                        var lastRowIndex = selection.last;
                        if (lastRowIndex != null) {
                            var sorter = data.sorter;
                            var filter = data.filter;
                            var rowIndexSorted = sorter.map(rowIndex);
                            var lastRowIndexSorted = sorter.map(lastRowIndex);
                            if (rowIndexSorted != null && lastRowIndexSorted != null) {
                                var istart = lastRowIndexSorted + 1;
                                var iend = rowIndexSorted + 1;
                                if (rowIndexSorted < lastRowIndexSorted) {
                                    istart = rowIndexSorted;
                                    iend = lastRowIndexSorted;
                                }
                                if (istart < iend) {
                                    var rowIndices = [];
                                    var indicesFiltered = filter.indices;
                                    var indicesSorted = sorter.indices;
                                    if (indicesFiltered) {
                                        if (indicesSorted) {
                                            for (var i = 0, imax = indicesFiltered.length; i < imax; ++i) {
                                                var indexFiltered = indicesFiltered[i];
                                                if (istart <= indexFiltered && indexFiltered < iend) {
                                                    rowIndices.push(indicesSorted[indexFiltered]);
                                                }
                                            }
                                        }
                                        else {
                                            for (var i = 0, imax = indicesFiltered.length; i < imax; ++i) {
                                                var indexFiltered = indicesFiltered[i];
                                                if (istart <= indexFiltered && indexFiltered < iend) {
                                                    rowIndices.push(indexFiltered);
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        if (indicesSorted) {
                                            for (var i = istart; i < iend; ++i) {
                                                rowIndices.push(indicesSorted[i]);
                                            }
                                        }
                                        else {
                                            for (var i = istart; i < iend; ++i) {
                                                rowIndices.push(i);
                                            }
                                        }
                                    }
                                    selection.addAll(rowIndices);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    DTableBody.prototype.onDblClick = function (e, interactionManager) {
        var result = false;
        var data = this._data;
        if (this.isActionable() && data.selection.type !== DTableDataSelectionType.NONE) {
            var local = UtilPointerEvent.toGlobal(e, interactionManager, DTableBody.WORK_ON_CLICK);
            this.toLocal(local, undefined, local, false);
            var x = local.x;
            var y = local.y;
            if (0 <= this.parent.position.y + y) {
                var rowIndexMapped = Math.floor(y / this._rowHeight);
                if (0 <= rowIndexMapped && rowIndexMapped < data.mapped.size()) {
                    var index = rowIndexMapped - this._rowIndexMappedStart;
                    var rows = this.children;
                    if (0 <= index && index < rows.length) {
                        var row = rows[index];
                        var cells = row.children;
                        var cellsLength = cells.length;
                        var columns = this._columns;
                        var columnsLength = columns.length;
                        for (var i = 0, imax = Math.min(cellsLength, columnsLength); i < imax; ++i) {
                            var cell = cells[cellsLength - i - 1];
                            if (cell.isActionable()) {
                                var dx = x - cell.position.x;
                                if (0 <= dx && dx <= cell.width) {
                                    cell.focus();
                                    if (cell instanceof DButtonBase) {
                                        cell.onClick(e);
                                    }
                                    result = true;
                                }
                            }
                        }
                    }
                }
            }
        }
        result = _super.prototype.onDblClick.call(this, e, interactionManager) || result;
        return result;
    };
    DTableBody.prototype.getType = function () {
        return "DTableBody";
    };
    Object.defineProperty(DTableBody.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    DTableBody.WORK_ON_CLICK = new Point();
    return DTableBody;
}(DBase));
export { DTableBody };
//# sourceMappingURL=d-table-body.js.map