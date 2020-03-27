/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "../../d-base-state";
import { DThemeDarkLinks } from "./d-theme-dark-links";
import { DThemeDarkTableBodyCellButton } from "./d-theme-dark-table-body-cell-button";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";
DThemeDarkLinks.init();
var DThemeDarkTableBodyCellLink = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyCellLink, _super);
    function DThemeDarkTableBodyCellLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBodyCellLink.prototype.getImageTintColor = function (state) {
        return DThemeDarkTableBodyCells.getImageTintColor(state | DBaseState.ACTIVE);
    };
    DThemeDarkTableBodyCellLink.prototype.getImageSource = function (state) {
        return DThemeDarkLinks.getImageSource(state);
    };
    DThemeDarkTableBodyCellLink.prototype.getLinkMenuOptions = function () {
        return DThemeDarkLinks.getLinkMenuOptions();
    };
    return DThemeDarkTableBodyCellLink;
}(DThemeDarkTableBodyCellButton));
export { DThemeDarkTableBodyCellLink };
//# sourceMappingURL=d-theme-dark-table-body-cell-link.js.map