/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkMenuItemSpace } from "./d-theme-dark-menu-item-space";
var DThemeDarkMenuItemExpandableItemSpace = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemExpandableItemSpace, _super);
    function DThemeDarkMenuItemExpandableItemSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemExpandableItemSpace.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeDarkMenuItemExpandableItemSpace;
}(DThemeDarkMenuItemSpace));
export { DThemeDarkMenuItemExpandableItemSpace };
//# sourceMappingURL=d-theme-dark-menu-item-expandable-item-space.js.map