/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkScrollBar = /** @class */ (function (_super) {
    __extends(DThemeDarkScrollBar, _super);
    function DThemeDarkScrollBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkScrollBar.prototype.getBackgroundColor = function (state) {
        return 0xffffff;
    };
    DThemeDarkScrollBar.prototype.getBackgroundAlpha = function (state) {
        return 0;
    };
    DThemeDarkScrollBar.prototype.getWidth = function () {
        return 13;
    };
    DThemeDarkScrollBar.prototype.getHeight = function () {
        return 13;
    };
    DThemeDarkScrollBar.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkScrollBar;
}(DThemeDarkBase));
export { DThemeDarkScrollBar };
//# sourceMappingURL=d-theme-dark-scroll-bar.js.map