/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
var DThemeDarkButtonAmbient = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonAmbient, _super);
    function DThemeDarkButtonAmbient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x131313;
        return _this;
    }
    DThemeDarkButtonAmbient.prototype.getBackgroundColor = function (state) {
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
        return null;
    };
    return DThemeDarkButtonAmbient;
}(DThemeDarkButtonBase));
export { DThemeDarkButtonAmbient };
//# sourceMappingURL=d-theme-dark-button-ambient.js.map