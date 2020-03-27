/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkLayoutSpace = /** @class */ (function (_super) {
    __extends(DThemeDarkLayoutSpace, _super);
    function DThemeDarkLayoutSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkLayoutSpace.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeDarkLayoutSpace.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkLayoutSpace.prototype.getWidth = function () {
        return 0;
    };
    DThemeDarkLayoutSpace.prototype.getHeight = function () {
        return 0;
    };
    DThemeDarkLayoutSpace.prototype.getClearType = function () {
        return DLayoutClearType.BOTH;
    };
    DThemeDarkLayoutSpace.prototype.getInteractive = function () {
        return DBaseInteractive.CHILDREN;
    };
    return DThemeDarkLayoutSpace;
}(DThemeDarkBase));
export { DThemeDarkLayoutSpace };
//# sourceMappingURL=d-theme-dark-layout-space.js.map