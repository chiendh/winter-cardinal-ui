/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
var DThemeDarkSliderTrack = /** @class */ (function (_super) {
    __extends(DThemeDarkSliderTrack, _super);
    function DThemeDarkSliderTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkSliderTrack.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isActive(state)) {
            if (DBaseStates.isDisabled(state)) {
                return 0x646464;
            }
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        else {
            if (DBaseStates.isDisabled(state)) {
                return 0x1F1F1F;
            }
            return 0x646464;
        }
    };
    DThemeDarkSliderTrack.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkSliderTrack.prototype.getColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0xFFFFFF;
        }
        return 0xDEDEDE;
    };
    DThemeDarkSliderTrack.prototype.getAlpha = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0.38;
        }
        return 1;
    };
    return DThemeDarkSliderTrack;
}(DThemeDarkButton));
export { DThemeDarkSliderTrack };
//# sourceMappingURL=d-theme-dark-slider-track.js.map