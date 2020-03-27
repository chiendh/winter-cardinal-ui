/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DTableHeaderCell } from "./d-table-header-cell";
import { DTableRow } from "./d-table-row";
var DTableHeader = /** @class */ (function (_super) {
    __extends(DTableHeader, _super);
    function DTableHeader(options) {
        return _super.call(this, options) || this;
    }
    DTableHeader.prototype.init = function (options) {
        var _a;
        this._table = options.table || null;
        this._offset = this.transform.position.y = options.offset || 0;
        this._frozen = (_a = options.frozen) !== null && _a !== void 0 ? _a : 0;
        _super.prototype.init.call(this, options);
    };
    Object.defineProperty(DTableHeader.prototype, "table", {
        get: function () {
            return this._table;
        },
        enumerable: true,
        configurable: true
    });
    DTableHeader.prototype.onParentMove = function (x, y) {
        _super.prototype.onParentMove.call(this, x, y);
        this.transform.position.y = -y + this._offset;
        this.updateFrozenCellPosition(x);
    };
    DTableHeader.prototype.getContentPositionX = function () {
        var content = this.parent;
        if (content) {
            return content.position.x;
        }
        return 0;
    };
    DTableHeader.prototype.newCell = function (column, columnIndex, columns, options) {
        return new DTableHeaderCell(this.toCellOptions(column, options));
    };
    DTableHeader.prototype.toCellOptions = function (column, options) {
        var result = column.header || options.cell;
        if (result != null) {
            if (result.weight === undefined) {
                result.weight = column.weight;
            }
            if (result.width === undefined) {
                result.width = column.width;
            }
            if (result.text === undefined) {
                result.text = {
                    value: column.label
                };
            }
            else if (result.text.value === undefined) {
                result.text.value = column.label;
            }
            if (result.header === undefined) {
                result.header = this;
            }
            if (result.column === undefined) {
                result.column = column;
            }
            return result;
        }
        else {
            return {
                weight: column.weight,
                width: column.width,
                text: {
                    value: column.label
                },
                header: this,
                column: column
            };
        }
    };
    DTableHeader.prototype.getType = function () {
        return "DTableHeader";
    };
    return DTableHeader;
}(DTableRow));
export { DTableHeader };
//# sourceMappingURL=d-table-header.js.map