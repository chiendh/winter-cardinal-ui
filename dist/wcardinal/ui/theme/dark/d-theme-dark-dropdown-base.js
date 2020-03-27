/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
DThemeDarkAtlas.add("dropdown_mark", 20, 14, "<g>" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 5 10 11 4 5\"></polyline>" +
    "</g>");
var DThemeDarkDropdownBase = /** @class */ (function (_super) {
    __extends(DThemeDarkDropdownBase, _super);
    function DThemeDarkDropdownBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDropdownBase.prototype.getSecondaryImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkDropdownBase.prototype.getSecondaryImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    DThemeDarkDropdownBase.prototype.getSecondaryImageMarginHorizontal = function () {
        return -this.getPaddingRight() * 0.5;
    };
    DThemeDarkDropdownBase.prototype.getSecondaryImageSource = function (state) {
        return DThemeDarkAtlas.mappings.dropdown_mark;
    };
    return DThemeDarkDropdownBase;
}(DThemeDarkButtonBase));
export { DThemeDarkDropdownBase };
//# sourceMappingURL=d-theme-dark-dropdown-base.js.map