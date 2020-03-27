/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point } from "pixi.js";
import { DSlider } from "./d-slider";
import { DSliderTrackHorizontal } from "./d-slider-track-horizontal";
var DSliderHorizontal = /** @class */ (function (_super) {
    __extends(DSliderHorizontal, _super);
    function DSliderHorizontal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DSliderHorizontal.prototype.newTrack = function (options) {
        return new DSliderTrackHorizontal(options && options.track);
    };
    DSliderHorizontal.prototype.newTrackSelected = function (options) {
        return new DSliderTrackHorizontal(options && options.track);
    };
    DSliderHorizontal.prototype.toValueOptions = function (options) {
        var _this = this;
        options = _super.prototype.toValueOptions.call(this, options);
        if (options.y == null) {
            options.y = function (p, s) { return p * 0.5 - s - _this.getValueMargin(); };
        }
        return options;
    };
    DSliderHorizontal.prototype.toLabelMinOptions = function (options) {
        options = _super.prototype.toLabelMinOptions.call(this, options);
        if (options.x == null) {
            options.x = function (p, s) { return -s * 0.5; };
        }
        if (options.y == null) {
            options.y = function (p, s) { return -s; };
        }
        return options;
    };
    DSliderHorizontal.prototype.toLabelMaxOptions = function (options) {
        options = _super.prototype.toLabelMaxOptions.call(this, options);
        if (options.x == null) {
            options.x = function (p, s) { return p - s * 0.5; };
        }
        if (options.y == null) {
            options.y = function (p, s) { return -s; };
        }
        return options;
    };
    DSliderHorizontal.prototype.onPick = function (global) {
        var point = new Point(0, 0);
        this.toLocal(global, undefined, point);
        var x = Math.max(0, Math.min(this._track.width, point.x));
        this._ratioValue = x / this._track.width;
        this.moveThumbPosition(x);
    };
    DSliderHorizontal.prototype.onValuesChanged = function () {
        var min = this._min.value;
        var max = this._max.value;
        var value = this._value.value;
        this._ratioValue = (value - min) / (max - min);
        var x = this._ratioValue * this._track.width;
        this.moveThumbPosition(x);
    };
    DSliderHorizontal.prototype.moveThumbPosition = function (x) {
        var thumb = this._thumb;
        thumb.x = x - thumb.width * 0.5;
        this._trackSelected.width = x;
        var value = this._value;
        value.x = x - value.width * 0.5;
        this.updateValue();
    };
    DSliderHorizontal.prototype.toThumbCoordinate = function (x) {
        return x - this._thumb.width * 0.5;
    };
    DSliderHorizontal.prototype.getType = function () {
        return "DSliderHorizontal";
    };
    return DSliderHorizontal;
}(DSlider));
export { DSliderHorizontal };
//# sourceMappingURL=d-slider-horizontal.js.map