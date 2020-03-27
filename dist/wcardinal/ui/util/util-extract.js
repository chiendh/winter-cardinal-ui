/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DApplications } from "../d-applications";
import { isNumber } from "./is-number";
import { UtilExtractor } from "./util-extractor";
import { UtilFileDownloader } from "./util-file-downloader";
var toSkipUpdateTransform = function (options) {
    return options.transform && options.transform.update;
};
var toResolution = function (options) {
    var target = options.target;
    if (options.resolution != null) {
        if (isNumber(options.resolution)) {
            return options.resolution;
        }
        else {
            return Math.min(1, options.resolution.size / Math.max(target.width, target.height));
        }
    }
    else {
        return window.devicePixelRatio || 1;
    }
};
var toIgnorePremultipliedAlpha = function (options) {
    return (options.alpha && options.alpha.premultiplied && options.alpha.premultiplied.ignore);
};
var toScale = function (pixels, options) {
    if (options.scale != null) {
        if (isNumber(options.scale)) {
            return options.scale;
        }
        else {
            var size = options.scale.size;
            return Math.min(1, size / pixels.width, size / pixels.height);
        }
    }
};
var toRenderer = function (options) {
    if (options.renderer) {
        return options.renderer;
    }
    else if (options.application) {
        return options.application.getLayerBase().renderer;
    }
    else if (options.layer) {
        return options.layer.renderer;
    }
    else {
        var layer = DApplications.getLayer(options.target);
        if (layer) {
            return layer.renderer;
        }
        else {
            throw new Error("No renderer / application / layer found.");
        }
    }
};
var UtilExtract = /** @class */ (function () {
    function UtilExtract() {
    }
    UtilExtract.texture = function (options) {
        var target = options.target;
        var resolution = toResolution(options);
        var skipUpdateTransform = toSkipUpdateTransform(options);
        return UtilExtractor.toTexture(target, resolution, options.clear, skipUpdateTransform);
    };
    UtilExtract.pixels = function (options) {
        var renderer = toRenderer(options);
        return UtilExtractor.toPixels(this.texture(options), renderer);
    };
    UtilExtract.canvas = function (options) {
        var pixels = this.pixels(options);
        var ignorePremutipliedAlpha = toIgnorePremultipliedAlpha(options);
        var scale = toScale(pixels, options);
        return UtilExtractor.toCanvas(pixels, scale, ignorePremutipliedAlpha);
    };
    UtilExtract.base64 = function (options) {
        return UtilExtractor.toBase64(this.canvas(options), options.format, options.quality);
    };
    UtilExtract.file = function (options) {
        UtilFileDownloader.downloadUrl(options.filename, this.base64(options));
    };
    return UtilExtract;
}());
export { UtilExtract };
//# sourceMappingURL=util-extract.js.map