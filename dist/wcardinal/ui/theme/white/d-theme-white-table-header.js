/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";
var DThemeWhiteTableHeader = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableHeader, _super);
    function DThemeWhiteTableHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTableHeader.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        else {
            return 0xf9f9f9;
        }
    };
    DThemeWhiteTableHeader.prototype.getBorderColor = function (state) {
        return 0xf0f0f0;
    };
    DThemeWhiteTableHeader.prototype.getBorderAlign = function (state) {
        return 0;
    };
    DThemeWhiteTableHeader.prototype.getBorderMask = function (state) {
        return DBorderMask.NOT_BOTTOM;
    };
    DThemeWhiteTableHeader.prototype.getWidth = function () {
        return "100%";
    };
    DThemeWhiteTableHeader.prototype.getHeight = function () {
        return 30;
    };
    return DThemeWhiteTableHeader;
}(DThemeWhiteTableRow));
export { DThemeWhiteTableHeader };
//# sourceMappingURL=d-theme-white-table-header.js.map