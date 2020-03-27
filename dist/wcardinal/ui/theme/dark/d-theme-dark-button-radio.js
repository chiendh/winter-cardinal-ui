/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkFont } from "./d-theme-dark-font";
// Material Design icons by Google.
// Apache license version 2.0.
DThemeDarkAtlas.add("button_radio_mark_on", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48" +
    " 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8" +
    " 8 3.58 8 8-3.58 8-8 8z\" fill=\"#fff\" />" +
    "</g>");
DThemeDarkAtlas.add("button_radio_mark_off", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42" +
    " 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\" fill=\"#fff\" />" +
    "</g>");
var DThemeDarkButtonRadio = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonRadio, _super);
    function DThemeDarkButtonRadio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x131313;
        return _this;
    }
    DThemeDarkButtonRadio.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return UtilRgb.blend(0x000000, 0xFFFFFF, DThemeDarkConstants.DISABLED_ALPHA);
        }
        if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return UtilRgb.blend(this.COLOR, this.getColor(DBaseState.HOVERED), DThemeDarkConstants.FOCUSED_ALPHA);
        }
        if (DBaseStates.isActive(state)) {
            return UtilRgb.blend(this.COLOR, this.getColor(DBaseState.ACTIVE), DThemeDarkConstants.ACTIVE_ALPHA);
        }
        return null;
    };
    DThemeDarkButtonRadio.prototype.getImageTintColor = function (state) {
        if (DBaseStates.isDisabled(state) || DBaseStates.isReadOnly(state) || !DBaseStates.isActive(state)) {
            return DThemeDarkFont.getColor(state);
        }
        return DThemeDarkConstants.HIGHLIGHT_COLOR;
    };
    DThemeDarkButtonRadio.prototype.isToggle = function () {
        return true;
    };
    DThemeDarkButtonRadio.prototype.getImageSource = function (state) {
        if (DBaseStates.isActive(state)) {
            return DThemeDarkAtlas.mappings.button_radio_mark_on;
        }
        else {
            return DThemeDarkAtlas.mappings.button_radio_mark_off;
        }
    };
    return DThemeDarkButtonRadio;
}(DThemeDarkButtonAmbient));
export { DThemeDarkButtonRadio };
//# sourceMappingURL=d-theme-dark-button-radio.js.map