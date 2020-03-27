/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DApplications } from "../d-applications";
var UtilPointerEvent = /** @class */ (function () {
    function UtilPointerEvent() {
    }
    Object.defineProperty(UtilPointerEvent, "touchable", {
        get: function () {
            return ("ontouchstart" in document);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilPointerEvent, "tap", {
        get: function () {
            return "pointertap";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilPointerEvent, "down", {
        get: function () {
            return "pointerdown";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilPointerEvent, "enter", {
        get: function () {
            return "pointerenter";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilPointerEvent, "leave", {
        get: function () {
            return "pointerleave";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilPointerEvent, "move", {
        get: function () {
            return "pointermove";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilPointerEvent, "out", {
        get: function () {
            return "pointerout";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilPointerEvent, "over", {
        get: function () {
            return "pointerover";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilPointerEvent, "up", {
        get: function () {
            return "pointerup";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilPointerEvent, "cancel", {
        get: function () {
            return "pointercancel";
        },
        enumerable: true,
        configurable: true
    });
    UtilPointerEvent.toGlobal = function (e, interactionManager, result) {
        if ("touches" in e) {
            var touches = e.changedTouches;
            var touch = touches[touches.length - 1];
            if (touch != null) {
                interactionManager.mapPositionToPoint(result, touch.clientX, touch.clientY);
            }
            else {
                interactionManager.mapPositionToPoint(result, 0, 0);
            }
        }
        else {
            interactionManager.mapPositionToPoint(result, e.clientX, e.clientY);
        }
        return result;
    };
    UtilPointerEvent.onClick = function (target, handler) {
        var _this = this;
        if (!this.touchable) {
            target.on("click", handler);
        }
        else {
            var isDowned_1 = false;
            var downX_1 = 0;
            var downY_1 = 0;
            var interactionManagerBound_1 = null;
            var cleanup_1 = function () {
                isDowned_1 = false;
                if (interactionManagerBound_1) {
                    interactionManagerBound_1.off(up_1, onUp_1);
                    interactionManagerBound_1 = null;
                }
            };
            var isValidDistance_1 = function (e) {
                var global = e.data.global;
                var dx = Math.abs(downX_1 - global.x);
                var dy = Math.abs(downY_1 - global.y);
                var threshold = _this.CLICK_DISTANCE_THRESHOLD;
                return (dx <= threshold && dy <= threshold);
            };
            target.on("click", function (e) {
                if (isDowned_1) {
                    cleanup_1();
                }
                handler(e);
            });
            var up_1 = this.up;
            var onUp_1 = function (e) {
                if (isDowned_1) {
                    cleanup_1();
                    if (_this.contains(target, e.target)) {
                        if (isValidDistance_1(e)) {
                            handler(e);
                        }
                    }
                }
            };
            target.on(this.down, function (e) {
                if (isDowned_1) {
                    var global_1 = e.data.global;
                    downX_1 = global_1.x;
                    downY_1 = global_1.y;
                }
                else {
                    isDowned_1 = true;
                    var global_2 = e.data.global;
                    downX_1 = global_2.x;
                    downY_1 = global_2.y;
                    if (interactionManagerBound_1) {
                        interactionManagerBound_1.off(up_1, onUp_1);
                        interactionManagerBound_1 = null;
                    }
                    var layer = DApplications.getLayer(target);
                    if (layer) {
                        interactionManagerBound_1 = layer.renderer.plugins.interaction;
                        interactionManagerBound_1.once(up_1, onUp_1);
                    }
                }
            });
        }
    };
    UtilPointerEvent.onLongClick = function (target, onClick, onLongClick) {
        var _this = this;
        if (!this.touchable) {
            target.on("click", onClick);
        }
        else {
            var isDowned_2 = false;
            var downX_2 = 0;
            var downY_2 = 0;
            var timeoutId_1 = null;
            var interactionManagerBound_2 = null;
            var cleanupTimeout_1 = function () {
                if (timeoutId_1 != null) {
                    clearTimeout(timeoutId_1);
                    timeoutId_1 = null;
                }
            };
            var cleanup_2 = function () {
                isDowned_2 = false;
                if (interactionManagerBound_2) {
                    interactionManagerBound_2.off(up_2, onUp_2);
                    interactionManagerBound_2.off(move_1, onMove_1);
                    interactionManagerBound_2 = null;
                }
                cleanupTimeout_1();
            };
            var isValidDistance_2 = function (e) {
                var global = e.data.global;
                var dx = Math.abs(downX_2 - global.x);
                var dy = Math.abs(downY_2 - global.y);
                var threshold = _this.CLICK_DISTANCE_THRESHOLD;
                return (dx < threshold && dy < threshold);
            };
            target.on("click", function (e) {
                if (isDowned_2) {
                    cleanup_2();
                }
                onClick(e);
            });
            var up_2 = this.up;
            var move_1 = this.move;
            var onUp_2 = function (e) {
                if (isDowned_2) {
                    cleanup_2();
                    if (_this.contains(target, e.target)) {
                        if (isValidDistance_2(e)) {
                            onClick(e);
                        }
                    }
                }
            };
            var onMove_1 = function (e) {
                if (isDowned_2) {
                    if (_this.contains(target, e.target)) {
                        if (!isValidDistance_2(e)) {
                            cleanup_2();
                        }
                    }
                }
            };
            target.on(this.down, function (e) {
                if (!isDowned_2) {
                    isDowned_2 = true;
                    var global_3 = e.data.global;
                    downX_2 = global_3.x;
                    downY_2 = global_3.y;
                    cleanupTimeout_1();
                    var oe = e.data.originalEvent;
                    if ("touches" in oe) {
                        timeoutId_1 = window.setTimeout(function () {
                            if (isDowned_2) {
                                cleanup_2();
                                onLongClick(e);
                            }
                        }, _this.LONG_CLICK_THRESHOLD);
                    }
                    if (interactionManagerBound_2) {
                        interactionManagerBound_2.off(up_2, onUp_2);
                        interactionManagerBound_2.off(move_1, onMove_1);
                        interactionManagerBound_2 = null;
                    }
                    var layer = DApplications.getLayer(target);
                    if (layer) {
                        interactionManagerBound_2 = layer.renderer.plugins.interaction;
                        interactionManagerBound_2.once(up_2, onUp_2);
                        interactionManagerBound_2.on(move_1, onMove_1);
                    }
                }
            });
        }
    };
    UtilPointerEvent.onDblClick = function (target, handler) {
        var _this = this;
        if (!this.touchable) {
            target.addEventListener("dblclick", handler);
        }
        else {
            var isDowned_3 = 0;
            var downX_3 = 0;
            var downY_3 = 0;
            var clickTime_1 = 0;
            target.addEventListener("dblclick", handler);
            target.addEventListener("touchend", function (e) {
                if (isDowned_3 === 1 || isDowned_3 === 3) {
                    var touches = e.changedTouches;
                    var touch = touches[touches.length - 1];
                    if (touch != null) {
                        var dx = downX_3 - touch.clientX;
                        var dy = downY_3 - touch.clientY;
                        if (Math.abs(dx) + Math.abs(dy) < _this.CLICK_DISTANCE_THRESHOLD) {
                            isDowned_3 += 1;
                            if (isDowned_3 === 4) {
                                isDowned_3 = 0;
                                var elapsedTime = e.timeStamp - clickTime_1;
                                if (elapsedTime < _this.DBLCLICK_INTERVAL_THRESHOLD) {
                                    handler(e);
                                }
                                else {
                                    clickTime_1 = e.timeStamp;
                                    isDowned_3 = 2;
                                }
                            }
                            else {
                                clickTime_1 = e.timeStamp;
                            }
                            return;
                        }
                    }
                }
                isDowned_3 = 0;
            });
            target.addEventListener("touchstart", function (e) {
                if (isDowned_3 === 0) {
                    var touch = e.touches.item(e.touches.length - 1);
                    if (touch != null) {
                        isDowned_3 = 1;
                        downX_3 = touch.clientX;
                        downY_3 = touch.clientY;
                        return;
                    }
                }
                else if (isDowned_3 === 2) {
                    var touch = e.touches.item(e.touches.length - 1);
                    if (touch != null) {
                        isDowned_3 = 3;
                        downX_3 = touch.clientX;
                        downY_3 = touch.clientY;
                        return;
                    }
                }
                isDowned_3 = 0;
            });
        }
    };
    UtilPointerEvent.contains = function (target, targetOrChild) {
        var current = targetOrChild;
        while (current != null && current !== target) {
            current = current.parent;
        }
        return current === target;
    };
    UtilPointerEvent.CLICK_DISTANCE_THRESHOLD = 10;
    UtilPointerEvent.DBLCLICK_INTERVAL_THRESHOLD = 333;
    UtilPointerEvent.LONG_CLICK_THRESHOLD = 750;
    return UtilPointerEvent;
}());
export { UtilPointerEvent };
//# sourceMappingURL=util-pointer-event.js.map