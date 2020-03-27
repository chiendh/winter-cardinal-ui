/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerTimes } from "../../d-picker-times";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
var formatter = function (value, caller) {
    return DPickerTimes.format(value, caller.getDatetimeMask());
};
var DThemeDarkTableBodyCellTime = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellTime, _super);
    function DThemeDarkTableBodyCellTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellTime.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellTime.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellTime.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellTime.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellTime.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellTime.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellTime.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellTime.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellTime.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellTime.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeDarkTableBodyCellTime.prototype.getTextValue = function (state) {
        return new Date();
    };
    DThemeDarkTableBodyCellTime.prototype.newTextValue = function () {
        return new Date();
    };
    return DThemeDarkTableBodyCellTime;
}(DThemeDarkButton));
export { DThemeDarkTableBodyCellTime };
//# sourceMappingURL=d-theme-dark-table-body-cell-time.js.map