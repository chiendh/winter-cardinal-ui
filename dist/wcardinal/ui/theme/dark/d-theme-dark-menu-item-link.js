/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DMenuItemLinkState } from "../../d-menu-item-link-state";
import { DThemeDarkLinks } from "./d-theme-dark-links";
import { DThemeDarkMenuItemText } from "./d-theme-dark-menu-item-text";
DThemeDarkLinks.init();
var DThemeDarkMenuItemLink = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemLink, _super);
    function DThemeDarkMenuItemLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemLink.prototype.getImageSource = function (state) {
        if (state & DMenuItemLinkState.NEW_WINDOW) {
            return DThemeDarkLinks.getImageSource(state);
        }
        return null;
    };
    DThemeDarkMenuItemLink.prototype.getImageTintAlpha = function (state) {
        if (state & DBaseState.HOVERED) {
            return _super.prototype.getImageTintAlpha.call(this, state);
        }
        return 0;
    };
    DThemeDarkMenuItemLink.prototype.getImageAlignWith = function () {
        return DAlignWith.BORDER;
    };
    DThemeDarkMenuItemLink.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkMenuItemLink.prototype.getLinkMenuOptions = function () {
        return DThemeDarkLinks.getLinkMenuOptions();
    };
    return DThemeDarkMenuItemLink;
}(DThemeDarkMenuItemText));
export { DThemeDarkMenuItemLink };
//# sourceMappingURL=d-theme-dark-menu-item-link.js.map