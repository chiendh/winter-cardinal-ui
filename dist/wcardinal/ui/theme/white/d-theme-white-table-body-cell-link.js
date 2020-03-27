/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "../../d-base-state";
import { DThemeWhiteLinks } from "./d-theme-white-links";
import { DThemeWhiteTableBodyCellButton } from "./d-theme-white-table-body-cell-button";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
DThemeWhiteLinks.init();
var DThemeWhiteTableBodyCellLink = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyCellLink, _super);
    function DThemeWhiteTableBodyCellLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBodyCellLink.prototype.getImageTintColor = function (state) {
        return DThemeWhiteTableBodyCells.getImageTintColor(state | DBaseState.ACTIVE);
    };
    DThemeWhiteTableBodyCellLink.prototype.getImageSource = function (state) {
        return DThemeWhiteLinks.getImageSource(state);
    };
    DThemeWhiteTableBodyCellLink.prototype.getLinkMenuOptions = function () {
        return DThemeWhiteLinks.getLinkMenuOptions();
    };
    return DThemeWhiteTableBodyCellLink;
}(DThemeWhiteTableBodyCellButton));
export { DThemeWhiteTableBodyCellLink };
//# sourceMappingURL=d-theme-white-table-body-cell-link.js.map