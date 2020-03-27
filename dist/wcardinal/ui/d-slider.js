/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DSliderLabel } from "./d-slider-label";
import { DSliderThumb } from "./d-slider-thumb";
import { DSliderValue } from "./d-slider-value";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DSlider = /** @class */ (function (_super) {
    __extends(DSlider, _super);
    function DSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DSlider.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._ratioValue = 0;
        this._track = this.newTrack(options);
        this.addChild(this._track);
        this._trackSelected = this.newTrackSelected(options);
        this._trackSelected.setActive(true);
        this.addChild(this._trackSelected);
        this._thumb = this.newThumb(options);
        this.addChild(this._thumb);
        this._min = this.newLabelMin(options);
        this.addChild(this._min);
        this._max = this.newLabelMax(options);
        this.addChild(this._max);
        this._value = this.newValue(options);
        this.addChild(this._value);
        // Event listeners
        this._track.on(UtilPointerEvent.down, function (e) {
            _this._value.visible = true && !_this.isDisabled();
            _this.onTrackDown(e.data.global);
        });
        this._trackSelected.on(UtilPointerEvent.down, function (e) {
            _this._value.visible = true && !_this.isDisabled();
            _this.onTrackSelectedDown(e.data.global);
        });
        this._onTrackUpBound = function (e) {
            _this.onTrackUpBound(e);
            _this._value.visible = false;
        };
        this._onTrackSelectedUpBound = function (e) {
            _this.onTrackSelectedUpBound(e);
            _this._value.visible = false;
        };
        this._thumb.on(UtilPointerEvent.down, function (e) {
            _this._value.visible = true;
            _this.onThumbDown(e);
        });
        this._onThumbMoveBound = function (e) {
            _this.onThumbMove(e);
        };
        this._onThumbUpBound = function (e) {
            _this.onThumbUp(e);
            _this._value.visible = false;
        };
        //
        this.onValuesChanged();
    };
    DSlider.prototype.newThumb = function (options) {
        return new DSliderThumb(options && options.thumb);
    };
    DSlider.prototype.newValue = function (options) {
        return new DSliderValue(this.toValueOptions(options && options.value));
    };
    DSlider.prototype.toValueOptions = function (options) {
        options = options || {};
        if (options.value == null) {
            options.value = 0;
        }
        var text = options.text = options.text || {};
        if (text.value == null) {
            text.value = options.value;
        }
        if (options.visible == null) {
            options.visible = false;
        }
        return options;
    };
    DSlider.prototype.newLabelMin = function (options) {
        return new DSliderLabel(this.toLabelMinOptions(options && options.min));
    };
    DSlider.prototype.toLabelMinOptions = function (options) {
        options = options || {};
        if (options.value == null) {
            options.value = 0;
        }
        var text = options.text = options.text || {};
        if (text.value == null) {
            text.value = "" + options.value;
        }
        return options;
    };
    DSlider.prototype.newLabelMax = function (options) {
        return new DSliderLabel(this.toLabelMaxOptions(options && options.max));
    };
    DSlider.prototype.toLabelMaxOptions = function (options) {
        options = options || {};
        if (options.value == null) {
            options.value = 1;
        }
        var text = options.text = options.text || {};
        if (text.value == null) {
            text.value = "" + options.value;
        }
        return options;
    };
    DSlider.prototype.getValueMargin = function () {
        return 14;
    };
    DSlider.prototype.onTrackDown = function (global) {
        if (this.isDisabled()) {
            return;
        }
        var layer = DApplications.getLayer(this);
        if (layer) {
            var interactionManager = layer.renderer.plugins.interaction;
            this._interactionManager = interactionManager;
            interactionManager.on(UtilPointerEvent.up, this._onTrackUpBound);
        }
        this.onPick(global);
    };
    DSlider.prototype.onTrackSelectedDown = function (global) {
        if (this.isDisabled()) {
            return;
        }
        var layer = DApplications.getLayer(this);
        if (layer) {
            var interactionManager = layer.renderer.plugins.interaction;
            this._interactionManager = interactionManager;
            interactionManager.on(UtilPointerEvent.up, this._onTrackSelectedUpBound);
        }
        this.onPick(global);
    };
    DSlider.prototype.onTrackUpBound = function (e) {
        var interactionManager = this._interactionManager;
        if (interactionManager) {
            this._interactionManager = undefined;
            interactionManager.off(UtilPointerEvent.up, this._onTrackUpBound);
        }
    };
    DSlider.prototype.onTrackSelectedUpBound = function (e) {
        var interactionManager = this._interactionManager;
        if (interactionManager) {
            this._interactionManager = undefined;
            interactionManager.off(UtilPointerEvent.up, this._onTrackSelectedUpBound);
        }
    };
    DSlider.prototype.onThumbMove = function (e) {
        if (this.isDisabled()) {
            return;
        }
        this.onPick(e.data.global);
    };
    DSlider.prototype.onThumbDown = function (e) {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var interactionManager = layer.renderer.plugins.interaction;
            this._interactionManager = interactionManager;
            interactionManager.on(UtilPointerEvent.move, this._onThumbMoveBound);
            interactionManager.on(UtilPointerEvent.up, this._onThumbUpBound);
        }
    };
    DSlider.prototype.onThumbUp = function (e) {
        var interactionManager = this._interactionManager;
        if (interactionManager) {
            this._interactionManager = undefined;
            interactionManager.off(UtilPointerEvent.move, this._onThumbMoveBound);
            interactionManager.off(UtilPointerEvent.up, this._onThumbUpBound);
        }
    };
    DSlider.prototype.updateValue = function () {
        var min = this._min.value;
        var max = this._max.value;
        var value = this._value;
        value.value = value.rounder(min + this._ratioValue * (max - min));
        value.text = value.value;
    };
    DSlider.prototype.onResize = function (newWidth, newHeight, oldWidth, oldHeight) {
        _super.prototype.onResize.call(this, newWidth, newHeight, oldWidth, oldHeight);
        this.onValuesChanged();
    };
    Object.defineProperty(DSlider.prototype, "value", {
        /**
         * Gets current value of slider
         */
        get: function () {
            return this._value.value;
        },
        /**
         * Sets value for slider
         * - New value will be applied
         * - UI components will be changed arcording to new value
         */
        set: function (value) {
            value = Math.max(this._min.value, Math.min(this._max.value, value));
            // Adjust if value is new
            if (this._value.value !== value) {
                this._value.value = value;
                this.onValuesChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DSlider.prototype, "min", {
        /**
         * Gets min value of slider
         */
        get: function () {
            return this._min.value;
        },
        /**
         * Sets min value for slider
         * - New min value will be applied
         * - UI components will be changed arcording to new value
         */
        set: function (newMin) {
            var min = this._min;
            newMin = Math.min(this._max.value, newMin);
            if (min.value !== newMin) {
                var value = this._value;
                min.text = min.value = newMin;
                value.value = Math.max(newMin, value.value);
                this.onValuesChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DSlider.prototype, "max", {
        /**
         * Gets max value of slider
         */
        get: function () {
            return this._max.value;
        },
        /**
         * Sets max value for slider
         * - New max value will be applied
         * - UI components will be changed arcording to new value
         */
        set: function (newMax) {
            var max = this._max;
            newMax = Math.max(this._min.value, newMax);
            if (max.value !== newMax) {
                var value = this._value;
                max.text = max.value = newMax;
                value.value = Math.min(newMax, value.value);
                this.onValuesChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    DSlider.prototype.getType = function () {
        return "DSlider";
    };
    return DSlider;
}(DBase));
export { DSlider };
//# sourceMappingURL=d-slider.js.map