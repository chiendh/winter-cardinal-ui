/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImage } from "./d-theme-dark-image";
DThemeDarkAtlas.add("menu_item_expandable_header_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
    "</g>");
DThemeDarkAtlas.add("menu_item_expandable_header_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
    "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
    "</g>");
var DThemeDarkExpandableHeader = /** @class */ (function (_super) {
    __extends(DThemeDarkExpandableHeader, _super);
    function DThemeDarkExpandableHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x383838;
        _this.COLOR_HOVERED = UtilRgb.brighten(_this.COLOR, DThemeDarkConstants.FOCUSED_ALPHA);
        return _this;
    }
    DThemeDarkExpandableHeader.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        if (DBaseStates.isActiveIn(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        return null;
    };
    DThemeDarkExpandableHeader.prototype.getBorderColor = function (state) {
        return 0x646464;
    };
    DThemeDarkExpandableHeader.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkExpandableHeader.prototype.getWidth = function () {
        return "padding";
    };
    DThemeDarkExpandableHeader.prototype.getPaddingLeft = function () {
        return 16;
    };
    DThemeDarkExpandableHeader.prototype.getPaddingRight = function () {
        return 16;
    };
    DThemeDarkExpandableHeader.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeDarkExpandableHeader;
}(DThemeDarkImage));
export { DThemeDarkExpandableHeader };
//# sourceMappingURL=d-theme-dark-expandable-header.js.map