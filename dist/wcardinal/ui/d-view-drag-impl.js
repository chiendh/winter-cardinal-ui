/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DDragMode } from "./d-drag-mode";
import { DMouseModifier } from "./d-mouse-modifier";
import { isString } from "./util/is-string";
import { UtilDrag } from "./util/util-drag";
var DViewDragImpl = /** @class */ (function () {
    function DViewDragImpl(parent, toTarget, stopper, theme, options) {
        var _this = this;
        this._parent = parent;
        this._toTarget = toTarget;
        this._stopper = stopper;
        var mode = (options && options.mode != null ?
            (isString(options.mode) ? DDragMode[options.mode] : options.mode) :
            theme.getDragMode());
        var modifier = (options && options.modifier != null ?
            (isString(options.modifier) ? DMouseModifier[options.modifier] : options.modifier) :
            theme.getDragModifier());
        var duration = (options && options.duration != null ?
            options.duration : {
            position: theme.getDragDurationPosition(),
            scale: theme.getDragDurationScale()
        });
        var bind = (mode === DDragMode.TOUCH);
        this._bind = bind;
        if (mode === DDragMode.ON || mode === DDragMode.TOUCH) {
            this._dragUtil = new UtilDrag({
                target: parent,
                touch: bind,
                modifier: modifier,
                checker: options && options.checker,
                easing: {
                    duration: duration
                },
                bind: bind,
                on: {
                    start: function () {
                        _this._stopper.stop();
                    },
                    move: function (dx, dy, x, y, ds) {
                        var target = toTarget(parent);
                        if (target != null) {
                            // Scale
                            var oldScale = target.scale.y;
                            var newScale = stopper.toNormalizedScale(oldScale * ds);
                            var scaleRatio = newScale / oldScale;
                            // Position
                            var cx = x - dx;
                            var cy = y - dy;
                            var position = target.position;
                            var newX = (position.x - cx) * scaleRatio + x;
                            var newY = (position.y - cy) * scaleRatio + y;
                            // Update
                            target.scale.set(newScale, newScale);
                            target.position.set(newX, newY);
                        }
                    }
                }
            });
        }
    }
    DViewDragImpl.prototype.stop = function () {
        var dragUtil = this._dragUtil;
        if (dragUtil != null) {
            dragUtil.stop();
        }
    };
    DViewDragImpl.prototype.onDown = function (e) {
        if (!this._bind) {
            var dragUtil = this._dragUtil;
            if (dragUtil) {
                dragUtil.onDown(e);
            }
        }
    };
    return DViewDragImpl;
}());
export { DViewDragImpl };
//# sourceMappingURL=d-view-drag-impl.js.map