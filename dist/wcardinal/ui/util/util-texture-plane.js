/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Texture } from "pixi.js";
import { DApplications } from "../d-applications";
import { toSvgUrl } from "./to-svg-url";
var UtilTexturePlane = /** @class */ (function () {
    function UtilTexturePlane() {
        this._backgroundCache = new Map();
        this._backgroundAttribute = "fill=\"#fff\" stroke=\"none\"";
        this._borderCache = new Map();
        this._borderAttribute = function (width) {
            return "fill=\"none\" stroke=\"#fff\" stroke-width=\"" + width + "\"";
        };
        this._onUpdate = function () {
            DApplications.update();
        };
    }
    UtilTexturePlane.prototype.toCornerTl = function (offset, size, tl) {
        return (0 < tl ? "A" + tl + " " + tl + " 0 0 1 " + (offset + tl) + " " + offset : "");
    };
    UtilTexturePlane.prototype.toCornerBr = function (offset, size, br) {
        return (0 < br ? "A" + br + " " + br + " 0 0 1 " + (offset + size - br) + " " + (offset + size) : "");
    };
    UtilTexturePlane.prototype.make = function (radius, offset, attr) {
        var realRadius = Math.max(0, radius - offset);
        var size = realRadius * 2 + 4;
        var realSize = size + offset * 2;
        var d = "M" + (offset + realRadius) + " " + offset +
            ("L" + (offset + size) + " " + offset) +
            ("L" + (offset + size) + " " + (offset + size - realRadius)) +
            this.toCornerBr(offset, size, realRadius) +
            ("L" + offset + " " + (offset + size)) +
            ("L" + offset + " " + (offset + realRadius)) +
            this.toCornerTl(offset, size, realRadius) +
            "Z";
        return this.toSvg(realSize, attr, d);
    };
    UtilTexturePlane.prototype.toSvg = function (realSize, attr, d) {
        var resolution = (window.devicePixelRatio || 1);
        var widthAttr = "width=\"" + realSize * resolution + "\"";
        var heightAttr = "height=\"" + realSize * resolution + "\"";
        var viewBoxAttr = "viewBox=\"0 0 " + realSize + " " + realSize + "\"";
        var svg = "<svg " + widthAttr + " " + heightAttr + " " + viewBoxAttr + " xmlns=\"http://www.w3.org/2000/svg\">" +
            ("<path " + attr + " d=\"" + d + "\"></path>") +
            "</svg>";
        return Texture.from(toSvgUrl(svg), {
            resolution: resolution
        });
    };
    UtilTexturePlane.prototype.newBackground = function (radius) {
        var result = this.make(radius, 0, this._backgroundAttribute);
        result.on("update", this._onUpdate);
        return result;
    };
    UtilTexturePlane.prototype.newBorder = function (radius, width) {
        var result = this.make(radius, 0.5 * width, this._borderAttribute(width));
        result.on("update", this._onUpdate);
        return result;
    };
    UtilTexturePlane.prototype.getBackground = function (radius) {
        var cache = this._backgroundCache;
        var texture = cache.get(radius);
        if (texture == null) {
            texture = this.newBackground(radius);
            cache.set(radius, texture);
        }
        return texture;
    };
    UtilTexturePlane.prototype.getBorder = function (radius, width) {
        var cache = this._borderCache;
        var maskToTexture = cache.get(radius);
        if (maskToTexture == null) {
            maskToTexture = new Map();
            cache.set(radius, maskToTexture);
        }
        var texture = maskToTexture.get(width);
        if (texture == null) {
            texture = this.newBorder(radius, width);
            maskToTexture.set(width, texture);
        }
        return texture;
    };
    UtilTexturePlane.getInstance = function () {
        if (UtilTexturePlane.INSTANCE == null) {
            UtilTexturePlane.INSTANCE = new UtilTexturePlane();
        }
        return UtilTexturePlane.INSTANCE;
    };
    UtilTexturePlane.INSTANCE = null;
    return UtilTexturePlane;
}());
export { UtilTexturePlane };
//# sourceMappingURL=util-texture-plane.js.map