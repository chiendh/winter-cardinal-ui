/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerColorGradientData } from "../../d-picker-color-gradient-data";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButton } from "./d-theme-white-button";
// Material Design icons by Google.
// Apache license version 2.0.
DThemeWhiteAtlas.add("button_color_gradient_sample", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#fff\"/>" +
    "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" " +
    "fill=\"#eee\" />" +
    "</g>");
var formatter = function () {
    return "";
};
var DThemeWhiteButtonColorGradient = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonColorGradient, _super);
    function DThemeWhiteButtonColorGradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonColorGradient.prototype.getViewBaseTexture = function () {
        return DThemeWhiteAtlas.mappings.button_color_gradient_sample;
    };
    DThemeWhiteButtonColorGradient.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeWhiteButtonColorGradient.prototype.newTextValue = function () {
        return new DPickerColorGradientData();
    };
    return DThemeWhiteButtonColorGradient;
}(DThemeWhiteButton));
export { DThemeWhiteButtonColorGradient };
//# sourceMappingURL=d-theme-white-button-color-gradient.js.map