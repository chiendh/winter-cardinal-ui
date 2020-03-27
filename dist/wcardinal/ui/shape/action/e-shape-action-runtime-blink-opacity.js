/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
var EShapeActionRuntimeBlinkOpacity = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeBlinkOpacity, _super);
    function EShapeActionRuntimeBlinkOpacity(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_FILL_AND_STROKE) || this;
    }
    EShapeActionRuntimeBlinkOpacity.prototype.toOn = function (shape, runtime) {
        var fill = EShapeActionBases.toBaseFill(shape, runtime);
        shape.fill.set(undefined, fill.color, fill.alpha * 0.5);
        var stroke = EShapeActionBases.toBaseStroke(shape, runtime);
        shape.stroke.set(undefined, stroke.color, stroke.alpha * 0.5);
        runtime.written |= this.reset;
    };
    return EShapeActionRuntimeBlinkOpacity;
}(EShapeActionRuntimeBlink));
export { EShapeActionRuntimeBlinkOpacity };
//# sourceMappingURL=e-shape-action-runtime-blink-opacity.js.map