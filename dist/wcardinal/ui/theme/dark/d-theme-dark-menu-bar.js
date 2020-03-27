/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";
var DThemeDarkMenuBar = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuBar, _super);
    function DThemeDarkMenuBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuBar.prototype.getBackgroundColor = function () {
        return 0x2E2E2E;
    };
    DThemeDarkMenuBar.prototype.getBorderColor = function (state) {
        return 0x646464;
    };
    DThemeDarkMenuBar.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkMenuBar.prototype.getMargin = function () {
        return 0;
    };
    DThemeDarkMenuBar.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkMenuBar;
}(DThemeDarkLayoutHorizontal));
export { DThemeDarkMenuBar };
//# sourceMappingURL=d-theme-dark-menu-bar.js.map