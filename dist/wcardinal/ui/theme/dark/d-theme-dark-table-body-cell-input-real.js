/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkInputReal } from "./d-theme-dark-input-real";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
var DThemeDarkTableBodyCellInputReal = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellInputReal, _super);
    function DThemeDarkTableBodyCellInputReal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellInputReal.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkTableBodyCellInputReal.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellInputReal.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellInputReal.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellInputReal.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellInputReal.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellInputReal.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellInputReal.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellInputReal.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellInputReal.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellInputReal.prototype.getOutlineColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        return _super.prototype.getOutlineColor.call(this, state);
    };
    DThemeDarkTableBodyCellInputReal.prototype.getOutlineAlign = function (state) {
        return DThemeDarkTableBodyCells.getOutlineAlign(state);
    };
    return DThemeDarkTableBodyCellInputReal;
}(DThemeDarkInputReal));
export { DThemeDarkTableBodyCellInputReal };
//# sourceMappingURL=d-theme-dark-table-body-cell-input-real.js.map