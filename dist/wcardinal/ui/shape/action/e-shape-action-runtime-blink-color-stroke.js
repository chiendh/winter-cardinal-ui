/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
var EShapeActionRuntimeBlinkColorStroke = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeBlinkColorStroke, _super);
    function EShapeActionRuntimeBlinkColorStroke(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.COLOR_STROKE) || this;
        _this.color = value.color;
        _this.alpha = value.alpha;
        return _this;
    }
    EShapeActionRuntimeBlinkColorStroke.prototype.toOn = function (shape, runtime) {
        shape.stroke.set(undefined, this.color, this.alpha);
        runtime.written |= this.reset;
    };
    return EShapeActionRuntimeBlinkColorStroke;
}(EShapeActionRuntimeBlink));
export { EShapeActionRuntimeBlinkColorStroke };
//# sourceMappingURL=e-shape-action-runtime-blink-color-stroke.js.map