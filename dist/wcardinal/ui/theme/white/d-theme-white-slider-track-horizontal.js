/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteSliderTrack } from "./d-theme-white-slider-track";
var DThemeWhiteSliderTrackHorizontal = /** @class */ (function (_super) {
    __extends(DThemeWhiteSliderTrackHorizontal, _super);
    function DThemeWhiteSliderTrackHorizontal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteSliderTrackHorizontal.prototype.getX = function () {
        return 0;
    };
    DThemeWhiteSliderTrackHorizontal.prototype.getY = function () {
        return "CENTER";
    };
    DThemeWhiteSliderTrackHorizontal.prototype.getWidth = function () {
        return "100%";
    };
    DThemeWhiteSliderTrackHorizontal.prototype.getHeight = function () {
        return 5;
    };
    return DThemeWhiteSliderTrackHorizontal;
}(DThemeWhiteSliderTrack));
export { DThemeWhiteSliderTrackHorizontal };
//# sourceMappingURL=d-theme-white-slider-track-horizontal.js.map