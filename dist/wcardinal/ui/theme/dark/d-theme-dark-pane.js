/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DDragMode } from "../../d-drag-mode";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkPane = /** @class */ (function (_super) {
    __extends(DThemeDarkPane, _super);
    function DThemeDarkPane() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x2E2E2E;
        return _this;
    }
    DThemeDarkPane.prototype.isOverflowMaskEnabled = function () {
        return true;
    };
    DThemeDarkPane.prototype.getBackgroundColor = function (state) {
        return this.COLOR;
    };
    DThemeDarkPane.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    DThemeDarkPane.prototype.getWheelSpeed = function () {
        return 2.24;
    };
    DThemeDarkPane.prototype.getDragMode = function () {
        return DDragMode.TOUCH;
    };
    return DThemeDarkPane;
}(DThemeDarkBase));
export { DThemeDarkPane };
//# sourceMappingURL=d-theme-dark-pane.js.map