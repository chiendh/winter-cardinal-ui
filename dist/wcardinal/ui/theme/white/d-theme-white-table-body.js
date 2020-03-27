/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteTableBody = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBody, _super);
    function DThemeWhiteTableBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableBody.prototype.getWidth = function () {
        return "100%";
    };
    DThemeWhiteTableBody.prototype.getCornerMask = function () {
        return DCornerMask.TOP;
    };
    DThemeWhiteTableBody.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteTableBody.prototype.getRowHeight = function () {
        return 30;
    };
    DThemeWhiteTableBody.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteTableBody;
}(DThemeWhiteBase));
export { DThemeWhiteTableBody };
//# sourceMappingURL=d-theme-white-table-body.js.map