/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
var DAnimationEmpty = /** @class */ (function (_super) {
    __extends(DAnimationEmpty, _super);
    function DAnimationEmpty(options) {
        var _this = _super.call(this) || this;
        _this._target = (options && options.target != null ? options.target : null);
        _this._reverse = false;
        _this._isStarted = false;
        _this._onTime = options && options.onTime;
        _this._onStart = options && options.onStart;
        _this._onEnd = options && options.onEnd;
        return _this;
    }
    Object.defineProperty(DAnimationEmpty.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (target) {
            this._target = target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DAnimationEmpty.prototype, "duration", {
        get: function () {
            return 0;
        },
        set: function (duration) {
            // DO NOTHING
        },
        enumerable: true,
        configurable: true
    });
    DAnimationEmpty.prototype.start = function (reverse) {
        if (reverse === void 0) { reverse = false; }
        this.stop();
        this._isStarted = true;
        this._reverse = reverse;
        // onStart
        this.onStart(reverse);
        if (!this._isStarted) {
            return;
        }
        // onTime
        this.onTime(reverse ? 1 : 0, reverse, 0);
        if (!this._isStarted) {
            return;
        }
        this.onTime(reverse ? 0 : 1, reverse, 0);
        if (this._isStarted) {
            return;
        }
        // OnEnd
        this.onEnd(reverse);
    };
    DAnimationEmpty.prototype.onStart = function (isReverse) {
        var onStart = this._onStart;
        if (onStart != null) {
            onStart(isReverse, this);
        }
        this.emit("start", isReverse, this);
    };
    DAnimationEmpty.prototype.onTime = function (time, isReverse, elapsedTime) {
        var onTime = this._onTime;
        if (onTime != null) {
            onTime(time, isReverse, elapsedTime, this);
        }
        this.emit("time", time, isReverse, elapsedTime, this);
    };
    DAnimationEmpty.prototype.onEnd = function (isReverse) {
        var onEnd = this._onEnd;
        if (onEnd != null) {
            onEnd(isReverse, this);
        }
        this.emit("end", isReverse, this);
    };
    DAnimationEmpty.prototype.isStarted = function () {
        return this._isStarted;
    };
    DAnimationEmpty.prototype.isReverse = function () {
        return this._reverse;
    };
    DAnimationEmpty.prototype.stop = function () {
        this._isStarted = false;
    };
    DAnimationEmpty.prototype.end = function () {
        var isStarted = this._isStarted;
        if (isStarted) {
            this._isStarted = false;
            // OnTime
            var reverse = this._reverse;
            var time = (reverse ? 0 : 1);
            this.onTime(time, reverse, 0);
            // OnEnd
            this.onEnd(reverse);
        }
    };
    return DAnimationEmpty;
}(utils.EventEmitter));
export { DAnimationEmpty };
//# sourceMappingURL=d-animation-empty.js.map