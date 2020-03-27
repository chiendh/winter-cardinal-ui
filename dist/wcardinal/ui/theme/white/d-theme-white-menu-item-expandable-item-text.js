/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteMenuItemText } from "./d-theme-white-menu-item-text";
var DThemeWhiteMenuItemExpandableItemText = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemExpandableItemText, _super);
    function DThemeWhiteMenuItemExpandableItemText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemExpandableItemText.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeWhiteMenuItemExpandableItemText;
}(DThemeWhiteMenuItemText));
export { DThemeWhiteMenuItemExpandableItemText };
//# sourceMappingURL=d-theme-white-menu-item-expandable-item-text.js.map