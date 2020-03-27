/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
var EShapeActionRuntimeOpenFlow = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeOpenFlow, _super);
    function EShapeActionRuntimeOpenFlow(value) {
        return _super.call(this, value, EShapeRuntimeReset.NONE) || this;
    }
    EShapeActionRuntimeOpenFlow.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var target = this.target(shape, time);
            if (target != null) {
                var container = this.toContainer(shape);
                if (container && ("opener" in container)) {
                    container.opener(target);
                }
            }
        }
    };
    return EShapeActionRuntimeOpenFlow;
}(EShapeActionRuntimeOpen));
export { EShapeActionRuntimeOpenFlow };
//# sourceMappingURL=e-shape-action-runtime-open-flow.js.map