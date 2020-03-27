/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeWhiteButtonRadio } from "./d-theme-white-button-radio";
var DThemeWhiteButtonRadioRight = /** @class */ (function (_super) {
    __extends(DThemeWhiteButtonRadioRight, _super);
    function DThemeWhiteButtonRadioRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteButtonRadioRight.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeWhiteButtonRadioRight.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeWhiteButtonRadioRight.prototype.getImageMarginHorizontal = function () {
        return 0;
    };
    DThemeWhiteButtonRadioRight.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    return DThemeWhiteButtonRadioRight;
}(DThemeWhiteButtonRadio));
export { DThemeWhiteButtonRadioRight };
//# sourceMappingURL=d-theme-white-button-radio-right.js.map