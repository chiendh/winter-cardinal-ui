/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkBase } from "./d-theme-dark-base";
var DThemeDarkContent = /** @class */ (function (_super) {
    __extends(DThemeDarkContent, _super);
    function DThemeDarkContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkContent.prototype.getWidth = function () {
        return "100%";
    };
    DThemeDarkContent.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkContent.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeDarkContent;
}(DThemeDarkBase));
export { DThemeDarkContent };
//# sourceMappingURL=d-theme-dark-content.js.map