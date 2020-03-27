/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DButtonColor } from "./d-button-color";
import { DTableBodyCells } from "./d-table-body-cells";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";
var clone = function (value) {
    return {
        color: value.color,
        alpha: value.alpha
    };
};
var hasColor = function (value) {
    return ("color" in value);
};
var hasAlpha = function (value) {
    return ("alpha" in value);
};
var DTableBodyCellColor = /** @class */ (function (_super) {
    __extends(DTableBodyCellColor, _super);
    function DTableBodyCellColor(options) {
        return _super.call(this, options) || this;
    }
    DTableBodyCellColor.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._rowIndex = 0;
        this._columnIndex = options.column.index;
        this._columnData = options.column.data;
        this.on("change", function (newValue, oldValue) {
            var row = _this._row;
            if (row !== undefined) {
                var newValueCloned = clone(newValue);
                var oldValueCloned = clone(oldValue);
                var rowIndex = _this._rowIndex;
                var columnIndex = _this._columnIndex;
                _this._columnData.setter(row, columnIndex, newValueCloned);
                _this.emit("cellchange", newValueCloned, oldValueCloned, row, rowIndex, columnIndex, _this);
            }
        });
    };
    DTableBodyCellColor.prototype.mergeState = function (stateLocal, stateParent) {
        return _super.prototype.mergeState.call(this, stateLocal, stateParent) |
            (stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE);
    };
    DTableBodyCellColor.prototype.set = function (newValue, row, supplimental, rowIndex, columnIndex, forcibly) {
        this._row = row;
        this._rowIndex = rowIndex;
        var value = this._value;
        if (isNumber(newValue)) {
            value.color = newValue;
            value.alpha = 1;
        }
        else if (isString(newValue)) {
            var parsed = Number(newValue);
            if (parsed === parsed) {
                value.color = parsed;
            }
            else {
                value.color = 0xffffff;
            }
            value.alpha = 1;
        }
        else if (newValue != null) {
            if (hasColor(newValue)) {
                value.color = Number(newValue.color);
            }
            else {
                value.color = 0xffffff;
            }
            if (hasAlpha(newValue)) {
                value.alpha = Number(newValue.alpha);
            }
            else {
                value.alpha = 1;
            }
        }
        else {
            value.color = 0xffffff;
            value.alpha = 1;
        }
        var columnData = this._columnData;
        DTableBodyCells.setReadOnly(this, row, columnIndex, columnData);
        DTableBodyCells.setRenderable(this, row, columnIndex, columnData);
    };
    DTableBodyCellColor.prototype.unset = function () {
        this._row = undefined;
    };
    DTableBodyCellColor.prototype.getType = function () {
        return "DTableBodyCellColor";
    };
    return DTableBodyCellColor;
}(DButtonColor));
export { DTableBodyCellColor };
//# sourceMappingURL=d-table-body-cell-color.js.map