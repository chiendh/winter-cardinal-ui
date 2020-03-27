/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkMenuItemSeparator } from "./d-theme-dark-menu-item-separator";
var DThemeDarkMenuItemExpandableItemSeparator = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemExpandableItemSeparator, _super);
    function DThemeDarkMenuItemExpandableItemSeparator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemExpandableItemSeparator.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeDarkMenuItemExpandableItemSeparator;
}(DThemeDarkMenuItemSeparator));
export { DThemeDarkMenuItemExpandableItemSeparator };
//# sourceMappingURL=d-theme-dark-menu-item-expandable-item-separator.js.map