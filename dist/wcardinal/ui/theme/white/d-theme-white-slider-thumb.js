/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeWhiteButton } from "./d-theme-white-button";
var DThemeWhiteSliderThumb = /** @class */ (function (_super) {
    __extends(DThemeWhiteSliderThumb, _super);
    function DThemeWhiteSliderThumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteSliderThumb.prototype.getX = function () {
        return "CENTER";
    };
    DThemeWhiteSliderThumb.prototype.getY = function () {
        return "CENTER";
    };
    DThemeWhiteSliderThumb.prototype.getWidth = function () {
        return 15;
    };
    DThemeWhiteSliderThumb.prototype.getHeight = function () {
        return 15;
    };
    DThemeWhiteSliderThumb.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0xAAAAAA;
        }
        return 0x3399FF;
    };
    DThemeWhiteSliderThumb.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteSliderThumb.prototype.getCornerRadius = function () {
        return 7.5;
    };
    return DThemeWhiteSliderThumb;
}(DThemeWhiteButton));
export { DThemeWhiteSliderThumb };
//# sourceMappingURL=d-theme-white-slider-thumb.js.map