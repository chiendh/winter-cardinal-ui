/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkMenuItemCheck } from "./d-theme-dark-menu-item-check";
var DThemeDarkMenuItemExpandableItemCheck = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemExpandableItemCheck, _super);
    function DThemeDarkMenuItemExpandableItemCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemExpandableItemCheck.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    DThemeDarkMenuItemExpandableItemCheck.prototype.getImageMarginHorizontal = function () {
        return _super.prototype.getImageMarginHorizontal.call(this) + 16;
    };
    return DThemeDarkMenuItemExpandableItemCheck;
}(DThemeDarkMenuItemCheck));
export { DThemeDarkMenuItemExpandableItemCheck };
//# sourceMappingURL=d-theme-dark-menu-item-expandable-item-check.js.map