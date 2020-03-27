/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var formatter = function (index) {
    return String(Number(index) + 1);
};
var DThemeWhiteTableBodyCellIndex = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellIndex, _super);
    function DThemeWhiteTableBodyCellIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellIndex.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellIndex.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellIndex.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellIndex.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellIndex.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellIndex.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellIndex.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellIndex.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellIndex.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    DThemeWhiteTableBodyCellIndex.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeWhiteTableBodyCellIndex.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeWhiteTableBodyCellIndex.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeWhiteTableBodyCellIndex.prototype.getTextValue = function (state) {
        return 0;
    };
    DThemeWhiteTableBodyCellIndex.prototype.newTextValue = function () {
        return 0;
    };
    return DThemeWhiteTableBodyCellIndex;
}(DThemeWhiteImageBase));
export { DThemeWhiteTableBodyCellIndex };
//# sourceMappingURL=d-theme-white-table-body-cell-index.js.map