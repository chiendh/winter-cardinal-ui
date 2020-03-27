/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DCornerMask } from "../../d-corner-mask";
import { DTableCellState } from "../../d-table-cell-state";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteFont } from "./d-theme-white-font";
var DThemeWhiteTableBodyCells = /** @class */ (function () {
    function DThemeWhiteTableBodyCells() {
    }
    DThemeWhiteTableBodyCells.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            if (state & DTableCellState.FROZEN) {
                return (state & DTableCellState.EVEN) ?
                    this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
            }
            else {
                return null;
            }
        }
        else if (DBaseStates.isInvalid(state)) {
            return DThemeWhiteConstants.INVALID_BLENDED;
        }
        else if (state & DBaseState.ACTIVE_IN) {
            return DThemeWhiteConstants.HIGHLIGHT_BLENDED;
        }
        else if (DBaseStates.isFocused(state) && DBaseStates.isHovered(state)) {
            return this.WEAK_STRONG_HIGHLIGHT_COLOR;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED;
        }
        else {
            if (state & DTableCellState.FROZEN) {
                return (state & DTableCellState.EVEN) ?
                    this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
            }
            else {
                return null;
            }
        }
    };
    DThemeWhiteTableBodyCells.getBackgroundAlpha = function (state) {
        return 1;
    };
    DThemeWhiteTableBodyCells.getBorderColor = function (state) {
        return 0xf6f6f6;
    };
    DThemeWhiteTableBodyCells.getBorderAlign = function (state) {
        return 0;
    };
    DThemeWhiteTableBodyCells.getBorderMask = function (state) {
        if (state & DTableCellState.END) {
            return DBorderMask.ALL;
        }
        else {
            return DBorderMask.NOT_RIGHT;
        }
    };
    DThemeWhiteTableBodyCells.getColor = function (state) {
        return DThemeWhiteFont.getColor(state);
    };
    DThemeWhiteTableBodyCells.getAlpha = function (state) {
        if (!DBaseStates.isDisabled(state)) {
            return DThemeWhiteFont.getAlpha(state);
        }
        return 0;
    };
    DThemeWhiteTableBodyCells.getImageTintColor = function (state) {
        if (DBaseStates.isDisabled(state) || DBaseStates.isReadOnly(state) || !DBaseStates.isActive(state)) {
            if (DBaseStates.isFocused(state)) {
                return this.IMAGE_TINT_COLOR_FOCUSED;
            }
            else {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
        }
        else {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
    };
    DThemeWhiteTableBodyCells.getOutlineAlign = function (state) {
        return -2;
    };
    DThemeWhiteTableBodyCells.getHeight = function () {
        return "padding";
    };
    DThemeWhiteTableBodyCells.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeWhiteTableBodyCells.IMAGE_TINT_COLOR_FOCUSED = UtilRgb.darken(DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, 0.1);
    DThemeWhiteTableBodyCells.BACKGROUND_COLOR_EVEN = 0xffffff;
    DThemeWhiteTableBodyCells.BACKGROUND_COLOR_ODD = UtilRgb.darken(0xffffff, 0.01);
    DThemeWhiteTableBodyCells.WEAK_STRONG_HIGHLIGHT_COLOR = UtilRgb.darken(DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED, 0.025);
    return DThemeWhiteTableBodyCells;
}());
export { DThemeWhiteTableBodyCells };
//# sourceMappingURL=d-theme-white-table-body-cells.js.map