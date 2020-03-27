/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkMenuItem } from "./d-theme-dark-menu-item";
var DThemeDarkMenuItemText = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemText, _super);
    function DThemeDarkMenuItemText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemText.prototype.getShortcutTextMargin = function () {
        return this.getPaddingRight();
    };
    return DThemeDarkMenuItemText;
}(DThemeDarkMenuItem));
export { DThemeDarkMenuItemText };
//# sourceMappingURL=d-theme-dark-menu-item-text.js.map