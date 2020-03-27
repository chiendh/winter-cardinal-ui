/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point, Rectangle } from "pixi.js";
import { DMouseModifier } from "./d-mouse-modifier";
import { DMouseModifiers } from "./d-mouse-modifiers";
import { DViewDragImpl } from "./d-view-drag-impl";
import { DViewTransformImpl } from "./d-view-transform-impl";
import { DThemes } from "./theme/d-themes";
import { isString } from "./util/is-string";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DViewImpl = /** @class */ (function () {
    function DViewImpl(parent, toTarget, options) {
        this._parent = parent;
        this._toTarget = toTarget;
        this._workRect = new Rectangle();
        // Theme
        var theme = this.toTheme(options) || this.getThemeDefault();
        // Zoom
        var zoom = options && options.zoom;
        this._zoomPoint = new Point();
        this._zoomMin = zoom && zoom.min != null ? zoom.min : theme.getZoomMin();
        this._zoomMax = zoom && zoom.max != null ? zoom.max : theme.getZoomMax();
        this._zoomKeepRatio = zoom && zoom.keepRatio != null ? zoom.keepRatio : theme.getZoomKeepRatio();
        // Zoom: Wheel
        var wheelZoom = zoom && zoom.wheel;
        this._isWheelZoomEnabled = (wheelZoom && wheelZoom.enable != null ?
            wheelZoom.enable : theme.isWheelZoomEnabled());
        this._wheelZoomSpeed = (wheelZoom && wheelZoom.speed != null ?
            wheelZoom.speed : theme.getWheelZoomSpeed());
        this._wheelZoomModifier = (wheelZoom && wheelZoom.modifier != null ?
            (isString(wheelZoom.modifier) ?
                DMouseModifier[wheelZoom.modifier] : wheelZoom.modifier) :
            theme.getWheelZoomModifier());
        this._wheelZoomChecker = (wheelZoom && wheelZoom.checker) || DMouseModifiers.match;
        // Zoom: Dbl click
        var dblClickZoom = zoom && zoom.dblclick;
        this._isDblClickZoomEnabled = (dblClickZoom && dblClickZoom.enable != null ?
            dblClickZoom.enable : theme.isDblClickZoomEnabled());
        this._dblClickZoomSpeed = (dblClickZoom && dblClickZoom.amount != null ?
            dblClickZoom.amount : theme.getDblClickZoomSpeed());
        this._dblClickZoomModifier = (dblClickZoom && dblClickZoom.modifier != null ?
            (isString(dblClickZoom.modifier) ?
                DMouseModifier[dblClickZoom.modifier] : dblClickZoom.modifier) :
            theme.getDblClickZoomModifier());
        this._dblClickZoomChecker = (dblClickZoom && dblClickZoom.checker) || DMouseModifiers.match;
        this._dblclickZoomDuration = (dblClickZoom && dblClickZoom.duration != null ?
            dblClickZoom.duration : theme.getDblClickZoomDuration());
        // Translation: Wheel
        var wheelTranslation = options && options.translation && options.translation.wheel;
        this._isWheelTranslationEnabled = (wheelTranslation && wheelTranslation.enable != null ?
            wheelTranslation.enable : theme.isWheelTranslationEnabled());
        this._wheelTranslationSpeed = (wheelTranslation && wheelTranslation.speed != null ?
            wheelTranslation.speed : theme.getWheelTranslationSpeed());
        this._wheelTranslationModifier = (wheelTranslation && wheelTranslation.modifier != null ?
            (isString(wheelTranslation.modifier) ?
                DMouseModifier[wheelTranslation.modifier] : wheelTranslation.modifier) :
            theme.getWheelTranslationModifier());
        this._wheelTranslationChecker = (wheelTranslation && wheelTranslation.checker) || DMouseModifiers.match;
        // Drag
        this._drag = new DViewDragImpl(parent, toTarget, this, theme, options && options.drag);
        // Transform
        this._transform = new DViewTransformImpl(parent, toTarget, this, this._dblclickZoomDuration);
    }
    Object.defineProperty(DViewImpl.prototype, "drag", {
        get: function () {
            return this._drag;
        },
        enumerable: true,
        configurable: true
    });
    DViewImpl.prototype.stop = function () {
        this._drag.stop();
        this._transform.stop();
    };
    DViewImpl.prototype.reset = function (duration, stop) {
        var parent = this._parent;
        var target = this._toTarget(parent);
        if (target) {
            var targetRect = target.getLocalBounds(this._workRect);
            var newTargetX = (parent.width - targetRect.width) * 0.5 - targetRect.x;
            var newTargetY = (parent.height - targetRect.height) * 0.5 - targetRect.y;
            this._transform.start(target, newTargetX, newTargetY, 1, 1, duration, stop);
        }
    };
    DViewImpl.prototype.fit = function (duration, stop) {
        var parent = this._parent;
        var target = this._toTarget(parent);
        if (target) {
            var padding = parent.padding;
            var width = parent.width;
            var height = parent.height;
            var targetRect = target.getLocalBounds(this._workRect);
            var targetX = targetRect.x;
            var targetY = targetRect.y;
            var targetWidth = targetRect.width;
            var targetHeight = targetRect.height;
            var newTargetScaleX = (width - padding.getLeft() - padding.getRight()) / targetWidth;
            var newTargetScaleY = (height - padding.getTop() - padding.getBottom()) / targetHeight;
            if (this._zoomKeepRatio) {
                var newTargetScale = this.toNormalizedScale(Math.min(newTargetScaleX, newTargetScaleY));
                newTargetScaleX = newTargetScale;
                newTargetScaleY = newTargetScale;
            }
            else {
                newTargetScaleX = this.toNormalizedScale(newTargetScaleX);
                newTargetScaleY = this.toNormalizedScale(newTargetScaleY);
            }
            var newTargetWidth = targetWidth * newTargetScaleX;
            var newTargetHeight = targetHeight * newTargetScaleY;
            var newTargetX = (width - newTargetWidth) * 0.5 - targetX * newTargetScaleX;
            var newTargetY = (height - newTargetHeight) * 0.5 - targetY * newTargetScaleY;
            this._transform.start(target, newTargetX, newTargetY, newTargetScaleX, newTargetScaleY, duration, stop);
        }
    };
    DViewImpl.prototype.zoomIn = function (duration, stop) {
        var target = this._toTarget(this._parent);
        if (target) {
            var factor = this._dblClickZoomSpeed;
            var targetScale = target.scale;
            this.zoom(targetScale.x * factor, targetScale.y * factor, duration, stop);
        }
    };
    DViewImpl.prototype.zoomOut = function (duration, stop) {
        var target = this._toTarget(this._parent);
        if (target) {
            var factor = 1 / this._dblClickZoomSpeed;
            var targetScale = target.scale;
            this.zoom(targetScale.x * factor, targetScale.y * factor, duration, stop);
        }
    };
    DViewImpl.prototype.zoomAt = function (x, y, scaleX, scaleY, duration, stop) {
        var target = this._toTarget(this._parent);
        if (target) {
            // Scale
            var oldScaleX = target.scale.x;
            var oldScaleY = target.scale.y;
            var newScaleX = this.toNormalizedScale(scaleX);
            var newScaleY = this.toNormalizedScale(scaleY);
            var scaleRatioX = newScaleX / oldScaleX;
            var scaleRatioY = newScaleY / oldScaleY;
            // Position
            var newX = (target.position.x - x) * scaleRatioX + x;
            var newY = (target.position.y - y) * scaleRatioY + y;
            // Start
            this._transform.start(target, newX, newY, newScaleX, newScaleY, duration, stop);
        }
    };
    DViewImpl.prototype.zoomAtGlobal = function (x, y, scaleX, scaleY, duration, stop) {
        var local = this._zoomPoint;
        local.set(x, y);
        this.toLocal(local, local);
        this.zoomAt(local.x, local.y, scaleX, scaleY, duration, stop);
    };
    DViewImpl.prototype.zoom = function (scaleX, scaleY, duration, stop) {
        var parent = this._parent;
        this.zoomAt(parent.width * 0.5, parent.height * 0.5, scaleX, scaleY, duration, stop);
    };
    Object.defineProperty(DViewImpl.prototype, "scale", {
        get: function () {
            var target = this._toTarget(this._parent);
            if (target) {
                return target.scale;
            }
            return new Point(1, 1);
        },
        set: function (scale) {
            var target = this._toTarget(this._parent);
            if (target) {
                var newScaleX = this.toNormalizedScale(scale.x);
                var newScaleY = this.toNormalizedScale(scale.y);
                target.scale.set(newScaleX, newScaleY);
            }
        },
        enumerable: true,
        configurable: true
    });
    DViewImpl.prototype.moveTo = function (x, y, duration, stop) {
        var target = this._toTarget(this._parent);
        if (target) {
            var targetScale = target.scale;
            this._transform.start(target, x, y, targetScale.x, targetScale.y, duration, stop);
        }
    };
    Object.defineProperty(DViewImpl.prototype, "position", {
        get: function () {
            var target = this._toTarget(this._parent);
            if (target) {
                return target.position;
            }
            return new Point(0, 0);
        },
        set: function (position) {
            var target = this._toTarget(this._parent);
            if (target) {
                target.position.set(position.x, position.y);
            }
        },
        enumerable: true,
        configurable: true
    });
    DViewImpl.prototype.transform = function (x, y, scaleX, scaleY, duration, stop) {
        var target = this._toTarget(this._parent);
        if (target) {
            this._transform.start(target, x, y, scaleX, scaleY, duration, stop);
        }
    };
    DViewImpl.prototype.toLocal = function (global, local, skipUpdate) {
        return this._parent.toLocal(global, undefined, local, skipUpdate);
    };
    DViewImpl.prototype.toGlobal = function (local, global, skipUpdate) {
        return this._parent.toGlobal(local, global, skipUpdate);
    };
    DViewImpl.prototype.toNormalizedScale = function (scale) {
        return Math.min(this._zoomMax, Math.max(this._zoomMin, scale));
    };
    DViewImpl.prototype.onWheel = function (e, deltas, global) {
        if (this._isWheelZoomEnabled &&
            this._wheelZoomChecker(e, this._wheelZoomModifier, this._parent)) {
            if (deltas.deltaY !== 0) {
                var target = this._toTarget(this._parent);
                if (target) {
                    var speed = deltas.lowest * this._wheelZoomSpeed;
                    var factor = 1 + deltas.deltaY * speed;
                    var targetScale = target.scale;
                    this.zoomAtGlobal(global.x, global.y, targetScale.x * factor, targetScale.y * factor, 0);
                    return true;
                }
            }
        }
        if (this._isWheelTranslationEnabled &&
            this._wheelTranslationChecker(e, this._wheelTranslationModifier, this._parent)) {
            var target = this._toTarget(this._parent);
            if (target) {
                this.stop();
                var speed = deltas.lowest * this._wheelTranslationSpeed;
                target.position.set(target.position.x - deltas.deltaX * speed, target.position.y + deltas.deltaY * speed);
                return true;
            }
        }
        return false;
    };
    DViewImpl.prototype.onDown = function (e) {
        this._drag.onDown(e);
    };
    DViewImpl.prototype.onDblClick = function (e, interactionManager) {
        if (this._isDblClickZoomEnabled &&
            this._dblClickZoomChecker(e, this._dblClickZoomModifier, this._parent)) {
            var target = this._toTarget(this._parent);
            if (target) {
                var global_1 = this._zoomPoint;
                UtilPointerEvent.toGlobal(e, interactionManager, global_1);
                var factor = this._dblClickZoomSpeed;
                var targetScale = target.scale;
                this.zoomAtGlobal(global_1.x, global_1.y, targetScale.x * factor, targetScale.y * factor, this._dblclickZoomDuration);
                return true;
            }
        }
        return false;
    };
    DViewImpl.prototype.toTheme = function (options) {
        if (options && options.theme) {
            var theme = options.theme;
            if (isString(theme)) {
                return DThemes.getInstance().get(theme);
            }
            else {
                return theme;
            }
        }
        return null;
    };
    DViewImpl.prototype.getThemeDefault = function () {
        return DThemes.getInstance().get(this.getType());
    };
    DViewImpl.prototype.getType = function () {
        return "DView";
    };
    return DViewImpl;
}());
export { DViewImpl };
//# sourceMappingURL=d-view-impl.js.map