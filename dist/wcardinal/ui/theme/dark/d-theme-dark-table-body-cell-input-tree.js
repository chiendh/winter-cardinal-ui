/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
DThemeDarkTableBodyCellTrees.init();
var DThemeDarkTableBodyCellInputTree = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellInputTree, _super);
    function DThemeDarkTableBodyCellInputTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellInputTree.prototype.getLevelPadding = function (level) {
        return 24 + level * 20;
    };
    DThemeDarkTableBodyCellInputTree.prototype.getMargin = function () {
        return 0;
    };
    DThemeDarkTableBodyCellInputTree.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    DThemeDarkTableBodyCellInputTree.prototype.getBackgroundColor = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundColor(state);
    };
    DThemeDarkTableBodyCellInputTree.prototype.getBackgroundAlpha = function (state) {
        return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
    };
    DThemeDarkTableBodyCellInputTree.prototype.getBorderColor = function (state) {
        return DThemeDarkTableBodyCells.getBorderColor(state);
    };
    DThemeDarkTableBodyCellInputTree.prototype.getBorderAlign = function (state) {
        return DThemeDarkTableBodyCells.getBorderAlign(state);
    };
    DThemeDarkTableBodyCellInputTree.prototype.getBorderMask = function (state) {
        return DThemeDarkTableBodyCells.getBorderMask(state);
    };
    DThemeDarkTableBodyCellInputTree.prototype.getColor = function (state) {
        return DThemeDarkTableBodyCells.getColor(state);
    };
    DThemeDarkTableBodyCellInputTree.prototype.getAlpha = function (state) {
        return DThemeDarkTableBodyCells.getAlpha(state);
    };
    DThemeDarkTableBodyCellInputTree.prototype.getHeight = function () {
        return DThemeDarkTableBodyCells.getHeight();
    };
    DThemeDarkTableBodyCellInputTree.prototype.getCornerMask = function () {
        return DThemeDarkTableBodyCells.getCornerMask();
    };
    DThemeDarkTableBodyCellInputTree.prototype.getOutlineColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        return _super.prototype.getOutlineColor.call(this, state);
    };
    DThemeDarkTableBodyCellInputTree.prototype.getOutlineAlign = function (state) {
        return DThemeDarkTableBodyCells.getOutlineAlign(state);
    };
    return DThemeDarkTableBodyCellInputTree;
}(DThemeDarkLayoutHorizontal));
export { DThemeDarkTableBodyCellInputTree };
//# sourceMappingURL=d-theme-dark-table-body-cell-input-tree.js.map