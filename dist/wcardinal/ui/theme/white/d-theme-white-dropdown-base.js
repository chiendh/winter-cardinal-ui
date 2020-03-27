/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
DThemeWhiteAtlas.add("dropdown_mark", 20, 14, "<g>" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 5 10 11 4 5\"></polyline>" +
    "</g>");
var DThemeWhiteDropdownBase = /** @class */ (function (_super) {
    __extends(DThemeWhiteDropdownBase, _super);
    function DThemeWhiteDropdownBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDropdownBase.prototype.getSecondaryImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeWhiteDropdownBase.prototype.getSecondaryImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeWhiteDropdownBase.prototype.getSecondaryImageMarginHorizontal = function () {
        return -this.getPaddingRight() * 0.5;
    };
    DThemeWhiteDropdownBase.prototype.getSecondaryImageSource = function (state) {
        return DThemeWhiteAtlas.mappings.dropdown_mark;
    };
    return DThemeWhiteDropdownBase;
}(DThemeWhiteButtonBase));
export { DThemeWhiteDropdownBase };
//# sourceMappingURL=d-theme-white-dropdown-base.js.map