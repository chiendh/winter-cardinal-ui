/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DButton } from "./d-button";
import { DDialogDatetime } from "./d-dialog-datetime";
import { DDialogDatetimes } from "./d-dialog-datetimes";
import { DPickerDatetimes } from "./d-picker-datetimes";
import { DTableBodyCells } from "./d-table-body-cells";
import { isNumber } from "./util/is-number";
var DTableBodyCellDatetime = /** @class */ (function (_super) {
    __extends(DTableBodyCellDatetime, _super);
    function DTableBodyCellDatetime(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellDatetime.prototype.init = function (options) {
        var _this = this;
        this._dialogOptions = options.dialog;
        this._datetimeMask = DPickerDatetimes.toMask(options && options.dialog && options.dialog.picker);
        this._columnIndex = options.column.index;
        this._columnData = options.column.data;
        _super.prototype.init.call(this, options);
        this.on("active", function () {
            var currentTime = _this._textValueComputed.getTime();
            var dialog = _this.dialog;
            dialog.current = new Date(currentTime);
            dialog.new = new Date(currentTime);
            dialog.page = new Date(currentTime);
            dialog.open().then(function () {
                var newValue = dialog.new;
                var oldValue = dialog.current;
                _this.text = new Date(newValue.getTime());
                var row = _this._row;
                if (row !== undefined) {
                    var rowIndex = _this._rowIndex;
                    var columnIndex = _this._columnIndex;
                    _this._columnData.setter(row, columnIndex, newValue);
                    _this.emit("cellchange", newValue, oldValue, row, rowIndex, columnIndex, _this);
                }
            });
        });
    };
    DTableBodyCellDatetime.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    DTableBodyCellDatetime.prototype.getDatetimeMask = function () {
        return this._datetimeMask;
    };
    Object.defineProperty(DTableBodyCellDatetime.prototype, "dialog", {
        get: function () {
            var dialog = this._dialog;
            if (dialog == null) {
                var dialogOptions = this._dialogOptions;
                if (dialogOptions != null) {
                    dialog = new DDialogDatetime(this._dialogOptions);
                }
                else {
                    dialog = DDialogDatetimes.getInstance();
                }
                this._dialog = dialog;
            }
            return dialog;
        },
        enumerable: true,
        configurable: true
    });
    DTableBodyCellDatetime.prototype.set = function (value, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        if (value instanceof Date) {
            if (forcibly) {
                this._textValue = value;
                this._textValueComputed = value;
                this.onTextChange();
                this.createOrUpdateText();
            }
            else {
                this.text = value;
            }
        }
        else if (isNumber(value)) {
            var textValueComputed = this._textValueComputed;
            if (textValueComputed.getTime() !== value) {
                textValueComputed.setTime(value);
                this.onTextChange();
                this.createOrUpdateText();
            }
        }
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellDatetime.prototype.unset = function () {
        this._row = undefined;
    };
    DTableBodyCellDatetime.prototype.getType = function () {
        return "DTableBodyCellDatetime";
    };
    return DTableBodyCellDatetime;
}(DButton));
export { DTableBodyCellDatetime };
//# sourceMappingURL=d-table-body-cell-datetime.js.map