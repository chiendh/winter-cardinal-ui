/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DImageBase } from "./d-image-base";
import { DTableBodyCells } from "./d-table-body-cells";
var DTableBodyCellIndex = /** @class */ (function (_super) {
    __extends(DTableBodyCellIndex, _super);
    function DTableBodyCellIndex(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellIndex.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this._columnIndex = options.column.index;
        this._columnData = options.column.data;
    };
    DTableBodyCellIndex.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    DTableBodyCellIndex.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this.text = rowIndex;
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellIndex.prototype.unset = function () {
        // DO NOTHING
    };
    DTableBodyCellIndex.prototype.getType = function () {
        return "DTableBodyCellIndex";
    };
    return DTableBodyCellIndex;
}(DImageBase));
export { DTableBodyCellIndex };
//# sourceMappingURL=d-table-body-cell-index.js.map