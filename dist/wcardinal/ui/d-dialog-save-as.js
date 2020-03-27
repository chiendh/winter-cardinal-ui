/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DCommandSaveAs } from "./d-command-save-as";
import { DControllers } from "./d-controllers";
import { DDialogInputText } from "./d-dialog-input-text";
var DDialogSaveAs = /** @class */ (function (_super) {
    __extends(DDialogSaveAs, _super);
    function DDialogSaveAs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogSaveAs.prototype.onOpen = function () {
        var name = DControllers.getDocumentController().getName();
        if (name != null) {
            this._inputAndLabel.input.value = name;
        }
        _super.prototype.onOpen.call(this);
    };
    DDialogSaveAs.prototype.onOk = function () {
        _super.prototype.onOk.call(this);
        var name = this._inputAndLabel.input.value;
        DControllers.getCommandController().push(new DCommandSaveAs(name));
    };
    DDialogSaveAs.prototype.getType = function () {
        return "DDialogSaveAs";
    };
    return DDialogSaveAs;
}(DDialogInputText));
export { DDialogSaveAs };
//# sourceMappingURL=d-dialog-save-as.js.map