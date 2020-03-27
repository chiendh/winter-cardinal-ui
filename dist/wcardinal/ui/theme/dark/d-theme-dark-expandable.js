/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";
var DThemeDarkExpandable = /** @class */ (function (_super) {
    __extends(DThemeDarkExpandable, _super);
    function DThemeDarkExpandable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkExpandable.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0x0F0700;
        }
        return null;
    };
    DThemeDarkExpandable.prototype.getBackgroundAlpha = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0.1;
        }
        return 0;
    };
    DThemeDarkExpandable.prototype.getMargin = function () {
        return 0;
    };
    DThemeDarkExpandable.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeDarkExpandable;
}(DThemeDarkLayoutVertical));
export { DThemeDarkExpandable };
//# sourceMappingURL=d-theme-dark-expandable.js.map