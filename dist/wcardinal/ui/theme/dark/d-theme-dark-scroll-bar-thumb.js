/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkBase } from "./d-theme-dark-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
var DThemeDarkScrollBarThumb = /** @class */ (function (_super) {
    __extends(DThemeDarkScrollBarThumb, _super);
    function DThemeDarkScrollBarThumb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x646464;
        return _this;
    }
    DThemeDarkScrollBarThumb.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isHovered(state) || DBaseStates.isDragging(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        return this.COLOR;
    };
    DThemeDarkScrollBarThumb.prototype.getBackgroundAlpha = function (state) {
        if (DBaseStates.isHovered(state) || DBaseStates.isDragging(state)) {
            return 1.0;
        }
        return 0.2;
    };
    DThemeDarkScrollBarThumb.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkScrollBarThumb.prototype.getBorderAlpha = function (state) {
        return 0;
    };
    DThemeDarkScrollBarThumb.prototype.getBorderWidth = function (state) {
        return 1;
    };
    DThemeDarkScrollBarThumb.prototype.getWidth = function () {
        return 13;
    };
    DThemeDarkScrollBarThumb.prototype.getHeight = function () {
        return 13;
    };
    DThemeDarkScrollBarThumb.prototype.getMinimumSize = function () {
        return 16;
    };
    return DThemeDarkScrollBarThumb;
}(DThemeDarkBase));
export { DThemeDarkScrollBarThumb };
//# sourceMappingURL=d-theme-dark-scroll-bar-thumb.js.map