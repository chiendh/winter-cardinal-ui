/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DCommandFlag } from "./d-command-flag";
import { DControllers } from "./d-controllers";
var DCommandDelete = /** @class */ (function () {
    function DCommandDelete() {
    }
    DCommandDelete.prototype.execute = function () {
        return DControllers.getDocumentController().delete();
    };
    DCommandDelete.prototype.redo = function () {
        throw new Error("Method not implemented.");
    };
    DCommandDelete.prototype.undo = function () {
        throw new Error("Method not implemented.");
    };
    DCommandDelete.prototype.destroy = function () {
        // DO NOTHING
    };
    DCommandDelete.prototype.getFlag = function () {
        return DCommandFlag.UNSTORABLE | DCommandFlag.CLEAR;
    };
    return DCommandDelete;
}());
export { DCommandDelete };
//# sourceMappingURL=d-command-delete.js.map