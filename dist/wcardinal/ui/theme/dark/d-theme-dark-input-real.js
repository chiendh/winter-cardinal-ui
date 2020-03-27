/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkInputNumber } from "./d-theme-dark-input-number";
var editingUnformatter = function (text) {
    return parseFloat(text);
};
var DThemeDarkInputReal = /** @class */ (function (_super) {
    __extends(DThemeDarkInputReal, _super);
    function DThemeDarkInputReal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkInputReal.prototype.getStep = function () {
        return 0.1;
    };
    DThemeDarkInputReal.prototype.getEditingUnformatter = function () {
        return editingUnformatter;
    };
    return DThemeDarkInputReal;
}(DThemeDarkInputNumber));
export { DThemeDarkInputReal };
//# sourceMappingURL=d-theme-dark-input-real.js.map