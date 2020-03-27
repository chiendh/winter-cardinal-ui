/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { toString } from "../../util/to-string";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkTextBase = /** @class */ (function (_super) {
    __extends(DThemeDarkTextBase, _super);
    function DThemeDarkTextBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkTextBase.prototype.getTextAlignVertical = function () {
        return DAlignVertical.MIDDLE;
    };
    DThemeDarkTextBase.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeDarkTextBase.prototype.isOverflowMaskEnabled = function () {
        return false;
    };
    DThemeDarkTextBase.prototype.isTextDynamic = function () {
        return true;
    };
    DThemeDarkTextBase.prototype.getTextStyleClipping = function () {
        return true;
    };
    DThemeDarkTextBase.prototype.newTextValue = function () {
        return "";
    };
    DThemeDarkTextBase.prototype.getTextValue = function (state) {
        return "";
    };
    DThemeDarkTextBase.prototype.getTextFormatter = function () {
        return toString;
    };
    return DThemeDarkTextBase;
}(DThemeDarkBase));
export { DThemeDarkTextBase };
//# sourceMappingURL=d-theme-dark-text-base.js.map