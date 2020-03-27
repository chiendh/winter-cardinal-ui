/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteInputNumber } from "./d-theme-white-input-number";
var editingUnformatter = function (text) {
    return parseFloat(text);
};
var DThemeWhiteInputReal = /** @class */ (function (_super) {
    __extends(DThemeWhiteInputReal, _super);
    function DThemeWhiteInputReal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteInputReal.prototype.getStep = function () {
        return 0.1;
    };
    DThemeWhiteInputReal.prototype.getEditingUnformatter = function () {
        return editingUnformatter;
    };
    return DThemeWhiteInputReal;
}(DThemeWhiteInputNumber));
export { DThemeWhiteInputReal };
//# sourceMappingURL=d-theme-white-input-real.js.map