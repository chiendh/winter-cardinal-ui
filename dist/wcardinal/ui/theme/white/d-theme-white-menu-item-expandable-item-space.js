/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteMenuItemSpace } from "./d-theme-white-menu-item-space";
var DThemeWhiteMenuItemExpandableItemSpace = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemExpandableItemSpace, _super);
    function DThemeWhiteMenuItemExpandableItemSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemExpandableItemSpace.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeWhiteMenuItemExpandableItemSpace;
}(DThemeWhiteMenuItemSpace));
export { DThemeWhiteMenuItemExpandableItemSpace };
//# sourceMappingURL=d-theme-white-menu-item-expandable-item-space.js.map