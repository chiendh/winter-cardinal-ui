/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerTimes } from "../../d-picker-times";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var formatter = function (value, caller) {
    return DPickerTimes.format(value, caller.getDatetimeMask());
};
var DThemeWhiteTableBodyCellTime = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellTime, _super);
    function DThemeWhiteTableBodyCellTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellTime.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellTime.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellTime.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellTime.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellTime.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellTime.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellTime.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellTime.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellTime.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    DThemeWhiteTableBodyCellTime.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeWhiteTableBodyCellTime.prototype.getTextValue = function (state) {
        return new Date();
    };
    DThemeWhiteTableBodyCellTime.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeWhiteTableBodyCellTime;
}(DThemeWhiteButton));
export { DThemeWhiteTableBodyCellTime };
//# sourceMappingURL=d-theme-white-table-body-cell-time.js.map