/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DSelectMultiple } from "./d-select-multiple";
import { DTableBodyCells } from "./d-table-body-cells";
var DTableBodyCellSelectMultiple = /** @class */ (function (_super) {
    __extends(DTableBodyCellSelectMultiple, _super);
    function DTableBodyCellSelectMultiple(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellSelectMultiple.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        var column = options.column;
        this._rowIndex = 0;
        this._columnIndex = column.index;
        this._columnData = column.data;
        this.on("change", function (newValues, oldValues) {
            var row = _this._row;
            if (row !== undefined) {
                var rowIndex = _this._rowIndex;
                var columnIndex = _this._columnIndex;
                _this._columnData.setter(row, columnIndex, newValues);
                _this.emit("cellchange", newValues, oldValues, row, rowIndex, columnIndex, _this);
            }
        });
    };
    DTableBodyCellSelectMultiple.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    DTableBodyCellSelectMultiple.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        this.values = value;
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellSelectMultiple.prototype.unset = function () {
        this._row = undefined;
    };
    DTableBodyCellSelectMultiple.prototype.getType = function () {
        return "DTableBodyCellSelectMultiple";
    };
    return DTableBodyCellSelectMultiple;
}(DSelectMultiple));
export { DTableBodyCellSelectMultiple };
//# sourceMappingURL=d-table-body-cell-select-multiple.js.map