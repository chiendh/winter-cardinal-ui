/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBaseStates } from "../../d-base-states";
var DThemeDarkFont = /** @class */ (function () {
    function DThemeDarkFont() {
    }
    DThemeDarkFont.prototype.getFontFamilly = function () {
        return "ProximaNova,-apple-system,Meiryo,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif";
    };
    DThemeDarkFont.prototype.getFontSize = function () {
        return 14;
    };
    DThemeDarkFont.prototype.getColor = function (state) {
        return DThemeDarkFont.getColor(state);
    };
    DThemeDarkFont.prototype.getFontWeight = function () {
        return "normal";
    };
    DThemeDarkFont.prototype.getFontStyle = function () {
        return "normal";
    };
    DThemeDarkFont.prototype.getFontVariant = function () {
        return "normal";
    };
    DThemeDarkFont.prototype.getAlpha = function (state) {
        return DThemeDarkFont.getAlpha(state);
    };
    DThemeDarkFont.prototype.getLineHeight = function () {
        return 30;
    };
    DThemeDarkFont.getColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0xFFFFFF;
        }
        return 0xDEDEDE;
    };
    DThemeDarkFont.getAlpha = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0.38;
        }
        return 1.0;
    };
    return DThemeDarkFont;
}());
export { DThemeDarkFont };
//# sourceMappingURL=d-theme-dark-font.js.map