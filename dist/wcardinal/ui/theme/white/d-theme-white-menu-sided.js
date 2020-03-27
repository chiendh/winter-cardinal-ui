/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhitePane } from "./d-theme-white-pane";
var DThemeWhiteMenuSided = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuSided, _super);
    function DThemeWhiteMenuSided() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuSided.prototype.getBackgroundColor = function (state) {
        return 0xffffff;
    };
    DThemeWhiteMenuSided.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteMenuSided.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteMenuSided;
}(DThemeWhitePane));
export { DThemeWhiteMenuSided };
//# sourceMappingURL=d-theme-white-menu-sided.js.map