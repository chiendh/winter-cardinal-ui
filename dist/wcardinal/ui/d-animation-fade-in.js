/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAnimationBase } from "./d-animation-base";
import { DApplications } from "./d-applications";
var DAnimationFadeIn = /** @class */ (function (_super) {
    __extends(DAnimationFadeIn, _super);
    function DAnimationFadeIn(options) {
        var _this = _super.call(this, options) || this;
        _this._storedX = 0;
        _this._storedY = 0;
        _this._storedAlpha = 0;
        _this._storedTime = 0;
        _this._storedTarget = null;
        _this._layer = null;
        // Shifts
        if (options != null && options.shift != null) {
            var shift = options.shift;
            _this._shiftX = (shift.x != null ? shift.x : 0);
            _this._shiftY = (shift.y != null ? shift.y : 15);
        }
        else {
            _this._shiftX = 0;
            _this._shiftY = 15;
        }
        _this._onPrerenderBound = function () {
            _this.onPrerender();
        };
        _this._onPostrenderBound = function () {
            _this.onPostrender();
        };
        return _this;
    }
    DAnimationFadeIn.prototype.stop = function () {
        this._storedTime = 0;
        this.removeEventListeners();
        _super.prototype.stop.call(this);
    };
    DAnimationFadeIn.prototype.addEventListeners = function (target) {
        var layer = DApplications.getLayer(target);
        if (layer) {
            this._layer = layer;
            var renderer = layer.renderer;
            renderer.on("prerender", this._onPrerenderBound);
            renderer.on("postrender", this._onPostrenderBound);
        }
    };
    DAnimationFadeIn.prototype.removeEventListeners = function () {
        var layer = this._layer;
        if (layer) {
            this._layer = null;
            var renderer = layer.renderer;
            renderer.off("prerender", this._onPrerenderBound);
            renderer.off("postrender", this._onPostrenderBound);
        }
    };
    DAnimationFadeIn.prototype.onStart = function (isReverse) {
        var target = this._storedTarget = this._target;
        if (target != null) {
            this._storedTime = 0;
            this.removeEventListeners();
            this.addEventListeners(target);
            if (!isReverse) {
                target.visible = true;
            }
            _super.prototype.onStart.call(this, isReverse);
        }
    };
    DAnimationFadeIn.prototype.onTime = function (time, isReverse, elapsedTime) {
        var target = this._storedTarget;
        if (target != null) {
            var layer = this._layer;
            if (layer) {
                layer.disallowUpdate();
                this._storedTime = time;
                _super.prototype.onTime.call(this, time, isReverse, elapsedTime);
                layer.allowUpdate();
                layer.render();
            }
            else {
                this._storedTime = time;
                _super.prototype.onTime.call(this, time, isReverse, elapsedTime);
            }
        }
    };
    DAnimationFadeIn.prototype.onEnd = function (isReverse) {
        var target = this._storedTarget;
        if (target != null) {
            this.removeEventListeners();
            if (isReverse) {
                target.visible = false;
            }
            _super.prototype.onEnd.call(this, isReverse);
        }
    };
    DAnimationFadeIn.prototype.onPrerender = function () {
        var target = this._storedTarget;
        if (target != null) {
            var storedTime = this._storedTime;
            // Position
            var position = target.unsafe.position;
            this._storedX = position.x;
            this._storedY = position.y;
            position.set(position.x - this._shiftX * (1 - storedTime), position.y - this._shiftY * (1 - storedTime));
            // Alpha
            this._storedAlpha = target.alpha;
            target.alpha = storedTime;
        }
    };
    DAnimationFadeIn.prototype.onPostrender = function () {
        var target = this._storedTarget;
        if (target != null) {
            // Position
            var position = target.unsafe.position;
            position.set(this._storedX, this._storedY);
            // Alpha
            target.alpha = this._storedAlpha;
        }
    };
    return DAnimationFadeIn;
}(DAnimationBase));
export { DAnimationFadeIn };
//# sourceMappingURL=d-animation-fade-in.js.map