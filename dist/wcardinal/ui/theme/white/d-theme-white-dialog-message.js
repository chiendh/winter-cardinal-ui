/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";
var DThemeWhiteDialogMessage = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialogMessage, _super);
    function DThemeWhiteDialogMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialogMessage.prototype.getOk = function () {
        return "OK";
    };
    DThemeWhiteDialogMessage.prototype.getCancel = function () {
        return null;
    };
    return DThemeWhiteDialogMessage;
}(DThemeWhiteDialogConfirm));
export { DThemeWhiteDialogMessage };
//# sourceMappingURL=d-theme-white-dialog-message.js.map