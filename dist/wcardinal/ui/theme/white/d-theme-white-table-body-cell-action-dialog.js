/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCellSelectDialog } from "./d-theme-white-table-body-cell-select-dialog";
DThemeWhiteTableBodyCellActions.init();
var DThemeWhiteTableBodyCellActionDialog = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellActionDialog, _super);
    function DThemeWhiteTableBodyCellActionDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellActionDialog.prototype.getImageTintColor = function (state) {
        return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
    };
    DThemeWhiteTableBodyCellActionDialog.prototype.getImageSource = function (state) {
        return DThemeWhiteTableBodyCellActions.getImageSource(state);
    };
    DThemeWhiteTableBodyCellActionDialog.prototype.isSyncEnabled = function () {
        return false;
    };
    return DThemeWhiteTableBodyCellActionDialog;
}(DThemeWhiteTableBodyCellSelectDialog));
export { DThemeWhiteTableBodyCellActionDialog };
//# sourceMappingURL=d-theme-white-table-body-cell-action-dialog.js.map