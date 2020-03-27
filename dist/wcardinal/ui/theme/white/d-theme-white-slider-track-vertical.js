/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteSliderTrack } from "./d-theme-white-slider-track";
var DThemeWhiteSliderTrackVertical = /** @class */ (function (_super) {
    __extends(DThemeWhiteSliderTrackVertical, _super);
    function DThemeWhiteSliderTrackVertical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteSliderTrackVertical.prototype.getX = function () {
        return "CENTER";
    };
    DThemeWhiteSliderTrackVertical.prototype.getY = function () {
        return 0;
    };
    DThemeWhiteSliderTrackVertical.prototype.getWidth = function () {
        return 5;
    };
    DThemeWhiteSliderTrackVertical.prototype.getHeight = function () {
        return "100%";
    };
    return DThemeWhiteSliderTrackVertical;
}(DThemeWhiteSliderTrack));
export { DThemeWhiteSliderTrackVertical };
//# sourceMappingURL=d-theme-white-slider-track-vertical.js.map