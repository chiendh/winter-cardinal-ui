/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point } from "pixi.js";
import { DApplications } from "../d-applications";
import { DMouseModifier } from "../d-mouse-modifier";
import { DMouseModifiers } from "../d-mouse-modifiers";
import { UtilDragEasing } from "./util-drag-easing";
import { UtilPointerEvent } from "./util-pointer-event";
var toEasingOptions = function (options) {
    return (options == null || options === true ?
        undefined : options);
};
var toChecker = function (options) {
    var checker = options && options.checker;
    var defaultChecker = DMouseModifiers.match;
    if (checker) {
        return {
            start: checker.start || defaultChecker,
            move: checker.move || defaultChecker
        };
    }
    return {
        start: defaultChecker,
        move: defaultChecker
    };
};
var UtilDrag = /** @class */ (function () {
    function UtilDrag(options) {
        var _this = this;
        var target = this._target = options.target;
        var on = options.on;
        if (on) {
            this._onStart = on.start;
            this._onMove = on.move;
            this._onEnd = on.end;
        }
        this._modifier = (options && options.modifier) || DMouseModifier.NONE;
        this._checker = toChecker(options);
        this._interactionManager = null;
        this._center = new Point();
        this._scale = 1;
        this._scalingCenter = new Point();
        this._time = 0;
        var easing = options.easing;
        if (easing == null || easing !== false) {
            var onEasingMoveBound = function (dx, dy, ds, time) {
                _this.onEasingMove(dx, dy, ds, time);
            };
            this._easing = new UtilDragEasing(onEasingMoveBound, toEasingOptions(easing));
        }
        this._onDownBound = function (e) {
            _this.onDown(e);
        };
        this._onMoveBound = function (e) {
            _this.onMove(e);
        };
        this._onEndBound = function (e) {
            _this.onEnd(e);
        };
        if (options.touch) {
            this._down = "touchstart";
            this._move = "touchmove";
            this._up = "touchend";
        }
        else {
            this._down = UtilPointerEvent.down;
            this._move = UtilPointerEvent.move;
            this._up = UtilPointerEvent.up;
        }
        if (options.bind !== false) {
            target.on(this._down, this._onDownBound);
        }
    }
    UtilDrag.prototype.calcCenterAndScale = function (e, center, interactionManager) {
        var oe = e.data.originalEvent;
        var global = e.data.global;
        if ("touches" in oe) {
            var touches = oe.touches;
            var touchesLength = touches.length;
            if (0 < touchesLength) {
                // Update the center
                var first = touches[0];
                var centerX = first.clientX;
                var centerY = first.clientY;
                for (var i = 1, imax = touches.length; i < imax; ++i) {
                    var touch = touches[i];
                    centerX += touch.clientX;
                    centerY += touch.clientY;
                }
                centerX /= touchesLength;
                centerY /= touchesLength;
                interactionManager.mapPositionToPoint(center, centerX, centerY);
                if (1 < touchesLength) {
                    // Calculate the maximum distance from the center
                    var squareDistance = 0;
                    for (var i = 1, imax = touches.length; i < imax; ++i) {
                        var touch = touches[i];
                        var dx = touch.clientX - centerX;
                        var dy = touch.clientY - centerY;
                        squareDistance = Math.max(squareDistance, dx * dx + dy * dy);
                    }
                    return Math.sqrt(squareDistance);
                }
                else {
                    return 0;
                }
            }
        }
        center.copyFrom(global);
        return 0;
    };
    UtilDrag.prototype.onDown = function (e) {
        var target = this._target;
        if (this._checker.start(e, this._modifier, target)) {
            var layer = DApplications.getLayer(target);
            if (layer) {
                e.stopPropagation();
                if (target.isDragging()) {
                    var interactionManager = this._interactionManager;
                    if (interactionManager) {
                        var center = this._center;
                        this._scale = this.calcCenterAndScale(e, center, interactionManager);
                    }
                }
                else {
                    target.setDragging(true);
                    // Interaction manager
                    var interactionManager = layer.renderer.plugins.interaction;
                    this._interactionManager = interactionManager;
                    // Update the center
                    var center = this._center;
                    this._scale = this.calcCenterAndScale(e, center, interactionManager);
                    //
                    this._time = e.data.originalEvent.timeStamp;
                    // Easing util
                    var easing = this._easing;
                    if (easing) {
                        easing.onStart();
                    }
                    // User-defined handler
                    var onStart = this._onStart;
                    if (onStart != null) {
                        onStart();
                    }
                    // Event handler
                    interactionManager.on(this._move, this._onMoveBound);
                    interactionManager.on(this._up, this._onEndBound);
                }
            }
        }
    };
    UtilDrag.prototype.onMove = function (e) {
        var target = this._target;
        if (target.isDragging() && this._checker.move(e, this._modifier, target)) {
            var interactionManager = this._interactionManager;
            if (interactionManager) {
                // Update the center
                var center = this._center;
                var centerX = center.x;
                var centerY = center.y;
                var newScale = this.calcCenterAndScale(e, center, interactionManager);
                var oldScale = this._scale;
                this._scale = newScale;
                var oldTime = this._time;
                var newTime = e.data.originalEvent.timeStamp;
                this._time = newTime;
                // Calculate the position
                var dx = center.x - centerX;
                var dy = center.y - centerY;
                var dt = newTime - oldTime;
                var ds = (UtilDrag.EPSILON < oldScale ? newScale / oldScale : 1);
                // Easing util
                var easing = this._easing;
                if (easing) {
                    easing.onMove(dx, dy, ds, dt);
                }
                // User-defined handler
                var onMove = this._onMove;
                if (onMove != null) {
                    if (dx !== 0 || dy !== 0 || ds !== 1) {
                        onMove(dx, dy, center.x, center.y, ds);
                    }
                }
            }
        }
    };
    UtilDrag.prototype.onEnd = function (e) {
        var target = this._target;
        if (target.isDragging()) {
            var interactionManager = this._interactionManager;
            if (interactionManager) {
                // Update the center
                var center = this._center;
                this._scalingCenter.copyFrom(center);
                this._scale = this.calcCenterAndScale(e, center, interactionManager);
                // Finalize
                var oe = e.data.originalEvent;
                if ("touches" in oe ? oe.touches.length <= 0 : true) {
                    target.setDragging(false);
                    // Event handler
                    this._interactionManager = null;
                    interactionManager.off(this._move, this._onMoveBound);
                    interactionManager.off(this._up, this._onEndBound);
                    // User-defined handler
                    var onEnd = this._onEnd;
                    if (onEnd != null) {
                        onEnd();
                    }
                    // Easing util
                    var easing = this._easing;
                    if (easing) {
                        easing.onEnd(e.data.originalEvent.timeStamp - this._time);
                    }
                }
            }
        }
    };
    UtilDrag.prototype.onEasingMove = function (dx, dy, ds, time) {
        var onMove = this._onMove;
        if (onMove != null) {
            if (dx !== 0 || dy !== 0 || ds !== 1) {
                var scalingCenter = this._scalingCenter;
                scalingCenter.set(scalingCenter.x + dx, scalingCenter.y + dy);
                onMove(dx, dy, scalingCenter.x, scalingCenter.y, ds);
            }
        }
    };
    UtilDrag.prototype.stop = function () {
        var easing = this._easing;
        if (easing) {
            easing.stop();
        }
    };
    UtilDrag.EPSILON = 0.00001;
    return UtilDrag;
}());
export { UtilDrag };
//# sourceMappingURL=util-drag.js.map