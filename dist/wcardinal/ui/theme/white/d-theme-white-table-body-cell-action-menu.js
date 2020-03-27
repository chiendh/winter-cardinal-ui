/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteDropdown } from "./d-theme-white-dropdown";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
DThemeWhiteTableBodyCellActions.init();
var DThemeWhiteTableBodyCellActionMenu = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellActionMenu, _super);
    function DThemeWhiteTableBodyCellActionMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellActionMenu.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getSecondaryImageSource = function (state) {
        return null;
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getImageTintColor = function (state) {
        return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
    };
    DThemeWhiteTableBodyCellActionMenu.prototype.getImageSource = function (state) {
        return DThemeWhiteTableBodyCellActions.getImageSource(state);
    };
    return DThemeWhiteTableBodyCellActionMenu;
}(DThemeWhiteDropdown));
export { DThemeWhiteTableBodyCellActionMenu };
//# sourceMappingURL=d-theme-white-table-body-cell-action-menu.js.map