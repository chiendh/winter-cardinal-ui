/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkTableBodyCellActions } from "./d-theme-dark-table-body-cell-actions";
import { DThemeDarkTableBodyCellSelectPromise } from "./d-theme-dark-table-body-cell-select-promise";
DThemeDarkTableBodyCellActions.init();
var DThemeDarkTableBodyCellActionPromise = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellActionPromise, _super);
    function DThemeDarkTableBodyCellActionPromise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellActionPromise.prototype.getImageTintColor = function (state) {
        return DThemeDarkTableBodyCellActions.getImageTintColor(state);
    };
    DThemeDarkTableBodyCellActionPromise.prototype.getImageSource = function (state) {
        return DThemeDarkTableBodyCellActions.getImageSource(state);
    };
    DThemeDarkTableBodyCellActionPromise.prototype.isSyncEnabled = function () {
        return false;
    };
    return DThemeDarkTableBodyCellActionPromise;
}(DThemeDarkTableBodyCellSelectPromise));
export { DThemeDarkTableBodyCellActionPromise };
//# sourceMappingURL=d-theme-dark-table-body-cell-action-promise.js.map