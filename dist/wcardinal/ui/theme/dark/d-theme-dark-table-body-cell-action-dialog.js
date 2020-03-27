/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkTableBodyCellActions } from "./d-theme-dark-table-body-cell-actions";
import { DThemeDarkTableBodyCellSelectDialog } from "./d-theme-dark-table-body-cell-select-dialog";
DThemeDarkTableBodyCellActions.init();
var DThemeDarkTableBodyCellActionDialog = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellActionDialog, _super);
    function DThemeDarkTableBodyCellActionDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellActionDialog.prototype.getImageTintColor = function (state) {
        return DThemeDarkTableBodyCellActions.getImageTintColor(state);
    };
    DThemeDarkTableBodyCellActionDialog.prototype.getImageSource = function (state) {
        return DThemeDarkTableBodyCellActions.getImageSource(state);
    };
    DThemeDarkTableBodyCellActionDialog.prototype.isSyncEnabled = function () {
        return false;
    };
    return DThemeDarkTableBodyCellActionDialog;
}(DThemeDarkTableBodyCellSelectDialog));
export { DThemeDarkTableBodyCellActionDialog };
//# sourceMappingURL=d-theme-dark-table-body-cell-action-dialog.js.map