/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteButtonCheck } from "./d-theme-white-button-check";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var DThemeWhiteTableBodyCellCheck = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellCheck, _super);
    function DThemeWhiteTableBodyCellCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellCheck.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellCheck.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellCheck.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellCheck.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellCheck.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellCheck.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellCheck.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellCheck.prototype.getImageTintColor = function (state) {
        return DThemeWhiteTableBodyCells.getImageTintColor(state);
    };
    DThemeWhiteTableBodyCellCheck.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellCheck.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    return DThemeWhiteTableBodyCellCheck;
}(DThemeWhiteButtonCheck));
export { DThemeWhiteTableBodyCellCheck };
//# sourceMappingURL=d-theme-white-table-body-cell-check.js.map