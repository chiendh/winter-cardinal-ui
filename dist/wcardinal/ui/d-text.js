/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DTextBase } from "./d-text-base";
var DText = /** @class */ (function (_super) {
    __extends(DText, _super);
    function DText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DText.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
    };
    DText.prototype.getType = function () {
        return "DText";
    };
    return DText;
}(DTextBase));
export { DText };
//# sourceMappingURL=d-text.js.map