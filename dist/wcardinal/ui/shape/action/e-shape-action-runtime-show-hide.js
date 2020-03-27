/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
var EShapeActionRuntimeShowHide = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeShowHide, _super);
    function EShapeActionRuntimeShowHide(value) {
        var _this = _super.call(this, value, EShapeRuntimeReset.VISIBILITY) || this;
        _this.visibility = (value.subtype === EShapeActionValueShowHideType.SHOW);
        return _this;
    }
    EShapeActionRuntimeShowHide.prototype.execute = function (shape, runtime, time) {
        if (!!this.condition(shape, time)) {
            shape.visible = this.visibility;
            runtime.written |= this.reset;
        }
    };
    return EShapeActionRuntimeShowHide;
}(EShapeActionRuntimeConditional));
export { EShapeActionRuntimeShowHide };
//# sourceMappingURL=e-shape-action-runtime-show-hide.js.map