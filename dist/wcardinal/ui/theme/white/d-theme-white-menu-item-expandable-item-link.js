/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteMenuItemLink } from "./d-theme-white-menu-item-link";
var DThemeWhiteMenuItemExpandableItemLink = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemExpandableItemLink, _super);
    function DThemeWhiteMenuItemExpandableItemLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemExpandableItemLink.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeWhiteMenuItemExpandableItemLink;
}(DThemeWhiteMenuItemLink));
export { DThemeWhiteMenuItemExpandableItemLink };
//# sourceMappingURL=d-theme-white-menu-item-expandable-item-link.js.map