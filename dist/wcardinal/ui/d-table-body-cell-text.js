/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DImageBase } from "./d-image-base";
import { DTableBodyCells } from "./d-table-body-cells";
var DTableBodyCellText = /** @class */ (function (_super) {
    __extends(DTableBodyCellText, _super);
    function DTableBodyCellText(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellText.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this._rowIndex = 0;
        this._columnIndex = options.column.index;
        this._columnData = options.column.data;
    };
    DTableBodyCellText.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    DTableBodyCellText.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        this.text = value;
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellText.prototype.unset = function () {
        this._row = undefined;
    };
    DTableBodyCellText.prototype.getType = function () {
        return "DTableBodyCellText";
    };
    return DTableBodyCellText;
}(DImageBase));
export { DTableBodyCellText };
//# sourceMappingURL=d-table-body-cell-text.js.map