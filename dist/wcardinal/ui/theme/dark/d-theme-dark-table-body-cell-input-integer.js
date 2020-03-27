/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkInputInteger } from "./d-theme-dark-input-integer";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
var DThemeDarkTableBodyCellInputInteger = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellInputInteger, _super);
    function DThemeDarkTableBodyCellInputInteger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellInputInteger.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getOutlineColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        return _super.prototype.getOutlineColor.call(this, state);
    };
    DThemeDarkTableBodyCellInputInteger.prototype.getOutlineAlign = function (state) {
        return DThemeDarkTableBodyCells.getOutlineAlign(state);
    };
    return DThemeDarkTableBodyCellInputInteger;
}(DThemeDarkInputInteger));
export { DThemeDarkTableBodyCellInputInteger };
//# sourceMappingURL=d-theme-dark-table-body-cell-input-integer.js.map