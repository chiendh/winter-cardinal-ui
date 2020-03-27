/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DThemeWhitePane } from "./d-theme-white-pane";
var DThemeWhiteList = /** @class */ (function (_super) {
    __extends(DThemeWhiteList, _super);
    function DThemeWhiteList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteList.prototype.getBackgroundColor = function (state) {
        return 0xffffff;
    };
    DThemeWhiteList.prototype.getBorderAlign = function (state) {
        return 1;
    };
    return DThemeWhiteList;
}(DThemeWhitePane));
export { DThemeWhiteList };
//# sourceMappingURL=d-theme-white-list.js.map