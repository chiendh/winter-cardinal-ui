/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DAnimationBase } from "./d-animation-base";
var DViewTransformImpl = /** @class */ (function () {
    function DViewTransformImpl(parent, toTarget, stopper, duration) {
        var _this = this;
        this._parent = parent;
        this._toTarget = toTarget;
        this._newScaleX = 1;
        this._newScaleY = 1;
        this._newX = 0;
        this._newY = 0;
        this._oldScaleX = 1;
        this._oldScaleY = 1;
        this._oldX = 0;
        this._oldY = 0;
        this._animation = new DAnimationBase({
            onTime: function (time) {
                _this.onTime(time);
            },
            duration: duration
        });
        this._stopper = stopper;
        this._duration = duration;
    }
    DViewTransformImpl.prototype.onTime = function (time) {
        var w0 = 1 - time;
        var w1 = time;
        var scaleX = this._oldScaleX * w0 + this._newScaleX * w1;
        var scaleY = this._oldScaleY * w0 + this._newScaleY * w1;
        var x = this._oldX * w0 + this._newX * w1;
        var y = this._oldY * w0 + this._newY * w1;
        var target = this._toTarget(this._parent);
        if (target != null) {
            target.scale.set(scaleX, scaleY);
            target.position.set(x, y);
        }
    };
    DViewTransformImpl.prototype.start = function (target, x, Y, scaleX, scaleY, duration, stop) {
        if (stop !== false) {
            this._stopper.stop();
        }
        if (duration == null) {
            duration = this._duration;
        }
        if (duration <= 0) {
            target.scale.set(scaleX, scaleY);
            target.position.set(x, Y);
        }
        else {
            var position = target.position;
            var scale = target.scale;
            this._oldX = position.x;
            this._oldY = position.y;
            this._oldScaleX = scale.x;
            this._oldScaleY = scale.y;
            this._newX = x;
            this._newY = Y;
            this._newScaleX = scaleX;
            this._newScaleY = scaleY;
            this._animation.duration = duration;
            this._animation.start();
        }
    };
    DViewTransformImpl.prototype.stop = function () {
        this._animation.stop();
    };
    return DViewTransformImpl;
}());
export { DViewTransformImpl };
//# sourceMappingURL=d-view-transform-impl.js.map