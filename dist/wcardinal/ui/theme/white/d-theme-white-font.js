/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBaseStates } from "../../d-base-states";
var DThemeWhiteFont = /** @class */ (function () {
    function DThemeWhiteFont() {
    }
    DThemeWhiteFont.prototype.getFontFamilly = function () {
        return "ProximaNova,-apple-system,Meiryo,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif";
    };
    DThemeWhiteFont.prototype.getFontSize = function () {
        return 14;
    };
    DThemeWhiteFont.prototype.getColor = function (state) {
        return DThemeWhiteFont.getColor(state);
    };
    DThemeWhiteFont.prototype.getFontWeight = function () {
        return "normal";
    };
    DThemeWhiteFont.prototype.getFontStyle = function () {
        return "normal";
    };
    DThemeWhiteFont.prototype.getFontVariant = function () {
        return "normal";
    };
    DThemeWhiteFont.prototype.getAlpha = function (state) {
        return DThemeWhiteFont.getAlpha(state);
    };
    DThemeWhiteFont.prototype.getLineHeight = function () {
        return 30;
    };
    DThemeWhiteFont.getColor = function (state) {
        return 0x5f5f5f;
    };
    DThemeWhiteFont.getAlpha = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return 0.5;
        }
        else {
            return 1.0;
        }
    };
    return DThemeWhiteFont;
}());
export { DThemeWhiteFont };
//# sourceMappingURL=d-theme-white-font.js.map