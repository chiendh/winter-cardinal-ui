/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DCommandFlag } from "./d-command-flag";
import { DControllers } from "./d-controllers";
var DCommandSave = /** @class */ (function () {
    function DCommandSave() {
    }
    DCommandSave.prototype.execute = function () {
        return DControllers.getDocumentController().save();
    };
    DCommandSave.prototype.redo = function () {
        return true;
    };
    DCommandSave.prototype.undo = function () {
        return true;
    };
    DCommandSave.prototype.destroy = function () {
        // DO NOTHING
    };
    DCommandSave.prototype.getFlag = function () {
        return DCommandFlag.UNSTORABLE;
    };
    return DCommandSave;
}());
export { DCommandSave };
//# sourceMappingURL=d-command-save.js.map