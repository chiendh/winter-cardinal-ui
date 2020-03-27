/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteBase } from "./d-theme-white-base";
var DThemeWhiteContent = /** @class */ (function (_super) {
    __extends(DThemeWhiteContent, _super);
    function DThemeWhiteContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteContent.prototype.getWidth = function () {
        return "100%";
    };
    DThemeWhiteContent.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteContent.prototype.getInteractive = function () {
        return DBaseInteractive.BOTH;
    };
    return DThemeWhiteContent;
}(DThemeWhiteBase));
export { DThemeWhiteContent };
//# sourceMappingURL=d-theme-white-content.js.map