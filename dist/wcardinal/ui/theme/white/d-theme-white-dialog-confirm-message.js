/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeWhiteImage } from "./d-theme-white-image";
var DThemeWhiteDialogConfirmMessage = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialogConfirmMessage, _super);
    function DThemeWhiteDialogConfirmMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialogConfirmMessage.prototype.getWidth = function () {
        return "padding";
    };
    DThemeWhiteDialogConfirmMessage.prototype.getHeight = function () {
        return 200;
    };
    DThemeWhiteDialogConfirmMessage.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    return DThemeWhiteDialogConfirmMessage;
}(DThemeWhiteImage));
export { DThemeWhiteDialogConfirmMessage };
//# sourceMappingURL=d-theme-white-dialog-confirm-message.js.map