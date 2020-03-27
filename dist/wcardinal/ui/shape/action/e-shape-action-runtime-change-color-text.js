/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeChangeColor } from "./e-shape-action-runtime-change-color";
var EShapeActionRuntimeChangeColorText = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeChangeColorText, _super);
    function EShapeActionRuntimeChangeColorText(value) {
        return _super.call(this, value, EShapeRuntimeReset.COLOR_TEXT) || this;
    }
    EShapeActionRuntimeChangeColorText.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            this.set(shape, runtime, time, shape.text, EShapeActionBases.toBaseText(shape, runtime));
        }
    };
    return EShapeActionRuntimeChangeColorText;
}(EShapeActionRuntimeChangeColor));
export { EShapeActionRuntimeChangeColorText };
//# sourceMappingURL=e-shape-action-runtime-change-color-text.js.map