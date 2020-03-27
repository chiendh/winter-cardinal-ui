/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";
var DThemeDarkMenuItemExpandableBody = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuItemExpandableBody, _super);
    function DThemeDarkMenuItemExpandableBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuItemExpandableBody.prototype.getWidth = function () {
        return "padding";
    };
    DThemeDarkMenuItemExpandableBody.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeDarkMenuItemExpandableBody;
}(DThemeDarkLayoutVertical));
export { DThemeDarkMenuItemExpandableBody };
//# sourceMappingURL=d-theme-dark-menu-item-expandable-body.js.map