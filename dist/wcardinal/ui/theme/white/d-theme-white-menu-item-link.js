/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DMenuItemLinkState } from "../../d-menu-item-link-state";
import { DThemeWhiteLinks } from "./d-theme-white-links";
import { DThemeWhiteMenuItemText } from "./d-theme-white-menu-item-text";
DThemeWhiteLinks.init();
var DThemeWhiteMenuItemLink = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemLink, _super);
    function DThemeWhiteMenuItemLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemLink.prototype.getImageSource = function (state) {
        if (state & DMenuItemLinkState.NEW_WINDOW) {
            return DThemeWhiteLinks.getImageSource(state);
        }
        return null;
    };
    DThemeWhiteMenuItemLink.prototype.getImageTintAlpha = function (state) {
        if (state & DBaseState.HOVERED) {
            return _super.prototype.getImageTintAlpha.call(this, state);
        }
        return 0;
    };
    DThemeWhiteMenuItemLink.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeWhiteMenuItemLink.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeWhiteMenuItemLink.prototype.getLinkMenuOptions = function () {
        return DThemeWhiteLinks.getLinkMenuOptions();
    };
    return DThemeWhiteMenuItemLink;
}(DThemeWhiteMenuItemText));
export { DThemeWhiteMenuItemLink };
//# sourceMappingURL=d-theme-white-menu-item-link.js.map