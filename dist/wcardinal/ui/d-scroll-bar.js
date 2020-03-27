/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
var DScrollBar = /** @class */ (function (_super) {
    __extends(DScrollBar, _super);
    function DScrollBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DScrollBar.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this._start = 0;
        this._end = 1;
        var thumb = this._thumb = this.createThumb(options != null ? options.thumb : undefined);
        this.addChild(thumb);
        this.setState(DBaseState.UNFOCUSABLE, true);
    };
    Object.defineProperty(DScrollBar.prototype, "thumb", {
        get: function () {
            return this._thumb;
        },
        enumerable: true,
        configurable: true
    });
    DScrollBar.prototype.getType = function () {
        return "DScrollBar";
    };
    DScrollBar.prototype.setRegion = function (start, end, size) {
        if (size < 1) {
            start = 0;
            end = 1;
        }
        else {
            start = Math.max(0, Math.min(1, start / size));
            end = Math.max(start, Math.min(1, end / size));
        }
        if (this._start !== start || this._end !== end) {
            this._start = start;
            this._end = end;
            this.onRegionChange();
        }
    };
    DScrollBar.prototype.isRegionVisible = function () {
        return 0 < this._start || this._end < 1;
    };
    DScrollBar.prototype.onResize = function (newWidth, newHeight, oldWidth, oldHeight) {
        _super.prototype.onResize.call(this, newWidth, newHeight, oldWidth, oldHeight);
        this.onRegionChange();
    };
    DScrollBar.prototype.onRegionChange = function () {
        // DO NOTHING
    };
    DScrollBar.prototype.getRegionStart = function () {
        return this._start;
    };
    DScrollBar.prototype.getRegionEnd = function () {
        return this._end;
    };
    return DScrollBar;
}(DBase));
export { DScrollBar };
//# sourceMappingURL=d-scroll-bar.js.map