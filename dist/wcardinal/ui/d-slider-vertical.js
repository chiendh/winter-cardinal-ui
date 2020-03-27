/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DSlider } from "./d-slider";
import { DSliderTrackVertical } from "./d-slider-track-vertical";
var DSliderVertical = /** @class */ (function (_super) {
    __extends(DSliderVertical, _super);
    function DSliderVertical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DSliderVertical.prototype.newTrack = function (options) {
        return new DSliderTrackVertical(options && options.track);
    };
    DSliderVertical.prototype.newTrackSelected = function (options) {
        return new DSliderTrackVertical(options && options.track);
    };
    DSliderVertical.prototype.toLabelMinOptions = function (options) {
        options = _super.prototype.toLabelMinOptions.call(this, options);
        if (options.x == null) {
            options.x = function (p, s) { return -s; };
        }
        if (options.y == null) {
            options.y = function (p, s) { return p - s * 0.5; };
        }
        var text = options.text = options.text || {};
        var textAlign = text.align = text.align || {};
        if (textAlign.horizontal == null) {
            textAlign.horizontal = DAlignHorizontal.RIGHT;
        }
        return options;
    };
    DSliderVertical.prototype.toLabelMaxOptions = function (options) {
        options = _super.prototype.toLabelMaxOptions.call(this, options);
        if (options.x == null) {
            options.x = function (p, s) { return -s; };
        }
        if (options.y == null) {
            options.y = function (p, s) { return -s * 0.5; };
        }
        var text = options.text = options.text || {};
        var textAlign = text.align = text.align || {};
        if (textAlign.horizontal == null) {
            textAlign.horizontal = DAlignHorizontal.RIGHT;
        }
        return options;
    };
    DSliderVertical.prototype.onPick = function (global) {
        var point = new Point(0, 0);
        this.toLocal(global, undefined, point);
        var height = this.height;
        var y = Math.max(0, Math.min(height, point.y));
        this._ratioValue = (height - y) / height;
        this.moveThumbPosition(y);
    };
    DSliderVertical.prototype.onValuesChanged = function () {
        var min = this._min.value;
        var max = this._max.value;
        var value = this._value.value;
        this._ratioValue = (value - min) / (max - min);
        var y = this.height * (1 - this._ratioValue);
        this.moveThumbPosition(y);
    };
    DSliderVertical.prototype.moveThumbPosition = function (y) {
        var thumb = this._thumb;
        thumb.y = y - thumb.height * 0.5;
        var trackSelected = this._trackSelected;
        trackSelected.y = y;
        trackSelected.height = this.height - y;
        var value = this._value;
        value.y = y - value.height - this.getValueMargin();
        this.updateValue();
    };
    DSliderVertical.prototype.getType = function () {
        return "DSliderVertical";
    };
    return DSliderVertical;
}(DSlider));
export { DSliderVertical };
//# sourceMappingURL=d-slider-vertical.js.map