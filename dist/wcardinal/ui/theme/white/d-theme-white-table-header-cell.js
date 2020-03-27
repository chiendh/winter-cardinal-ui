/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DCornerMask } from "../../d-corner-mask";
import { DTableCellState } from "../../d-table-cell-state";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImage } from "./d-theme-white-image";
// Material Design icons by Google.
// Apache license version 2.0.
DThemeWhiteAtlas.add("sorted_descending", 24, 24, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M7 16l5-5 5 5H7z\" fill=\"#fff\" />" +
    "</g>");
DThemeWhiteAtlas.add("sorted_ascending", 24, 24, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M7 12l5 5 5-5H7z\" fill=\"#fff\" />" +
    "</g>");
var DThemeWhiteTableHeaderCell = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableHeaderCell, _super);
    function DThemeWhiteTableHeaderCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0xf9f9f9;
        _this.COLOR_HOVERED = UtilRgb.darken(_this.COLOR, 0.017);
        _this.COLOR_PRESSED = UtilRgb.darken(_this.COLOR, 0.034);
        return _this;
    }
    DThemeWhiteTableHeaderCell.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return (state & DTableCellState.FROZEN) ?
                this.COLOR : null;
        }
        else if (DBaseStates.isActive(state)) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        else if (DBaseStates.isPressed(state)) {
            return this.COLOR_PRESSED;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        else {
            return (state & DTableCellState.FROZEN) ?
                this.COLOR : null;
        }
    };
    DThemeWhiteTableHeaderCell.prototype.getBackgroundAlpha = function (state) {
        return 1;
    };
    DThemeWhiteTableHeaderCell.prototype.getBorderColor = function (state) {
        return 0xf0f0f0;
    };
    DThemeWhiteTableHeaderCell.prototype.getBorderAlign = function (state) {
        return 0;
    };
    DThemeWhiteTableHeaderCell.prototype.getBorderMask = function (state) {
        if (state & DTableCellState.END) {
            return DBorderMask.ALL;
        }
        else {
            return DBorderMask.NOT_RIGHT;
        }
    };
    DThemeWhiteTableHeaderCell.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeWhiteTableHeaderCell.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeWhiteTableHeaderCell.prototype.getHeight = function () {
        return "padding";
    };
    DThemeWhiteTableHeaderCell.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeWhiteTableHeaderCell.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeWhiteTableHeaderCell.prototype.getTextValue = function (state) {
        return null;
    };
    DThemeWhiteTableHeaderCell.prototype.newTextValue = function () {
        return null;
    };
    DThemeWhiteTableHeaderCell.prototype.getSecondaryImageSource = function (state) {
        if (state & DTableCellState.SORTED_ASCENDING) {
            return DThemeWhiteAtlas.mappings.sorted_ascending;
        }
        else if (state & DTableCellState.SORTED_DESCENDING) {
            return DThemeWhiteAtlas.mappings.sorted_descending;
        }
        else {
            return null;
        }
    };
    DThemeWhiteTableHeaderCell.prototype.getSecondaryImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeWhiteTableHeaderCell.prototype.getSecondaryImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    return DThemeWhiteTableHeaderCell;
}(DThemeWhiteImage));
export { DThemeWhiteTableHeaderCell };
//# sourceMappingURL=d-theme-white-table-header-cell.js.map