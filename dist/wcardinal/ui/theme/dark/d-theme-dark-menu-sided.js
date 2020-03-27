/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkPane } from "./d-theme-dark-pane";
var DThemeDarkMenuSided = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuSided, _super);
    function DThemeDarkMenuSided() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x646464;
        return _this;
    }
    DThemeDarkMenuSided.prototype.getBackgroundColor = function (state) {
        return 0x000000;
    };
    DThemeDarkMenuSided.prototype.getBorderColor = function (state) {
        return this.COLOR;
    };
    DThemeDarkMenuSided.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkMenuSided;
}(DThemeDarkPane));
export { DThemeDarkMenuSided };
//# sourceMappingURL=d-theme-dark-menu-sided.js.map