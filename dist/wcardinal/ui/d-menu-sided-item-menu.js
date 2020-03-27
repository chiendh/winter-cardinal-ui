/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DMenuItemMenu } from "./d-menu-item-menu";
var DMenuSidedItemMenu = /** @class */ (function (_super) {
    __extends(DMenuSidedItemMenu, _super);
    function DMenuSidedItemMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuSidedItemMenu.prototype.initHover = function (options) {
        // DO NOTHING
    };
    DMenuSidedItemMenu.prototype.onMenuSelect = function (value, item, closeable) {
        _super.prototype.onMenuSelect.call(this, value, item, closeable);
        var selection = this.getSelection();
        if (selection) {
            selection.add(item);
        }
    };
    DMenuSidedItemMenu.prototype.onOpen = function (menu) {
        menu.open(this, this);
    };
    DMenuSidedItemMenu.prototype.getType = function () {
        return "DMenuSidedItemMenu";
    };
    return DMenuSidedItemMenu;
}(DMenuItemMenu));
export { DMenuSidedItemMenu };
//# sourceMappingURL=d-menu-sided-item-menu.js.map