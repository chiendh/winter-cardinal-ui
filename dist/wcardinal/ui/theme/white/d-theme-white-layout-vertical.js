/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeWhiteLayout } from "./d-theme-white-layout";
var DThemeWhiteLayoutVertical = /** @class */ (function (_super) {
    __extends(DThemeWhiteLayoutVertical, _super);
    function DThemeWhiteLayoutVertical() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteLayoutVertical.prototype.getDirection = function () {
        return DLayoutDirection.VERTICAL;
    };
    DThemeWhiteLayoutVertical.prototype.getHeight = function () {
        return "auto";
    };
    return DThemeWhiteLayoutVertical;
}(DThemeWhiteLayout));
export { DThemeWhiteLayoutVertical };
//# sourceMappingURL=d-theme-white-layout-vertical.js.map