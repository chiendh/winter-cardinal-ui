/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeDarkButtonRadio } from "./d-theme-dark-button-radio";
var DThemeDarkButtonRadioRight = /** @class */ (function (_super) {
    __extends(DThemeDarkButtonRadioRight, _super);
    function DThemeDarkButtonRadioRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkButtonRadioRight.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeDarkButtonRadioRight.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkButtonRadioRight.prototype.getImageMarginHorizontal = function () {
        return 0;
    };
    DThemeDarkButtonRadioRight.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    return DThemeDarkButtonRadioRight;
}(DThemeDarkButtonRadio));
export { DThemeDarkButtonRadioRight };
//# sourceMappingURL=d-theme-dark-button-radio-right.js.map