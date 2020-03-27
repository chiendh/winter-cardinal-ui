/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DDragMode } from "../../d-drag-mode";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
var DThemeWhitePane = /** @class */ (function (_super) {
    __extends(DThemeWhitePane, _super);
    function DThemeWhitePane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePane.prototype.isOverflowMaskEnabled = function () {
        return true;
    };
    DThemeWhitePane.prototype.getBackgroundColor = function (state) {
        return DThemeWhiteConstants.BACKGROUND_COLOR;
    };
    DThemeWhitePane.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    DThemeWhitePane.prototype.getWheelSpeed = function () {
        return 2.24;
    };
    DThemeWhitePane.prototype.getDragMode = function () {
        return DDragMode.TOUCH;
    };
    return DThemeWhitePane;
}(DThemeWhiteBase));
export { DThemeWhitePane };
//# sourceMappingURL=d-theme-white-pane.js.map