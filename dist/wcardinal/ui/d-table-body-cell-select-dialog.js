/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DButton } from "./d-button";
import { DTableBodyCells } from "./d-table-body-cells";
var DTableBodyCellSelectDialog = /** @class */ (function (_super) {
    __extends(DTableBodyCellSelectDialog, _super);
    function DTableBodyCellSelectDialog(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellSelectDialog.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        var column = options.column;
        this._rowIndex = 0;
        this._columnIndex = column.index;
        this._columnData = column.data;
        this._isSyncEnabled = this.toSync(this.theme, options);
        var selecting = column.data.selecting;
        var dialog = selecting.dialog;
        if (dialog != null) {
            this.on("active", function () {
                selecting.setter(dialog, _this.text);
                dialog.open().then(function () {
                    var newValue = selecting.getter(dialog);
                    if (_this._isSyncEnabled) {
                        var oldValue = _this.text;
                        if (newValue !== oldValue) {
                            _this.text = newValue;
                            _this.onCellChange(newValue, oldValue);
                        }
                    }
                    else {
                        _this.onCellChange(newValue, null);
                    }
                });
            });
        }
    };
    DTableBodyCellSelectDialog.prototype.onCellChange = function (newValue, oldValue) {
        var row = this._row;
        if (row !== undefined) {
            var rowIndex = this._rowIndex;
            var columnIndex = this._columnIndex;
            this._columnData.setter(row, columnIndex, newValue);
            this.emit("cellchange", newValue, oldValue, row, rowIndex, columnIndex, this);
        }
    };
    DTableBodyCellSelectDialog.prototype.toSync = function (theme, options) {
        return (options && options.sync != null ? options.sync : theme.isSyncEnabled());
    };
    DTableBodyCellSelectDialog.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    Object.defineProperty(DTableBodyCellSelectDialog.prototype, "value", {
        get: function () {
            return this.text;
        },
        set: function (value) {
            this.text = value;
        },
        enumerable: true,
        configurable: true
    });
    DTableBodyCellSelectDialog.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        if (forcibly) {
            this._textValue = value;
            this._textValueComputed = value;
            this.onTextChange();
            this.createOrUpdateText();
        }
        else {
            this.text = value;
        }
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellSelectDialog.prototype.unset = function () {
        this._row = undefined;
    };
    DTableBodyCellSelectDialog.prototype.getType = function () {
        return "DTableBodyCellSelectDialog";
    };
    return DTableBodyCellSelectDialog;
}(DButton));
export { DTableBodyCellSelectDialog };
//# sourceMappingURL=d-table-body-cell-select-dialog.js.map