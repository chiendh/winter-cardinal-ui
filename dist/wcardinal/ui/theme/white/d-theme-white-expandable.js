/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
var DThemeWhiteExpandable = /** @class */ (function (_super) {
    __extends(DThemeWhiteExpandable, _super);
    function DThemeWhiteExpandable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteExpandable.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0xf0f8ff;
        }
        return null;
    };
    DThemeWhiteExpandable.prototype.getBackgroundAlpha = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0.1;
        }
        return 0;
    };
    DThemeWhiteExpandable.prototype.getMargin = function () {
        return 0;
    };
    DThemeWhiteExpandable.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeWhiteExpandable;
}(DThemeWhiteLayoutVertical));
export { DThemeWhiteExpandable };
//# sourceMappingURL=d-theme-white-expandable.js.map