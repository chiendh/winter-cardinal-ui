/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkSelect } from "./d-theme-dark-select";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
var DThemeDarkTableBodyCellSelectMenu = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellSelectMenu, _super);
    function DThemeDarkTableBodyCellSelectMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellSelectMenu.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellSelectMenu.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellSelectMenu.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellSelectMenu.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellSelectMenu.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellSelectMenu.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellSelectMenu.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellSelectMenu.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellSelectMenu.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellSelectMenu.prototype.getSecondaryImageSource = function (state) {
        return null;
    };
    return DThemeDarkTableBodyCellSelectMenu;
}(DThemeDarkSelect));
export { DThemeDarkTableBodyCellSelectMenu };
//# sourceMappingURL=d-theme-dark-table-body-cell-select-menu.js.map