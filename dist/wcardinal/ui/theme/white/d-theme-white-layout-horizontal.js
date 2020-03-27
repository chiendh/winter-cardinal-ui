/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeWhiteLayout } from "./d-theme-white-layout";
var DThemeWhiteLayoutHorizontal = /** @class */ (function (_super) {
    __extends(DThemeWhiteLayoutHorizontal, _super);
    function DThemeWhiteLayoutHorizontal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteLayoutHorizontal.prototype.getDirection = function () {
        return DLayoutDirection.HORIZONTAL;
    };
    DThemeWhiteLayoutHorizontal.prototype.getWidth = function () {
        return "auto";
    };
    return DThemeWhiteLayoutHorizontal;
}(DThemeWhiteLayout));
export { DThemeWhiteLayoutHorizontal };
//# sourceMappingURL=d-theme-white-layout-horizontal.js.map