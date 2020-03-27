/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemes } from "../theme/d-themes";
/*!
* jQuery Mousewheel 3.1.13
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* See also https://github.com/mapbox/mapbox-gl-js/blob/001c7b9/js/ui/handler/scroll_zoom.js
* and https://github.com/openlayers/openlayers/blob/v5.2.0/src/ol/interaction/MouseWheelZoom.js#L51
*/
var UtilWheelEvent = /** @class */ (function () {
    function UtilWheelEvent() {
        this._lowest = null;
        this._timestamp = 0;
        this._lineHeight = null;
        this._pageHeight = null;
        this._names = ("onwheel" in document || 9 <= document.documentMode ?
            ["wheel"] : ["mousewheel", "DOMMouseScroll", "MozMousePixelScroll"]);
    }
    UtilWheelEvent.prototype.on = function (target, handler, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        var names = this._names;
        for (var i = names.length - 1; 0 <= i; --i) {
            var name_1 = names[i];
            target.addEventListener(name_1, handler, useCapture);
        }
    };
    UtilWheelEvent.prototype.off = function (target, handler, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        var names = this._names;
        for (var i = names.length - 1; 0 <= i; --i) {
            var name_2 = names[i];
            target.removeEventListener(name_2, handler, useCapture);
        }
    };
    UtilWheelEvent.prototype.getLineHeight = function () {
        if (this._lineHeight == null) {
            var theme = DThemes.getInstance().get("DBase");
            this._lineHeight = theme.getLineHeight();
        }
        return this._lineHeight;
    };
    UtilWheelEvent.prototype.getPageHeight = function () {
        if (this._pageHeight == null) {
            this._pageHeight = this.getLineHeight() * 12;
        }
        return this._pageHeight;
    };
    UtilWheelEvent.prototype.normalize = function (e) {
        var deltaX = 0;
        var deltaY = 0;
        // Old school scrollwheel delta
        if ("detail" in e) {
            deltaY = e.detail * -1;
        }
        if ("wheelDelta" in e) {
            deltaY = e.wheelDelta;
        }
        if ("wheelDeltaY" in e) {
            deltaY = e.wheelDeltaY;
        }
        if ("wheelDeltaX" in e) {
            deltaX = e.wheelDeltaX * -1;
        }
        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }
        // New school wheel delta (wheel event)
        if ("deltaY" in e) {
            deltaY = e.deltaY * -1;
        }
        if ("deltaX" in e) {
            deltaX = e.deltaX;
        }
        // No change actually happened, no reason to go any further
        if (deltaY === 0 && deltaX === 0) {
            return null;
        }
        // Store lowest absolute delta to normalize the delta values
        var delta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        // Reset the this._lowest to better handle multiple device types
        // that give different a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        var now = Date.now();
        if (this._timestamp + 200 <= now) {
            this._lowest = null;
        }
        this._timestamp = now;
        //
        var shouldAdjust = (e.type === "mousewheel" && delta % 120 === 0);
        if (!this._lowest || delta < this._lowest) {
            this._lowest = delta;
            // Adjust older deltas if necessary
            if (shouldAdjust) {
                this._lowest /= 40;
            }
        }
        // Adjust older deltas if necessary
        if (shouldAdjust) {
            // Divide all the things by 40!
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }
        // Get a whole, normalized value for the deltas
        var lowest = this._lowest;
        delta = Math.floor(delta / lowest);
        deltaX = Math[1 <= deltaX ? "floor" : "ceil"](deltaX / lowest);
        deltaY = Math[1 <= deltaY ? "floor" : "ceil"](deltaY / lowest);
        // Mode
        var mode = e.deltaMode || 0;
        if (mode !== 0) {
            var scale = (mode === 1 ? this.getLineHeight() : this.getPageHeight());
            delta *= scale;
            deltaX *= scale;
            deltaY *= scale;
        }
        return {
            mode: mode,
            delta: delta,
            deltaX: deltaX,
            deltaY: deltaY,
            lowest: lowest
        };
    };
    UtilWheelEvent.getInstance = function () {
        if (this.INSTANCE == null) {
            this.INSTANCE = new UtilWheelEvent();
        }
        return this.INSTANCE;
    };
    return UtilWheelEvent;
}());
export { UtilWheelEvent };
//# sourceMappingURL=util-wheel-event.js.map