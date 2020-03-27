/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteBase } from "./d-theme-white-base";
DThemeWhiteAtlas.add("picker_color_main", 234, 156, "<g>" +
    "<linearGradient id=\"fs7w3iusfdnb\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">" +
    "<stop stop-color=\"#FFFFFF\" stop-opacity=\"0\" offset=\"0\"/>" +
    "<stop stop-color=\"#FFFFFF\" stop-opacity=\"1\" offset=\"1\"/>" +
    "</linearGradient>" +
    "<linearGradient id=\"2rfcfe9874bw\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">" +
    "<stop stop-color=\"#000000\" stop-opacity=\"0\" offset=\"0\"/>" +
    "<stop stop-color=\"#000000\" stop-opacity=\"1\" offset=\"1\"/>" +
    "</linearGradient>" +
    "<rect x=\"0\" y=\"0\" width=\"234\" height=\"156\" fill=\"url(#fs7w3iusfdnb)\" />" +
    "<rect x=\"0\" y=\"0\" width=\"234\" height=\"156\" fill=\"url(#2rfcfe9874bw)\" />" +
    "</g>");
var makeCheckerboard = function (width, height) {
    width = width + width;
    var LIGHT = "#bfbfbf";
    var DARK = "#a5a5a5";
    var result = "<g>";
    for (var iheight = 0; iheight < height; ++iheight) {
        for (var i = 0; i < width; ++i) {
            var color = (i % 2 === 0 ? LIGHT : DARK);
            result += "<rect x=\"" + 9 * i + "\" y=\"" + (18 * iheight + 0) + "\" width=\"9\" height=\"9\" fill=\"" + color + "\" />";
        }
        for (var i = 0; i < width; ++i) {
            var color = (i % 2 === 1 ? LIGHT : DARK);
            result += "<rect x=\"" + 9 * i + "\" y=\"" + (18 * iheight + 9) + "\" width=\"9\" height=\"9\" fill=\"" + color + "\" />";
        }
    }
    result += "</g>";
    return result;
};
DThemeWhiteAtlas.add("picker_color_alpha_checkerboard", 234, 18, makeCheckerboard(13, 1));
DThemeWhiteAtlas.add("picker_color_alpha", 234, 18, "<g>" +
    "<linearGradient id=\"s48afbuh44\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">" +
    "<stop stop-color=\"#FFFFFF\" stop-opacity=\"0\" offset=\"0\"/>" +
    "<stop stop-color=\"#FFFFFF\" stop-opacity=\"1\" offset=\"1\"/>" +
    "</linearGradient>" +
    "<rect x=\"0\" y=\"0\" width=\"234\" height=\"18\" fill=\"url(#s48afbuh44)\" />" +
    "</g>");
DThemeWhiteAtlas.add("picker_color_base", 234, 18, "<g>" +
    "<linearGradient id=\"ni2rbisdf3\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">" +
    "<stop stop-color=\"#FF0000\" offset=\"0\"/>" +
    "<stop stop-color=\"#FFFF00\" offset=\"0.167\"/>" +
    "<stop stop-color=\"#00FF00\" offset=\"0.333\"/>" +
    "<stop stop-color=\"#00FFFF\" offset=\"0.5\"/>" +
    "<stop stop-color=\"#0000FF\" offset=\"0.667\"/>" +
    "<stop stop-color=\"#FF00FF\" offset=\"0.833\"/>" +
    "<stop stop-color=\"#FF0000\" offset=\"1\"/>" +
    "</linearGradient>" +
    "<rect x=\"0\" y=\"0\" width=\"234\" height=\"18\" fill=\"url(#ni2rbisdf3)\" />" +
    "</g>");
DThemeWhiteAtlas.add("picker_color_base_pointer", 16.2, 31.8, "<rect x=\"4.5\" y=\"4.5\" width=\"7.2\" height=\"22.8\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />");
DThemeWhiteAtlas.add("picker_color_pointer", 25.8, 25.8, "<circle cx=\"12.9\" cy=\"12.9\" r=\"4.8\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />" +
    "<circle cx=\"12.9\" cy=\"12.9\" r=\"7.2\" stroke=\"#ffffff\" stroke-width=\"2.4\" fill=\"none\" />");
DThemeWhiteAtlas.add("picker_color_recent_checkerboard", 18, 18, makeCheckerboard(1, 1));
DThemeWhiteAtlas.add("picker_color_recent_null", 18, 18, "<g>" +
    "<rect x=\"1.2\" y=\"1.2\" width=\"15.6\" height=\"15.6\" stroke=\"#fff\" stroke-width=\"0.8\" fill=\"none\" />" +
    "<line x1=\"16.8\" y1=\"1.2\" x2=\"1.2\" y2=\"16.8\" stroke=\"#fff\" stroke-width=\"0.8\" stroke-linecap=\"round\" />" +
    "<line x1=\"1.2\" y1=\"1.2\" x2=\"16.8\" y2=\"16.8\" stroke=\"#fff\" stroke-width=\"0.8\" stroke-linecap=\"round\" />" +
    "</g>");
DThemeWhiteAtlas.add("picker_color_sample_checkerboard", 54, 54, makeCheckerboard(3, 3));
DThemeWhiteAtlas.add("picker_color_sample_null", 54, 54, "<g>" +
    "<rect x=\"3.6\" y=\"3.6\" width=\"46.8\" height=\"46.8\" stroke=\"#fff\" stroke-width=\"2.4\" fill=\"none\" />" +
    "<line x1=\"50.4\" y1=\"3.6\" x2=\"3.6\" y2=\"50.4\" stroke=\"#fff\" stroke-width=\"2.4\" stroke-linecap=\"round\" />" +
    "<line x1=\"3.6\" y1=\"3.6\" x2=\"50.4\" y2=\"50.4\" stroke=\"#fff\" stroke-width=\"2.4\" stroke-linecap=\"round\" />" +
    "</g>");
