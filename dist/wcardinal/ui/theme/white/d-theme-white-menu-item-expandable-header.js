/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignWith } from "../../d-align-with";
import { DBaseStates } from "../../d-base-states";
import { DThemeWhiteExpandables } from "./d-theme-white-expandables";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";
DThemeWhiteExpandables.init();
var DThemeWhiteMenuItemExpandableHeader = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemExpandableHeader, _super);
    function DThemeWhiteMenuItemExpandableHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemExpandableHeader.prototype.getPaddingLeft = function () {
        return this.getPaddingRight();
    };
    DThemeWhiteMenuItemExpandableHeader.prototype.getPaddingRight = function () {
        return 26;
    };
    DThemeWhiteMenuItemExpandableHeader.prototype.getImageSource = function (state) {
        if (DBaseStates.isActiveIn(state)) {
            return DThemeWhiteExpandables.getImageOpened();
        }
        return DThemeWhiteExpandables.getImageClosed();
    };
    DThemeWhiteMenuItemExpandableHeader.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeWhiteMenuItemExpandableHeader.prototype.getImageMarginHorizontal = function () {
        return 7;
    };
    return DThemeWhiteMenuItemExpandableHeader;
}(DThemeWhiteListItem));
export { DThemeWhiteMenuItemExpandableHeader };
//# sourceMappingURL=d-theme-white-menu-item-expandable-header.js.map