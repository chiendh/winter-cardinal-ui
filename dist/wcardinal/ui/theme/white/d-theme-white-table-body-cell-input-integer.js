/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DThemeWhiteInputInteger } from "./d-theme-white-input-integer";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var DThemeWhiteTableBodyCellInputInteger = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellInputInteger, _super);
    function DThemeWhiteTableBodyCellInputInteger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellInputInteger.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getOutlineColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        return _super.prototype.getOutlineColor.call(this, state);
    };
    DThemeWhiteTableBodyCellInputInteger.prototype.getOutlineAlign = function (state) {
        return DThemeWhiteTableBodyCells.getOutlineAlign(state);
    };
    return DThemeWhiteTableBodyCellInputInteger;
}(DThemeWhiteInputInteger));
export { DThemeWhiteTableBodyCellInputInteger };
//# sourceMappingURL=d-theme-white-table-body-cell-input-integer.js.map