/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDialogConfirm } from "./d-dialog-confirm";
var DDialogMessage = /** @class */ (function (_super) {
    __extends(DDialogMessage, _super);
    function DDialogMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogMessage.prototype.getType = function () {
        return "DDialogMessage";
    };
    return DDialogMessage;
}(DDialogConfirm));
export { DDialogMessage };
//# sourceMappingURL=d-dialog-message.js.map