/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";
var DThemeDarkTableBodyCellInputTreeMarker = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellInputTreeMarker, _super);
    function DThemeDarkTableBodyCellInputTreeMarker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellInputTreeMarker.prototype.getHeight = function () {
        return "100%";
    };
    DThemeDarkTableBodyCellInputTreeMarker.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeDarkTableBodyCellInputTreeMarker.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkTableBodyCellInputTreeMarker.prototype.getOutlineColor = function (state) {
        return null;
    };
    DThemeDarkTableBodyCellInputTreeMarker.prototype.getCursor = function () {
        return "pointer";
    };
    DThemeDarkTableBodyCellInputTreeMarker.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeDarkTableBodyCellInputTreeMarker.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkTableBodyCellInputTreeMarker.prototype.getImageSource = function (state) {
        return DThemeDarkTableBodyCellTrees.getImageSource(state);
    };
    return DThemeDarkTableBodyCellInputTreeMarker;
}(DThemeDarkButtonBase));
export { DThemeDarkTableBodyCellInputTreeMarker };
//# sourceMappingURL=d-theme-dark-table-body-cell-input-tree-marker.js.map