/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DApplicationPadding } from "./d-application-padding";
import { isNumber } from "./util/is-number";
/**
 * DApplicationLayer options
 */
var DApplicationLayerOptions = /** @class */ (function () {
    function DApplicationLayerOptions(options) {
        // Root
        var root = this._root = options.root;
        // Overlay mode or not
        this._overlay = options.overlay;
        // Padding
        var padding = options && options.padding;
        if (isNumber(padding)) {
            this._padding = new DApplicationPadding(padding, padding, padding, padding);
        }
        else if (padding != null) {
            this._padding = new DApplicationPadding(padding.top || 0, padding.right || 0, padding.bottom || 0, padding.left || 0);
        }
        else {
            this._padding = new DApplicationPadding(6, 6, 6, 6);
        }
        // Width & height
        var width = 100;
        var height = 100;
        if (options) {
            if (options.width != null) {
                width = options.width;
                if (options.height != null) {
                    height = options.height;
                }
                else {
                    height = root.getBoundingClientRect().height;
                }
            }
            else if (options.height != null) {
                width = root.getBoundingClientRect().width;
                height = options.height;
            }
            else {
                var bbox = root.getBoundingClientRect();
                width = bbox.width;
                height = bbox.height;
            }
        }
        else {
            var bbox = root.getBoundingClientRect();
            width = bbox.width;
            height = bbox.height;
        }
        // Background color
        var background = options && options.background;
        var backgroundColor = 0;
        var transparent = true;
        if (background != null) {
            var color = background.color;
            if (color != null) {
                backgroundColor = color;
                transparent = false;
            }
        }
        // Resolution
        var resolution = options.resolution;
        // Antialias
        var antialias = (options && options.antialias != null ? options.antialias : false);
        // Pixi
        this._pixi = {
            width: width,
            height: height,
            autoStart: false,
            backgroundColor: backgroundColor,
            transparent: transparent,
            resolution: resolution,
            antialias: antialias
        };
    }
    /**
     * Returns a root element.
     * `HTMLCanvasElement` and other DOM elements are created in this element.
     * The default root element is `document.body`.
     */
    DApplicationLayerOptions.prototype.getRootElement = function () {
        return this._root;
    };
    /**
     * Sets a root element and updates the canvas width and height
     * if `updateWidthAndHeight` is not false.
     *
     * @param root new root element
     * @param updateWidthAndHeight false to preserve the canvas width / height
     */
    DApplicationLayerOptions.prototype.setRootElement = function (root, updateWidthAndHeight) {
        if (this._root !== root) {
            this._root = root;
            if (updateWidthAndHeight !== false) {
                var bbox = root.getBoundingClientRect();
                var pixi = this._pixi;
                pixi.width = bbox.width;
                pixi.height = bbox.height;
            }
        }
        return this;
    };
    /**
     * Returns a canvas width.
     */
    DApplicationLayerOptions.prototype.getWidth = function () {
        return this._pixi.width;
    };
    /**
     * Sets a canvas width.
     *
     * @param width new canvas width
     */
    DApplicationLayerOptions.prototype.setWidth = function (width) {
        this._pixi.width = width;
        return this;
    };
    /**
     * Returns a canvas height.
     */
    DApplicationLayerOptions.prototype.getHeight = function () {
        return this._pixi.height;
    };
    /**
     * Sets a canvas height.
     *
     * @param height new canvas height
     */
    DApplicationLayerOptions.prototype.setHeight = function (height) {
        this._pixi.height = height;
        return this;
    };
    /**
     * Returns padding sizes.
     * The default padding size is 6.
     */
    DApplicationLayerOptions.prototype.getPadding = function () {
        return this._padding;
    };
    /**
     * Sets padding sizes.
     *
     * @param left new left padding
     * @param top new top padding
     * @param right new right padding
     * @param bottom new bottom padding
     * @asse getPadding
     */
    DApplicationLayerOptions.prototype.setPadding = function (left, top, right, bottom) {
        var padding = this._padding;
        padding.left = left;
        padding.top = top;
        padding.right = right;
        padding.bottom = bottom;
        return this;
    };
    /**
     * Returns a background color.
     */
    DApplicationLayerOptions.prototype.getBackgroundColor = function () {
        return this._pixi.backgroundColor;
    };
    /**
     * Sets a background color.
     *
     * @param color new background color
     */
    DApplicationLayerOptions.prototype.setBackgroundColor = function (color) {
        this._pixi.backgroundColor = color;
        return this;
    };
    /**
     * Returns an antialias setting.
     * The default antialias setting is false.
     */
    DApplicationLayerOptions.prototype.getAntialias = function () {
        return this._pixi.antialias;
    };
    /**
     * Sets an antialias setting.
     *
     * @param antialias new antialias setting
     */
    DApplicationLayerOptions.prototype.setAntialias = function (antialias) {
        this._pixi.antialias = antialias;
        return this;
    };
    /**
     * Returns true if a layer is supposed to be an overlay layer.
     */
    DApplicationLayerOptions.prototype.isOverlay = function () {
        return this._overlay;
    };
    DApplicationLayerOptions.prototype.getPixiApplicationOptions = function () {
        return this._pixi;
    };
    return DApplicationLayerOptions;
}());
export { DApplicationLayerOptions };
//# sourceMappingURL=d-application-layer-options.js.map