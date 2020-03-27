/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";
var DThemeWhiteDialogConfirmDiscard = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialogConfirmDiscard, _super);
    function DThemeWhiteDialogConfirmDiscard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialogConfirmDiscard.prototype.getMessage = function () {
        return "Your changes have not been saved.\n" +
            "Do you want to discard the changes and continue?";
    };
    return DThemeWhiteDialogConfirmDiscard;
}(DThemeWhiteDialogConfirm));
export { DThemeWhiteDialogConfirmDiscard };
//# sourceMappingURL=d-theme-white-dialog-confirm-discard.js.map