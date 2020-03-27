/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { toLabel } from "../../util/to-label";
import { DThemeWhiteDialogCommand } from "./d-theme-white-dialog-command";
var DThemeWhiteDialogSelect = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialogSelect, _super);
    function DThemeWhiteDialogSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialogSelect.prototype.getOk = function () {
        return null;
    };
    DThemeWhiteDialogSelect.prototype.getCancel = function () {
        return null;
    };
    DThemeWhiteDialogSelect.prototype.getItemTextFormatter = function () {
        return toLabel;
    };
    DThemeWhiteDialogSelect.prototype.getNoteNoItemsText = function () {
        return "No Items";
    };
    DThemeWhiteDialogSelect.prototype.getNoteSearchingText = function () {
        return "Searching...";
    };
    return DThemeWhiteDialogSelect;
}(DThemeWhiteDialogCommand));
export { DThemeWhiteDialogSelect };
//# sourceMappingURL=d-theme-white-dialog-select.js.map