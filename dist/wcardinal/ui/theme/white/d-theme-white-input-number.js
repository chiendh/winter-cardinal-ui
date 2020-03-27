/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeWhiteInput } from "./d-theme-white-input";
var DThemeWhiteInputNumber = /** @class */ (function (_super) {
    __extends(DThemeWhiteInputNumber, _super);
    function DThemeWhiteInputNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteInputNumber.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeWhiteInputNumber.prototype.getStep = function () {
        return 1;
    };
    DThemeWhiteInputNumber.prototype.getMin = function () {
        return null;
    };
    DThemeWhiteInputNumber.prototype.getMax = function () {
        return null;
    };
    DThemeWhiteInputNumber.prototype.newTextValue = function () {
        return 0;
    };
    DThemeWhiteInputNumber.prototype.getTextValue = function (state) {
        return 0;
    };
    return DThemeWhiteInputNumber;
}(DThemeWhiteInput));
export { DThemeWhiteInputNumber };
//# sourceMappingURL=d-theme-white-input-number.js.map