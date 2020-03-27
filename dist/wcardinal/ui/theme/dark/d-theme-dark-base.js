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
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkFont } from "./d-theme-dark-font";
var newShadow = function (id, radius, opacity) {
    var d = radius * 2;
    DThemeDarkAtlas.add(id, d, d, "<g>" +
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
var DThemeDarkBase = /** @class */ (function (_super) {
    __extends(DThemeDarkBase, _super);
    function DThemeDarkBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkBase.prototype.getX = function () {
        return 0;
    };
    DThemeDarkBase.prototype.getY = function () {
        return 0;
    };
    DThemeDarkBase.prototype.getHeight = function () {
        return 100;
    };
    DThemeDarkBase.prototype.getWidth = function () {
        return 100;
    };
    DThemeDarkBase.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeDarkBase.prototype.getBackgroundAlpha = function (state) {
        return 1;
    };
    DThemeDarkBase.prototype.getBackgroundTexture = function (radius) {
        return UtilTexturePlane.getInstance().getBackground(radius);
    };
    DThemeDarkBase.prototype.getBorderColor = function (state) {
        if (DBaseStates.isFocused(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        return null;
    };
    DThemeDarkBase.prototype.getBorderAlpha = function (state) {
        return 1;
    };
    DThemeDarkBase.prototype.getBorderWidth = function (state) {
        return 1;
    };
    DThemeDarkBase.prototype.getBorderAlign = function (state) {
        return 0.5;
    };
    DThemeDarkBase.prototype.getBorderMask = function (state) {
        return DBorderMask.NONE;
    };
    DThemeDarkBase.prototype.getBorderTexture = function (radius, width) {
        return UtilTexturePlane.getInstance().getBorder(radius, width);
    };
    DThemeDarkBase.prototype.getPaddingLeft = function () {
        return 0;
    };
    DThemeDarkBase.prototype.getPaddingRight = function () {
        return 0;
    };
    DThemeDarkBase.prototype.getPaddingTop = function () {
        return 0;
    };
    DThemeDarkBase.prototype.getPaddingBottom = function () {
        return 0;
    };
    DThemeDarkBase.prototype.getCornerRadius = function () {
        return 4;
    };
    DThemeDarkBase.prototype.getCornerMask = function () {
        return DCornerMask.NONE;
    };
    DThemeDarkBase.prototype.getOutlineColor = function (state) {
        return null;
    };
    DThemeDarkBase.prototype.getOutlineAlpha = function (state) {
        return 1;
    };
    DThemeDarkBase.prototype.getOutlineWidth = function (state) {
        return 1;
    };
    DThemeDarkBase.prototype.getOutlineOffset = function (state) {
        return 1;
    };
    DThemeDarkBase.prototype.getOutlineAlign = function (state) {
        return 1;
    };
    DThemeDarkBase.prototype.getOutlineMask = function (state) {
        return DBorderMask.NONE;
    };
    DThemeDarkBase.prototype.getClearType = function () {
        return DLayoutClearType.NONE;
    };
    DThemeDarkBase.prototype.getShadow = function () {
        return null;
    };
    DThemeDarkBase.prototype.getInteractive = function () {
        return DBaseInteractive.SELF;
    };
    DThemeDarkBase.prototype.getTitle = function () {
        return "";
    };
    DThemeDarkBase.prototype.getWeight = function () {
        return -1;
    };
    DThemeDarkBase.prototype.newShadow = function () {
        return new DShadowImpl(DThemeDarkAtlas.mappings.shadow, 12, 12, 0, 3);
    };
    DThemeDarkBase.prototype.newShadowWeak = function () {
        return new DShadowImpl(DThemeDarkAtlas.mappings.shadow_weak, 8, 8, 0, 2);
    };
    DThemeDarkBase.prototype.getCursor = function () {
        return null;
    };
    return DThemeDarkBase;
}(DThemeDarkFont));
export { DThemeDarkBase };
//# sourceMappingURL=d-theme-dark-base.js.map