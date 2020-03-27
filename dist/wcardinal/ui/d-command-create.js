/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DCommandFlag } from "./d-command-flag";
var DCommandCreate = /** @class */ (function () {
    function DCommandCreate() {
    }
    DCommandCreate.prototype.redo = function () {
        throw new Error("Method not implemented.");
    };
    DCommandCreate.prototype.undo = function () {
        throw new Error("Method not implemented.");
    };
    DCommandCreate.prototype.destroy = function () {
        // DO NOTHING
    };
    DCommandCreate.prototype.getFlag = function () {
        return DCommandFlag.UNSTORABLE | DCommandFlag.CLEAR;
    };
    return DCommandCreate;
}());
export { DCommandCreate };
//# sourceMappingURL=d-command-create.js.map