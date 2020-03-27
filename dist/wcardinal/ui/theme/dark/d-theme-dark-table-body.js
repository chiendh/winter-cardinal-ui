/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkTableBody = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBody, _super);
    function DThemeDarkTableBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTableBody.prototype.getWidth = function () {
        return "100%";
    };
    DThemeDarkTableBody.prototype.getCornerMask = function () {
        return DCornerMask.TOP;
    };
    DThemeDarkTableBody.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkTableBody.prototype.getRowHeight = function () {
        return 30;
    };
    DThemeDarkTableBody.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkTableBody;
}(DThemeDarkBase));
export { DThemeDarkTableBody };
//# sourceMappingURL=d-theme-dark-table-body.js.map