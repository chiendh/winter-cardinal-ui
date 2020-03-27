/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImage } from "./d-theme-dark-image";
var DThemeDarkListItem = /** @class */ (function (_super) {
    __extends(DThemeDarkListItem, _super);
    function DThemeDarkListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkListItem.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return null;
        }
        if (DBaseStates.isActive(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return 0x232323;
        }
        return null;
    };
    DThemeDarkListItem.prototype.getColor = function (state) {
        if (DBaseStates.isActive(state)) {
            return 0x000000;
        }
        return _super.prototype.getColor.call(this, state);
    };
    DThemeDarkListItem.prototype.getBackgroundAlpha = function (state) {
        return 1;
    };
    DThemeDarkListItem.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkListItem.prototype.getHeight = function () {
        return 30;
    };
    DThemeDarkListItem.prototype.getWidth = function () {
        return "padding";
    };
    DThemeDarkListItem.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.LEFT;
    };
    DThemeDarkListItem.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeDarkListItem.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeDarkListItem.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeDarkListItem;
}(DThemeDarkImage));
export { DThemeDarkListItem };
//# sourceMappingURL=d-theme-dark-list-item.js.map