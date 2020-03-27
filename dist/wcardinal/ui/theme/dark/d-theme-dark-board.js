/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkBoard = /** @class */ (function (_super) {
    __extends(DThemeDarkBoard, _super);
    function DThemeDarkBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x2C2C2C;
        return _this;
    }
    DThemeDarkBoard.prototype.getBackgroundColor = function () {
        return this.COLOR;
    };
    DThemeDarkBoard.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkBoard.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeDarkBoard.prototype.getPaddingLeft = function () {
        return 16;
    };
    DThemeDarkBoard.prototype.getPaddingTop = function () {
        return 16;
    };
    DThemeDarkBoard.prototype.getPaddingRight = function () {
        return 16;
    };
    DThemeDarkBoard.prototype.getPaddingBottom = function () {
        return 16;
    };
    DThemeDarkBoard.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkBoard;
}(DThemeDarkBase));
export { DThemeDarkBoard };
//# sourceMappingURL=d-theme-dark-board.js.map