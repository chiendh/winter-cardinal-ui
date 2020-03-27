/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignWith } from "../../d-align-with";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkExpandables } from "./d-theme-dark-expandables";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";
DThemeDarkExpandables.init();
var DThemeDarkMenuItemExpandableHeader = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemExpandableHeader, _super);
    function DThemeDarkMenuItemExpandableHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemExpandableHeader.prototype.getPaddingLeft = function () {
        return this.getPaddingRight();
    };
    DThemeDarkMenuItemExpandableHeader.prototype.getPaddingRight = function () {
        return 26;
    };
    DThemeDarkMenuItemExpandableHeader.prototype.getImageSource = function (state) {
        if (DBaseStates.isActiveIn(state)) {
            return DThemeDarkExpandables.getImageOpened();
        }
        return DThemeDarkExpandables.getImageClosed();
    };
    DThemeDarkMenuItemExpandableHeader.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeDarkMenuItemExpandableHeader.prototype.getImageMarginHorizontal = function () {
        return 7;
    };
    return DThemeDarkMenuItemExpandableHeader;
}(DThemeDarkListItem));
export { DThemeDarkMenuItemExpandableHeader };
//# sourceMappingURL=d-theme-dark-menu-item-expandable-header.js.map