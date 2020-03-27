/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DInputText } from "./d-input-text";
import { DTableBodyCells } from "./d-table-body-cells";
var DTableBodyCellInputText = /** @class */ (function (_super) {
    __extends(DTableBodyCellInputText, _super);
    function DTableBodyCellInputText(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellInputText.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._rowIndex = 0;
        this._columnIndex = options.column.index;
        this._columnData = options.column.data;
        this.on("change", function (newValue, oldValue) {
            var row = _this._row;
            if (row !== undefined) {
                var rowIndex = _this._rowIndex;
                var columnIndex = _this._columnIndex;
                _this._columnData.setter(row, columnIndex, newValue);
                _this.emit("cellchange", newValue, oldValue, row, rowIndex, columnIndex, _this);
            }
        });
    };
    DTableBodyCellInputText.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    DTableBodyCellInputText.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        this.text = String(value);
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellInputText.prototype.unset = function () {
        this._row = undefined;
    };
    DTableBodyCellInputText.prototype.getType = function () {
        return "DTableBodyCellInputText";
    };
    return DTableBodyCellInputText;
}(DInputText));
export { DTableBodyCellInputText };
//# sourceMappingURL=d-table-body-cell-input-text.js.map