DThemeWhiteAtlas.add("picker_color_anchor_outlined", 25.8, 25.8, "<circle cx=\"12.9\" cy=\"12.9\" r=\"8.4\" stroke=\"none\" fill=\"#ffffff\" />" +
    "<circle cx=\"12.9\" cy=\"12.9\" r=\"9.6\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />");
DThemeWhiteAtlas.add("picker_color_anchor", 28.2, 28.2, "<circle cx=\"14.1\" cy=\"14.1\" r=\"6\" stroke=\"none\" fill=\"#ffffff\" />" +
    "<circle cx=\"14.1\" cy=\"14.1\" r=\"7.2\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />");
DThemeWhiteAtlas.add("picker_color_direction", 12, 30, "<path d=\"M0.6 25.8 L 12.0375 5.9895\" stroke=\"#5f5f5f\" stroke-width=\"1.2\" fill=\"none\" />" +
    "<path d=\"M8.5125 25.8 A 8.475 8.475 0 0 0 4.275 18.4605\" stroke=\"#5f5f5f\" stroke-width=\"1.2\" fill=\"none\" />" +
    "<rect x=\"0.6\" y=\"24.6\" width=\"11.4375\" height=\"1.2\" rx=\"0.6\" ry=\"0.6\" stroke=\"none\" fill=\"#5f5f5f\" />");
var DThemeWhitePickerColor = /** @class */ (function (_super) {
    __extends(DThemeWhitePickerColor, _super);
    function DThemeWhitePickerColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePickerColor.prototype.getMainWidth = function () {
        return 234;
    };
    DThemeWhitePickerColor.prototype.getMainHeight = function () {
        return 156;
    };
    DThemeWhitePickerColor.prototype.getMainTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_main;
    };
    DThemeWhitePickerColor.prototype.getMainPointerTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_pointer;
    };
    DThemeWhitePickerColor.prototype.getMainPointerColor = function () {
        return 0xffffff;
    };
    DThemeWhitePickerColor.prototype.getMainPointerAlpha = function () {
        return 1;
    };
    DThemeWhitePickerColor.prototype.getBaseHeight = function () {
        return 18;
    };
    DThemeWhitePickerColor.prototype.getBaseMargin = function () {
        return 6;
    };
    DThemeWhitePickerColor.prototype.getBaseTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_base;
    };
    DThemeWhitePickerColor.prototype.getBasePointerTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_base_pointer;
    };
    DThemeWhitePickerColor.prototype.getBasePointerColor = function () {
        return 0xffffff;
    };
    DThemeWhitePickerColor.prototype.getBasePointerAlpha = function () {
        return this.getMainPointerAlpha();
    };
    DThemeWhitePickerColor.prototype.getAlphaHeight = function () {
        return this.getBaseHeight();
    };
    DThemeWhitePickerColor.prototype.getAlphaMargin = function () {
        return this.getBaseMargin();
    };
    DThemeWhitePickerColor.prototype.getAlphaTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_alpha;
    };
    DThemeWhitePickerColor.prototype.getAlphaCheckerboardTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_alpha_checkerboard;
    };
    DThemeWhitePickerColor.prototype.getAlphaPointerTexture = function () {
        return this.getBasePointerTexture();
    };
    DThemeWhitePickerColor.prototype.getAlphaPointerColor = function () {
        return this.getBasePointerColor();
    };
    DThemeWhitePickerColor.prototype.getAlphaPointerAlpha = function () {
        return this.getMainPointerAlpha();
    };
    DThemeWhitePickerColor.prototype.getRecentMargin = function () {
        return this.getBaseMargin();
    };
    DThemeWhitePickerColor.prototype.getRecentColorWidth = function () {
        return this.getBaseHeight();
    };
    DThemeWhitePickerColor.prototype.getRecentColorHeight = function () {
        return this.getRecentColorWidth();
    };
    DThemeWhitePickerColor.prototype.getRecentColorMargin = function () {
        return this.getRecentMargin();
    };
    DThemeWhitePickerColor.prototype.getRecentColorCount = function () {
        return 10;
    };
    DThemeWhitePickerColor.prototype.getRecentCheckerboardTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_recent_checkerboard;
    };
    DThemeWhitePickerColor.prototype.getRecentNullTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_recent_null;
    };
    DThemeWhitePickerColor.prototype.getRecents = function () {
        return [];
    };
    DThemeWhitePickerColor.prototype.getInputMargin = function () {
        return this.getBaseMargin();
    };
    DThemeWhitePickerColor.prototype.getInputLabelWidth = function () {
        return 20;
    };
    DThemeWhitePickerColor.prototype.getSampleWidth = function () {
        return 54;
    };
    DThemeWhitePickerColor.prototype.getSampleHeight = function () {
        return this.getSampleWidth();
    };
    DThemeWhitePickerColor.prototype.getSampleCheckerboardTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_sample_checkerboard;
    };
    DThemeWhitePickerColor.prototype.getSampleNullTexture = function () {
        return DThemeWhiteAtlas.mappings.picker_color_sample_null;
    };
    DThemeWhitePickerColor.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhitePickerColor.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhitePickerColor.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhitePickerColor;
}(DThemeWhiteBase));
export { DThemeWhitePickerColor };
//# sourceMappingURL=d-theme-white-picker-color.js.map