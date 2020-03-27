/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButton } from "./d-theme-dark-button";
// Material Design icons by Google.
// Apache license version 2.0.
DThemeDarkAtlas.add("button_color_sample", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#fff\"/>" +
    "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" " +
    "fill=\"#eee\" />" +
    "</g>");
var formatter = function (colorAndAlpha) {
    return "#" + UtilRgb.toCode(colorAndAlpha.color) + " A" + colorAndAlpha.alpha.toFixed(2);
};
var DThemeDarkButtonColor = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonColor, _super);
    function DThemeDarkButtonColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkButtonColor.prototype.getImageTintColor = function (state) {
        return null;
    };
    DThemeDarkButtonColor.prototype.getImageSource = function (state) {
        return DThemeDarkAtlas.mappings.button_color_sample;
    };
    DThemeDarkButtonColor.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeDarkButtonColor.prototype.newTextValue = function () {
        return {
            color: 0xDEDEDE,
            alpha: 1
        };
    };
    return DThemeDarkButtonColor;
}(DThemeDarkButton));
export { DThemeDarkButtonColor };
//# sourceMappingURL=d-theme-dark-button-color.js.map