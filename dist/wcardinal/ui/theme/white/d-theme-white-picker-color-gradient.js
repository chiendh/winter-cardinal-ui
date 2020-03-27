/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhitePickerColorGradient = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerColorGradient, _super);
    function DThemeWhitePickerColorGradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerColorGradient.prototype.getGradientPointsWidth = function () {
        return 30;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientPointsMargin = function () {
        return 24;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientAnchorTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_anchor;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientAnchorOutlinedTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_anchor_outlined;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientAnchorOutlineTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_anchor_outline;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientDirectionMargin = function () {
        return 5;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientDirectionTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_direction;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientRecentColumn = function () {
        return 4;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientRecentWidth = function () {
        return 30;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientRecentMargin = function () {
        return 5;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientRecentCount = function () {
        return 16;
    };
    DThemeWhitePickerColorGradient.prototype.getGradientRecents = function () {
        return [];
    };
    DThemeWhitePickerColorGradient.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhitePickerColorGradient.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhitePickerColorGradient.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhitePickerColorGradient;
}(DThemeWhiteBase));
export { DThemeWhitePickerColorGradient };
//# sourceMappingURL=d-theme-white-picker-color-gradient.js.map