/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DAnimationTimings } from "./d-animation-timings";
var DAnimationBase = /** @class */ (function (_super) {
    __extends(DAnimationBase, _super);
    function DAnimationBase(options) {
        var _this = _super.call(this) || this;
        _this._id = null;
        _this._target = (options && options.target != null ? options.target : null);
        _this._startTime = 0;
        _this._duration = (options != null && options.duration != null ? options.duration : 200);
        _this._durationInverse = 1 / Math.max(1, _this._duration);
        _this._reverse = false;
        _this._onTime = (options != null ? options.onTime : undefined);
        _this._onTimeBaseBound = function () {
            _this.onTimeBase();
        };
        _this._onStart = (options != null ? options.onStart : undefined);
        _this._onEnd = (options != null ? options.onEnd : undefined);
        _this._timing = (options != null && options.timing != null ? options.timing : DAnimationTimings.ELASTIC);
        // Events
        var on = options && options.on;
        if (on) {
            for (var name_1 in on) {
                var handler = on[name_1];
                if (handler) {
                    _this.on(name_1, handler);
                }
            }
        }
        return _this;
    }
    Object.defineProperty(DAnimationBase.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (target) {
            this._target = target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DAnimationBase.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (duration) {
            this._duration = duration;
            this._durationInverse = 1 / Math.max(1, duration);
        },
        enumerable: true,
        configurable: true
    });
    DAnimationBase.prototype.start = function (reverse) {
        if (reverse === void 0) { reverse = false; }
        this.stop();
        this._startTime = Date.now();
        this._reverse = reverse;
        this._id = window.setTimeout(this._onTimeBaseBound, 0);
        // onStart
        this.onStart(reverse);
        // onTime
        var duration = this._duration;
        var time = this.toTime(reverse ? duration : 0);
        this.onTime(time, reverse, 0);
    };
    DAnimationBase.prototype.onStart = function (isReverse) {
        var onStart = this._onStart;
        if (onStart != null) {
            onStart(isReverse, this);
        }
        this.emit("start", isReverse, this);
    };
    DAnimationBase.prototype.onTime = function (time, isReverse, elapsedTime) {
        var onTime = this._onTime;
        if (onTime != null) {
            onTime(time, isReverse, elapsedTime, this);
        }
        this.emit("time", time, isReverse, elapsedTime, this);
    };
    DAnimationBase.prototype.onEnd = function (isReverse) {
        var onEnd = this._onEnd;
        if (onEnd != null) {
            onEnd(isReverse, this);
        }
        this.emit("end", isReverse, this);
    };
    DAnimationBase.prototype.isStarted = function () {
        return (this._id != null);
    };
    DAnimationBase.prototype.isReverse = function () {
        return this._reverse;
    };
    DAnimationBase.prototype.onTimeBase = function () {
        var id = this._id;
        if (id != null) {
            this._id = null;
            var elapsedTime = Date.now() - this._startTime;
            var duration = this._duration;
            var reverse = this._reverse;
            if (elapsedTime < duration) {
                this._id = window.setTimeout(this._onTimeBaseBound, 0);
                // OnTime
                var time = this.toTime(reverse ? duration - elapsedTime : elapsedTime);
                this.onTime(time, reverse, elapsedTime);
            }
            else {
                // OnTime
                var time = this.toTime(reverse ? 0 : duration);
                this.onTime(time, reverse, elapsedTime);
                // OnEnd
                this.onEnd(reverse);
            }
        }
    };
    DAnimationBase.prototype.toTime = function (elapsedTime) {
        return this._timing(elapsedTime * this._durationInverse, this);
    };
    DAnimationBase.prototype.stop = function () {
        var id = this._id;
        if (id != null) {
            this._id = null;
            window.clearTimeout(id);
        }
    };
    DAnimationBase.prototype.end = function () {
        var id = this._id;
        if (id != null) {
            this._id = null;
            window.clearTimeout(id);
            // OnTime
            var reverse = this._reverse;
            var elapsedTime = Date.now() - this._startTime;
            var duration = this._duration;
            var time = this.toTime(reverse ? 0 : duration);
            this.onTime(time, reverse, elapsedTime);
            // OnEnd
            this.onEnd(reverse);
        }
    };
    return DAnimationBase;
}(utils.EventEmitter));
export { DAnimationBase };
//# sourceMappingURL=d-animation-base.js.map