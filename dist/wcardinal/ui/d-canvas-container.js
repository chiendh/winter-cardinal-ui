/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DViewImpl } from "./d-view-impl";
var isOverflowMaskEnabled = function (theme, options) {
    if (options && options.mask != null) {
        return options.mask;
    }
    return theme.isOverflowMaskEnabled();
};
var DCanvasContainer = /** @class */ (function (_super) {
    __extends(DCanvasContainer, _super);
    function DCanvasContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DCanvasContainer.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this._canvas = null;
        var theme = this.theme;
        this._view = new DViewImpl(this, function () { return _this._canvas; }, options && options.view);
        // Canvas
        this.canvas = (options && options.canvas ? options.canvas : null);
        // Overflow mask
        this._overflowMask = null;
        if (isOverflowMaskEnabled(theme, options)) {
            this.mask = this.getOrCreateOverflowMask();
        }
    };
    DCanvasContainer.prototype.getType = function () {
        return "DCanvasContainer";
    };
    DCanvasContainer.prototype.onResize = function (newWidth, newHeight, oldWidth, oldHeight) {
        _super.prototype.onResize.call(this, newWidth, newHeight, oldWidth, oldHeight);
        this.updateContentSize(newWidth, newHeight, oldWidth, oldHeight);
    };
    Object.defineProperty(DCanvasContainer.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (canvas) {
            var previous = this._canvas;
            if (previous != null) {
                this._canvas = null;
                this.removeChild(previous);
                this.emit("unset", previous, this);
                previous.destroy();
            }
            this._canvas = canvas;
            if (canvas != null) {
                this.addChild(canvas);
                this._view.reset(0);
                this.emit("set", canvas, this);
            }
            else {
                DApplications.update(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DCanvasContainer.prototype.getOrCreateOverflowMask = function () {
        if (this._overflowMask == null) {
            this._overflowMask = new DBaseOverflowMask(this);
            this.addReflowable(this._overflowMask);
            this.toDirty();
        }
        return this._overflowMask;
    };
    DCanvasContainer.prototype.updateContentSize = function (newWidth, newHeight, oldWidth, oldHeight) {
        var canvas = this._canvas;
        if (canvas != null) {
            var canvasX = canvas.x + (newWidth - oldWidth) * 0.5;
            var canvasY = canvas.y + (newHeight - oldHeight) * 0.5;
            canvas.position.set(canvasX, canvasY);
        }
    };
    Object.defineProperty(DCanvasContainer.prototype, "view", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    DCanvasContainer.prototype.onWheel = function (e, deltas, global) {
        var vresult = this._view.onWheel(e, deltas, global);
        var sresult = _super.prototype.onWheel.call(this, e, deltas, global);
        return vresult || sresult;
    };
    DCanvasContainer.prototype.onDblClick = function (e, interactionManager) {
        var vresult = this._view.onDblClick(e, interactionManager);
        var sresult = _super.prototype.onDblClick.call(this, e, interactionManager);
        return vresult || sresult;
    };
    DCanvasContainer.prototype.onDown = function (e) {
        this._view.onDown(e);
        _super.prototype.onDown.call(this, e);
    };
    DCanvasContainer.prototype.destroy = function () {
        // Overflow mask
        var overflowMask = this._overflowMask;
        if (overflowMask != null) {
            this._overflowMask = null;
            overflowMask.destroy();
        }
        this.mask = null;
        _super.prototype.destroy.call(this);
    };
    return DCanvasContainer;
}(DBase));
export { DCanvasContainer };
//# sourceMappingURL=d-canvas-container.js.map