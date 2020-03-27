/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
var DThemeWhiteButtonAmbient = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonAmbient, _super);
    function DThemeWhiteButtonAmbient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonAmbient.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isActive(state)) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        else {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        }
    };
    DThemeWhiteButtonAmbient.prototype.getBackgroundAlpha = function (state) {
        if (!DBaseStates.isDisabled(state)) {
            if (DBaseStates.isActive(state)) {
                return 1.0;
            }
            else if (DBaseStates.isPressed(state)) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA * 2;
            }
            else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
            }
        }
        return 0;
    };
    DThemeWhiteButtonAmbient.prototype.getBorderColor = function (state) {
        return null;
    };
    return DThemeWhiteButtonAmbient;
}(DThemeWhiteButtonBase));
export { DThemeWhiteButtonAmbient };
//# sourceMappingURL=d-theme-white-button-ambient.js.map