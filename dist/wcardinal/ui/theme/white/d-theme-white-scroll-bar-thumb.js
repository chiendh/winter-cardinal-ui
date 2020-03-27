/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
var DThemeWhiteScrollBarThumb = /** @class */ (function (_super) {
    __extends(DThemeWhiteScrollBarThumb, _super);
    function DThemeWhiteScrollBarThumb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = UtilRgb.darken(DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, 0.25);
        return _this;
    }
    DThemeWhiteScrollBarThumb.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isHovered(state) || DBaseStates.isDragging(state)) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        else {
            return this.COLOR;
        }
    };
    DThemeWhiteScrollBarThumb.prototype.getBackgroundAlpha = function (state) {
        if (DBaseStates.isHovered(state) || DBaseStates.isDragging(state)) {
            return 1.0;
        }
        else {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
        }
    };
    DThemeWhiteScrollBarThumb.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteScrollBarThumb.prototype.getBorderAlpha = function (state) {
        return 0;
    };
    DThemeWhiteScrollBarThumb.prototype.getBorderWidth = function (state) {
        return 1;
    };
    DThemeWhiteScrollBarThumb.prototype.getWidth = function () {
        return 13;
    };
    DThemeWhiteScrollBarThumb.prototype.getHeight = function () {
        return 13;
    };
    DThemeWhiteScrollBarThumb.prototype.getMinimumSize = function () {
        return 16;
    };
    return DThemeWhiteScrollBarThumb;
}(DThemeWhiteBase));
export { DThemeWhiteScrollBarThumb };
//# sourceMappingURL=d-theme-white-scroll-bar-thumb.js.map