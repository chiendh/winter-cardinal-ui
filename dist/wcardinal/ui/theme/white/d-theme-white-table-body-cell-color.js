/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteButtonColor } from "./d-theme-white-button-color";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var DThemeWhiteTableBodyCellColor = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellColor, _super);
    function DThemeWhiteTableBodyCellColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellColor.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellColor.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellColor.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellColor.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellColor.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellColor.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellColor.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellColor.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellColor.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    return DThemeWhiteTableBodyCellColor;
}(DThemeWhiteButtonColor));
export { DThemeWhiteTableBodyCellColor };
//# sourceMappingURL=d-theme-white-table-body-cell-color.js.map