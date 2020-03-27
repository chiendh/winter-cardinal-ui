/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
var EShapeActionRuntimeBlinkColorFill = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeBlinkColorFill, _super);
    function EShapeActionRuntimeBlinkColorFill(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.COLOR_FILL) || this;
        _this.color = value.color;
        _this.alpha = value.alpha;
        return _this;
    }
    EShapeActionRuntimeBlinkColorFill.prototype.toOn = function (shape, runtime) {
        shape.fill.set(undefined, this.color, this.alpha);
        runtime.written |= this.reset;
    };
    return EShapeActionRuntimeBlinkColorFill;
}(EShapeActionRuntimeBlink));
export { EShapeActionRuntimeBlinkColorFill };
//# sourceMappingURL=e-shape-action-runtime-blink-color-fill.js.map