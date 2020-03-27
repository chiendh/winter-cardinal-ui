/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
var DBoard = /** @class */ (function (_super) {
    __extends(DBoard, _super);
    function DBoard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DBoard.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
    };
    DBoard.prototype.getType = function () {
        return "DBoard";
    };
    return DBoard;
}(DBase));
export { DBoard };
//# sourceMappingURL=d-board.js.map