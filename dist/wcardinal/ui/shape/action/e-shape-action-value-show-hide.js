/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeShowHide } from "./e-shape-action-runtime-show-hide";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueShowHide = /** @class */ (function (_super) {
    __extends(EShapeActionValueShowHide, _super);
    function EShapeActionValueShowHide(subtype, condition) {
        return _super.call(this, EShapeActionValueType.SHOW_HIDE, condition, subtype) || this;
    }
    EShapeActionValueShowHide.prototype.toRuntime = function () {
        return new EShapeActionRuntimeShowHide(this);
    };
    EShapeActionValueShowHide.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "]");
    };
    EShapeActionValueShowHide.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        return new EShapeActionValueShowHide(serialized[2], condition);
    };
    return EShapeActionValueShowHide;
}(EShapeActionValueSubtyped));
export { EShapeActionValueShowHide };
//# sourceMappingURL=e-shape-action-value-show-hide.js.map