/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeOpenFlow } from "./e-shape-action-runtime-open-flow";
import { EShapeActionRuntimeOpenPage } from "./e-shape-action-runtime-open-page";
import { EShapeActionRuntimeOpenPageInplace } from "./e-shape-action-runtime-open-page-inplace";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueOpen = /** @class */ (function (_super) {
    __extends(EShapeActionValueOpen, _super);
    function EShapeActionValueOpen(subtype, condition, target) {
        var _this = _super.call(this, EShapeActionValueType.OPEN, condition, subtype) || this;
        _this.target = target;
        return _this;
    }
    EShapeActionValueOpen.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueOpen) &&
            this.target === value.target);
    };
    EShapeActionValueOpen.prototype.toRuntime = function () {
        switch (this.subtype) {
            case EShapeActionValueOpenType.FLOW:
                return new EShapeActionRuntimeOpenFlow(this);
            case EShapeActionValueOpenType.PAGE:
                return new EShapeActionRuntimeOpenPage(this);
            case EShapeActionValueOpenType.PAGE_INPLACE:
                return new EShapeActionRuntimeOpenPageInplace(this);
        }
    };
    EShapeActionValueOpen.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var targetId = manager.add(this.target);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "," + targetId + "]");
    };
    EShapeActionValueOpen.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var target = EShapeActionValues.toResource(3, serialized, manager.resources);
        return new EShapeActionValueOpen(serialized[2], condition, target);
    };
    return EShapeActionValueOpen;
}(EShapeActionValueSubtyped));
export { EShapeActionValueOpen };
//# sourceMappingURL=e-shape-action-value-open.js.map