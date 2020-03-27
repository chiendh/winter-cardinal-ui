/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point, Rectangle } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DHtmlElementWhen } from "./d-html-element-when";
import { DImageBase } from "./d-image-base";
import { isString } from "./util/is-string";
var DHtmlElement = /** @class */ (function (_super) {
    __extends(DHtmlElement, _super);
    function DHtmlElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DHtmlElement.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._workPoint = null;
        var theme = this.theme;
        var clipper = options && options.clipper;
        var clipperCreator = (clipper && clipper.creator) || theme.getClipperCreator();
        this._clipper = null;
        this._clipperCreator = clipperCreator;
        this._clipperRect = null;
        var element = options && options.element;
        var elementCreator = (element && element.creator) || theme.getElementCreator();
        this._element = null;
        this._elementCreator = elementCreator;
        this._elementStyle = element && element.style;
        this._elementRect = null;
        this._isElementShown = false;
        this._onElementFocusedBound = function (e) {
            _this.onElementFocused(e);
        };
        var before = options && options.before;
        this._before = null;
        this._beforeCreator = (before && before.creator) || theme.getBeforeCreator();
        this._beforeStyle = before && before.style;
        this._onBeforeFocusedBound = function (e) {
            _this.onBeforeFocused(e);
        };
        var after = options && options.after;
        this._after = null;
        this._afterCreator = (after && after.creator) || theme.getAfterCreator();
        this._afterStyle = after && after.style;
        this._onAfterFocusedBound = function (e) {
            _this.onAfterFocused(e);
        };
        this._isStarted = false;
        this._select = (options && options.select != null ?
            options.select : theme.getSelect());
        this._doSelectBound = function () {
            _this.doSelect();
        };
        var when = (options && options.when != null ?
            (isString(options.when) ? DHtmlElementWhen[options.when] : options.when) :
            theme.getWhen());
        this._when = when;
        this._isStartRequested = (when === DHtmlElementWhen.ALWAYS);
    };
    Object.defineProperty(DHtmlElement.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    DHtmlElement.prototype.onDownThis = function (e) {
        var wasStarted = this._isStarted;
        _super.prototype.onDownThis.call(this, e);
        if (!wasStarted && this._isStarted) {
            e.data.originalEvent.preventDefault();
        }
    };
    DHtmlElement.prototype.onFocused = function () {
        _super.prototype.onFocused.call(this);
        if (this._when === DHtmlElementWhen.FOCUSED) {
            this.start();
        }
        else {
            var element = this._element;
            if (element) {
                element.focus();
            }
        }
    };
    DHtmlElement.prototype.onBlured = function () {
        _super.prototype.onBlured.call(this);
        if (this._when === DHtmlElementWhen.FOCUSED) {
            this.onEndByBlured();
            this.cancel();
        }
        else {
            var element = this._element;
            if (element) {
                element.blur();
            }
        }
    };
    DHtmlElement.prototype.isStartable = function () {
        if (this._when === DHtmlElementWhen.FOCUSED) {
            return this.isActionable();
        }
        return true;
    };
    DHtmlElement.prototype.start = function () {
        if (!this._isStarted && this.isStartable()) {
            this._isStarted = true;
            this.doStart();
            DApplications.update(this);
        }
    };
    DHtmlElement.prototype.render = function (renderer) {
        if (this._isStartRequested) {
            this._isStartRequested = false;
            this.doStart();
        }
        if (this._isStarted) {
            this._isStarted = false;
        }
        _super.prototype.render.call(this, renderer);
        if (this._isElementShown) {
            this.updateElement(renderer);
        }
    };
    DHtmlElement.prototype.doStart = function (renderer) {
        if (!this._isElementShown) {
            this._isElementShown = true;
            this.onStart();
            var clipper = this.getClipper();
            if (clipper) {
                var before = this.getBefore(clipper);
                var element = this.getElement(clipper);
                var after = this.getAfter(clipper);
                if (element) {
                    var resolution = 1;
                    if (renderer == null) {
                        var layer = DApplications.getLayer(this);
                        if (layer) {
                            resolution = layer.renderer.resolution;
                        }
                    }
                    else {
                        resolution = renderer.resolution;
                    }
                    var elementRect = this.getElementRect(resolution);
                    var clipperRect = this.getClipperRect(elementRect, resolution);
                    var theme = this.theme;
                    var state = this.state;
                    var padding = this._padding;
                    this.setClipperStyle(clipper, state, theme, padding, elementRect, clipperRect);
                    this.setElementStyle(element, state, theme, padding, elementRect, clipperRect);
                    if (before) {
                        this.setBeforeStyle(before, theme);
                    }
                    if (after) {
                        this.setAfterStyle(after, theme);
                    }
                    this.onElementAttached(element, before, after);
                    // Show HTML elements
                    clipper.style.display = "";
                    if (this.isFocused()) {
                        element.focus();
                    }
                    clipper.scrollTop = 0;
                    clipper.scrollLeft = 0;
                    // Select the element if required.
                    if (this._select) {
                        setTimeout(this._doSelectBound, 0);
                    }
                }
            }
        }
    };
    DHtmlElement.prototype.doSelect = function () {
        var element = this._element;
        if (element) {
            if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                // The following does not work on mobile devices.
                // I think selecting texts on a tap is annoying.
                // Though I leave this untouched.
                element.select();
            }
        }
    };
    DHtmlElement.prototype.createText = function (formatted) {
        var result = _super.prototype.createText.call(this, formatted);
        if (this._isElementShown) {
            this.onStart();
        }
        return result;
    };
    /**
     * Please note that this method does not update transforms.
     *
     * @param elementRect
     * @param resolution
     */
    DHtmlElement.prototype.getClipperRect = function (elementRect, resolution) {
        var point = this._workPoint = (this._workPoint || new Point(0, 0));
        var rect = this._clipperRect = (this._clipperRect || new Rectangle());
        var x0 = elementRect.x;
        var y0 = elementRect.y;
        var x1 = x0 + elementRect.width;
        var y1 = y0 + elementRect.height;
        var current = this.parent;
        while (current instanceof DBase) {
            current.getClippingRect(this, rect);
            point.set(rect.x, rect.y);
            current.toGlobal(point, point, false);
            var x = ((point.x * resolution) | 0) / resolution;
            var y = ((point.y * resolution) | 0) / resolution;
            point.set(rect.x + rect.width, rect.y + rect.height);
            current.toGlobal(point, point, true);
            var w = point.x - x;
            var h = point.y - y;
            x0 = Math.min(Math.max(x0, x), x + w);
            y0 = Math.min(Math.max(y0, y), y + h);
            x1 = Math.min(Math.max(x1, x), x + w);
            y1 = Math.min(Math.max(y1, y), y + h);
            current = current.parent;
        }
        rect.x = x0;
        rect.y = y0;
        rect.width = x1 - x0;
        rect.height = y1 - y0;
        return rect;
    };
    /**
     * Please note that this method does not update transforms.
     *
     * @param resolution
     */
    DHtmlElement.prototype.getElementRect = function (resolution) {
        var point = this._workPoint = (this._workPoint || new Point(0, 0));
        var rect = this._elementRect = (this._elementRect != null ? this._elementRect : new Rectangle());
        point.set(0, 0);
        this.toGlobal(point, point, false);
        rect.x = point.x;
        rect.y = point.y;
        point.set(this.width, this.height);
        this.toGlobal(point, point, true);
        rect.width = point.x - rect.x;
        rect.height = point.y - rect.y;
        // Rounds pixels as Pixi.js does
        rect.x = ((rect.x * resolution) | 0) / resolution;
        rect.y = ((rect.y * resolution) | 0) / resolution;
        return rect;
    };
    DHtmlElement.prototype.cancel = function () {
        if (this._isElementShown) {
            this._isElementShown = false;
            this.onCancel();
            var layer = DApplications.getLayer(this);
            if (layer) {
                var view = layer.view;
                if (this._when === DHtmlElementWhen.FOCUSED && document.activeElement === this._element) {
                    view.focus();
                }
                var interactionManager = layer.renderer.plugins.interaction;
                if (this.containsPoint(interactionManager.mouse.global) && !this.isHovered()) {
                    this.setHovered(true);
                    view.style.cursor = this.cursor;
                }
                layer.update();
            }
            var element = this._element;
            if (element != null) {
                this.onElementDetached(element, this._before, this._after);
            }
            var clipper = this._clipper;
            if (clipper != null) {
                clipper.style.display = "none";
            }
        }
    };
    DHtmlElement.prototype.onStart = function () {
        // DO NOTHING
    };
    DHtmlElement.prototype.onCancel = function () {
        // DO NOTHING
    };
    DHtmlElement.prototype.onElementAttached = function (element, before, after) {
        if (before) {
            before.addEventListener("focus", this._onBeforeFocusedBound);
        }
        if (after) {
            after.addEventListener("focus", this._onAfterFocusedBound);
        }
        element.addEventListener("focus", this._onElementFocusedBound, true);
    };
    DHtmlElement.prototype.onElementDetached = function (element, before, after) {
        if (before) {
            before.removeEventListener("focus", this._onBeforeFocusedBound);
        }
        if (after) {
            after.removeEventListener("focus", this._onAfterFocusedBound);
        }
        element.removeEventListener("focus", this._onElementFocusedBound, true);
    };
    DHtmlElement.prototype.getElement = function (clipper) {
        var result = this._element;
        if (result == null) {
            var creator = this._elementCreator;
            if (creator) {
                result = creator(clipper);
                this._element = result;
            }
        }
        return result;
    };
    DHtmlElement.prototype.getClipper = function () {
        var result = this._clipper;
        if (result == null) {
            var creator = this._clipperCreator;
            var layer = DApplications.getLayer(this);
            if (creator && layer) {
                result = creator(layer.getElementContainer());
                this._clipper = result;
            }
        }
        return result;
    };
    DHtmlElement.prototype.getBefore = function (clipper) {
        var result = this._before;
        if (result == null) {
            var creator = this._beforeCreator;
            if (creator) {
                result = creator(clipper);
                this._before = result;
            }
        }
        return result;
    };
    DHtmlElement.prototype.getAfter = function (clipper) {
        var result = this._after;
        if (result == null) {
            var creator = this._afterCreator;
            if (creator) {
                result = creator(clipper);
                this._after = result;
            }
        }
        return result;
    };
    DHtmlElement.prototype.setElementStyle = function (target, state, theme, padding, elementRect, clipperRect) {
        var style = this._elementStyle;
        if (style) {
            return style(target, state, theme, padding, elementRect, clipperRect);
        }
        else {
            return this.theme.setElementStyle(target, state, padding, elementRect, clipperRect);
        }
    };
    DHtmlElement.prototype.setClipperStyle = function (target, state, theme, padding, elementRect, clipperRect) {
        var style = this._clipperStyle;
        if (style) {
            return style(target, state, theme, padding, elementRect, clipperRect);
        }
        else {
            return this.theme.setClipperStyle(target, state, padding, elementRect, clipperRect);
        }
    };
    DHtmlElement.prototype.setBeforeStyle = function (target, theme) {
        var style = this._beforeStyle;
        if (style) {
            return style(target, theme);
        }
        else {
            return this.theme.setBeforeStyle(target);
        }
    };
    DHtmlElement.prototype.setAfterStyle = function (target, theme) {
        var style = this._afterStyle;
        if (style) {
            return style(target, theme);
        }
        else {
            return this.theme.setAfterStyle(target);
        }
    };
    DHtmlElement.prototype.onBeforeFocused = function (e) {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var focusController = layer.getFocusController();
            var focusable = focusController.findFocusable(this, false, false, false);
            layer.view.focus();
            focusController.setFocused(focusable, true, true);
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    };
    DHtmlElement.prototype.onAfterFocused = function (e) {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var focusController = layer.getFocusController();
            var focusable = focusController.findFocusable(this, false, false, true);
            layer.view.focus();
            focusController.setFocused(focusable, true, true);
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    };
    DHtmlElement.prototype.onElementFocused = function (e) {
        if (this._when === DHtmlElementWhen.ALWAYS) {
            if (!this.isFocused()) {
                this.focus();
            }
        }
    };
    DHtmlElement.prototype.onEndByBlured = function () {
        this.onEnd();
    };
    DHtmlElement.prototype.onEnd = function () {
        // DO NOTHING
    };
    DHtmlElement.prototype.end = function () {
        this.onEnd();
        this.cancel();
    };
    DHtmlElement.prototype.select = function () {
        if (this._isElementShown && this._select) {
            this.doSelect();
        }
        return this;
    };
    DHtmlElement.prototype.updateElement = function (renderer) {
        if (this._isElementShown) {
            if (this.worldVisible) {
                var element = this._element;
                var clipper = this._clipper;
                if (element && clipper) {
                    var resolution = renderer.resolution;
                    var elementRect = this.getElementRect(resolution);
                    var clipperRect = this.getClipperRect(elementRect, resolution);
                    var theme = this.theme;
                    var state = this.state;
                    var padding = this._padding;
                    this.setClipperStyle(clipper, state, theme, padding, elementRect, clipperRect);
                    this.setElementStyle(element, state, theme, padding, elementRect, clipperRect);
                }
            }
            else {
                this.cancel();
            }
        }
    };
    DHtmlElement.prototype.getType = function () {
        return "DHtmlElement";
    };
    return DHtmlElement;
}(DImageBase));
export { DHtmlElement };
//# sourceMappingURL=d-html-element.js.map