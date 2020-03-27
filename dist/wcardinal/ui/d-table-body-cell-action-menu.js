/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DDropdown } from "./d-dropdown";
import { DTableBodyCells } from "./d-table-body-cells";
var DTableBodyCellActionMenu = /** @class */ (function (_super) {
    __extends(DTableBodyCellActionMenu, _super);
    function DTableBodyCellActionMenu(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellActionMenu.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        var column = options.column;
        this._rowIndex = 0;
        this._columnIndex = column.index;
        this._columnData = column.data;
        this._onSelectedBound = function (selected) {
            _this.onSelected(selected);
        };
        this._onClosedBound = function () {
            _this.onClosed();
        };
    };
    DTableBodyCellActionMenu.prototype.onSelected = function (selected) {
        var columnData = this._columnData;
        var row = this._row;
        if (row !== undefined) {
            var rowIndex = this._rowIndex;
            var columnIndex = this._columnIndex;
            columnData.setter(row, columnIndex, selected);
            this.emit("cellchange", selected, null, row, rowIndex, columnIndex, this);
        }
    };
    DTableBodyCellActionMenu.prototype.onClosed = function () {
        var menu = this.menu;
        menu.off("select", this._onSelectedBound);
        menu.off("close", this._onClosedBound);
    };
    DTableBodyCellActionMenu.prototype.start = function () {
        var menu = this.menu;
        menu.on("select", this._onSelectedBound);
        menu.on("close", this._onClosedBound);
        _super.prototype.start.call(this);
    };
    DTableBodyCellActionMenu.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    DTableBodyCellActionMenu.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        this.text = value;
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellActionMenu.prototype.unset = function () {
        this._row = undefined;
    };
    DTableBodyCellActionMenu.prototype.getType = function () {
        return "DTableBodyCellActionMenu";
    };
    return DTableBodyCellActionMenu;
}(DDropdown));
export { DTableBodyCellActionMenu };
//# sourceMappingURL=d-table-body-cell-action-menu.js.map