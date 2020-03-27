/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteMenuItem } from "./d-theme-white-menu-item";
var DThemeWhiteMenuItemText = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemText, _super);
    function DThemeWhiteMenuItemText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemText.prototype.getShortcutTextMargin = function () {
        return this.getPaddingRight();
    };
    return DThemeWhiteMenuItemText;
}(DThemeWhiteMenuItem));
export { DThemeWhiteMenuItemText };
//# sourceMappingURL=d-theme-white-menu-item-text.js.map