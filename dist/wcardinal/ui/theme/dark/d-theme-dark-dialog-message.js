/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";
var DThemeDarkDialogMessage = /** @class */ (function (_super) {
    __extends(DThemeDarkDialogMessage, _super);
    function DThemeDarkDialogMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialogMessage.prototype.getOk = function () {
        return "OK";
    };
    DThemeDarkDialogMessage.prototype.getCancel = function () {
        return null;
    };
    return DThemeDarkDialogMessage;
}(DThemeDarkDialogConfirm));
export { DThemeDarkDialogMessage };
//# sourceMappingURL=d-theme-dark-dialog-message.js.map