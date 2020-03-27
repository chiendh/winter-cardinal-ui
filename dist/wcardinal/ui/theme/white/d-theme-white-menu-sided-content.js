/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";
var DThemeWhiteMenuSidedContent = /** @class */ (function (_super) {
    __extends(DThemeWhiteMenuSidedContent, _super);
    function DThemeWhiteMenuSidedContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteMenuSidedContent.prototype.getWidth = function () {
        return "100%";
    };
    DThemeWhiteMenuSidedContent.prototype.getHeight = function () {
        return "auto";
    };
    DThemeWhiteMenuSidedContent.prototype.getPaddingTop = function () {
        return 16;
    };
    DThemeWhiteMenuSidedContent.prototype.getPaddingBottom = function () {
        return 16;
    };
    DThemeWhiteMenuSidedContent.prototype.getMargin = function () {
        return 0;
    };
    return DThemeWhiteMenuSidedContent;
}(DThemeWhiteLayoutVertical));
export { DThemeWhiteMenuSidedContent };
//# sourceMappingURL=d-theme-white-menu-sided-content.js.map