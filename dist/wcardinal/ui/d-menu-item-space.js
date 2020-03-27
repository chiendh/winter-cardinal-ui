/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DLayoutSpace } from "./d-layout-space";
var DMenuItemSpace = /** @class */ (function (_super) {
    __extends(DMenuItemSpace, _super);
    function DMenuItemSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuItemSpace.prototype.getType = function () {
        return "DMenuItemSpace";
    };
    DMenuItemSpace.isCompatible = function (options) {
        return "space" in options;
    };
    return DMenuItemSpace;
}(DLayoutSpace));
export { DMenuItemSpace };
//# sourceMappingURL=d-menu-item-space.js.map