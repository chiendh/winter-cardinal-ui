/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";
var DThemeWhiteTableRow = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableRow, _super);
    function DThemeWhiteTableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableRow.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteTableRow.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeWhiteTableRow.prototype.getMargin = function () {
        return 0;
    };
    DThemeWhiteTableRow.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteTableRow;
}(DThemeWhiteLayoutHorizontal));
export { DThemeWhiteTableRow };
//# sourceMappingURL=d-theme-white-table-row.js.map