/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DCommandFlag } from "./d-command-flag";
var DCommandClear = /** @class */ (function () {
    function DCommandClear() {
    }
    DCommandClear.prototype.execute = function () {
        return true;
    };
    DCommandClear.prototype.redo = function () {
        throw new Error("Method not implemented.");
    };
    DCommandClear.prototype.undo = function () {
        throw new Error("Method not implemented.");
    };
    DCommandClear.prototype.destroy = function () {
        // DO NOTHING
    };
    DCommandClear.prototype.getFlag = function () {
        return DCommandFlag.UNSTORABLE | DCommandFlag.CLEAR;
    };
    return DCommandClear;
}());
export { DCommandClear };
//# sourceMappingURL=d-command-clear.js.map