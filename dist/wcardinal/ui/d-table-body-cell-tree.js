/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBasePaddingAdjustable } from "./d-base-padding-adjustable";
import { DBaseState } from "./d-base-state";
import { DTableBodyCellButton } from "./d-table-body-cell-button";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableCellState } from "./d-table-cell-state";
import { isNumber } from "./util/is-number";
var DTableBodyCellTree = /** @class */ (function (_super) {
    __extends(DTableBodyCellTree, _super);
    function DTableBodyCellTree(options) {
        var _this = _super.call(this, options) || this;
        _this._padding = new DBasePaddingAdjustable(_this._padding);
        return _this;
    }
    DTableBodyCellTree.prototype.onActive = function (e) {
        this.emit("active", this);
        var row = this._row;
        if (row !== undefined) {
            var rowIndex = this._rowIndex;
            var columnIndex = this._columnIndex;
            this.emit("cellchange", null, null, row, rowIndex, columnIndex, this);
            var parent_1 = this.parent;
            if (parent_1) {
                var body = parent_1.parent;
                if (body) {
                    var data = body.data;
                    if (data && data.toggle) {
                        data.toggle(row);
                    }
                }
            }
        }
    };
    DTableBodyCellTree.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        this.text = value;
        var columnData = this._columnData;
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
        var adjuster = this._padding.adjuster;
        if (isNumber(supplimental)) {
            var isOpened = !!(supplimental & 0x1);
            var hasChildren = !!(supplimental & 0x2);
            var level = (supplimental >> 2);
            if (hasChildren) {
                if (isOpened) {
                    this.setStates(DTableCellState.HAS_CHILDREN | DTableCellState.OPENED, DBaseState.NONE);
                }
                else {
                    this.setStates(DTableCellState.HAS_CHILDREN, DTableCellState.OPENED);
                }
            }
            else {
                if (isOpened) {
                    this.setStates(DTableCellState.OPENED, DTableCellState.HAS_CHILDREN);
                }
                else {
                    this.setStates(DBaseState.NONE, DTableCellState.HAS_CHILDREN | DTableCellState.OPENED);
                }
            }
            adjuster.left = this.theme.getLevelPadding(level);
        }
        else {
            this.setStates(DBaseState.NONE, DTableCellState.OPENED | DTableCellState.HAS_CHILDREN);
            adjuster.left = 0;
        }
    };
    DTableBodyCellTree.prototype.getType = function () {
        return "DTableBodyCellTree";
    };
    return DTableBodyCellTree;
}(DTableBodyCellButton));
export { DTableBodyCellTree };
//# sourceMappingURL=d-table-body-cell-tree.js.map