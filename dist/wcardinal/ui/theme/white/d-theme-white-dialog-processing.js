/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";
var message = function (state) {
    if (DBaseStates.isSucceeded(state)) {
        return "Processed successfully";
    }
    else if (DBaseStates.isFailed(state)) {
        return "Failed to process the request";
    }
    else {
        return "Processing...";
    }
};
var DThemeWhiteDialogProcessing = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialogProcessing, _super);
    function DThemeWhiteDialogProcessing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialogProcessing.prototype.getOk = function () {
        return "OK";
    };
    DThemeWhiteDialogProcessing.prototype.getCancel = function () {
        return null;
    };
    DThemeWhiteDialogProcessing.prototype.getMessage = function () {
        return message;
    };
    DThemeWhiteDialogProcessing.prototype.getInterval = function () {
        return 400;
    };
    return DThemeWhiteDialogProcessing;
}(DThemeWhiteDialogConfirm));
export { DThemeWhiteDialogProcessing };
//# sourceMappingURL=d-theme-white-dialog-processing.js.map