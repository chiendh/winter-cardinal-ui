/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";
var DThemeDarkMenuSidedContent = /** @class */ (function (_super) {
    __extends(DThemeDarkMenuSidedContent, _super);
    function DThemeDarkMenuSidedContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkMenuSidedContent.prototype.getWidth = function () {
        return "100%";
    };
    DThemeDarkMenuSidedContent.prototype.getHeight = function () {
        return "auto";
    };
    DThemeDarkMenuSidedContent.prototype.getPaddingTop = function () {
        return 16;
    };
    DThemeDarkMenuSidedContent.prototype.getPaddingBottom = function () {
        return 16;
    };
    DThemeDarkMenuSidedContent.prototype.getMargin = function () {
        return 0;
    };
    return DThemeDarkMenuSidedContent;
}(DThemeDarkLayoutVertical));
export { DThemeDarkMenuSidedContent };
//# sourceMappingURL=d-theme-dark-menu-sided-content.js.map