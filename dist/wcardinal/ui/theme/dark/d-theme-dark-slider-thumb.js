/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
var DThemeDarkSliderThumb = /** @class */ (function (_super) {
    __extends(DThemeDarkSliderThumb, _super);
    function DThemeDarkSliderThumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkSliderThumb.prototype.getX = function () {
        return "CENTER";
    };
    DThemeDarkSliderThumb.prototype.getY = function () {
        return "CENTER";
    };
    DThemeDarkSliderThumb.prototype.getWidth = function () {
        return 15;
    };
    DThemeDarkSliderThumb.prototype.getHeight = function () {
        return 15;
    };
    DThemeDarkSliderThumb.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0x646464;
        }
        return DThemeDarkConstants.HIGHLIGHT_COLOR;
    };
    DThemeDarkSliderThumb.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkSliderThumb.prototype.getCornerRadius = function () {
        return 7.5;
    };
    return DThemeDarkSliderThumb;
}(DThemeDarkButton));
export { DThemeDarkSliderThumb };
//# sourceMappingURL=d-theme-dark-slider-thumb.js.map