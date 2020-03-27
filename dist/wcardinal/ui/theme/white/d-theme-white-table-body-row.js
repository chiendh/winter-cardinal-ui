/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DTableRowState } from "../../d-table-row-state";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";
var DThemeWhiteTableBodyRow = /** @class */ (function (_super) {
    __extends(DThemeWhiteTableBodyRow, _super);
    function DThemeWhiteTableBodyRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BACKGROUND_COLOR_EVEN = 0xffffff;
        _this.BACKGROUND_COLOR_ODD = UtilRgb.darken(0xffffff, 0.01);
        return _this;
    }
    DThemeWhiteTableBodyRow.prototype.getBackgroundColor = function (state) {
        if (DBaseStates.isDisabled(state)) {
            return (state & DTableRowState.EVEN) ?
                this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
        }
        else if (DBaseStates.isActive(state)) {
            return DThemeWhiteConstants.HIGHLIGHT_BLENDED;
        }
        else if (DBaseStates.isFocused(state) || DBaseStates.isHovered(state)) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED;
        }
        else {
            return (state & DTableRowState.EVEN) ?
                this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
        }
    };
    DThemeWhiteTableBodyRow.prototype.getWidth = function () {
        return "100%";
    };
    return DThemeWhiteTableBodyRow;
}(DThemeWhiteTableRow));
export { DThemeWhiteTableBodyRow };
//# sourceMappingURL=d-theme-white-table-body-row.js.map