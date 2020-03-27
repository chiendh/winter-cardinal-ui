/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DImage } from "./d-image";
var DDialogConfirmMessage = /** @class */ (function (_super) {
    __extends(DDialogConfirmMessage, _super);
    function DDialogConfirmMessage(options) {
        var _this = _super.call(this, options) || this;
        _this.setState(DBaseState.UNFOCUSABLE, true);
        return _this;
    }
    DDialogConfirmMessage.prototype.getType = function () {
        return "DDialogConfirmMessage";
    };
    return DDialogConfirmMessage;
}(DImage));
export { DDialogConfirmMessage };
//# sourceMappingURL=d-dialog-confirm-message.js.map