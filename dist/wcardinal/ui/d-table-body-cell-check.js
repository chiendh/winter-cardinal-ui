/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DButtonCheck } from "./d-button-check";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumnType } from "./d-table-column";
var DTableBodyCellCheck = /** @class */ (function (_super) {
    __extends(DTableBodyCellCheck, _super);
    function DTableBodyCellCheck(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellCheck.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._rowIndex = 0;
        this._columnIndex = options.column.index;
        this._columnData = options.column.data;
        this.on("active", function () {
            _this.onChange(true);
        });
        this.on("inactive", function () {
            _this.onChange(false);
        });
    };
    DTableBodyCellCheck.prototype.onChangeSingle = function (rowIndex, columnIndex, columnData) {
        var _this = this;
        var tableBodyRow = this.parent;
        if (tableBodyRow) {
            var tableBody = tableBodyRow.parent;
            if (tableBody) {
                var isChanged_1 = false;
                var getter_1 = columnData.getter;
                var setter_1 = columnData.setter;
                var data = tableBody.data;
                data.each(function (row, index) {
                    if (rowIndex !== index && getter_1(row, columnIndex)) {
                        setter_1(row, columnIndex, false);
                        isChanged_1 = true;
                        _this.emit("cellchange", false, true, row, index, columnIndex, _this);
                        return false;
                    }
                    return true;
                });
                if (isChanged_1) {
                    tableBody.update(true);
                }
            }
        }
    };
    DTableBodyCellCheck.prototype.onChange = function (newValue) {
        var row = this._row;
        if (row !== undefined) {
            var rowIndex = this._rowIndex;
            var columnIndex = this._columnIndex;
            var columnData = this._columnData;
            columnData.setter(row, columnIndex, newValue);
            this.emit("cellchange", newValue, !newValue, row, rowIndex, columnIndex, this);
            if (newValue && columnData.type === DTableColumnType.CHECK_SINGLE) {
                this.onChangeSingle(rowIndex, columnIndex, columnData);
            }
        }
    };
    DTableBodyCellCheck.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    DTableBodyCellCheck.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        this.setActive(!!value);
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellCheck.prototype.unset = function () {
        this._row = undefined;
    };
    DTableBodyCellCheck.prototype.getType = function () {
        return "DTableBodyCellCheck";
    };
    return DTableBodyCellCheck;
}(DButtonCheck));
export { DTableBodyCellCheck };
//# sourceMappingURL=d-table-body-cell-check.js.map