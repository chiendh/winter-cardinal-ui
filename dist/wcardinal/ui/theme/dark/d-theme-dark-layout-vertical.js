/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeDarkLayout } from "./d-theme-dark-layout";
var DThemeDarkLayoutVertical = /** @class */ (function (_super) {
    __extends(DThemeDarkLayoutVertical, _super);
    function DThemeDarkLayoutVertical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkLayoutVertical.prototype.getDirection = function () {
        return DLayoutDirection.VERTICAL;
    };
    DThemeDarkLayoutVertical.prototype.getHeight = function () {
        return "auto";
    };
    return DThemeDarkLayoutVertical;
}(DThemeDarkLayout));
export { DThemeDarkLayoutVertical };
//# sourceMappingURL=d-theme-dark-layout-vertical.js.map