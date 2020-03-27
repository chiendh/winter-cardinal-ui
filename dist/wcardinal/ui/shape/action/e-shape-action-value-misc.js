/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeMiscInput } from "./e-shape-action-runtime-misc-input";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueMisc = /** @class */ (function (_super) {
    __extends(EShapeActionValueMisc, _super);
    function EShapeActionValueMisc(subtype, condition) {
        return _super.call(this, EShapeActionValueType.MISC, condition, subtype) || this;
    }
    EShapeActionValueMisc.prototype.toRuntime = function (shape) {
        switch (this.subtype) {
            case EShapeActionValueMiscType.INPUT:
                return new EShapeActionRuntimeMiscInput();
        }
    };
    EShapeActionValueMisc.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "]");
    };
    EShapeActionValueMisc.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        return new EShapeActionValueMisc(serialized[2], condition);
    };
    return EShapeActionValueMisc;
}(EShapeActionValueSubtyped));
export { EShapeActionValueMisc };
//# sourceMappingURL=e-shape-action-value-misc.js.map