/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DCommandFlag } from "./d-command-flag";
var DCommandUndo = /** @class */ (function () {
    function DCommandUndo() {
    }
    DCommandUndo.prototype.execute = function () {
        throw new Error("Not supported");
    };
    DCommandUndo.prototype.redo = function () {
        throw new Error("Not supported");
    };
    DCommandUndo.prototype.undo = function () {
        throw new Error("Not supported");
    };
    DCommandUndo.prototype.destroy = function () {
        // DO NOTHING
    };
    DCommandUndo.prototype.getFlag = function () {
        return DCommandFlag.UNSTORABLE;
    };
    return DCommandUndo;
}());
export { DCommandUndo };
//# sourceMappingURL=d-command-undo.js.map