/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImage } from "./d-theme-white-image";
var DThemeWhiteListItem = /** @class */ (function (_super) {
    __extends(DThemeWhiteListItem, _super);
    function DThemeWhiteListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteListItem.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        else if (DBaseStates.isActive(state)) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        }
        else {
            return null;
        }
    };
    DThemeWhiteListItem.prototype.getBackgroundAlpha = function (state) {
        return DThemeWhiteConstants.HIGHLIGHT_ALPHA;
    };
    DThemeWhiteListItem.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteListItem.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhiteListItem.prototype.getWidth = function () {
        return "padding";
    };
    DThemeWhiteListItem.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeWhiteListItem.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeWhiteListItem.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeWhiteListItem.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeWhiteListItem;
}(DThemeWhiteImage));
export { DThemeWhiteListItem };
//# sourceMappingURL=d-theme-white-list-item.js.map