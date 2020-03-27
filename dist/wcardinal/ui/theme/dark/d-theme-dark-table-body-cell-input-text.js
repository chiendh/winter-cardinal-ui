/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkInputText } from "./d-theme-dark-input-text";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
var DThemeDarkTableBodyCellInputText = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellInputText, _super);
    function DThemeDarkTableBodyCellInputText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellInputText.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellInputText.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellInputText.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellInputText.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellInputText.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellInputText.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellInputText.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellInputText.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellInputText.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellInputText.prototype.getOutlineColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        return _super.prototype.getOutlineColor.call(this, state);
    };
    DThemeDarkTableBodyCellInputText.prototype.getOutlineAlign = function (state) {
        return DThemeDarkTableBodyCells.getOutlineAlign(state);
    };
    return DThemeDarkTableBodyCellInputText;
}(DThemeDarkInputText));
export { DThemeDarkTableBodyCellInputText };
//# sourceMappingURL=d-theme-dark-table-body-cell-input-text.js.map