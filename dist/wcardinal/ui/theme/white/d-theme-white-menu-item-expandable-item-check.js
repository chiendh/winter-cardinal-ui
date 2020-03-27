/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteMenuItemCheck } from "./d-theme-white-menu-item-check";
var DThemeWhiteMenuItemExpandableItemCheck = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemExpandableItemCheck, _super);
    function DThemeWhiteMenuItemExpandableItemCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemExpandableItemCheck.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    DThemeWhiteMenuItemExpandableItemCheck.prototype.getImageMarginHorizontal = function () {
        return _super.prototype.getImageMarginHorizontal.call(this) + 16;
    };
    return DThemeWhiteMenuItemExpandableItemCheck;
}(DThemeWhiteMenuItemCheck));
export { DThemeWhiteMenuItemExpandableItemCheck };
//# sourceMappingURL=d-theme-white-menu-item-expandable-item-check.js.map