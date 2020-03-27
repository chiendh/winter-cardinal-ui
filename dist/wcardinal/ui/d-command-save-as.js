/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DCommandFlag } from "./d-command-flag";
import { DControllers } from "./d-controllers";
var DCommandSaveAs = /** @class */ (function () {
    function DCommandSaveAs(name) {
        this._name = name;
    }
    DCommandSaveAs.prototype.execute = function () {
        return DControllers.getDocumentController().saveAs(this._name);
    };
    DCommandSaveAs.prototype.redo = function () {
        return true;
    };
    DCommandSaveAs.prototype.undo = function () {
        return true;
    };
    DCommandSaveAs.prototype.destroy = function () {
        // DO NOTHING
    };
    DCommandSaveAs.prototype.getFlag = function () {
        return DCommandFlag.UNSTORABLE;
    };
    return DCommandSaveAs;
}());
export { DCommandSaveAs };
//# sourceMappingURL=d-command-save-as.js.map