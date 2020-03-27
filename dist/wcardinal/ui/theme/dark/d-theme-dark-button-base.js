/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";
var DThemeDarkButtonBase = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonBase, _super);
    function DThemeDarkButtonBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x383838;
        return _this;
    }
    DThemeDarkButtonBase.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return UtilRgb.blend(0x000000, 0xFFFFFF, DThemeDarkConstants.DISABLED_ALPHA);
        }
        if (DBaseStates.isActive(state)) {
            return UtilRgb.blend(this.COLOR, this.getColor(DBaseState.ACTIVE), DThemeDarkConstants.ACTIVE_ALPHA);
        }
        if (DBaseStates.isPressed(state)) {
            return UtilRgb.blend(this.COLOR, this.getColor(DBaseState.PRESSED), DThemeDarkConstants.PRESSED_ALPHA);
        }
        if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return UtilRgb.blend(this.COLOR, this.getColor(DBaseState.HOVERED), DThemeDarkConstants.FOCUSED_ALPHA);
        }
        return this.COLOR;
    };
    DThemeDarkButtonBase.prototype.getColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return UtilRgb.blend(0x000000, 0xFFFFFF, DThemeDarkConstants.DISABLED_TEXT_ALPHA);
        }
        return _super.prototype.getColor.call(this, state);
    };
    DThemeDarkButtonBase.prototype.getBorderColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return UtilRgb.blend(0x000000, 0xFFFFFF, DThemeDarkConstants.DISABLED_ALPHA);
        }
        return null;
    };
    DThemeDarkButtonBase.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkButtonBase.prototype.getWidth = function () {
        return 100;
    };
    DThemeDarkButtonBase.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeDarkButtonBase.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeDarkButtonBase.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeDarkButtonBase.prototype.isToggle = function () {
        return false;
    };
    return DThemeDarkButtonBase;
}(DThemeDarkImageBase));
export { DThemeDarkButtonBase };
//# sourceMappingURL=d-theme-dark-button-base.js.map