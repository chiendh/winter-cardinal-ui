/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { BaseTexture, Rectangle, resources, SCALE_MODES, Texture } from "pixi.js";
import { SVGResource } from "../resource/svg-resource";
import { toSvgUrl } from "./to-svg-url";
// PixiJS's SVGResource has a issue on Microsoft Edge.
// Edge may invoke the HTMLImageElement#onload on an unexpected timing.
// Thus, PixiJS may lost the `load` event in some situations.
resources.INSTALLED.push(SVGResource);
var UtilSvgAtlasBuilder = /** @class */ (function () {
    function UtilSvgAtlasBuilder(width, ratio, margin) {
        this._width = width;
        this._ratio = ratio;
        this._margin = margin;
        this._frames = {};
        this._svg = "";
        this._nextX = 0;
        this._nextY = 0;
        this._height = 0;
    }
    Object.defineProperty(UtilSvgAtlasBuilder.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilSvgAtlasBuilder.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilSvgAtlasBuilder.prototype, "margin", {
        get: function () {
            return this._margin;
        },
        enumerable: true,
        configurable: true
    });
    UtilSvgAtlasBuilder.prototype.add = function (name, width, height, path) {
        var frames = this._frames;
        if (!(name in frames)) {
            // Position
            var margin = this._margin;
            var x = this._nextX;
            var y = this._nextY;
            if (this._width <= x + width) {
                x = 0;
                y = this._nextY + this._height + margin;
                this._height = height;
                this._nextY = y;
            }
            else {
                this._height = Math.max(this._height, height);
            }
            this._nextX = x + width + margin;
            // Frame
            frames[name] = new Rectangle(x, y, width, height);
            // Svg
            var ratio = this._ratio;
            this._svg += "<g transform=\"translate(" + x * ratio + "," + y * ratio + ")\">" + path + "</g>";
            return true;
        }
        return false;
    };
    Object.defineProperty(UtilSvgAtlasBuilder.prototype, "mappings", {
        get: function () {
            return this.build();
        },
        enumerable: true,
        configurable: true
    });
    UtilSvgAtlasBuilder.prototype.build = function (options) {
        var built = this._built;
        if (built == null || (options && options.force)) {
            var resolution = (options && options.resolution != null ?
                options.resolution : (window.devicePixelRatio || 1));
            var width = this._width;
            var height = Math.pow(2, Math.ceil(Math.log(this._nextY + this._height) / Math.LN2));
            var realWidth = width * resolution;
            var realHeight = height * resolution;
            var ratio = this._ratio;
            var attrWidth = "width=\"" + realWidth + "\"";
            var attrHeight = "height=\"" + realHeight + "\"";
            var attrViewBox = "viewBox=\"0 0 " + width * ratio + " " + height * ratio + "\"";
            var attrXmlns = "xmlns=\"http://www.w3.org/2000/svg\"";
            var url = toSvgUrl("<svg " + attrWidth + " " + attrHeight + " " + attrViewBox + " " + attrXmlns + ">" + this._svg + "</svg>");
            var scaleMode = (options && options.scaling != null ? options.scaling : SCALE_MODES.NEAREST);
            var baseTexture = BaseTexture.from(url, {
                resolution: resolution,
                scaleMode: scaleMode
            });
            var frames_1 = this._frames;
            built = this._built = {};
            for (var name_1 in frames_1) {
                built[name_1] = new Texture(baseTexture, frames_1[name_1]);
            }
        }
        return built;
    };
    return UtilSvgAtlasBuilder;
}());
export { UtilSvgAtlasBuilder };
//# sourceMappingURL=util-svg-atlas-builder.js.map