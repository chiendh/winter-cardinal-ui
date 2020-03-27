/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
var DLayoutSpace = /** @class */ (function (_super) {
    __extends(DLayoutSpace, _super);
    function DLayoutSpace(options) {
        var _this = _super.call(this, options) || this;
        _this.visible = false;
        _this.setState(DBaseState.UNFOCUSABLE, true);
        return _this;
    }
    DLayoutSpace.prototype.getType = function () {
        return "DLayoutSpace";
    };
    return DLayoutSpace;
}(DBase));
export { DLayoutSpace };
//# sourceMappingURL=d-layout-space.js.map