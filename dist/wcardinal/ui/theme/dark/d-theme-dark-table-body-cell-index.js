/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
var formatter = function (index) {
    return String(Number(index) + 1);
};
var DThemeDarkTableBodyCellIndex = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellIndex, _super);
    function DThemeDarkTableBodyCellIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellIndex.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellIndex.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellIndex.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellIndex.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellIndex.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellIndex.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellIndex.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellIndex.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellIndex.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellIndex.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeDarkTableBodyCellIndex.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeDarkTableBodyCellIndex.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeDarkTableBodyCellIndex.prototype.getTextValue = function (state) {
        return 0;
    };
    DThemeDarkTableBodyCellIndex.prototype.newTextValue = function () {
        return 0;
    };
    return DThemeDarkTableBodyCellIndex;
}(DThemeDarkImageBase));
export { DThemeDarkTableBodyCellIndex };
//# sourceMappingURL=d-theme-dark-table-body-cell-index.js.map