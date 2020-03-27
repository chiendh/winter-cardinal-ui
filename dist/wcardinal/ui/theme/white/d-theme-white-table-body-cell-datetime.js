/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDatetimes } from "../../d-picker-datetimes";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var formatter = function (value, caller) {
    return DPickerDatetimes.format(value, caller.getDatetimeMask());
};
var DThemeWhiteTableBodyCellDatetime = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellDatetime, _super);
    function DThemeWhiteTableBodyCellDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellDatetime.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeWhiteTableBodyCellDatetime.prototype.getTextValue = function (state) {
        return new Date();
    };
    DThemeWhiteTableBodyCellDatetime.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeWhiteTableBodyCellDatetime;
}(DThemeWhiteButton));
export { DThemeWhiteTableBodyCellDatetime };
//# sourceMappingURL=d-theme-white-table-body-cell-datetime.js.map