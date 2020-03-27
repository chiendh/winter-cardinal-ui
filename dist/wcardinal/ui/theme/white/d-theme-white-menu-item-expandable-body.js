/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
var DThemeWhiteMenuItemExpandableBody = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuItemExpandableBody, _super);
    function DThemeWhiteMenuItemExpandableBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuItemExpandableBody.prototype.getWidth = function () {
        return "padding";
    };
    DThemeWhiteMenuItemExpandableBody.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeWhiteMenuItemExpandableBody;
}(DThemeWhiteLayoutVertical));
export { DThemeWhiteMenuItemExpandableBody };
//# sourceMappingURL=d-theme-white-menu-item-expandable-body.js.map