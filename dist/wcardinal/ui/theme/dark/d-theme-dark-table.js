/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkPane } from "./d-theme-dark-pane";
var DThemeDarkTable = /** @class */ (function (_super) {
    __extends(DThemeDarkTable, _super);
    function DThemeDarkTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTable.prototype.getBackgroundColor = function () {
        return null;
    };
    DThemeDarkTable.prototype.getBorderColor = function (state) {
        return 0x646464;
    };
    DThemeDarkTable.prototype.getMargin = function () {
        return 0;
    };
    DThemeDarkTable.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkTable;
}(DThemeDarkPane));
export { DThemeDarkTable };
//# sourceMappingURL=d-theme-dark-table.js.map