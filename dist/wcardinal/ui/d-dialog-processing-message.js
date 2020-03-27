/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDialogConfirmMessage } from "./d-dialog-confirm-message";
var DDialogProcessingMessage = /** @class */ (function (_super) {
    __extends(DDialogProcessingMessage, _super);
    function DDialogProcessingMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogProcessingMessage.prototype.getType = function () {
        return "DDialogProcessingMessage";
    };
    return DDialogProcessingMessage;
}(DDialogConfirmMessage));
export { DDialogProcessingMessage };
//# sourceMappingURL=d-dialog-processing-message.js.map