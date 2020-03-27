/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDates } from "../../d-picker-dates";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
var formatter = function (value) {
    return DPickerDates.format(value);
};
var DThemeDarkTableBodyCellDate = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellDate, _super);
    function DThemeDarkTableBodyCellDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellDate.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellDate.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellDate.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellDate.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellDate.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellDate.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellDate.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellDate.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellDate.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellDate.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeDarkTableBodyCellDate.prototype.getTextValue = function (state) {
        return new Date();
    };
    DThemeDarkTableBodyCellDate.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeDarkTableBodyCellDate;
}(DThemeDarkButton));
export { DThemeDarkTableBodyCellDate };
//# sourceMappingURL=d-theme-dark-table-body-cell-date.js.map