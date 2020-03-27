/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DList } from "./d-list";
var DDialogSelectList = /** @class */ (function (_super) {
    __extends(DDialogSelectList, _super);
    function DDialogSelectList(options) {
        var _this = _super.call(this, options) || this;
        _this.setState(DBaseState.UNFOCUSABLE, true);
        return _this;
    }
    DDialogSelectList.prototype.getType = function () {
        return "DDialogSelectList";
    };
    return DDialogSelectList;
}(DList));
export { DDialogSelectList };
//# sourceMappingURL=d-dialog-select-list.js.map