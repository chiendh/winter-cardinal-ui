/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DTableBodyCellInputTreeInput } from "./d-table-body-cell-input-tree-input";
import { DTableBodyCellInputTreeMarker } from "./d-table-body-cell-input-tree-marker";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableCellState } from "./d-table-cell-state";
import { isNumber } from "./util/is-number";
var DTableBodyCellInputTree = /** @class */ (function (_super) {
    __extends(DTableBodyCellInputTree, _super);
    function DTableBodyCellInputTree(options) {
        var _this = _super.call(this, {
            weight: options.weight,
            width: options.width
        }) || this;
        _this._rowIndex = 0;
        _this._columnIndex = options.column.index;
        _this._columnData = options.column.data;
        // Marker
        var marker = new DTableBodyCellInputTreeMarker({
            visible: false,
            on: {
                active: function () {
                    _this.onMarkerActive();
                }
            }
        });
        _this._marker = marker;
        _this.addChild(marker);
        // Input
        var input = new DTableBodyCellInputTreeInput({
            weight: 1,
            text: options.text,
            editing: options.editing
        });
        _this._input = input;
        input.on("change", function (newValue, oldValue) {
            var row = _this._row;
            if (row !== undefined) {
                var rowIndex = _this._rowIndex;
                var columnIndex = _this._columnIndex;
                _this._columnData.setter(row, columnIndex, newValue);
                _this.emit("cellchange", newValue, oldValue, row, rowIndex, columnIndex, _this);
            }
        });
        _this.addChild(input);
        return _this;
    }
    DTableBodyCellInputTree.prototype.onMarkerActive = function () {
        if (this._marker.state & DTableCellState.HAS_CHILDREN) {
            var row = this.parent;
            if (row) {
                var body = row.parent;
                if (body) {
                    var data = body.data;
                    if (data && data.toggle) {
                        data.toggle(this._row);
                        this.emit("cellchange", null, null, this._row, this._rowIndex, this._columnIndex, this);
                    }
                }
            }
        }
    };
    DTableBodyCellInputTree.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    DTableBodyCellInputTree.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        this._input.visible = true;
        this._input.text = String(value);
        var marker = this._marker;
        if (isNumber(supplimental)) {
            var isOpened = !!(supplimental & 0x1);
            var hasChildren = !!(supplimental & 0x2);
            var level = (supplimental >> 2);
            if (hasChildren) {
                if (isOpened) {
                    marker.setStates(DTableCellState.HAS_CHILDREN | DTableCellState.OPENED, DBaseState.DISABLED);
                }
                else {
                    marker.setStates(DTableCellState.HAS_CHILDREN, DBaseState.DISABLED | DTableCellState.OPENED);
                }
            }
            else {
                if (isOpened) {
                    marker.setStates(DBaseState.DISABLED | DTableCellState.OPENED, DTableCellState.HAS_CHILDREN);
                }
                else {
                    marker.setStates(DBaseState.DISABLED, DTableCellState.HAS_CHILDREN | DTableCellState.OPENED);
                }
            }
            marker.show();
            marker.width = this.theme.getLevelPadding(level);
        }
        else {
            marker.setStates(DBaseState.DISABLED, DTableCellState.OPENED | DTableCellState.HAS_CHILDREN);
            marker.hide();
        }
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this._input, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellInputTree.prototype.unset = function () {
        this._row = undefined;
        this._input.visible = false;
        this._marker.hide();
    };
    DTableBodyCellInputTree.prototype.getType = function () {
        return "DTableBodyCellInputTree";
    };
    return DTableBodyCellInputTree;
}(DLayoutHorizontal));
export { DTableBodyCellInputTree };
//# sourceMappingURL=d-table-body-cell-input-tree.js.map