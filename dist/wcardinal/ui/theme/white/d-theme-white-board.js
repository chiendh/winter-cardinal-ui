/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
var DThemeWhiteBoard = /** @class */ (function (_super) {
    __extends(DThemeWhiteBoard, _super);
    function DThemeWhiteBoard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteBoard.prototype.getBackgroundColor = function () {
        return DThemeWhiteConstants.BACKGROUND_COLOR;
    };
    DThemeWhiteBoard.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteBoard.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeWhiteBoard.prototype.getPaddingLeft = function () {
        return 16;
    };
    DThemeWhiteBoard.prototype.getPaddingTop = function () {
        return 16;
    };
    DThemeWhiteBoard.prototype.getPaddingRight = function () {
        return 16;
    };
    DThemeWhiteBoard.prototype.getPaddingBottom = function () {
        return 16;
    };
    DThemeWhiteBoard.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteBoard;
}(DThemeWhiteBase));
export { DThemeWhiteBoard };
//# sourceMappingURL=d-theme-white-board.js.map