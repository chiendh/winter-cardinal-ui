/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteInputNumber } from "./d-theme-white-input-number";
var editingUnformatter = function (text) {
    return parseInt(text, 10);
};
var DThemeWhiteInputInteger = /** @class */ (function (_super) {
    __extends(DThemeWhiteInputInteger, _super);
    function DThemeWhiteInputInteger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteInputInteger.prototype.getEditingUnformatter = function () {
        return editingUnformatter;
    };
    return DThemeWhiteInputInteger;
}(DThemeWhiteInputNumber));
export { DThemeWhiteInputInteger };
//# sourceMappingURL=d-theme-white-input-integer.js.map