/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DAnimationBase } from "../d-animation-base";
import { DAnimationTimings } from "../d-animation-timings";
import { isNumber } from "./is-number";
import { UtilDragEasingHistory } from "./util-drag-easing-history";
var UtilDragEasing = /** @class */ (function () {
    function UtilDragEasing(onMove, options) {
        var _this = this;
        this._histories = [];
        this._historiesSorted = [];
        this._historyBegin = 0;
        this._historyEnd = -1;
        this._dx = 0;
        this._dy = 0;
        this._ds = 0;
        this._dt = 0;
        this._animation = new DAnimationBase({
            onTime: function (t) {
                _this.onEase(t);
            },
            timing: DAnimationTimings.LINEAR,
            duration: 1000
        });
        var duration = options && options.duration;
        if (duration) {
            if (isNumber(duration)) {
                this._durationPosition = duration;
                this._durationScale = duration;
            }
            else {
                this._durationPosition = (duration.position != null ? duration.position : 1);
                this._durationScale = (duration.scale != null ? duration.scale : 1);
            }
        }
        else {
            this._durationPosition = 1;
            this._durationScale = 1;
        }
        this._onMove = onMove;
    }
    UtilDragEasing.prototype.onStart = function () {
        // History
        var histories = this._histories;
        for (var i = histories.length, imax = UtilDragEasing.HISTORY_CAPACITY; i < imax; ++i) {
            histories.push(new UtilDragEasingHistory(0, 0, 1, 0));
        }
        this._historyBegin = 0;
        this._historyEnd = -1;
        // Stop animation
        this._animation.stop();
    };
    UtilDragEasing.prototype.onMove = function (dx, dy, ds, dt) {
        var capacity = UtilDragEasing.HISTORY_CAPACITY;
        var oldHistoryEnd = this._historyEnd;
        var newHistoryEnd = (oldHistoryEnd + 1) % capacity;
        this._historyEnd = newHistoryEnd;
        var oldHistoryBegin = this._historyBegin;
        if (newHistoryEnd < oldHistoryEnd || (0 <= oldHistoryEnd && oldHistoryEnd < oldHistoryBegin)) {
            this._historyBegin = (oldHistoryBegin + 1) % capacity;
        }
        this._histories[newHistoryEnd].set(dx, dy, ds, dt);
    };
    UtilDragEasing.prototype.updateHistoriesSorted = function (dt) {
        var unsorted = this._histories;
        var sorted = this._historiesSorted;
        var begin = this._historyBegin;
        var end = this._historyEnd;
        var length = unsorted.length;
        var threshold = 160;
        if (end < 0) {
            sorted.length = 0;
            return dt;
        }
        else if (end < begin) {
            var total = dt;
            sorted.length = 0;
            for (var i = end; 0 <= i; --i) {
                var history_1 = unsorted[i];
                if (total + history_1.dt < threshold) {
                    total += history_1.dt;
                    sorted.push(history_1);
                }
                else {
                    return total;
                }
            }
            for (var i = length - 1; begin <= i; --i) {
                var history_2 = unsorted[i];
                if (total + history_2.dt < threshold) {
                    total += history_2.dt;
                    sorted.push(history_2);
                }
                else {
                    return total;
                }
            }
            return total;
        }
        else {
            var total = dt;
            sorted.length = 0;
            for (var i = end; begin <= i; --i) {
                var history_3 = unsorted[i];
                if (total + history_3.dt < threshold) {
                    total += history_3.dt;
                    sorted.push(history_3);
                }
                else {
                    return total;
                }
            }
            return total;
        }
    };
    UtilDragEasing.prototype.onEnd = function (ldt) {
        var adt = this.updateHistoriesSorted(ldt);
        var sorted = this._historiesSorted;
        var sortedLength = sorted.length;
        if (0 < sortedLength) {
            var dx = 0;
            var dy = 0;
            var ds = 0;
            var dt = 0;
            for (var i = 0; i < sortedLength; ++i) {
                var history_4 = sorted[i];
                dx += history_4.dx;
                dy += history_4.dy;
                ds += history_4.ds;
                dt += history_4.dt;
            }
            var w = (1 - ldt / adt) / sortedLength;
            dx *= w;
            dy *= w;
            ds = 1 + (ds - sortedLength) * w;
            dt *= w;
            this._dx = dx;
            this._dy = dy;
            this._ds = ds;
            this._dt = dt;
            // Start animation
            var d0 = this._durationPosition * 40 * Math.sqrt(dx * dx + dy * dy);
            var d1 = this._durationScale * 10000 * Math.abs(ds - 1);
            var animation = this._animation;
            animation.duration = Math.max(d0, d1);
            animation.start();
        }
    };
    UtilDragEasing.prototype.onEase = function (time) {
        var w = 1 - time;
        this._onMove(this._dx * w, this._dy * w, 1 + (this._ds - 1) * w, time);
    };
    UtilDragEasing.prototype.stop = function () {
        this._animation.stop();
    };
    UtilDragEasing.HISTORY_CAPACITY = 5;
    return UtilDragEasing;
}());
export { UtilDragEasing };
//# sourceMappingURL=util-drag-easing.js.map