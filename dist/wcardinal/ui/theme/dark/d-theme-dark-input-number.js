/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeDarkInput } from "./d-theme-dark-input";
var DThemeDarkInputNumber = /** @class */ (function (_super) {
    __extends(DThemeDarkInputNumber, _super);
    function DThemeDarkInputNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkInputNumber.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeDarkInputNumber.prototype.getStep = function () {
        return 1;
    };
    DThemeDarkInputNumber.prototype.getMin = function () {
        return null;
    };
    DThemeDarkInputNumber.prototype.getMax = function () {
        return null;
    };
    DThemeDarkInputNumber.prototype.newTextValue = function () {
        return 0;
    };
    DThemeDarkInputNumber.prototype.getTextValue = function (state) {
        return 0;
    };
    return DThemeDarkInputNumber;
}(DThemeDarkInput));
export { DThemeDarkInputNumber };
//# sourceMappingURL=d-theme-dark-input-number.js.map