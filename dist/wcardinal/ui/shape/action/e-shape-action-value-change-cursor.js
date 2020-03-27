/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeChangeCursor } from "./e-shape-action-runtime-change-cursor";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueChangeCursor = /** @class */ (function (_super) {
    __extends(EShapeActionValueChangeCursor, _super);
    function EShapeActionValueChangeCursor(condition, name) {
        var _this = _super.call(this, EShapeActionValueType.CHANGE_CURSOR, condition) || this;
        _this.name = name;
        return _this;
    }
    EShapeActionValueChangeCursor.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueChangeCursor) &&
            this.name === value.name);
    };
    EShapeActionValueChangeCursor.prototype.toRuntime = function () {
        return new EShapeActionRuntimeChangeCursor(this);
    };
    EShapeActionValueChangeCursor.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var nameId = manager.add(this.name);
        return manager.add("[" + this.type + "," + conditionId + "," + nameId + "]");
    };
    EShapeActionValueChangeCursor.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var name = EShapeActionValues.toResource(2, serialized, manager.resources);
        return new EShapeActionValueChangeCursor(condition, name);
    };
    return EShapeActionValueChangeCursor;
}(EShapeActionValueBase));
export { EShapeActionValueChangeCursor };
//# sourceMappingURL=e-shape-action-value-change-cursor.js.map