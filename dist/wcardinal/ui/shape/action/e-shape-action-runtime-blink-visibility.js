/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
var EShapeActionRuntimeBlinkVisibility = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeBlinkVisibility, _super);
    function EShapeActionRuntimeBlinkVisibility(value) {
        return _super.call(this, value, EShapeRuntimeReset.VISIBILITY) || this;
    }
    EShapeActionRuntimeBlinkVisibility.prototype.toOn = function (shape, runtime) {
        shape.visible = true;
        runtime.written |= this.reset;
    };
    EShapeActionRuntimeBlinkVisibility.prototype.toOff = function (shape, runtime) {
        shape.visible = false;
        runtime.written |= this.reset;
    };
    return EShapeActionRuntimeBlinkVisibility;
}(EShapeActionRuntimeBlink));
export { EShapeActionRuntimeBlinkVisibility };
//# sourceMappingURL=e-shape-action-runtime-blink-visibility.js.map