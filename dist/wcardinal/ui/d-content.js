/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
var DContent = /** @class */ (function (_super) {
    __extends(DContent, _super);
    function DContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DContent.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
    };
    DContent.prototype.initReflowable = function () {
        // DO NOTHING
    };
    DContent.prototype.getType = function () {
        return "DContent";
    };
    return DContent;
}(DBase));
export { DContent };
//# sourceMappingURL=d-content.js.map