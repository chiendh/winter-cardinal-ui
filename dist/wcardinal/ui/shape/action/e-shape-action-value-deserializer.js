/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isArray } from "../../util/is-array";
import { isNumber } from "../../util/is-number";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";
import { EShapeActionValueChangeColor } from "./e-shape-action-value-change-color";
import { EShapeActionValueChangeColorBrightness } from "./e-shape-action-value-change-color-brightness";
import { EShapeActionValueChangeColorCode } from "./e-shape-action-value-change-color-code";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeCursor } from "./e-shape-action-value-change-cursor";
import { EShapeActionValueChangeText } from "./e-shape-action-value-change-text";
import { EShapeActionValueEmitEvent } from "./e-shape-action-value-emit-event";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";
import { EShapeActionValueShowHide } from "./e-shape-action-value-show-hide";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";
import { EShapeActionValueTransformResize } from "./e-shape-action-value-transform-resize";
import { EShapeActionValueTransformRotate } from "./e-shape-action-value-transform-rotate";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";
var EShapeActionValueDeserializer = /** @class */ (function () {
    function EShapeActionValueDeserializer() {
    }
    EShapeActionValueDeserializer.toSerialized = function (resource) {
        try {
            var parsed = JSON.parse(resource);
            if (isArray(parsed)) {
                for (var i = 0, imax = parsed.length; i < imax; ++i) {
                    if (!isNumber(parsed[i])) {
                        return null;
                    }
                }
                if (2 <= parsed.length) {
                    return parsed;
                }
            }
            return null;
        }
        catch (e) {
            return null;
        }
    };
    EShapeActionValueDeserializer.deserialize = function (id, manager) {
        var actions = manager.actions;
        var action = actions.get(id);
        if (action != null) {
            return action;
        }
        var resources = manager.resources;
        var resource = resources[id];
        if (resource != null) {
            var serialized = this.toSerialized(resource);
            if (serialized != null) {
                switch (serialized[0]) {
                    case EShapeActionValueType.SHOW_HIDE:
                        return EShapeActionValueShowHide.deserialize(serialized, manager);
                    case EShapeActionValueType.BLINK:
                        return EShapeActionValueBlink.deserialize(serialized, manager);
                    case EShapeActionValueType.CHANGE_COLOR:
                        switch (serialized[3]) {
                            case EShapeActionValueChangeColorTarget.COLOR_AND_ALPHA:
                            case EShapeActionValueChangeColorTarget.COLOR:
                            case EShapeActionValueChangeColorTarget.ALPHA:
                                return EShapeActionValueChangeColor.deserialize(serialized, manager);
                            case EShapeActionValueChangeColorTarget.CODE:
                                return EShapeActionValueChangeColorCode.deserialize(serialized, manager);
                            case EShapeActionValueChangeColorTarget.BRIGHTNESS:
                                return EShapeActionValueChangeColorBrightness.deserialize(serialized, manager);
                        }
                    case EShapeActionValueType.CHANGE_TEXT:
                        return EShapeActionValueChangeText.deserialize(serialized, manager);
                    case EShapeActionValueType.CHANGE_CURSOR:
                        return EShapeActionValueChangeCursor.deserialize(serialized, manager);
                    case EShapeActionValueType.EMIT_EVENT:
                        return EShapeActionValueEmitEvent.deserialize(serialized, manager);
                    case EShapeActionValueType.OPEN:
                        return EShapeActionValueOpen.deserialize(serialized, manager);
                    case EShapeActionValueType.TRANSFORM:
                        switch (serialized[2]) {
                            case EShapeActionValueTransformType.MOVE:
                                return EShapeActionValueTransformMove.deserialize(serialized, manager);
                            case EShapeActionValueTransformType.RESIZE:
                                return EShapeActionValueTransformResize.deserialize(serialized, manager);
                            case EShapeActionValueTransformType.ROTATE:
                                return EShapeActionValueTransformRotate.deserialize(serialized, manager);
                        }
                        break;
                    case EShapeActionValueType.MISC:
                        return EShapeActionValueMisc.deserialize(serialized, manager);
                }
            }
        }
        return new EShapeActionValueShowHide(EShapeActionValueShowHideType.SHOW, "");
    };
    return EShapeActionValueDeserializer;
}());
export { EShapeActionValueDeserializer };
//# sourceMappingURL=e-shape-action-value-deserializer.js.map