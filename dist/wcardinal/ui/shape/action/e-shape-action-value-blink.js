/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntimeBlinkBrighten } from "./e-shape-action-runtime-blink-brighten";
import { EShapeActionRuntimeBlinkColorFill } from "./e-shape-action-runtime-blink-color-fill";
import { EShapeActionRuntimeBlinkColorStroke } from "./e-shape-action-runtime-blink-color-stroke";
import { EShapeActionRuntimeBlinkDarken } from "./e-shape-action-runtime-blink-darken";
import { EShapeActionRuntimeBlinkOpacity } from "./e-shape-action-runtime-blink-opacity";
import { EShapeActionRuntimeBlinkVisibility } from "./e-shape-action-runtime-blink-visibility";
import { EShapeActionValueBlinkType } from "./e-shape-action-value-blink-type";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";
import { EShapeActionValues } from "./e-shape-action-values";
var EShapeActionValueBlink = /** @class */ (function (_super) {
    __extends(EShapeActionValueBlink, _super);
    function EShapeActionValueBlink(subtype, condition, interval, color, alpha) {
        var _this = _super.call(this, EShapeActionValueType.BLINK, condition, subtype) || this;
        _this.interval = interval;
        _this.color = color;
        _this.alpha = alpha;
        return _this;
    }
    EShapeActionValueBlink.prototype.isEquals = function (value) {
        return (_super.prototype.isEquals.call(this, value) &&
            (value instanceof EShapeActionValueBlink) &&
            this.interval === value.interval &&
            this.color === value.color &&
            this.alpha === value.alpha);
    };
    EShapeActionValueBlink.prototype.toRuntime = function () {
        switch (this.subtype) {
            case EShapeActionValueBlinkType.BRIGHTEN:
                return new EShapeActionRuntimeBlinkBrighten(this);
            case EShapeActionValueBlinkType.COLOR_FILL:
                return new EShapeActionRuntimeBlinkColorFill(this);
            case EShapeActionValueBlinkType.COLOR_STROKE:
                return new EShapeActionRuntimeBlinkColorStroke(this);
            case EShapeActionValueBlinkType.DARKEN:
                return new EShapeActionRuntimeBlinkDarken(this);
            case EShapeActionValueBlinkType.OPACITY:
                return new EShapeActionRuntimeBlinkOpacity(this);
            case EShapeActionValueBlinkType.VISIBILITY:
                return new EShapeActionRuntimeBlinkVisibility(this);
        }
    };
    EShapeActionValueBlink.prototype.serialize = function (manager) {
        var conditionId = manager.add(this.condition);
        return manager.add("[" + this.type + "," + conditionId + "," + this.subtype + "," + this.interval + "," + this.color + "," + this.alpha + "]");
    };
    EShapeActionValueBlink.deserialize = function (serialized, manager) {
        var condition = EShapeActionValues.toResource(1, serialized, manager.resources);
        return new EShapeActionValueBlink(serialized[2], condition, serialized[3], serialized[4], serialized[5]);
    };
    return EShapeActionValueBlink;
}(EShapeActionValueSubtyped));
export { EShapeActionValueBlink };
//# sourceMappingURL=e-shape-action-value-blink.js.map