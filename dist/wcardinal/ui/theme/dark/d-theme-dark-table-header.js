/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DThemeDarkTableRow } from "./d-theme-dark-table-row";
var DThemeDarkTableHeader = /** @class */ (function (_super) {
    __extends(DThemeDarkTableHeader, _super);
    function DThemeDarkTableHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x1b1b1b;
        return _this;
    }
    DThemeDarkTableHeader.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        return this.COLOR;
    };
    DThemeDarkTableHeader.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkTableHeader.prototype.getBorderAlign = function (state) {
        return 0;
    };
    DThemeDarkTableHeader.prototype.getBorderMask = function (state) {
        return DBorderMask.NOT_BOTTOM;
    };
    DThemeDarkTableHeader.prototype.getWidth = function () {
        return "100%";
    };
    DThemeDarkTableHeader.prototype.getHeight = function () {
        return 30;
    };
    return DThemeDarkTableHeader;
}(DThemeDarkTableRow));
export { DThemeDarkTableHeader };
//# sourceMappingURL=d-theme-dark-table-header.js.map