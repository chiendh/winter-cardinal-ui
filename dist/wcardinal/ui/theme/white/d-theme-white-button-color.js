/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButton } from "./d-theme-white-button";
// Material Design icons by Google.
// Apache license version 2.0.
DThemeWhiteAtlas.add("button_color_sample", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#fff\"/>" +
    "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" " +
    "fill=\"#eee\" />" +
    "</g>");
var formatter = function (colorAndAlpha) {
    return "#" + UtilRgb.toCode(colorAndAlpha.color) + " A" + colorAndAlpha.alpha.toFixed(2);
};
var DThemeWhiteButtonColor = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonColor, _super);
    function DThemeWhiteButtonColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonColor.prototype.getImageTintColor = function (state) {
        return null;
    };
    DThemeWhiteButtonColor.prototype.getImageSource = function (state) {
        return DThemeWhiteAtlas.mappings.button_color_sample;
    };
    DThemeWhiteButtonColor.prototype.getTextFormatter = function () {
        return formatter;
    };
    DThemeWhiteButtonColor.prototype.newTextValue = function () {
        return {
            color: 0xffffff,
            alpha: 1
        };
    };
    return DThemeWhiteButtonColor;
}(DThemeWhiteButton));
export { DThemeWhiteButtonColor };
//# sourceMappingURL=d-theme-white-button-color.js.map