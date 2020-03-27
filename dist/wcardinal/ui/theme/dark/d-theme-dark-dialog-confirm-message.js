/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeDarkImage } from "./d-theme-dark-image";
var DThemeDarkDialogConfirmMessage = /** @class */ (function (_super) {
    __extends(DThemeDarkDialogConfirmMessage, _super);
    function DThemeDarkDialogConfirmMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialogConfirmMessage.prototype.getWidth = function () {
        return "padding";
    };
    DThemeDarkDialogConfirmMessage.prototype.getHeight = function () {
        return 200;
    };
    DThemeDarkDialogConfirmMessage.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    return DThemeDarkDialogConfirmMessage;
}(DThemeDarkImage));
export { DThemeDarkDialogConfirmMessage };
//# sourceMappingURL=d-theme-dark-dialog-confirm-message.js.map