/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DListItemSeparator } from "./d-list-item-separator";
var DMenuItemSeparator = /** @class */ (function (_super) {
    __extends(DMenuItemSeparator, _super);
    function DMenuItemSeparator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuItemSeparator.prototype.getType = function () {
        return "DMenuItemSeparator";
    };
    DMenuItemSeparator.isCompatible = function (options) {
        return "separator" in options;
    };
    return DMenuItemSeparator;
}(DListItemSeparator));
export { DMenuItemSeparator };
//# sourceMappingURL=d-menu-item-separator.js.map