/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
var DThemeDarkMenuBarItem = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuBarItem, _super);
    function DThemeDarkMenuBarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x000000;
        _this.COLOR_HOVERED = UtilRgb.brighten(_this.COLOR, DThemeDarkConstants.FOCUSED_ALPHA);
        _this.COLOR_PRESSED = UtilRgb.brighten(_this.COLOR, DThemeDarkConstants.PRESSED_ALPHA);
        return _this;
    }
    DThemeDarkMenuBarItem.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        if (DBaseStates.isActive(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        if (DBaseStates.isPressed(state)) {
            return this.COLOR_PRESSED;
        }
        if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        return null;
    };
    DThemeDarkMenuBarItem.prototype.getBorderColor = function () {
        return null;
    };
    DThemeDarkMenuBarItem.prototype.getWidth = function () {
        return "auto";
    };
    DThemeDarkMenuBarItem.prototype.getHeight = function () {
        return "100%";
    };
    DThemeDarkMenuBarItem.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeDarkMenuBarItem.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeDarkMenuBarItem.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeDarkMenuBarItem.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    return DThemeDarkMenuBarItem;
}(DThemeDarkButton));
export { DThemeDarkMenuBarItem };
//# sourceMappingURL=d-theme-dark-menu-bar-item.js.map