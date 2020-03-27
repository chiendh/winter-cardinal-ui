/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DButton } from "./d-button";
import { DControllers } from "./d-controllers";
var DButtonUndo = /** @class */ (function (_super) {
    __extends(DButtonUndo, _super);
    function DButtonUndo(options) {
        var _this = _super.call(this, options) || this;
        var commandController = DControllers.getCommandController();
        _this.setState(DBaseState.DISABLED, !commandController.isUndoable());
        commandController.on("change", function () {
            _this.setState(DBaseState.DISABLED, !commandController.isUndoable());
        });
        _this.on("active", function () {
            commandController.undo();
        });
        return _this;
    }
    return DButtonUndo;
}(DButton));
export { DButtonUndo };
//# sourceMappingURL=d-button-undo.js.map