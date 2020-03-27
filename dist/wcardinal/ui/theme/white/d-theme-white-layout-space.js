/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteLayoutSpace = /** @class */ (function (_super) {
    __extends(DThemeWhiteLayoutSpace, _super);
    function DThemeWhiteLayoutSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteLayoutSpace.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhiteLayoutSpace.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteLayoutSpace.prototype.getWidth = function () {
        return 0;
    };
    DThemeWhiteLayoutSpace.prototype.getHeight = function () {
        return 0;
    };
    DThemeWhiteLayoutSpace.prototype.getClearType = function () {
        return DLayoutClearType.BOTH;
    };
    DThemeWhiteLayoutSpace.prototype.getInteractive = function () {
        return DBaseInteractive.CHILDREN;
    };
    return DThemeWhiteLayoutSpace;
}(DThemeWhiteBase));
export { DThemeWhiteLayoutSpace };
//# sourceMappingURL=d-theme-white-layout-space.js.map