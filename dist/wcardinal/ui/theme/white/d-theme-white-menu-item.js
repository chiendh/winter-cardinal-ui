/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";
var DThemeWhiteMenuItem = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItem, _super);
    function DThemeWhiteMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItem.prototype.getPaddingLeft = function () {
        return this.getPaddingRight();
    };
    DThemeWhiteMenuItem.prototype.getPaddingRight = function () {
        return 26;
    };
    return DThemeWhiteMenuItem;
}(DThemeWhiteListItem));
export { DThemeWhiteMenuItem };
//# sourceMappingURL=d-theme-white-menu-item.js.map