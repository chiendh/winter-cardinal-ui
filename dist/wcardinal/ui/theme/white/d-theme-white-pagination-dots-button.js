/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
var DThemeWhitePaginationDotsButton = /** @class */ (function (_super) {
    __extends(DThemeWhitePaginationDotsButton, _super);
    function DThemeWhitePaginationDotsButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhitePaginationDotsButton.prototype.getBackgroundColor = function (state) {
        return null;
    };
    DThemeWhitePaginationDotsButton.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhitePaginationDotsButton.prototype.newTextValue = function () {
        return "...";
    };
    return DThemeWhitePaginationDotsButton;
}(DThemeWhiteButtonAmbient));
export { DThemeWhitePaginationDotsButton };
//# sourceMappingURL=d-theme-white-pagination-dots-button.js.map