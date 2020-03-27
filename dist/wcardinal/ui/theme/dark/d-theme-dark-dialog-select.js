/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { toLabel } from "../../util/to-label";
import { DThemeDarkDialogCommand } from "./d-theme-dark-dialog-command";
var DThemeDarkDialogSelect = /** @class */ (function (_super) {
    __extends(DThemeDarkDialogSelect, _super);
    function DThemeDarkDialogSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialogSelect.prototype.getOk = function () {
        return null;
    };
    DThemeDarkDialogSelect.prototype.getCancel = function () {
        return null;
    };
    DThemeDarkDialogSelect.prototype.getItemTextFormatter = function () {
        return toLabel;
    };
    DThemeDarkDialogSelect.prototype.getNoteNoItemsText = function () {
        return "No Items";
    };
    DThemeDarkDialogSelect.prototype.getNoteSearchingText = function () {
        return "Searching...";
    };
    return DThemeDarkDialogSelect;
}(DThemeDarkDialogCommand));
export { DThemeDarkDialogSelect };
//# sourceMappingURL=d-theme-dark-dialog-select.js.map