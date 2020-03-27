/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DMenuItemExpandable } from "./d-menu-item-expandable";
import { DMenuSidedItemExpandables } from "./d-menu-sided-item-expandables";
var DMenuSidedItemExpandable = /** @class */ (function (_super) {
    __extends(DMenuSidedItemExpandable, _super);
    function DMenuSidedItemExpandable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuSidedItemExpandable.prototype.newItems = function (body, sticky, theme, options) {
        if (options != null && options.items != null) {
            DMenuSidedItemExpandables.newItems(body, options.items, sticky);
        }
    };
    DMenuSidedItemExpandable.prototype.getType = function () {
        return "DMenuSidedItemExpandable";
    };
    return DMenuSidedItemExpandable;
}(DMenuItemExpandable));
export { DMenuSidedItemExpandable };
//# sourceMappingURL=d-menu-sided-item-expandable.js.map