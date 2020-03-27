/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeDarkLayout } from "./d-theme-dark-layout";
var DThemeDarkLayoutHorizontal = /** @class */ (function (_super) {
    __extends(DThemeDarkLayoutHorizontal, _super);
    function DThemeDarkLayoutHorizontal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkLayoutHorizontal.prototype.getDirection = function () {
        return DLayoutDirection.HORIZONTAL;
    };
    DThemeDarkLayoutHorizontal.prototype.getWidth = function () {
        return "auto";
    };
    return DThemeDarkLayoutHorizontal;
}(DThemeDarkLayout));
export { DThemeDarkLayoutHorizontal };
//# sourceMappingURL=d-theme-dark-layout-horizontal.js.map