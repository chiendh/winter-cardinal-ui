/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";
var DThemeDarkTableRow = /** @class */ (function (_super) {
    __extends(DThemeDarkTableRow, _super);
    function DThemeDarkTableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableRow.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkTableRow.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeDarkTableRow.prototype.getMargin = function () {
        return 0;
    };
    DThemeDarkTableRow.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkTableRow;
}(DThemeDarkLayoutHorizontal));
export { DThemeDarkTableRow };
//# sourceMappingURL=d-theme-dark-table-row.js.map