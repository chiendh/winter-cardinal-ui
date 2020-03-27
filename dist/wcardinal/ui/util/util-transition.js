/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var UtilTransition = /** @class */ (function () {
    function UtilTransition(options) {
        this._duration = (options != null && options.duration != null ? options.duration : 300);
        this._current = null;
        this._lastUpdate = 0;
        this._updateId = null;
    }
    UtilTransition.prototype.show = function (next, forcibly) {
        var _this = this;
        var updateId = this._updateId;
        if (updateId != null) {
            clearTimeout(updateId);
        }
        var current = this._current;
        if (next !== current) {
            var duration = this._duration;
            var lastUpdate = this._lastUpdate;
            var now = Date.now();
            var remaining = (lastUpdate + duration) - now;
            if (forcibly === true || remaining <= 0) {
                this.update(now, next);
            }
            else {
                this._updateId = window.setTimeout(function () {
                    _this.update(Date.now(), next);
                }, remaining);
            }
        }
    };
    UtilTransition.prototype.update = function (now, next) {
        var current = this._current;
        if (current !== next) {
            this._lastUpdate = now;
            if (current !== null) {
                current.hide();
            }
            this._current = next;
            if (next != null) {
                next.show();
            }
        }
    };
    UtilTransition.prototype.hide = function () {
        this.show(null);
    };
    return UtilTransition;
}());
export { UtilTransition };
//# sourceMappingURL=util-transition.js.map