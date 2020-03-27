/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
var DThemeWhiteSliderTrack = /** @class */ (function (_super) {
    __extends(DThemeWhiteSliderTrack, _super);
    function DThemeWhiteSliderTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteSliderTrack.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isActive(state)) {
            if (DBaseStates.isDisabled(state)) {
                return 0xAAAAAA;
            }
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        return 0xCCCCCC;
    };
    DThemeWhiteSliderTrack.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteSliderTrack.prototype.getColor = function (state) {
        return 0x5F5F5F;
    };
    return DThemeWhiteSliderTrack;
}(DThemeWhiteButton));
export { DThemeWhiteSliderTrack };
//# sourceMappingURL=d-theme-white-slider-track.js.map