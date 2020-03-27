/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDates } from "../../d-picker-dates";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var formatter = function (value) {
    return DPickerDates.format(value);
};
var DThemeWhiteTableBodyCellDate = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellDate, _super);
    function DThemeWhiteTableBodyCellDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellDate.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellDate.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellDate.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellDate.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellDate.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellDate.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellDate.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellDate.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellDate.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    DThemeWhiteTableBodyCellDate.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeWhiteTableBodyCellDate.prototype.getTextValue = function (state) {
        return new Date();
    };
    DThemeWhiteTableBodyCellDate.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeWhiteTableBodyCellDate;
}(DThemeWhiteButton));
export { DThemeWhiteTableBodyCellDate };
//# sourceMappingURL=d-theme-white-table-body-cell-date.js.map