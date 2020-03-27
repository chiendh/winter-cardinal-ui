/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DScrollBar } from "./d-scroll-bar";
import { DScrollBarThumbVertocal } from "./d-scroll-bar-thumb-vertical";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DScrollBarVertical = /** @class */ (function (_super) {
    __extends(DScrollBarVertical, _super);
    function DScrollBarVertical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DScrollBarVertical.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.on(UtilPointerEvent.down, function (e) {
            if (e.target === _this) {
                var height = _this.height;
                if (0 < height) {
                    var size = _this._end - _this._start;
                    var position = e.data.getLocalPosition(_this);
                    var newStart = Math.min(1 - size, Math.max(0, position.y / height - size * 0.5));
                    if (_this._start !== newStart) {
                        _this.emit("regionmove", newStart, _this);
                    }
                }
                e.stopPropagation();
            }
        });
        this._thumb.on("regionmove", function (y) {
            var height = _this.height;
            if (0 < height) {
                var size = _this._end - _this._start;
                var newStart = Math.min(1 - size, Math.max(0, y / height));
                if (_this._start !== newStart) {
                    _this.emit("regionmove", newStart, _this);
                }
            }
        });
    };
    DScrollBarVertical.prototype.createThumb = function (options) {
        return new DScrollBarThumbVertocal(options);
    };
    DScrollBarVertical.prototype.onRegionChange = function () {
        var thumb = this._thumb;
        var width = this.width;
        var height = this.height;
        var thumbMinimumSize = Math.min(height * 0.5, thumb.getMinimumSize());
        var space = height - thumbMinimumSize;
        var barStart = space * this._start;
        var barSize = space * this._end + thumbMinimumSize - barStart;
        thumb.position.set(0, barStart);
        thumb.resize(width, barSize);
        _super.prototype.onRegionChange.call(this);
    };
    return DScrollBarVertical;
}(DScrollBar));
export { DScrollBarVertical };
//# sourceMappingURL=d-scroll-bar-vertical.js.map