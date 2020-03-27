/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DTableCellState } from "./d-table-cell-state";
import { DTableRowState } from "./d-table-row-state";
var DTableRow = /** @class */ (function (_super) {
    __extends(DTableRow, _super);
    function DTableRow(options) {
        return _super.call(this, options) || this;
    }
    DTableRow.prototype.init = function (options) {
        var _a;
        _super.prototype.init.call(this, options);
        // State
        var even = !!options.even;
        if (even) {
            this.setState(DTableRowState.EVEN, true);
        }
        // Frozen
        var frozen = this._frozen = (_a = options.frozen) !== null && _a !== void 0 ? _a : 0;
        // Cells
        var columns = this._columns = options.columns || [];
        var iend = this.toIndexEnd(columns);
        for (var i = 0, imax = columns.length; i < imax; ++i) {
            var cell = this.newCell(columns[i], i, columns, options);
            var cellState = this.toCellState(even, i, iend, frozen);
            if (cellState) {
                cell.setState(cellState, true);
            }
            this.addChild(cell);
        }
    };
    DTableRow.prototype.toCellState = function (even, index, iend, frozen) {
        return (even ? DTableCellState.EVEN : DBaseState.NONE) |
            (index === 0 ? DTableCellState.START : DBaseState.NONE) |
            (index === iend ? DTableCellState.END : DBaseState.NONE) |
            (index < frozen ? DTableCellState.FROZEN : DBaseState.NONE) |
            (index === frozen - 1 ? DTableCellState.FROZEN_END : DBaseState.NONE);
    };
    DTableRow.prototype.toIndexEnd = function (columns) {
        var imax = columns.length;
        for (var i = 0; i < imax; ++i) {
            var column = columns[i];
            if (column.weight !== undefined) {
                return imax - 1;
            }
        }
        return imax;
    };
    DTableRow.prototype.onRefit = function () {
        _super.prototype.onRefit.call(this);
        this.resetFrozenCellPosition();
    };
    DTableRow.prototype.updateFrozenCellPosition = function (x) {
        var columns = this._columns;
        var cells = this.children;
        var frozen = this._frozen;
        for (var i = 0; i < frozen; ++i) {
            var column = columns[i];
            var cell = cells[i];
            cell.position.x = -x + column.offset;
        }
    };
    DTableRow.prototype.resetFrozenCellPosition = function () {
        var columns = this._columns;
        var cells = this.children;
        var frozen = this._frozen;
        var x = this.getContentPositionX();
        for (var i = 0; i < frozen; ++i) {
            var column = columns[i];
            var cell = cells[i];
            column.offset = cell.position.x;
            cell.position.x = -x + column.offset;
        }
    };
    DTableRow.prototype.getClippingRect = function (target, result) {
        _super.prototype.getClippingRect.call(this, target, result);
        var frozen = this._frozen;
        if (0 < frozen && target.parent === this) {
            var cells = this.children;
            var cellIndex = cells.indexOf(target);
            if (0 <= cellIndex) {
                if (frozen <= cellIndex) {
                    var previous = cells[cellIndex - 1];
                    var shiftX = previous.position.x + previous.width;
                    result.x += shiftX;
                    result.width -= shiftX;
                }
            }
        }
    };
    DTableRow.prototype.render = function (renderer) {
        if (this.visible && 0 < this.worldAlpha && this.renderable) {
            this.renderBefore(renderer);
            this._render(renderer);
            var children = this.children;
            for (var i = children.length - 1; 0 <= i; --i) {
                children[i].render(renderer);
            }
            this.renderAfter(renderer);
        }
    };
    DTableRow.prototype.getType = function () {
        return "DTableRow";
    };
    return DTableRow;
}(DLayoutHorizontal));
export { DTableRow };
//# sourceMappingURL=d-table-row.js.map