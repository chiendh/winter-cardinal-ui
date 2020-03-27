/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Extract, Matrix, RenderTexture, SCALE_MODES, utils } from "pixi.js";
import { DApplications } from "../d-applications";
var UtilExtractor = /** @class */ (function () {
    function UtilExtractor() {
    }
    UtilExtractor.toTexture = function (target, resolution, clear, skipUpdateTransform) {
        var result = RenderTexture.create({
            width: target.width,
            height: target.height,
            scaleMode: SCALE_MODES.LINEAR,
            resolution: resolution
        });
        var matrix = new Matrix(undefined, undefined, undefined, undefined, -target.position.x, -target.position.y);
        var layer = DApplications.getLayer(target);
        if (layer) {
            layer.renderer.render(target, result, clear, matrix, skipUpdateTransform);
        }
        return result;
    };
    UtilExtractor.toPixels = function (renderTexture, renderer) {
        var resolution = renderTexture.resolution;
        var frame = renderTexture.frame;
        var width = Math.floor(frame.width * resolution);
        var height = Math.floor(frame.height * resolution);
        var pixels = new Uint8Array(4 * width * height);
        renderer.renderTexture.bind(renderTexture);
        var gl = renderer.gl;
        gl.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        return {
            width: width,
            height: height,
            array: pixels
        };
    };
    UtilExtractor.toCanvas = function (pixels, scale, ignorePremutipliedAlpha) {
        var width = pixels.width;
        var height = pixels.height;
        var array = pixels.array;
        var canvasRenderTarget = new utils.CanvasRenderTarget(width, height, 1);
        var imageData = canvasRenderTarget.context.getImageData(0, 0, width, height);
        if (ignorePremutipliedAlpha) {
            imageData.data.set(array);
        }
        else {
            Extract.arrayPostDivide(array, imageData.data);
        }
        canvasRenderTarget.context.putImageData(imageData, 0, 0);
        // Scale down
        if (scale != null && scale !== 1) {
            canvasRenderTarget.context.scale(scale, scale);
            canvasRenderTarget.context.drawImage(canvasRenderTarget.canvas, 0, 0);
            var scaledWidth = Math.floor(width * scale);
            var scaledHeight = Math.floor(height * scale);
            var scaledImageData = canvasRenderTarget.context.getImageData(0, 0, scaledWidth, scaledHeight);
            canvasRenderTarget.resize(scaledWidth, scaledHeight);
            canvasRenderTarget.context.putImageData(scaledImageData, 0, 0);
        }
        return canvasRenderTarget.canvas;
    };
    UtilExtractor.toBase64 = function (canvas, format, quality) {
        return canvas.toDataURL(format, quality);
    };
    return UtilExtractor;
}());
export { UtilExtractor };
//# sourceMappingURL=util-extractor.js.map