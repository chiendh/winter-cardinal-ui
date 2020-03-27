/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
var EShapeActionRuntimeOpenPage = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeOpenPage, _super);
    function EShapeActionRuntimeOpenPage(value) {
        return _super.call(this, value, EShapeRuntimeReset.NONE) || this;
    }
    EShapeActionRuntimeOpenPage.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            var target = this.target(shape, time);
            if (target != null) {
                window.open(target);
            }
        }
    };
    return EShapeActionRuntimeOpenPage;
}(EShapeActionRuntimeOpen));
export { EShapeActionRuntimeOpenPage };
//# sourceMappingURL=e-shape-action-runtime-open-page.js.map