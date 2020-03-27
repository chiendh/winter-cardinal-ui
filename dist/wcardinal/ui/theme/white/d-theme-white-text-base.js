/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { toString } from "../../util/to-string";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteTextBase = /** @class */ (function (_super) {
    __extends(DThemeWhiteTextBase, _super);
    function DThemeWhiteTextBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteTextBase.prototype.getTextAlignVertical = function () {
        return DAlignVertical.MIDDLE;
    };
    DThemeWhiteTextBase.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeWhiteTextBase.prototype.isOverflowMaskEnabled = function () {
        return false;
    };
    DThemeWhiteTextBase.prototype.isTextDynamic = function () {
        return true;
    };
    DThemeWhiteTextBase.prototype.getTextStyleClipping = function () {
        return true;
    };
    DThemeWhiteTextBase.prototype.newTextValue = function () {
        return "";
    };
    DThemeWhiteTextBase.prototype.getTextValue = function (state) {
        return "";
    };
    DThemeWhiteTextBase.prototype.getTextFormatter = function () {
        return toString;
    };
    return DThemeWhiteTextBase;
}(DThemeWhiteBase));
export { DThemeWhiteTextBase };
//# sourceMappingURL=d-theme-white-text-base.js.map