/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkMenuItemText } from "./d-theme-dark-menu-item-text";
var DThemeDarkMenuItemExpandableItemText = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemExpandableItemText, _super);
    function DThemeDarkMenuItemExpandableItemText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemExpandableItemText.prototype.getPaddingLeft = function () {
        return _super.prototype.getPaddingLeft.call(this) + 16;
    };
    return DThemeDarkMenuItemExpandableItemText;
}(DThemeDarkMenuItemText));
export { DThemeDarkMenuItemExpandableItemText };
//# sourceMappingURL=d-theme-dark-menu-item-expandable-item-text.js.map