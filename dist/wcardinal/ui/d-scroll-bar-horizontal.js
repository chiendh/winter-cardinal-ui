/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DScrollBar } from "./d-scroll-bar";
import { DScrollBarThumbHorizontal } from "./d-scroll-bar-thumb-horizontal";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DScrollBarHorizontal = /** @class */ (function (_super) {
    __extends(DScrollBarHorizontal, _super);
    function DScrollBarHorizontal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DScrollBarHorizontal.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.on(UtilPointerEvent.down, function (e) {
            if (e.target === _this) {
                var width = _this.width;
                if (0 < width) {
                    var size = _this._end - _this._start;
                    var position = e.data.getLocalPosition(_this);
                    var newStart = Math.min(1 - size, Math.max(0, position.x / width - size * 0.5));
                    if (_this._start !== newStart) {
                        _this.emit("regionmove", newStart, _this);
                    }
                }
            }
        });
        this._thumb.on("regionmove", function (x) {
            var width = _this.width;
            if (0 < width) {
                var size = _this._end - _this._start;
                var newStart = Math.min(1 - size, Math.max(0, x / width));
                if (_this._start !== newStart) {
                    _this.emit("regionmove", newStart, _this);
                }
            }
        });
    };
    DScrollBarHorizontal.prototype.createThumb = function (options) {
        return new DScrollBarThumbHorizontal(options);
    };
    DScrollBarHorizontal.prototype.onRegionChange = function () {
        var thumb = this._thumb;
        var width = this.width;
        var height = this.height;
        var thumbMinimumSize = Math.min(width * 0.5, thumb.getMinimumSize());
        var space = width - thumbMinimumSize;
        var barStart = space * this._start;
        var barSize = space * this._end + thumbMinimumSize - barStart;
        thumb.position.set(barStart, 0);
        thumb.resize(barSize, height);
        _super.prototype.onRegionChange.call(this);
    };
    return DScrollBarHorizontal;
}(DScrollBar));
export { DScrollBarHorizontal };
//# sourceMappingURL=d-scroll-bar-horizontal.js.map