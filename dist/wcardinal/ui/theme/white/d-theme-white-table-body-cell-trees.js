/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DTableCellState } from "../../d-table-cell-state";
import { DThemeWhiteExpandables } from "./d-theme-white-expandables";
var DThemeWhiteTableBodyCellTrees = /** @class */ (function () {
    function DThemeWhiteTableBodyCellTrees() {
    }
    DThemeWhiteTableBodyCellTrees.init = function () {
        DThemeWhiteExpandables.init();
    };
    DThemeWhiteTableBodyCellTrees.getImageSource = function (state) {
        if (state & DTableCellState.HAS_CHILDREN) {
            if (state & DTableCellState.OPENED) {
                return DThemeWhiteExpandables.getImageOpened();
            }
            else {
                return DThemeWhiteExpandables.getImageClosed();
            }
        }
        return null;
    };
    return DThemeWhiteTableBodyCellTrees;
}());
export { DThemeWhiteTableBodyCellTrees };
//# sourceMappingURL=d-theme-white-table-body-cell-trees.js.map