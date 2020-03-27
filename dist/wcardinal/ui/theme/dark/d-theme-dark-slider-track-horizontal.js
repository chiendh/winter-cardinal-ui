/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkSliderTrack } from "./d-theme-dark-slider-track";
var DThemeDarkSliderTrackHorizontal = /** @class */ (function (_super) {
    __extends(DThemeDarkSliderTrackHorizontal, _super);
    function DThemeDarkSliderTrackHorizontal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkSliderTrackHorizontal.prototype.getX = function () {
        return 0;
    };
    DThemeDarkSliderTrackHorizontal.prototype.getY = function () {
        return "CENTER";
    };
    DThemeDarkSliderTrackHorizontal.prototype.getWidth = function () {
        return "100%";
    };
    DThemeDarkSliderTrackHorizontal.prototype.getHeight = function () {
        return 5;
    };
    return DThemeDarkSliderTrackHorizontal;
}(DThemeDarkSliderTrack));
export { DThemeDarkSliderTrackHorizontal };
//# sourceMappingURL=d-theme-dark-slider-track-horizontal.js.map