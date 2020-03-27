/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DTableRowState } from "../../d-table-row-state";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkTableRow } from "./d-theme-dark-table-row";
var DThemeDarkTableBodyRow = /** @class */ (function (_super) {
    __extends(DThemeDarkTableBodyRow, _super);
    function DThemeDarkTableBodyRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BACKGROUND_COLOR_EVEN = 0x000000;
        _this.BACKGROUND_COLOR_ODD = 0x1B1B1B;
        _this.COLOR_HOVERED = 0x232323;
        return _this;
    }
    DThemeDarkTableBodyRow.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return (state & DTableRowState.EVEN) ?
                this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
        }
        if (DBaseStates.isActive(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return this.COLOR_HOVERED;
        }
        return (state & DTableRowState.EVEN) ?
            this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
    };
    DThemeDarkTableBodyRow.prototype.getWidth = function () {
        return "100%";
    };
    return DThemeDarkTableBodyRow;
}(DThemeDarkTableRow));
export { DThemeDarkTableBodyRow };
//# sourceMappingURL=d-theme-dark-table-body-row.js.map