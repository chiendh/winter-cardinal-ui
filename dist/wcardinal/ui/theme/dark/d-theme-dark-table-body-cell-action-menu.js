/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkDropdown } from "./d-theme-dark-dropdown";
import { DThemeDarkTableBodyCellActions } from "./d-theme-dark-table-body-cell-actions";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
DThemeDarkTableBodyCellActions.init();
var DThemeDarkTableBodyCellActionMenu = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellActionMenu, _super);
    function DThemeDarkTableBodyCellActionMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellActionMenu.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getSecondaryImageSource = function (state) {
        return null;
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getImageTintColor = function (state) {
        return DThemeDarkTableBodyCellActions.getImageTintColor(state);
    };
    DThemeDarkTableBodyCellActionMenu.prototype.getImageSource = function (state) {
        return DThemeDarkTableBodyCellActions.getImageSource(state);
    };
    return DThemeDarkTableBodyCellActionMenu;
}(DThemeDarkDropdown));
export { DThemeDarkTableBodyCellActionMenu };
//# sourceMappingURL=d-theme-dark-table-body-cell-action-menu.js.map