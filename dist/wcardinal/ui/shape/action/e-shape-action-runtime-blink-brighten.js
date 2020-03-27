/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { UtilRgb } from "../../util/util-rgb";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
var EShapeActionRuntimeBlinkBrighten = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeBlinkBrighten, _super);
    function EShapeActionRuntimeBlinkBrighten(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR) || this;
    }
    EShapeActionRuntimeBlinkBrighten.prototype.toOn = function (shape, runtime) {
        var fill = EShapeActionBases.toBaseFill(shape, runtime);
        shape.fill.set(undefined, UtilRgb.brighten(fill.color, 0.5), fill.alpha);
        var stroke = EShapeActionBases.toBaseStroke(shape, runtime);
        shape.stroke.set(undefined, UtilRgb.brighten(stroke.color, 0.5), stroke.alpha);
        var text = EShapeActionBases.toBaseText(shape, runtime);
        shape.text.set(undefined, UtilRgb.brighten(text.color, 0.5), text.alpha);
        var outline = EShapeActionBases.toBaseTextOutline(shape, runtime);
        shape.text.outline.set(undefined, UtilRgb.brighten(outline.color, 0.5), outline.alpha);
        runtime.written |= this.reset;
    };
    return EShapeActionRuntimeBlinkBrighten;
}(EShapeActionRuntimeBlink));
export { EShapeActionRuntimeBlinkBrighten };
//# sourceMappingURL=e-shape-action-runtime-blink-brighten.js.map