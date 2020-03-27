/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DTableCategoryCell } from "./d-table-category-cell";
import { DTableRow } from "./d-table-row";
var DTableCategory = /** @class */ (function (_super) {
    __extends(DTableCategory, _super);
    function DTableCategory(options) {
        return _super.call(this, options) || this;
    }
    DTableCategory.prototype.init = function (options) {
        this._offset = this.transform.position.y = options.offset || 0;
        _super.prototype.init.call(this, options);
    };
    DTableCategory.prototype.onParentMove = function (x, y) {
        _super.prototype.onParentMove.call(this, x, y);
        this.transform.position.y = -y + this._offset;
        this.updateFrozenCellPosition(x);
    };
    DTableCategory.prototype.getContentPositionX = function () {
        var content = this.parent;
        if (content) {
            return content.position.x;
        }
        return 0;
    };
    DTableCategory.prototype.newCell = function (column, columnIndex, columns, options) {
        return new DTableCategoryCell(this.toCellOptions(column, options));
    };
    DTableCategory.prototype.toCellOptions = function (column, options) {
        var result = options.cell;
        if (result) {
            result.weight = column.weight;
            result.width = column.width;
            var text = result.text = result.text || {};
            text.value = text.value || column.label;
            return result;
        }
        else {
            return {
                weight: column.weight,
                width: column.width,
                text: {
                    value: column.label
                }
            };
        }
    };
    DTableCategory.prototype.getType = function () {
        return "DTableCategory";
    };
    return DTableCategory;
}(DTableRow));
export { DTableCategory };
//# sourceMappingURL=d-table-category.js.map