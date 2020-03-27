/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DListItem } from "./d-list-item";
var DMenuItem = /** @class */ (function (_super) {
    __extends(DMenuItem, _super);
    function DMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuItem.prototype.getContext = function () {
        var parent = this.parent;
        while (parent) {
            if (parent.getContext) {
                return parent.getContext();
            }
            parent = parent.parent;
        }
        return null;
    };
    DMenuItem.prototype.getCloseable = function () {
        var parent = this.parent;
        while (parent) {
            if (parent.getCloseable) {
                return parent.getCloseable();
            }
            parent = parent.parent;
        }
        return null;
    };
    DMenuItem.prototype.getType = function () {
        return "DMenuItem";
    };
    return DMenuItem;
}(DListItem));
export { DMenuItem };
//# sourceMappingURL=d-menu-item.js.map