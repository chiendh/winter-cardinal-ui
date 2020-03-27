/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerDatetimes } from "../../d-picker-datetimes";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
var formatter = function (value, caller) {
    return DPickerDatetimes.format(value, caller.getDatetimeMask());
};
var DThemeDarkTableBodyCellDatetime = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellDatetime, _super);
    function DThemeDarkTableBodyCellDatetime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellDatetime.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellDatetime.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellDatetime.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellDatetime.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellDatetime.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellDatetime.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellDatetime.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellDatetime.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellDatetime.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellDatetime.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeDarkTableBodyCellDatetime.prototype.getTextValue = function (state) {
        return new Date();
    };
    DThemeDarkTableBodyCellDatetime.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeDarkTableBodyCellDatetime;
}(DThemeDarkButton));
export { DThemeDarkTableBodyCellDatetime };
//# sourceMappingURL=d-theme-dark-table-body-cell-datetime.js.map