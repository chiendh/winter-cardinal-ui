/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";
var DThemeDarkSliderLabel = /** @class */ (function (_super) {
    __extends(DThemeDarkSliderLabel, _super);
    function DThemeDarkSliderLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkSliderLabel.prototype.getHeight = function () {
        return 15;
    };
    DThemeDarkSliderLabel.prototype.getWidth = function () {
        return 30;
    };
    DThemeDarkSliderLabel.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeDarkSliderLabel.prototype.getTextAlignVertical = function () {
        return DAlignVertical.MIDDLE;
    };
    return DThemeDarkSliderLabel;
}(DThemeDarkTextBase));
export { DThemeDarkSliderLabel };
//# sourceMappingURL=d-theme-dark-slider-label.js.map