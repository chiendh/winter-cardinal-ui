/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteList } from "./d-theme-white-list";
var DThemeWhiteDialogSelectList = /** @class */ (function (_super) {
    __extends(DThemeWhiteDialogSelectList, _super);
    function DThemeWhiteDialogSelectList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteDialogSelectList.prototype.getBackgroundColor = function () {
        return null;
    };
    DThemeWhiteDialogSelectList.prototype.getBorderColor = function () {
        return null;
    };
    DThemeWhiteDialogSelectList.prototype.getHeight = function () {
        return 250;
    };
    DThemeWhiteDialogSelectList.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeWhiteDialogSelectList;
}(DThemeWhiteList));
export { DThemeWhiteDialogSelectList };
//# sourceMappingURL=d-theme-white-dialog-select-list.js.map