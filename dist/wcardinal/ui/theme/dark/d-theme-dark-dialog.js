/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DDialogCloseOn } from "../../d-dialog-close-on";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkDialog = /** @class */ (function (_super) {
    __extends(DThemeDarkDialog, _super);
    function DThemeDarkDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialog.prototype.closeOn = function () {
        return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
    };
    DThemeDarkDialog.prototype.getBackgroundColor = function () {
        return 0x2E2E2E;
    };
    DThemeDarkDialog.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkDialog.prototype.getPaddingLeft = function () {
        return 16;
    };
    DThemeDarkDialog.prototype.getPaddingTop = function () {
        return 16;
    };
    DThemeDarkDialog.prototype.getPaddingRight = function () {
        return 16;
    };
    DThemeDarkDialog.prototype.getPaddingBottom = function () {
        return 16;
    };
    DThemeDarkDialog.prototype.getX = function () {
        return "center";
    };
    DThemeDarkDialog.prototype.getY = function () {
        return "center";
    };
    DThemeDarkDialog.prototype.getWidth = function () {
        return 400;
    };
    DThemeDarkDialog.prototype.getHeight = function () {
        return "auto";
    };
    DThemeDarkDialog.prototype.getShadow = function () {
        return this.newShadow();
    };
    DThemeDarkDialog.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkDialog;
}(DThemeDarkBase));
export { DThemeDarkDialog };
//# sourceMappingURL=d-theme-dark-dialog.js.map