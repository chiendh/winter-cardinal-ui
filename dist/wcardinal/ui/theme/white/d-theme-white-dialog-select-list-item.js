/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "../../d-base-state";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteFont } from "./d-theme-white-font";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";
var DThemeWhiteDialogSelectListItem = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialogSelectListItem, _super);
    function DThemeWhiteDialogSelectListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialogSelectListItem.prototype.getBackgroundColor = function (state) {
        return _super.prototype.getBackgroundColor.call(this, state & ~DBaseState.ACTIVE);
    };
    DThemeWhiteDialogSelectListItem.prototype.getBackgroundAlpha = function (state) {
        return _super.prototype.getBackgroundAlpha.call(this, state & ~DBaseState.ACTIVE);
    };
    DThemeWhiteDialogSelectListItem.prototype.getColor = function (state) {
        return DThemeWhiteFont.getColor(state);
    };
    DThemeWhiteDialogSelectListItem.prototype.getCornerMask = function () {
        return DCornerMask.NONE;
    };
    return DThemeWhiteDialogSelectListItem;
}(DThemeWhiteListItem));
export { DThemeWhiteDialogSelectListItem };
//# sourceMappingURL=d-theme-white-dialog-select-list-item.js.map