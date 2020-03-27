/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
var EShapeActionRuntimeOpenPageInplace = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeOpenPageInplace, _super);
    function EShapeActionRuntimeOpenPageInplace(value) {
        return _super.call(this, value, EShapeRuntimeReset.NONE) || this;
    }
    EShapeActionRuntimeOpenPageInplace.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var target = this.target(shape, time);
            if (target != null) {
                window.location.href = target;
            }
        }
    };
    return EShapeActionRuntimeOpenPageInplace;
}(EShapeActionRuntimeOpen));
export { EShapeActionRuntimeOpenPageInplace };
//# sourceMappingURL=e-shape-action-runtime-open-page-inplace.js.map