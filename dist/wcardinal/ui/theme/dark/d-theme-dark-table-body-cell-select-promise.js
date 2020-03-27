/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
var DThemeDarkTableBodyCellSelectPromise = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellSelectPromise, _super);
    function DThemeDarkTableBodyCellSelectPromise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellSelectPromise.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellSelectPromise.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellSelectPromise.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellSelectPromise.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellSelectPromise.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellSelectPromise.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellSelectPromise.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellSelectPromise.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellSelectPromise.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellSelectPromise.prototype.isSyncEnabled = function () {
        return true;
    };
    return DThemeDarkTableBodyCellSelectPromise;
}(DThemeDarkButton));
export { DThemeDarkTableBodyCellSelectPromise };
//# sourceMappingURL=d-theme-dark-table-body-cell-select-promise.js.map