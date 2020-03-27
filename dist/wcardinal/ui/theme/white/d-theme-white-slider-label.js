/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";
var DThemeWhiteSliderLabel = /** @class */ (function (_super) {
    __extends(DThemeWhiteSliderLabel, _super);
    function DThemeWhiteSliderLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteSliderLabel.prototype.getHeight = function () {
        return 15;
    };
    DThemeWhiteSliderLabel.prototype.getWidth = function () {
        return 30;
    };
    DThemeWhiteSliderLabel.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeWhiteSliderLabel.prototype.getTextAlignVertical = function () {
        return DAlignVertical.MIDDLE;
    };
    return DThemeWhiteSliderLabel;
}(DThemeWhiteTextBase));
export { DThemeWhiteSliderLabel };
//# sourceMappingURL=d-theme-white-slider-label.js.map