/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeEmitEvent } from "./e-shape-action-runtime-emit-event";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueEmitEvent = /** @class */ (function (_super) {
    __extends(EShapeActionValueEmitEvent, _super);
    function EShapeActionValueEmitEvent(condition, name) {
        var _this = _super.call(this, EShapeActionValueType.EMIT_EVENT, condition) || this;
        _this.name = name;
        return _this;
    }
    EShapeActionValueEmitEvent.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueEmitEvent) &&
            this.name === value.name);
    };
    EShapeActionValueEmitEvent.prototype.toRuntime = function () {
        return new EShapeActionRuntimeEmitEvent(this);
    };
    EShapeActionValueEmitEvent.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var nameId = manager.add(this.name);
        return manager.add("[" + this.type + "," + conditionId + "," + nameId + "]");
    };
    EShapeActionValueEmitEvent.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var name = EShapeActionValues.toResource(2, serialized, manager.resources);
        return new EShapeActionValueEmitEvent(condition, name);
    };
    return EShapeActionValueEmitEvent;
}(EShapeActionValueBase));
export { EShapeActionValueEmitEvent };
//# sourceMappingURL=e-shape-action-value-emit-event.js.map