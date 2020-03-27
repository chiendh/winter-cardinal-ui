/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";
var DThemeDarkMenuItem = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItem, _super);
    function DThemeDarkMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItem.prototype.getPaddingLeft = function () {
        return this.getPaddingRight();
    };
    DThemeDarkMenuItem.prototype.getPaddingRight = function () {
        return 26;
    };
    return DThemeDarkMenuItem;
}(DThemeDarkListItem));
export { DThemeDarkMenuItem };
//# sourceMappingURL=d-theme-dark-menu-item.js.map