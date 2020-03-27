/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DTableBodyCells = /** @class */ (function () {
    function DTableBodyCells() {
    }
    DTableBodyCells.setReadOnly = function (target, row, columnIndex, columnData) {
        target.setReadOnly(this.toReadOnly(row, columnIndex, columnData));
    };
    DTableBodyCells.setRenderable = function (target, row, columnIndex, columnData) {
        var renderable = this.toRenderable(row, columnIndex, columnData);
        target.renderable = renderable;
        target.setDisabled(!renderable);
    };
    DTableBodyCells.toReadOnly = function (row, columnIndex, columnData) {
        var enable = columnData.editing.enable;
        if (enable === true) {
            return false;
        }
        else if (enable === false) {
            return true;
        }
        else {
            return !enable(row, columnIndex);
        }
    };
    DTableBodyCells.toRenderable = function (row, columnIndex, columnData) {
        var renderable = columnData.renderable;
        if (renderable === true) {
            return true;
        }
        else if (renderable === false) {
            return false;
        }
        else {
            return renderable(row, columnIndex);
        }
    };
    return DTableBodyCells;
}());
export { DTableBodyCells };
//# sourceMappingURL=d-table-body-cells.js.map