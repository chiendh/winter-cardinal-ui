/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var DThemeWhiteTableBodyCellText = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellText, _super);
    function DThemeWhiteTableBodyCellText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellText.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellText.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellText.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellText.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellText.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellText.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellText.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellText.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellText.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    DThemeWhiteTableBodyCellText.prototype.getImageTintColor = function (state) {
        return DThemeWhiteTableBodyCells.getImageTintColor(state);
    };
    DThemeWhiteTableBodyCellText.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeWhiteTableBodyCellText.prototype.getPaddingRight = function () {
        return 10;
    };
    return DThemeWhiteTableBodyCellText;
}(DThemeWhiteImageBase));
export { DThemeWhiteTableBodyCellText };
//# sourceMappingURL=d-theme-white-table-body-cell-text.js.map