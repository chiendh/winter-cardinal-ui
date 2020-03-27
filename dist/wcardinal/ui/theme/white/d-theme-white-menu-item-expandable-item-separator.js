/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteMenuItemSeparator } from "./d-theme-white-menu-item-separator";
var DThemeWhiteMenuItemExpandableItemSeparator = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemExpandableItemSeparator, _super);
    function DThemeWhiteMenuItemExpandableItemSeparator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemExpandableItemSeparator.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeWhiteMenuItemExpandableItemSeparator;
}(DThemeWhiteMenuItemSeparator));
export { DThemeWhiteMenuItemExpandableItemSeparator };
//# sourceMappingURL=d-theme-white-menu-item-expandable-item-separator.js.map