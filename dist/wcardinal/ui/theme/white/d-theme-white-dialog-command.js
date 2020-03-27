/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteDialog } from "./d-theme-white-dialog";
var DThemeWhiteDialogCommand = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialogCommand, _super);
    function DThemeWhiteDialogCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialogCommand.prototype.getOk = function () {
        return "OK";
    };
    DThemeWhiteDialogCommand.prototype.getCancel = function () {
        return "Cacnel";
    };
    DThemeWhiteDialogCommand.prototype.getLayoutX = function () {
        return "padding";
    };
    DThemeWhiteDialogCommand.prototype.getLayoutY = function () {
        return "padding";
    };
    DThemeWhiteDialogCommand.prototype.getLayoutWidth = function () {
        return "padding";
    };
    DThemeWhiteDialogCommand.prototype.getLayoutHeight = function () {
        return "auto";
    };
    return DThemeWhiteDialogCommand;
}(DThemeWhiteDialog));
export { DThemeWhiteDialogCommand };
//# sourceMappingURL=d-theme-white-dialog-command.js.map