/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DTableCellState } from "../../d-table-cell-state";
import { DThemeDarkExpandables } from "./d-theme-dark-expandables";
var DThemeDarkTableBodyCellTrees = /** @class */ (function () {
    function DThemeDarkTableBodyCellTrees() {
    }
    DThemeDarkTableBodyCellTrees.init = function () {
        DThemeDarkExpandables.init();
    };
    DThemeDarkTableBodyCellTrees.getImageSource = function (state) {
        if (state & DTableCellState.HAS_CHILDREN) {
            if (state & DTableCellState.OPENED) {
                return DThemeDarkExpandables.getImageOpened();
            }
            else {
                return DThemeDarkExpandables.getImageClosed();
            }
        }
        return null;
    };
    return DThemeDarkTableBodyCellTrees;
}());
export { DThemeDarkTableBodyCellTrees };
//# sourceMappingURL=d-theme-dark-table-body-cell-trees.js.map