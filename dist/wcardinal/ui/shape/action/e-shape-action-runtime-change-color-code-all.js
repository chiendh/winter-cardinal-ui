/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
var EShapeActionRuntimeChangeColorCodeAll = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorCodeAll, _super);
    function EShapeActionRuntimeChangeColorCodeAll(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR) || this;
    }
    EShapeActionRuntimeChangeColorCodeAll.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.setAll(shape, runtime, time, shape.fill, shape.stroke, shape.text, shape.text.outline, EShapeActionBases.toBaseFill(shape, runtime), EShapeActionBases.toBaseStroke(shape, runtime), EShapeActionBases.toBaseText(shape, runtime), EShapeActionBases.toBaseTextOutline(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorCodeAll;
}(EShapeActionRuntimeChangeColorCode));
export { EShapeActionRuntimeChangeColorCodeAll };
//# sourceMappingURL=e-shape-action-runtime-change-color-code-all.js.map