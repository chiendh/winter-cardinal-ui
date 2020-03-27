/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignWith } from "../../d-align-with";
import { DThemeWhiteTableBodyCellButton } from "./d-theme-white-table-body-cell-button";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";
DThemeWhiteTableBodyCellTrees.init();
var DThemeWhiteTableBodyCellTree = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellTree, _super);
    function DThemeWhiteTableBodyCellTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellTree.prototype.getLevelPadding = function (level) {
        return 24 + level * 20 - this.getPaddingLeft();
    };
    DThemeWhiteTableBodyCellTree.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeWhiteTableBodyCellTree.prototype.getImageMarginHorizontal = function () {
        return -19;
    };
    DThemeWhiteTableBodyCellTree.prototype.getImageSource = function (state) {
        return DThemeWhiteTableBodyCellTrees.getImageSource(state);
    };
    return DThemeWhiteTableBodyCellTree;
}(DThemeWhiteTableBodyCellButton));
export { DThemeWhiteTableBodyCellTree };
//# sourceMappingURL=d-theme-white-table-body-cell-tree.js.map