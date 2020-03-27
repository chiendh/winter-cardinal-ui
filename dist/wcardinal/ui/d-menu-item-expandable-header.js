/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DListItem } from "./d-list-item";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DMenuItemExpandableHeader = /** @class */ (function (_super) {
    __extends(DMenuItemExpandableHeader, _super);
    function DMenuItemExpandableHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuItemExpandableHeader.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.on(UtilPointerEvent.down, function (e) {
            if (_this.isActionable()) {
                _this.onSelect(e);
            }
        });
    };
    DMenuItemExpandableHeader.prototype.getSelection = function () {
        return null;
    };
    DMenuItemExpandableHeader.prototype.getType = function () {
        return "DMenuItemExpandableHeader";
    };
    return DMenuItemExpandableHeader;
}(DListItem));
export { DMenuItemExpandableHeader };
//# sourceMappingURL=d-menu-item-expandable-header.js.map