/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { resources } from "pixi.js";
var SVGResource = /** @class */ (function (_super) {
    __extends(SVGResource, _super);
    function SVGResource(source, options) {
        var _this = _super.call(this, new Image()) || this;
        _this._load = null;
        _this._width = 0;
        _this._height = 0;
        _this.svg = source;
        resources.BaseImageResource.crossOrigin(_this.source, _this.svg, options && options.crossorigin);
        if (!options || options.autoLoad !== false) {
            _this.load();
        }
        return _this;
    }
    SVGResource.prototype.load = function () {
        var _this = this;
        if (this._load) {
            return this._load;
        }
        this._load = new Promise(function (resolve) {
            var image = _this.source;
            image.onerror = function (event) {
                image.onerror = null;
                _this.onError.run(event); // TODO: Fix PixiJS
            };
            var ua = navigator.userAgent;
            // IE and Edge generates wrong images without setTimeout.
            if (0 <= ua.indexOf("Trident/") || 0 <= ua.indexOf("Edge/")) {
                image.onload = function () {
                    setTimeout(function () {
                        _this.resize(image.width, image.height);
                        resolve();
                    }, 0);
                };
            }
            else {
                image.onload = function () {
                    _this.resize(image.width, image.height);
                    resolve();
                };
            }
            image.src = _this.svg;
        });
        return this._load;
    };
    SVGResource.test = function (source, extension) {
        // url file extension is SVG
        return extension === "svg"
            // source is SVG data-uri
            || (typeof source === "string" && source.indexOf("data:image/svg+xml;base64") === 0)
            // source is SVG inline
            || (typeof source === "string" && source.indexOf("<svg") === 0);
    };
    return SVGResource;
}(resources.BaseImageResource));
export { SVGResource };
//# sourceMappingURL=svg-resource.js.map