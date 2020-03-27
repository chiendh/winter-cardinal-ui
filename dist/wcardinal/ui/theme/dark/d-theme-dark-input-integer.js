/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkInputNumber } from "./d-theme-dark-input-number";
var editingUnformatter = function (text) {
    return parseInt(text, 10);
};
var DThemeDarkInputInteger = /** @class */ (function (_super) {
    __extends(DThemeDarkInputInteger, _super);
    function DThemeDarkInputInteger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkInputInteger.prototype.getEditingUnformatter = function () {
        return editingUnformatter;
    };
    return DThemeDarkInputInteger;
}(DThemeDarkInputNumber));
export { DThemeDarkInputInteger };
//# sourceMappingURL=d-theme-dark-input-integer.js.map