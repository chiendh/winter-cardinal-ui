/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
var targetDefault = function () { return null; };
var EShapeActionRuntimeOpen = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeOpen, _super);
    function EShapeActionRuntimeOpen(value, reset) {
        var _this = _super.call(this, value, reset) || this;
        _this.target = _this.toExpression(value.target, targetDefault, "null");
        return _this;
    }
    return EShapeActionRuntimeOpen;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeOpen };
//# sourceMappingURL=e-shape-action-runtime-open.js.map