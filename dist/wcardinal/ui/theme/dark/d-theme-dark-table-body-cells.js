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
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkFont } from "./d-theme-dark-font";
var DThemeDarkTableBodyCells = /** @class */ (function () {
    function DThemeDarkTableBodyCells() {
    }
    DThemeDarkTableBodyCells.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            if (state & DTableCellState.FROZEN) {
                return (state & DTableCellState.EVEN) ?
                    this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
            }
            return null;
        }
        if (DBaseStates.isInvalid(state)) {
            return 0xCF6679;
        }
        if (state & DBaseState.ACTIVE_IN) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        if (DBaseStates.isFocused(state) && DBaseStates.isHovered(state)) {
            return this.COLOR_FOCUSED_AND_HOVERED;
        }
        if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        if (state & DTableCellState.FROZEN) {
            return (state & DTableCellState.EVEN) ?
                this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
        }
        return null;
    };
    DThemeDarkTableBodyCells.getBackgroundAlpha = function (state) {
        return 1;
    };
    DThemeDarkTableBodyCells.getBorderColor = function (state) {
        if (DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        return 0x202020;
    };
    DThemeDarkTableBodyCells.getBorderAlign = function (state) {
        return 0;
    };
    DThemeDarkTableBodyCells.getBorderMask = function (state) {
        if (state & DTableCellState.END) {
            return DBorderMask.ALL;
        }
        else {
            return DBorderMask.NOT_RIGHT;
        }
    };
    DThemeDarkTableBodyCells.getColor = function (state) {
        return DThemeDarkFont.getColor(state);
    };
    DThemeDarkTableBodyCells.getAlpha = function (state) {
        if (!DBaseStates.isDisabled(state)) {
            return DThemeDarkFont.getAlpha(state);
        }
        return 0;
    };
    DThemeDarkTableBodyCells.getImageTintColor = function (state) {
        if (DBaseStates.isDisabled(state) || DBaseStates.isReadOnly(state) || !DBaseStates.isActive(state)) {
            if (DBaseStates.isFocused(state)) {
                return this.IMAGE_TINT_COLOR_FOCUSED;
            }
            return 0x646464;
        }
        return DThemeDarkConstants.HIGHLIGHT_COLOR;
    };
    DThemeDarkTableBodyCells.getOutlineAlign = function (state) {
        return -2;
    };
    DThemeDarkTableBodyCells.getHeight = function () {
        return "padding";
    };
    DThemeDarkTableBodyCells.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    DThemeDarkTableBodyCells.COLOR = 0x000000;
    DThemeDarkTableBodyCells.IMAGE_TINT_COLOR_FOCUSED = UtilRgb.brighten(DThemeDarkTableBodyCells.COLOR, DThemeDarkConstants.TINT_FOCUS_ALPHA);
    DThemeDarkTableBodyCells.BACKGROUND_COLOR_EVEN = DThemeDarkTableBodyCells.COLOR;
    DThemeDarkTableBodyCells.BACKGROUND_COLOR_ODD = 0x1B1B1B;
    DThemeDarkTableBodyCells.COLOR_HOVERED = 0x232323;
    DThemeDarkTableBodyCells.COLOR_FOCUSED_AND_HOVERED = 0x323232;
    return DThemeDarkTableBodyCells;
}());
export { DThemeDarkTableBodyCells };
//# sourceMappingURL=d-theme-dark-table-body-cells.js.map