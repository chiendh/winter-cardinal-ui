/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
var DThemeWhiteMenuBarItem = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuBarItem, _super);
    function DThemeWhiteMenuBarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0xffffff;
        _this.COLOR_HOVERED = UtilRgb.darken(_this.COLOR, 0.034);
        _this.COLOR_PRESSED = UtilRgb.darken(_this.COLOR, 0.051);
        return _this;
    }
    DThemeWhiteMenuBarItem.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        else if (DBaseStates.isActive(state)) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        else if (DBaseStates.isPressed(state)) {
            return this.COLOR_PRESSED;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        else {
            return null;
        }
    };
    DThemeWhiteMenuBarItem.prototype.getBorderColor = function () {
        return null;
    };
    DThemeWhiteMenuBarItem.prototype.getWidth = function () {
        return "auto";
    };
    DThemeWhiteMenuBarItem.prototype.getHeight = function () {
        return "100%";
    };
    DThemeWhiteMenuBarItem.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeWhiteMenuBarItem.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeWhiteMenuBarItem.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeWhiteMenuBarItem.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    return DThemeWhiteMenuBarItem;
}(DThemeWhiteButton));
export { DThemeWhiteMenuBarItem };
//# sourceMappingURL=d-theme-white-menu-bar-item.js.map