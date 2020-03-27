/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkSliderTrack } from "./d-theme-dark-slider-track";
var DThemeDarkSliderTrackVertical = /** @class */ (function (_super) {
    __extends(DThemeDarkSliderTrackVertical, _super);
    function DThemeDarkSliderTrackVertical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkSliderTrackVertical.prototype.getX = function () {
        return "CENTER";
    };
    DThemeDarkSliderTrackVertical.prototype.getY = function () {
        return 0;
    };
    DThemeDarkSliderTrackVertical.prototype.getWidth = function () {
        return 5;
    };
    DThemeDarkSliderTrackVertical.prototype.getHeight = function () {
        return "100%";
    };
    return DThemeDarkSliderTrackVertical;
}(DThemeDarkSliderTrack));
export { DThemeDarkSliderTrackVertical };
//# sourceMappingURL=d-theme-dark-slider-track-vertical.js.map