/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "../../d-base-state";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkFont } from "./d-theme-dark-font";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";
var DThemeDarkDialogSelectListItem = /** @class */ (function (_super) {
    __extends(DThemeDarkDialogSelectListItem, _super);
    function DThemeDarkDialogSelectListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialogSelectListItem.prototype.getBackgroundColor = function (state) {
        return _super.prototype.getBackgroundColor.call(this, state & ~DBaseState.ACTIVE);
    };
    DThemeDarkDialogSelectListItem.prototype.getBackgroundAlpha = function (state) {
        return _super.prototype.getBackgroundAlpha.call(this, state & ~DBaseState.ACTIVE);
    };
    DThemeDarkDialogSelectListItem.prototype.getColor = function (state) {
        return DThemeDarkFont.getColor(state);
    };
    DThemeDarkDialogSelectListItem.prototype.getCornerMask = function () {
        return DCornerMask.NONE;
    };
    return DThemeDarkDialogSelectListItem;
}(DThemeDarkListItem));
export { DThemeDarkDialogSelectListItem };
//# sourceMappingURL=d-theme-dark-dialog-select-list-item.js.map