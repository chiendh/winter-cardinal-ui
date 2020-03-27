/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkPane } from "./d-theme-dark-pane";
var DThemeDarkList = /** @class */ (function (_super) {
    __extends(DThemeDarkList, _super);
    function DThemeDarkList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLOR = 0x646464;
        return _this;
    }
    DThemeDarkList.prototype.getBackgroundColor = function (state) {
        return 0x000000;
    };
    DThemeDarkList.prototype.getBorderColor = function (state) {
        if (DBaseStates.isFocused(state)) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        return this.COLOR;
    };
    DThemeDarkList.prototype.getBorderAlign = function (state) {
        return 1;
    };
    return DThemeDarkList;
}(DThemeDarkPane));
export { DThemeDarkList };
//# sourceMappingURL=d-theme-dark-list.js.map