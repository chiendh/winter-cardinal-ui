/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";
var DThemeWhiteButtonBase = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonBase, _super);
    function DThemeWhiteButtonBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0xffffff;
        _this.COLOR_HOVERED = UtilRgb.darken(_this.COLOR, 0.017);
        _this.COLOR_PRESSED = UtilRgb.darken(_this.COLOR, 0.034);
        return _this;
    }
    DThemeWhiteButtonBase.prototype.getBackgroundColor = function (state) {
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
            return this.COLOR;
        }
    };
    DThemeWhiteButtonBase.prototype.getColor = function (state) {
        if (DBaseStates.isDisabled(state) || !DBaseStates.isActive(state)) {
            return _super.prototype.getColor.call(this, state);
        }
        else {
            return 0xffffff;
        }
    };
    DThemeWhiteButtonBase.prototype.getBorderColor = function (state) {
        if (DBaseStates.isDisabled(state) || !DBaseStates.isActive(state)) {
            return 0xe5e5e5;
        }
        else {
            return null;
        }
    };
    DThemeWhiteButtonBase.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhiteButtonBase.prototype.getWidth = function () {
        return 100;
    };
    DThemeWhiteButtonBase.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeWhiteButtonBase.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeWhiteButtonBase.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeWhiteButtonBase.prototype.isToggle = function () {
        return false;
    };
    return DThemeWhiteButtonBase;
}(DThemeWhiteImageBase));
export { DThemeWhiteButtonBase };
//# sourceMappingURL=d-theme-white-button-base.js.map