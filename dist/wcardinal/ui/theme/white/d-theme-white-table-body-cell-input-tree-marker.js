/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var DThemeWhiteTableBodyCellInputTreeMarker = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellInputTreeMarker, _super);
    function DThemeWhiteTableBodyCellInputTreeMarker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellInputTreeMarker.prototype.getHeight = function () {
        return "100%";
    };
    DThemeWhiteTableBodyCellInputTreeMarker.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhiteTableBodyCellInputTreeMarker.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteTableBodyCellInputTreeMarker.prototype.getOutlineColor = function (state) {
        return null;
    };
    DThemeWhiteTableBodyCellInputTreeMarker.prototype.getCursor = function () {
        return "pointer";
    };
    DThemeWhiteTableBodyCellInputTreeMarker.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeWhiteTableBodyCellInputTreeMarker.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeWhiteTableBodyCellInputTreeMarker.prototype.getImageSource = function (state) {
        return DThemeWhiteTableBodyCellTrees.getImageSource(state);
    };
    DThemeWhiteTableBodyCellInputTreeMarker.prototype.getImageTintColor = function (state) {
        return DThemeWhiteTableBodyCells.getImageTintColor(state);
    };
    return DThemeWhiteTableBodyCellInputTreeMarker;
}(DThemeWhiteButtonBase));
export { DThemeWhiteTableBodyCellInputTreeMarker };
//# sourceMappingURL=d-theme-white-table-body-cell-input-tree-marker.js.map