/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DMenuItemText } from "./d-menu-item-text";
var DMenuItemCheck = /** @class */ (function (_super) {
    __extends(DMenuItemCheck, _super);
    function DMenuItemCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuItemCheck.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        if (options && options.check) {
            this.setActive(true);
        }
    };
    DMenuItemCheck.prototype.getType = function () {
        return "DMenuItemCheck";
    };
    DMenuItemCheck.prototype.onSelect = function (e) {
        this.setActive(!this.isActive());
        _super.prototype.onSelect.call(this, e);
    };
    DMenuItemCheck.isCompatible = function (options) {
        return "check" in options;
    };
    return DMenuItemCheck;
}(DMenuItemText));
export { DMenuItemCheck };
//# sourceMappingURL=d-menu-item-check.js.map