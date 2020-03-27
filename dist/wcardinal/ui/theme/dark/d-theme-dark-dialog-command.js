/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkDialog } from "./d-theme-dark-dialog";
var DThemeDarkDialogCommand = /** @class */ (function (_super) {
    __extends(DThemeDarkDialogCommand, _super);
    function DThemeDarkDialogCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialogCommand.prototype.getOk = function () {
        return "OK";
    };
    DThemeDarkDialogCommand.prototype.getCancel = function () {
        return "Cancel";
    };
    DThemeDarkDialogCommand.prototype.getLayoutX = function () {
        return "padding";
    };
    DThemeDarkDialogCommand.prototype.getLayoutY = function () {
        return "padding";
    };
    DThemeDarkDialogCommand.prototype.getLayoutWidth = function () {
        return "padding";
    };
    DThemeDarkDialogCommand.prototype.getLayoutHeight = function () {
        return "auto";
    };
    return DThemeDarkDialogCommand;
}(DThemeDarkDialog));
export { DThemeDarkDialogCommand };
//# sourceMappingURL=d-theme-dark-dialog-command.js.map