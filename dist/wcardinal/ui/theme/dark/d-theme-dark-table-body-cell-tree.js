/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignWith } from "../../d-align-with";
import { DThemeDarkTableBodyCellButton } from "./d-theme-dark-table-body-cell-button";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";
DThemeDarkTableBodyCellTrees.init();
var DThemeDarkTableBodyCellTree = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellTree, _super);
    function DThemeDarkTableBodyCellTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellTree.prototype.getLevelPadding = function (level) {
        return 24 + level * 20 - this.getPaddingLeft();
    };
    DThemeDarkTableBodyCellTree.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeDarkTableBodyCellTree.prototype.getImageMarginHorizontal = function () {
        return -19;
    };
    DThemeDarkTableBodyCellTree.prototype.getImageSource = function (state) {
        return DThemeDarkTableBodyCellTrees.getImageSource(state);
    };
    return DThemeDarkTableBodyCellTree;
}(DThemeDarkTableBodyCellButton));
export { DThemeDarkTableBodyCellTree };
//# sourceMappingURL=d-theme-dark-table-body-cell-tree.js.map