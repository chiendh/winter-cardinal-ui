/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DMenuItemLink } from "./d-menu-item-link";
var DMenuSidedItemLink = /** @class */ (function (_super) {
    __extends(DMenuSidedItemLink, _super);
    function DMenuSidedItemLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuSidedItemLink.prototype.getSelection = function () {
        return null;
    };
    DMenuSidedItemLink.prototype.getType = function () {
        return "DMenuSidedItemLink";
    };
    return DMenuSidedItemLink;
}(DMenuItemLink));
export { DMenuSidedItemLink };
//# sourceMappingURL=d-menu-sided-item-link.js.map