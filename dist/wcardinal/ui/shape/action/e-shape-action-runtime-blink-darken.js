/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { UtilRgb } from "../../util/util-rgb";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
var EShapeActionRuntimeBlinkDarken = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeBlinkDarken, _super);
    function EShapeActionRuntimeBlinkDarken(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR) || this;
    }
    EShapeActionRuntimeBlinkDarken.prototype.toOn = function (shape, runtime) {
        var fill = EShapeActionBases.toBaseFill(shape, runtime);
        shape.fill.set(undefined, UtilRgb.darken(fill.color, 0.5), fill.alpha);
        var stroke = EShapeActionBases.toBaseStroke(shape, runtime);
        shape.stroke.set(undefined, UtilRgb.darken(stroke.color, 0.5), stroke.alpha);
        var text = EShapeActionBases.toBaseText(shape, runtime);
        shape.text.set(undefined, UtilRgb.darken(text.color, 0.5), text.alpha);
        var outline = EShapeActionBases.toBaseTextOutline(shape, runtime);
        shape.text.outline.set(undefined, UtilRgb.darken(outline.color, 0.5), outline.alpha);
        runtime.written |= this.reset;
    };
    return EShapeActionRuntimeBlinkDarken;
}(EShapeActionRuntimeBlink));
export { EShapeActionRuntimeBlinkDarken };
//# sourceMappingURL=e-shape-action-runtime-blink-darken.js.map