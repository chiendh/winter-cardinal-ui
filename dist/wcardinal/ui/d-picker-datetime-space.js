/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
var DPickerDatetimeSpace = /** @class */ (function (_super) {
    __extends(DPickerDatetimeSpace, _super);
    function DPickerDatetimeSpace(options) {
        var _this = _super.call(this, options) || this;
        _this.setState(DBaseState.UNFOCUSABLE, true);
        _this.renderable = false;
        return _this;
    }
    DPickerDatetimeSpace.prototype.getType = function () {
        return "DPickerDatetimeSpace";
    };
    return DPickerDatetimeSpace;
}(DBase));
export { DPickerDatetimeSpace };
//# sourceMappingURL=d-picker-datetime-space.js.map