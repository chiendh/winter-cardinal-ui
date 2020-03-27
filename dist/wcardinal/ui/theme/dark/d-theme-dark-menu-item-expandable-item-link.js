/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkMenuItemLink } from "./d-theme-dark-menu-item-link";
var DThemeDarkMenuItemExpandableItemLink = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemExpandableItemLink, _super);
    function DThemeDarkMenuItemExpandableItemLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemExpandableItemLink.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeDarkMenuItemExpandableItemLink;
}(DThemeDarkMenuItemLink));
export { DThemeDarkMenuItemExpandableItemLink };
//# sourceMappingURL=d-theme-dark-menu-item-expandable-item-link.js.map