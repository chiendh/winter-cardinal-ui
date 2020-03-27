/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DCommandFlag } from "./d-command-flag";
var DCommandRedo = /** @class */ (function () {
    function DCommandRedo() {
    }
    DCommandRedo.prototype.execute = function () {
        throw new Error("Not supported");
    };
    DCommandRedo.prototype.redo = function () {
        throw new Error("Not supported");
    };
    DCommandRedo.prototype.undo = function () {
        throw new Error("Not supported");
    };
    DCommandRedo.prototype.destroy = function () {
        // DO NOTHING
    };
    DCommandRedo.prototype.getFlag = function () {
        return DCommandFlag.UNSTORABLE;
    };
    return DCommandRedo;
}());
export { DCommandRedo };
//# sourceMappingURL=d-command-redo.js.map