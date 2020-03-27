/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DTableBodyCellActionDialog } from "./d-table-body-cell-action-dialog";
import { DTableBodyCellActionMenu } from "./d-table-body-cell-action-menu";
import { DTableBodyCellActionPromise } from "./d-table-body-cell-action-promise";
import { DTableBodyCellButton } from "./d-table-body-cell-button";
import { DTableBodyCellCheck } from "./d-table-body-cell-check";
import { DTableBodyCellColor } from "./d-table-body-cell-color";
import { DTableBodyCellDate } from "./d-table-body-cell-date";
import { DTableBodyCellDatetime } from "./d-table-body-cell-datetime";
import { DTableBodyCellIndex } from "./d-table-body-cell-index";
import { DTableBodyCellInputInteger } from "./d-table-body-cell-input-integer";
import { DTableBodyCellInputReal } from "./d-table-body-cell-input-real";
import { DTableBodyCellInputText } from "./d-table-body-cell-input-text";
import { DTableBodyCellInputTree } from "./d-table-body-cell-input-tree";
import { DTableBodyCellLink } from "./d-table-body-cell-link";
import { DTableBodyCellSelectDialog } from "./d-table-body-cell-select-dialog";
import { DTableBodyCellSelectMenu } from "./d-table-body-cell-select-menu";
import { DTableBodyCellSelectMultiple } from "./d-table-body-cell-select-multiple";
import { DTableBodyCellSelectPromise } from "./d-table-body-cell-select-promise";
import { DTableBodyCellText } from "./d-table-body-cell-text";
import { DTableBodyCellTime } from "./d-table-body-cell-time";
import { DTableBodyCellTree } from "./d-table-body-cell-tree";
import { DTableColumnType } from "./d-table-column";
import { DTableRow } from "./d-table-row";
var isBodyCell = function (target) {
    return (target != null && "set" in target);
};
var DTableBodyRow = /** @class */ (function (_super) {
    __extends(DTableBodyRow, _super);
    function DTableBodyRow(options) {
        var _this = _super.call(this, options) || this;
        _this._row = undefined;
        return _this;
    }
    DTableBodyRow.prototype.init = function (options) {
        var _this = this;
        this._onCellChangeBound = function (newValue, oldValue, row, rowIndex, columnIndex) {
            _this.emit("rowchange", newValue, oldValue, row, rowIndex, columnIndex, _this);
        };
        _super.prototype.init.call(this, options);
    };
    DTableBodyRow.prototype.newCell = function (column, columnIndex, columns, options) {
        var cellOptions = this.toCellOptions(column, columnIndex, options);
        if (column.editing.enable !== false) {
            var cell = this.newCellEditable(column, columnIndex, cellOptions);
            cell.on("cellchange", this._onCellChangeBound);
            return cell;
        }
        else {
            var cell = this.newCellUnediable(column, columnIndex, cellOptions);
            if (column.type === DTableColumnType.TREE) {
                cell.on("cellchange", this._onCellChangeBound);
            }
            else {
                cell.setReadOnly(true);
            }
            return cell;
        }
    };
    DTableBodyRow.prototype.newCellEditable = function (column, columnIndex, options) {
        switch (column.type) {
            case DTableColumnType.INDEX:
                return new DTableBodyCellIndex(options);
            case DTableColumnType.TEXT:
                return new DTableBodyCellInputText(options);
            case DTableColumnType.TREE:
                return new DTableBodyCellInputTree(options);
            case DTableColumnType.INTEGER:
                return new DTableBodyCellInputInteger(options);
            case DTableColumnType.REAL:
                return new DTableBodyCellInputReal(options);
            case DTableColumnType.CHECK:
            case DTableColumnType.CHECK_SINGLE:
                return new DTableBodyCellCheck(options);
            case DTableColumnType.COLOR:
                return new DTableBodyCellColor(options);
            case DTableColumnType.BUTTON:
                return new DTableBodyCellButton(options);
            case DTableColumnType.LINK:
                return new DTableBodyCellLink(options);
            case DTableColumnType.SELECT:
                return this.newCellSelect(column, options);
            case DTableColumnType.ACTION:
                return this.newCellAction(column, options);
            case DTableColumnType.DATE:
                return new DTableBodyCellDate(options);
            case DTableColumnType.DATETIME:
                return new DTableBodyCellDatetime(options);
            case DTableColumnType.TIME:
                return new DTableBodyCellTime(options);
            default:
                return new DTableBodyCellText(options);
        }
    };
    DTableBodyRow.prototype.newCellUnediable = function (column, columnIndex, options) {
        switch (column.type) {
            case DTableColumnType.INDEX:
                return new DTableBodyCellIndex(options);
            case DTableColumnType.TEXT:
                return new DTableBodyCellText(options);
            case DTableColumnType.TREE:
                return new DTableBodyCellTree(options);
            case DTableColumnType.INTEGER:
                return new DTableBodyCellText(options);
            case DTableColumnType.REAL:
                return new DTableBodyCellText(options);
            case DTableColumnType.CHECK:
            case DTableColumnType.CHECK_SINGLE:
                return new DTableBodyCellCheck(options);
            case DTableColumnType.COLOR:
                return new DTableBodyCellColor(options);
            case DTableColumnType.BUTTON:
                return new DTableBodyCellButton(options);
            case DTableColumnType.LINK:
                return new DTableBodyCellLink(options);
            case DTableColumnType.SELECT:
                return this.newCellSelect(column, options);
            case DTableColumnType.ACTION:
                return this.newCellAction(column, options);
            case DTableColumnType.DATE:
                return new DTableBodyCellDate(options);
            case DTableColumnType.DATETIME:
                return new DTableBodyCellDatetime(options);
            case DTableColumnType.TIME:
                return new DTableBodyCellTime(options);
            default:
                return new DTableBodyCellText(options);
        }
    };
    DTableBodyRow.prototype.newCellSelect = function (column, options) {
        var selecting = column.selecting;
        if (selecting.menu != null) {
            return new DTableBodyCellSelectMenu(options);
        }
        else if (selecting.multiple != null) {
            return new DTableBodyCellSelectMultiple(options);
        }
        else if (selecting.dialog != null) {
            return new DTableBodyCellSelectDialog(options);
        }
        else if (selecting.promise != null) {
            return new DTableBodyCellSelectPromise(options);
        }
        else {
            return new DTableBodyCellText(options);
        }
    };
    DTableBodyRow.prototype.newCellAction = function (column, options) {
        var selecting = column.selecting;
        if (selecting.menu != null) {
            return new DTableBodyCellActionMenu(options);
        }
        else if (selecting.dialog != null) {
            return new DTableBodyCellActionDialog(options);
        }
        else if (selecting.promise != null) {
            return new DTableBodyCellActionPromise(options);
        }
        else {
            return new DTableBodyCellText(options);
        }
    };
    DTableBodyRow.prototype.toCellOptions = function (column, columnIndex, options) {
        var result = (column.body || options.cell);
        if (result != null) {
            result.weight = column.weight;
            result.width = column.width;
            var text = result.text = result.text || {};
            var align = text.align = text.align || {};
            align.horizontal = column.align;
            text.formatter = column.formatter;
            result.column = {
                index: columnIndex,
                data: column
            };
            if (column.selecting.menu) {
                result.menu = column.selecting.menu;
            }
            if (column.selecting.multiple) {
                result.menu = column.selecting.menu;
            }
        }
        else {
            result = {
                weight: column.weight,
                width: column.width,
                text: {
                    formatter: column.formatter,
                    align: {
                        horizontal: column.align
                    }
                },
                column: {
                    index: columnIndex,
                    data: column
                },
                menu: column.selecting.menu || column.selecting.multiple
            };
        }
        if (column.editing.enable !== false) {
            var editing = result.editing = result.editing || {};
            editing.formatter = editing.formatter || column.editing.formatter;
            editing.unformatter = editing.unformatter || column.editing.unformatter;
            editing.validator = editing.validator || column.editing.validator;
        }
        if (column.link) {
            result.link = column.link;
        }
        return result;
    };
    DTableBodyRow.prototype.getType = function () {
        return "DTableBodyRow";
    };
    DTableBodyRow.prototype.set = function (row, supplimental, rowIndex, forcibly) {
        if (forcibly || this._row !== row) {
            this._row = row;
            var cells = this.children;
            var cellsLength = cells.length;
            var columns = this._columns;
            var columnsLength = columns.length;
            for (var i = 0, imax = Math.min(columnsLength, cellsLength); i < imax; ++i) {
                var cell = cells[i];
                var column = columns[i];
                if (isBodyCell(cell)) {
                    cell.set(column.getter(row, i), row, supplimental, rowIndex, i, forcibly);
                }
            }
            this.emit("set", row, rowIndex, this);
        }
    };
    DTableBodyRow.prototype.unset = function () {
        if (this._row !== undefined) {
            this._row = undefined;
            var cells = this.children;
            for (var i = 0, imax = cells.length; i < imax; ++i) {
                var cell = cells[i];
                if (isBodyCell(cell)) {
                    cell.unset();
                }
            }
            this.emit("unset", this);
        }
    };
    DTableBodyRow.prototype.getContentPositionX = function () {
        var parent = this.parent;
        if (parent) {
            var content = parent.parent;
            if (content) {
                return content.position.x;
            }
        }
        return 0;
    };
    return DTableBodyRow;
}(DTableRow));
export { DTableBodyRow };
//# sourceMappingURL=d-table-body-row.js.map