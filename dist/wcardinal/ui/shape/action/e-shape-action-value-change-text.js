/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeChangeTextNumber } from "./e-shape-action-runtime-change-text-number";
import { EShapeActionRuntimeChangeTextText } from "./e-shape-action-runtime-change-text-text";
import { EShapeActionValueChangeTextType } from "./e-shape-action-value-change-text-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueChangeText = /** @class */ (function (_super) {
    __extends(EShapeActionValueChangeText, _super);
    function EShapeActionValueChangeText(subtype, condition, value) {
        var _this = _super.call(this, EShapeActionValueType.CHANGE_TEXT, condition, subtype) || this;
        _this.value = value;
        return _this;
    }
    EShapeActionValueChangeText.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueChangeText) &&
            this.value === value.value);
    };
    EShapeActionValueChangeText.prototype.toRuntime = function (shape) {
        switch (this.subtype) {
            case EShapeActionValueChangeTextType.TEXT:
                return new EShapeActionRuntimeChangeTextText(this);
            case EShapeActionValueChangeTextType.NUMBER:
                return new EShapeActionRuntimeChangeTextNumber(this, shape.text.value);
        }
    };
    EShapeActionValueChangeText.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        var valueId = manager.add(this.value);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "," + valueId + "]");
    };
    EShapeActionValueChangeText.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        var value = EShapeActionValues.toResource(3, serialized, manager.resources);
        return new EShapeActionValueChangeText(serialized[2], condition, value);
    };
    return EShapeActionValueChangeText;
}(EShapeActionValueSubtyped));
export { EShapeActionValueChangeText };
//# sourceMappingURL=e-shape-action-value-change-text.js.map