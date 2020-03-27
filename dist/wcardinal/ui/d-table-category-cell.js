/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DImage } from "./d-image";
var DTableCategoryCell = /** @class */ (function (_super) {
    __extends(DTableCategoryCell, _super);
    function DTableCategoryCell(options) {
        return _super.call(this, options) || this;
    }
    DTableCategoryCell.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
    };
    DTableCategoryCell.prototype.getType = function () {
        return "DTableCategoryCell";
    };
    return DTableCategoryCell;
}(DImage));
export { DTableCategoryCell };
//# sourceMappingURL=d-table-category-cell.js.map