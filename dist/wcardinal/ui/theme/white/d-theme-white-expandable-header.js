/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteImage } from "./d-theme-white-image";
DThemeWhiteAtlas.add("menu_item_expandable_header_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
    "</g>");
DThemeWhiteAtlas.add("menu_item_expandable_header_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
    "</g>");
var DThemeWhiteExpandableHeader = /** @class */ (function (_super) {
    __extends(DThemeWhiteExpandableHeader, _super);
    function DThemeWhiteExpandableHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteExpandableHeader.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return 0xf8f8f8;
        }
        else if (DBaseStates.isActiveIn(state)) {
            return 0xf8f8f8;
        }
        else {
            return null;
        }
    };
    DThemeWhiteExpandableHeader.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeWhiteExpandableHeader.prototype.getHeight = function () {
        return 30;
    };
    DThemeWhiteExpandableHeader.prototype.getWidth = function () {
        return "padding";
    };
    DThemeWhiteExpandableHeader.prototype.getPaddingLeft = function () {
        return 16;
    };
    DThemeWhiteExpandableHeader.prototype.getPaddingRight = function () {
        return 16;
    };
    DThemeWhiteExpandableHeader.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeWhiteExpandableHeader;
}(DThemeWhiteImage));
export { DThemeWhiteExpandableHeader };
//# sourceMappingURL=d-theme-white-expandable-header.js.map