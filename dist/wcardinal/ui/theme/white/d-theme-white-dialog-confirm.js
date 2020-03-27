/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";
var DThemeWhiteDialogConfirm = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialogConfirm, _super);
    function DThemeWhiteDialogConfirm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialogConfirm.prototype.getOk = function () {
        return "Yes";
    };
    DThemeWhiteDialogConfirm.prototype.getCancel = function () {
        return "No";
    };
    DThemeWhiteDialogConfirm.prototype.getMessage = function () {
        return "";
    };
    return DThemeWhiteDialogConfirm;
}(DThemeWhiteDialogCommand));
export { DThemeWhiteDialogConfirm };
//# sourceMappingURL=d-theme-white-dialog-confirm.js.map