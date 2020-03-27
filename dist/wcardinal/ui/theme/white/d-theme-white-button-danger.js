/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
var DThemeWhiteButtonDanger = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonDanger, _super);
    function DThemeWhiteButtonDanger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0xff5566;
        _this.COLOR_HOVERED = UtilRgb.darken(_this.COLOR, 0.1);
        _this.COLOR_PRESSED = UtilRgb.darken(_this.COLOR, 0.2);
        return _this;
    }
    DThemeWhiteButtonDanger.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        else if (DBaseStates.isPressed(state) || DBaseStates.isActive(state)) {
            return this.COLOR_PRESSED;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        else {
            return this.COLOR;
        }
    };
    DThemeWhiteButtonDanger.prototype.getBorderColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0xe5e5e5;
        }
        else {
            return null;
        }
    };
    DThemeWhiteButtonDanger.prototype.getColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return _super.prototype.getColor.call(this, state);
        }
        else {
            return 0xffffff;
        }
    };
    return DThemeWhiteButtonDanger;
}(DThemeWhiteButtonBase));
export { DThemeWhiteButtonDanger };
//# sourceMappingURL=d-theme-white-button-danger.js.map