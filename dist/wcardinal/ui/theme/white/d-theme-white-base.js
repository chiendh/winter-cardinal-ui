/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DCornerMask } from "../../d-corner-mask";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DShadowImpl } from "../../d-shadow-impl";
import { UtilTexturePlane } from "../../util/util-texture-plane";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteFont } from "./d-theme-white-font";
var newShadow = function (id, radius, opacity) {
    var d = radius * 2;
    DThemeWhiteAtlas.add(id, d, d, "<g>" +
        "<defs>" +
        ("<radialGradient id=\"" + id + "_filter\">") +
        ("<stop offset=\"0%\" stop-color=\"black\" stop-opacity=\"" + opacity + "\" />") +
        "<stop offset=\"100%\" stop-color=\"black\" stop-opacity=\"0\" />" +
        "</radialGradient>" +
        "</defs>" +
        ("<rect x=\"0\" y=\"0\" width=\"" + d + "\" height=\"" + d + "\" fill=\"url(#" + id + "_filter)\"/>") +
        "</g>");
};
newShadow("shadow_weak", 8, 0.15);
newShadow("shadow", 12, 0.15);
var DThemeWhiteBase = /** @class */ (function (_super) {
    __extends(DThemeWhiteBase, _super);
    function DThemeWhiteBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteBase.prototype.getX = function () {
        return 0;
    };
    DThemeWhiteBase.prototype.getY = function () {
        return 0;
    };
    DThemeWhiteBase.prototype.getHeight = function () {
        return 100;
    };
    DThemeWhiteBase.prototype.getWidth = function () {
        return 100;
    };
    DThemeWhiteBase.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhiteBase.prototype.getBackgroundAlpha = function (state) {
        return 1;
    };
    DThemeWhiteBase.prototype.getBackgroundTexture = function (radius) {
        return UtilTexturePlane.getInstance().getBackground(radius);
    };
    DThemeWhiteBase.prototype.getBorderColor = function (state) {
        if (DBaseStates.isFocused(state)) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        else {
            return null;
        }
    };
    DThemeWhiteBase.prototype.getBorderAlpha = function (state) {
        return 1;
    };
    DThemeWhiteBase.prototype.getBorderWidth = function (state) {
        return 1;
    };
    DThemeWhiteBase.prototype.getBorderAlign = function (state) {
        return 0.5;
    };
    DThemeWhiteBase.prototype.getBorderMask = function (state) {
        return DBorderMask.NONE;
    };
    DThemeWhiteBase.prototype.getBorderTexture = function (radius, width) {
        return UtilTexturePlane.getInstance().getBorder(radius, width);
    };
    DThemeWhiteBase.prototype.getPaddingLeft = function () {
        return 0;
    };
    DThemeWhiteBase.prototype.getPaddingRight = function () {
        return 0;
    };
    DThemeWhiteBase.prototype.getPaddingTop = function () {
        return 0;
    };
    DThemeWhiteBase.prototype.getPaddingBottom = function () {
        return 0;
    };
    DThemeWhiteBase.prototype.getCornerRadius = function () {
        return 4;
    };
    DThemeWhiteBase.prototype.getCornerMask = function () {
        return DCornerMask.NONE;
    };
    DThemeWhiteBase.prototype.getOutlineColor = function (state) {
        return null;
    };
    DThemeWhiteBase.prototype.getOutlineAlpha = function (state) {
        return 1;
    };
    DThemeWhiteBase.prototype.getOutlineWidth = function (state) {
        return 1;
    };
    DThemeWhiteBase.prototype.getOutlineOffset = function (state) {
        return 1;
    };
    DThemeWhiteBase.prototype.getOutlineAlign = function (state) {
        return 1;
    };
    DThemeWhiteBase.prototype.getOutlineMask = function (state) {
        return DBorderMask.NONE;
    };
    DThemeWhiteBase.prototype.getClearType = function () {
        return DLayoutClearType.NONE;
    };
    DThemeWhiteBase.prototype.getShadow = function () {
        return null;
    };
    DThemeWhiteBase.prototype.getInteractive = function () {
        return DBaseInteractive.SELF;
    };
    DThemeWhiteBase.prototype.getTitle = function () {
        return "";
    };
    DThemeWhiteBase.prototype.getWeight = function () {
        return -1;
    };
    DThemeWhiteBase.prototype.newShadow = function () {
        return new DShadowImpl(DThemeWhiteAtlas.mappings.shadow, 12, 12, 0, 3);
    };
    DThemeWhiteBase.prototype.newShadowWeak = function () {
        return new DShadowImpl(DThemeWhiteAtlas.mappings.shadow_weak, 8, 8, 0, 2);
    };
    DThemeWhiteBase.prototype.getCursor = function () {
        return null;
    };
    return DThemeWhiteBase;
}(DThemeWhiteFont));
export { DThemeWhiteBase };
//# sourceMappingURL=d-theme-white-base.js.map