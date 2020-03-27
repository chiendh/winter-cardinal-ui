/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal } from "./d-layout-horizontal";
var DMenuSidedContent = /** @class */ (function (_super) {
    __extends(DMenuSidedContent, _super);
    function DMenuSidedContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DMenuSidedContent.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
    };
    DMenuSidedContent.prototype.initReflowable = function () {
        // DO NOTHING
    };
    DMenuSidedContent.prototype.getType = function () {
        return "DMenuSidedContent";
    };
    return DMenuSidedContent;
}(DLayoutHorizontal));
export { DMenuSidedContent };
//# sourceMappingURL=d-menu-sided-content.js.map