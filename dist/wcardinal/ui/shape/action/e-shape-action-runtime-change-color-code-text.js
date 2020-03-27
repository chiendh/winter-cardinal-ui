/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColorCode } from "./e-shape-action-runtime-change-color-code";
var EShapeActionRuntimeChangeColorCodeText = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorCodeText, _super);
    function EShapeActionRuntimeChangeColorCodeText(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_TEXT) || this;
    }
    EShapeActionRuntimeChangeColorCodeText.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.text, EShapeActionBases.toBaseText(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorCodeText;
}(EShapeActionRuntimeChangeColorCode));
export { EShapeActionRuntimeChangeColorCodeText };
//# sourceMappingURL=e-shape-action-runtime-change-color-code-text.js.map