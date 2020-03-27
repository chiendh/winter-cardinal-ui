/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";
var DThemeDarkDialogConfirm = /** @class */ (function (_super) {
    __extends(DThemeDarkDialogConfirm, _super);
    function DThemeDarkDialogConfirm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialogConfirm.prototype.getOk = function () {
        return "Yes";
    };
    DThemeDarkDialogConfirm.prototype.getCancel = function () {
        return "No";
    };
    DThemeDarkDialogConfirm.prototype.getMessage = function () {
        return "";
    };
    return DThemeDarkDialogConfirm;
}(DThemeDarkDialogCommand));
export { DThemeDarkDialogConfirm };
//# sourceMappingURL=d-theme-dark-dialog-confirm.js.map