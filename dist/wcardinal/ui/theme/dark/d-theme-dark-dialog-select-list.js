/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDarkList } from "./d-theme-dark-list";
var DThemeDarkDialogSelectList = /** @class */ (function (_super) {
    __extends(DThemeDarkDialogSelectList, _super);
    function DThemeDarkDialogSelectList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkDialogSelectList.prototype.getBackgroundColor = function () {
        return null;
    };
    DThemeDarkDialogSelectList.prototype.getBorderColor = function () {
        return null;
    };
    DThemeDarkDialogSelectList.prototype.getHeight = function () {
        return 250;
    };
    DThemeDarkDialogSelectList.prototype.getCornerMask = function () {
        return DCornerMask.ALL;
    };
    return DThemeDarkDialogSelectList;
}(DThemeDarkList));
export { DThemeDarkDialogSelectList };
//# sourceMappingURL=d-theme-dark-dialog-select-list.js.map