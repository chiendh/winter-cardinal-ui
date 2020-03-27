/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBaseBackgroundMesh } from "./d-base-background-mesh";
import { DBaseBorderMesh } from "./d-base-border-mesh";
import { DBaseOutlineMesh } from "./d-base-outline-mesh";
var DBaseReflowable = /** @class */ (function () {
    function DBaseReflowable(base) {
        var theme = base.theme;
        var corner = base.corner;
        var cornerRadius = corner.getRadius();
        var cornerHeight = cornerRadius + 1;
        var cornerMask = corner.getMask();
        var backgroundPlane = this._backgroundPlane = new DBaseBackgroundMesh(theme.getBackgroundTexture(cornerRadius), cornerHeight, cornerMask);
        base.appendRenderable(backgroundPlane, true);
        var state = base.state;
        var border = base.border;
        var borderWidth = border.getWidth(state);
        var borderMask = border.getMask(state);
        var borderPlane = this._borderPlane = new DBaseBorderMesh(theme.getBorderTexture(cornerRadius, borderWidth), cornerHeight, borderMask, cornerMask);
        base.appendRenderable(borderPlane, false);
        var outline = base.outline;
        var outlineWidth = outline.getWidth(state);
        var outlineMask = outline.getMask(state);
        var outlinePlane = this._outlinePlane = new DBaseOutlineMesh(theme.getBorderTexture(cornerRadius, outlineWidth), cornerHeight, outlineMask, cornerMask);
        base.appendRenderable(outlinePlane, false);
        this._lastBackgroundCornerRadius = cornerRadius;
        this._lastBorderCornerRadius = cornerRadius;
        this._lastBorderWidth = borderWidth;
        this._lastOutlineCornerRadius = cornerRadius;
        this._lastOutlineWidth = outlineWidth;
        base.addReflowable(this);
    }
    DBaseReflowable.prototype.onReflow = function (base, width, height) {
        var theme = base.theme;
        var state = base.state;
        var corner = base.corner;
        var cornerRadius = corner.getRadius();
        var cornerHeight = cornerRadius + 1;
        var cornerMask = corner.getMask();
        // Background
        var background = base.background;
        var backgroundPlane = this._backgroundPlane;
        var backgroundColor = background.getColor(state);
        if (backgroundColor != null) {
            var backgroundAlpha = background.getAlpha(state);
            if (0 < backgroundAlpha) {
                if (this._lastBackgroundCornerRadius !== cornerRadius) {
                    this._lastBackgroundCornerRadius = cornerRadius;
                    backgroundPlane.texture = theme.getBackgroundTexture(cornerRadius);
                    backgroundPlane.borderSize = cornerHeight;
                }
                backgroundPlane.tint = backgroundColor;
                backgroundPlane.alpha = backgroundAlpha;
                backgroundPlane.width = width;
                backgroundPlane.height = height;
                backgroundPlane.cornerMask = cornerMask;
                backgroundPlane.visible = true;
            }
            else {
                backgroundPlane.visible = false;
            }
        }
        else {
            backgroundPlane.visible = false;
        }
        // Border
        var border = base.border;
        var borderPlane = this._borderPlane;
        var borderColor = border.getColor(state);
        if (borderColor != null) {
            var borderAlpha = border.getAlpha(state);
            if (0 < borderAlpha) {
                var borderWidth = border.getWidth(state);
                if (this._lastBorderCornerRadius !== cornerRadius || this._lastBorderWidth !== borderWidth) {
                    this._lastBorderCornerRadius = cornerRadius;
                    this._lastBorderWidth = borderWidth;
                    borderPlane.texture = theme.getBorderTexture(cornerRadius, borderWidth);
                    borderPlane.borderSize = cornerHeight;
                }
                var borderAlign = border.getAlign(state);
                var borderMask = border.getMask(state);
                borderPlane.tint = borderColor;
                borderPlane.alpha = borderAlpha;
                var borderOffset = borderAlign * borderWidth;
                borderPlane.x = -borderOffset;
                borderPlane.y = -borderOffset;
                borderPlane.width = width + borderOffset * 2;
                borderPlane.height = height + borderOffset * 2;
                borderPlane.borderMask = borderMask;
                borderPlane.cornerMask = cornerMask;
                borderPlane.visible = true;
            }
            else {
                borderPlane.visible = false;
            }
        }
        else {
            borderPlane.visible = false;
        }
        // Outline
        var outline = base.outline;
        var outlinePlane = this._outlinePlane;
        var outlineColor = outline.getColor(state);
        if (outlineColor != null) {
            var outlineAlpha = outline.getAlpha(state);
            if (0 < outlineAlpha) {
                var outlineWidth = outline.getWidth(state);
                if (this._lastOutlineCornerRadius !== cornerRadius || this._lastOutlineWidth !== outlineWidth) {
                    this._lastOutlineCornerRadius = cornerRadius;
                    this._lastOutlineWidth = outlineWidth;
                    outlinePlane.texture = theme.getBorderTexture(cornerRadius, outlineWidth);
                    outlinePlane.borderSize = cornerHeight;
                }
                var outlineMask = outline.getMask(state);
                var outlineOffset = outline.getOffset(state);
                var outlineAlign = outline.getAlign(state);
                outlinePlane.tint = outlineColor;
                outlinePlane.alpha = outlineAlpha;
                var outlineOffsetAccumulative = outlineOffset + outlineAlign * outlineWidth;
                outlinePlane.x = -outlineOffsetAccumulative;
                outlinePlane.y = -outlineOffsetAccumulative;
                outlinePlane.width = width + outlineOffsetAccumulative * 2;
                outlinePlane.height = height + outlineOffsetAccumulative * 2;
                outlinePlane.borderMask = outlineMask;
                outlinePlane.cornerMask = cornerMask;
                outlinePlane.visible = true;
            }
            else {
                outlinePlane.visible = false;
            }
        }
        else {
            outlinePlane.visible = false;
        }
    };
    return DBaseReflowable;
}());
export { DBaseReflowable };
//# sourceMappingURL=d-base-reflowable.js.map