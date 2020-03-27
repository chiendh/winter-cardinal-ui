/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteFont } from "./d-theme-white-font";
// Material Design icons by Google.
// Apache license version 2.0.
DThemeWhiteAtlas.add("button_check_mark_on", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89" +
    "-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\" fill=\"#fff\" />" +
    "</g>");
DThemeWhiteAtlas.add("button_check_mark_off", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" " +
    "fill=\"#fff\" />" +
    "</g>");
var DThemeWhiteButtonCheck = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonCheck, _super);
    function DThemeWhiteButtonCheck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.IMAGE_TINT_COLOR_FOCUSED = UtilRgb.darken(DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, 0.1);
        return _this;
    }
    DThemeWhiteButtonCheck.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
    };
    DThemeWhiteButtonCheck.prototype.getColor = function (state) {
        return DThemeWhiteFont.getColor(state);
    };
    DThemeWhiteButtonCheck.prototype.getBackgroundAlpha = function (state) {
        if (!DBaseStates.isDisabled(state)) {
            if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
            }
        }
        return 0;
    };
    DThemeWhiteButtonCheck.prototype.getImageTintColor = function (state) {
        if (DBaseStates.isDisabled(state) || DBaseStates.isReadOnly(state) || !DBaseStates.isActive(state)) {
            if (DBaseStates.isFocused(state)) {
                return this.IMAGE_TINT_COLOR_FOCUSED;
            }
            else {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
        }
        else {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
    };
    DThemeWhiteButtonCheck.prototype.isToggle = function () {
        return true;
    };
    DThemeWhiteButtonCheck.prototype.getImageSource = function (state) {
        if (DBaseStates.isActive(state)) {
            return DThemeWhiteAtlas.mappings.button_check_mark_on;
        }
        else {
            return DThemeWhiteAtlas.mappings.button_check_mark_off;
        }
    };
    return DThemeWhiteButtonCheck;
}(DThemeWhiteButtonAmbient));
export { DThemeWhiteButtonCheck };
//# sourceMappingURL=d-theme-white-button-check.js.map