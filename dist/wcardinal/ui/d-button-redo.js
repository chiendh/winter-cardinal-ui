/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DButton } from "./d-button";
import { DControllers } from "./d-controllers";
var DButtonRedo = /** @class */ (function (_super) {
    __extends(DButtonRedo, _super);
    function DButtonRedo(options) {
        var _this = _super.call(this, options) || this;
        var commandController = DControllers.getCommandController();
        _this.setState(DBaseState.DISABLED, !commandController.isRedoable());
        commandController.on("change", function () {
            _this.setState(DBaseState.DISABLED, !commandController.isRedoable());
        });
        _this.on("active", function () {
            commandController.redo();
        });
        return _this;
    }
    return DButtonRedo;
}(DButton));
export { DButtonRedo };
//# sourceMappingURL=d-button-redo.js.map