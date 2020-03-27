/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhitePane } from "./d-theme-white-pane";
var DThemeWhiteTable = /** @class */ (function (_super) {
    __extends(DThemeWhiteTable, _super);
    function DThemeWhiteTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTable.prototype.getBackgroundColor = function () {
        return DThemeWhiteConstants.BACKGROUND_COLOR;
    };
    DThemeWhiteTable.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteTable.prototype.getMargin = function () {
        return 0;
    };
    DThemeWhiteTable.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteTable;
}(DThemeWhitePane));
export { DThemeWhiteTable };
//# sourceMappingURL=d-theme-white-table.js.map