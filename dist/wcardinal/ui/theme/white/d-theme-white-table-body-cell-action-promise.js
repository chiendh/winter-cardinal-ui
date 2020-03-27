/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCellSelectPromise } from "./d-theme-white-table-body-cell-select-promise";
DThemeWhiteTableBodyCellActions.init();
var DThemeWhiteTableBodyCellActionPromise = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellActionPromise, _super);
    function DThemeWhiteTableBodyCellActionPromise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellActionPromise.prototype.getImageTintColor = function (state) {
        return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
    };
    DThemeWhiteTableBodyCellActionPromise.prototype.getImageSource = function (state) {
        return DThemeWhiteTableBodyCellActions.getImageSource(state);
    };
    DThemeWhiteTableBodyCellActionPromise.prototype.isSyncEnabled = function () {
        return false;
    };
    return DThemeWhiteTableBodyCellActionPromise;
}(DThemeWhiteTableBodyCellSelectPromise));
export { DThemeWhiteTableBodyCellActionPromise };
//# sourceMappingURL=d-theme-white-table-body-cell-action-promise.js.map