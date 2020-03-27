/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DPickerColorGradientData } from "../../d-picker-color-gradient-data";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButton } from "./d-theme-dark-button";
// Material Design icons by Google.
// Apache license version 2.0.
DThemeDarkAtlas.add("button_color_gradient_sample", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#fff\"/>" +
    "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" " +
    "fill=\"#eee\" />" +
    "</g>");
var formatter = function () {
    return "";
};
var DThemeDarkButtonColorGradient = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonColorGradient, _super);
    function DThemeDarkButtonColorGradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkButtonColorGradient.prototype.getViewBaseTexture = function () {
        return DThemeDarkAtlas.mappings.button_color_gradient_sample;
    };
    DThemeDarkButtonColorGradient.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeDarkButtonColorGradient.prototype.newTextValue = function () {
        return new DPickerColorGradientData();
    };
    return DThemeDarkButtonColorGradient;
}(DThemeDarkButton));
export { DThemeDarkButtonColorGradient };
//# sourceMappingURL=d-theme-dark-button-color-gradient.js.map