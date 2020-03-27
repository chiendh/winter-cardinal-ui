/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStates } from "../../d-base-states";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
DThemeWhiteTableBodyCellTrees.init();
var DThemeWhiteTableBodyCellInputTree = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellInputTree, _super);
    function DThemeWhiteTableBodyCellInputTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellInputTree.prototype.getLevelPadding = function (level) {
        return 24 + level * 20;
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getMargin = function () {
        return 0;
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundColor(state);
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getBorderColor = function (state) {
        return DThemeWhiteTableBodyCells.getBorderColor(state);
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getBorderAlign = function (state) {
        return DThemeWhiteTableBodyCells.getBorderAlign(state);
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getBorderMask = function (state) {
        return DThemeWhiteTableBodyCells.getBorderMask(state);
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getColor = function (state) {
        return DThemeWhiteTableBodyCells.getColor(state);
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getAlpha = function (state) {
        return DThemeWhiteTableBodyCells.getAlpha(state);
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getHeight = function () {
        return DThemeWhiteTableBodyCells.getHeight();
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getCornerMask = function () {
        return DThemeWhiteTableBodyCells.getCornerMask();
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getOutlineColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        return _super.prototype.getOutlineColor.call(this, state);
    };
    DThemeWhiteTableBodyCellInputTree.prototype.getOutlineAlign = function (state) {
        return DThemeWhiteTableBodyCells.getOutlineAlign(state);
    };
    return DThemeWhiteTableBodyCellInputTree;
}(DThemeWhiteLayoutHorizontal));
export { DThemeWhiteTableBodyCellInputTree };
//# sourceMappingURL=d-theme-white-table-body-cell-input-tree.js.map