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
var DThemeDarkButtonDanger = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonDanger, _super);
    function DThemeDarkButtonDanger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0xEF9A9A;
        return _this;
    }
    DThemeDarkButtonDanger.prototype.getBackgroundColor = function (state) {
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
    DThemeDarkButtonDanger.prototype.getColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return UtilRgb.blend(0x000000, 0xFFFFFF, DThemeDarkConstants.DISABLED_TEXT_ALPHA);
        }
        return 0x000000;
    };
    return DThemeDarkButtonDanger;
}(DThemeDarkButtonBase));
export { DThemeDarkButtonDanger };
//# sourceMappingURL=d-theme-dark-button-danger.js.map