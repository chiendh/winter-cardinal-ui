/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkPickerColorGradient = /** @class */ (function (_super) {
    __extends(DThemeDarkPickerColorGradient, _super);
    function DThemeDarkPickerColorGradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkPickerColorGradient.prototype.getGradientPointsWidth = function () {
        return 30;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientPointsMargin = function () {
        return 24;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientAnchorTexture = function () {
        return DThemeDarkAtlas.mappings.picker_color_anchor;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientAnchorOutlinedTexture = function () {
        return DThemeDarkAtlas.mappings.picker_color_anchor_outlined;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientAnchorOutlineTexture = function () {
        return DThemeDarkAtlas.mappings.picker_color_anchor_outline;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientDirectionMargin = function () {
        return 5;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientDirectionTexture = function () {
        return DThemeDarkAtlas.mappings.picker_color_direction;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientRecentColumn = function () {
        return 4;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientRecentWidth = function () {
        return 30;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientRecentMargin = function () {
        return 5;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientRecentCount = function () {
        return 16;
    };
    DThemeDarkPickerColorGradient.prototype.getGradientRecents = function () {
        return [];
    };
    DThemeDarkPickerColorGradient.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeDarkPickerColorGradient.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkPickerColorGradient.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkPickerColorGradient;
}(DThemeDarkBase));
export { DThemeDarkPickerColorGradient };
//# sourceMappingURL=d-theme-dark-picker-color-gradient.js.map