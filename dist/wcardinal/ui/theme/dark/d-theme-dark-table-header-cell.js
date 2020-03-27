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
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImage } from "./d-theme-dark-image";
// Material Design icons by Google.
// Apache license version 2.0.
DThemeDarkAtlas.add("sorted_descending", 24, 24, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M7 16l5-5 5 5H7z\" fill=\"#fff\" />" +
    "</g>");
DThemeDarkAtlas.add("sorted_ascending", 24, 24, "<g transform=\"scale(0.875,0.875)\">" +
    "<path d=\"M7 12l5 5 5-5H7z\" fill=\"#fff\" />" +
    "</g>");
var DThemeDarkTableHeaderCell = /** @class */ (function (_super) {
    __extends(DThemeDarkTableHeaderCell, _super);
    function DThemeDarkTableHeaderCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x1b1b1b;
        _this.COLOR_HOVERED = UtilRgb.brighten(_this.COLOR, DThemeDarkConstants.FOCUSED_ALPHA);
        _this.COLOR_PRESSED = UtilRgb.brighten(_this.COLOR, DThemeDarkConstants.PRESSED_ALPHA);
        return _this;
    }
    DThemeDarkTableHeaderCell.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return (state & DTableCellState.FROZEN) ?
                this.COLOR : null;
        }
        if (DBaseStates.isActive(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        if (DBaseStates.isPressed(state)) {
            return this.COLOR_PRESSED;
        }
        if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        return (state & DTableCellState.FROZEN) ?
            this.COLOR : null;
    };
    DThemeDarkTableHeaderCell.prototype.getBackgroundAlpha = function (state) {
        return 1;
    };
    DThemeDarkTableHeaderCell.prototype.getBorderColor = function (state) {
        return null;
    };
    DThemeDarkTableHeaderCell.prototype.getBorderAlign = function (state) {
        return 0;
    };
    DThemeDarkTableHeaderCell.prototype.getBorderMask = function (state) {
        if (state & DTableCellState.END) {
            return DBorderMask.ALL;
        }
        return DBorderMask.NOT_RIGHT;
    };
    DThemeDarkTableHeaderCell.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeDarkTableHeaderCell.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeDarkTableHeaderCell.prototype.getHeight = function () {
        return "padding";
    };
    DThemeDarkTableHeaderCell.prototype.getPaddingLeft = function () {
        return 10;
    };
    DThemeDarkTableHeaderCell.prototype.getPaddingRight = function () {
        return 10;
    };
    DThemeDarkTableHeaderCell.prototype.getTextValue = function (state) {
        return null;
    };
    DThemeDarkTableHeaderCell.prototype.newTextValue = function () {
        return null;
    };
    DThemeDarkTableHeaderCell.prototype.getImageSource = function (state) {
        if (state & DTableCellState.SORTED_ASCENDING) {
            return DThemeDarkAtlas.mappings.sorted_ascending;
        }
        if (state & DTableCellState.SORTED_DESCENDING) {
            return DThemeDarkAtlas.mappings.sorted_descending;
        }
        return null;
    };
    DThemeDarkTableHeaderCell.prototype.getImageAlignHorizontal = function () {
        return DAlignHorizontal.RIGHT;
    };
    DThemeDarkTableHeaderCell.prototype.getImageAlignWith = function () {
        return DAlignWith.PADDING;
    };
    return DThemeDarkTableHeaderCell;
}(DThemeDarkImage));
export { DThemeDarkTableHeaderCell };
//# sourceMappingURL=d-theme-dark-table-header-cell.js.map