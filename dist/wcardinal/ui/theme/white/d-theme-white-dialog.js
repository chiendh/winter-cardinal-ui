/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DDialogCloseOn } from "../../d-dialog-close-on";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
var DThemeWhiteDialog = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialog, _super);
    function DThemeWhiteDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialog.prototype.closeOn = function () {
        return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
    };
    DThemeWhiteDialog.prototype.getBackgroundColor = function () {
        return DThemeWhiteConstants.BACKGROUND_COLOR;
    };
    DThemeWhiteDialog.prototype.getBorderColor = function (state) {
        return 0xfafafa;
    };
    DThemeWhiteDialog.prototype.getPaddingLeft = function () {
        return 16;
    };
    DThemeWhiteDialog.prototype.getPaddingTop = function () {
        return 16;
    };
    DThemeWhiteDialog.prototype.getPaddingRight = function () {
        return 16;
    };
    DThemeWhiteDialog.prototype.getPaddingBottom = function () {
        return 16;
    };
    DThemeWhiteDialog.prototype.getX = function () {
        return "center";
    };
    DThemeWhiteDialog.prototype.getY = function () {
        return "center";
    };
    DThemeWhiteDialog.prototype.getWidth = function () {
        return 400;
    };
    DThemeWhiteDialog.prototype.getHeight = function () {
        return "auto";
    };
    DThemeWhiteDialog.prototype.getShadow = function () {
        return this.newShadow();
    };
    DThemeWhiteDialog.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteDialog;
}(DThemeWhiteBase));
export { DThemeWhiteDialog };
//# sourceMappingURL=d-theme-white-dialog.js.map