/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";
var DThemeDarkDialogConfirmDiscard = /** @class */ (function (_super) {
    __extends(DThemeDarkDialogConfirmDiscard, _super);
    function DThemeDarkDialogConfirmDiscard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialogConfirmDiscard.prototype.getMessage = function () {
        return "Your changes have not been saved.\n" +
            "Do you want to discard the changes and continue?";
    };
    return DThemeDarkDialogConfirmDiscard;
}(DThemeDarkDialogConfirm));
export { DThemeDarkDialogConfirmDiscard };
//# sourceMappingURL=d-theme-dark-dialog-confirm-discard.js.map