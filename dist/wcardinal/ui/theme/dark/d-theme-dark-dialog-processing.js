/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";
var message = function (state) {
    if (DBaseStates.isSucceeded(state)) {
        return "Processed successfully";
    }
    if (DBaseStates.isFailed(state)) {
        return "Failed to process the request";
    }
    return "Processing...";
};
var DThemeDarkDialogProcessing = /** @class */ (function (_super) {
    __extends(DThemeDarkDialogProcessing, _super);
    function DThemeDarkDialogProcessing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialogProcessing.prototype.getOk = function () {
        return "OK";
    };
    DThemeDarkDialogProcessing.prototype.getCancel = function () {
        return null;
    };
    DThemeDarkDialogProcessing.prototype.getMessage = function () {
        return message;
    };
    DThemeDarkDialogProcessing.prototype.getInterval = function () {
        return 400;
    };
    return DThemeDarkDialogProcessing;
}(DThemeDarkDialogConfirm));
export { DThemeDarkDialogProcessing };
//# sourceMappingURL=d-theme-dark-dialog-processing.js.map