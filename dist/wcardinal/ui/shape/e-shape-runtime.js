/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point } from "pixi.js";
import { DApplications } from "../d-applications";
import { UtilKeyboardEvent } from "../util/util-keyboard-event";
export var EShapeRuntimeReset;
(function (EShapeRuntimeReset) {
    EShapeRuntimeReset[EShapeRuntimeReset["NONE"] = 0] = "NONE";
    EShapeRuntimeReset[EShapeRuntimeReset["POSITION_X"] = 1] = "POSITION_X";
    EShapeRuntimeReset[EShapeRuntimeReset["POSITION_Y"] = 2] = "POSITION_Y";
    EShapeRuntimeReset[EShapeRuntimeReset["POSITION"] = 3] = "POSITION";
    EShapeRuntimeReset[EShapeRuntimeReset["ROTATION"] = 4] = "ROTATION";
    EShapeRuntimeReset[EShapeRuntimeReset["COLOR_FILL"] = 8] = "COLOR_FILL";
    EShapeRuntimeReset[EShapeRuntimeReset["COLOR_STROKE"] = 16] = "COLOR_STROKE";
    EShapeRuntimeReset[EShapeRuntimeReset["COLOR_FILL_AND_STROKE"] = 24] = "COLOR_FILL_AND_STROKE";
    EShapeRuntimeReset[EShapeRuntimeReset["COLOR_TEXT"] = 32] = "COLOR_TEXT";
    EShapeRuntimeReset[EShapeRuntimeReset["COLOR_TEXT_OUTLINE"] = 64] = "COLOR_TEXT_OUTLINE";
    EShapeRuntimeReset[EShapeRuntimeReset["COLOR"] = 120] = "COLOR";
    EShapeRuntimeReset[EShapeRuntimeReset["VISIBILITY"] = 128] = "VISIBILITY";
    EShapeRuntimeReset[EShapeRuntimeReset["HEIGHT"] = 256] = "HEIGHT";
    EShapeRuntimeReset[EShapeRuntimeReset["WIDTH"] = 512] = "WIDTH";
    EShapeRuntimeReset[EShapeRuntimeReset["SIZE"] = 768] = "SIZE";
    EShapeRuntimeReset[EShapeRuntimeReset["TEXT"] = 1024] = "TEXT";
    EShapeRuntimeReset[EShapeRuntimeReset["CURSOR"] = 2048] = "CURSOR";
})(EShapeRuntimeReset || (EShapeRuntimeReset = {}));
export var EShapeRuntimeState;
(function (EShapeRuntimeState) {
    EShapeRuntimeState[EShapeRuntimeState["NONE"] = 0] = "NONE";
    EShapeRuntimeState[EShapeRuntimeState["CHANGED"] = 1] = "CHANGED";
    EShapeRuntimeState[EShapeRuntimeState["CLICKED"] = 2] = "CLICKED";
    EShapeRuntimeState[EShapeRuntimeState["DOWN"] = 4] = "DOWN";
    EShapeRuntimeState[EShapeRuntimeState["UP"] = 8] = "UP";
    EShapeRuntimeState[EShapeRuntimeState["PRESSED"] = 16] = "PRESSED";
    EShapeRuntimeState[EShapeRuntimeState["PERSISTENT"] = 16] = "PERSISTENT";
})(EShapeRuntimeState || (EShapeRuntimeState = {}));
var EShapeRuntime = /** @class */ (function () {
    function EShapeRuntime(shape) {
        var transform = shape.transform;
        var position = transform.position;
        this.x = position.x;
        this.y = position.y;
        this.size = new Point(shape.size.x, shape.size.y);
        this.rotation = transform.rotation;
        this.actions = [];
        this.fill = shape.fill.toObject();
        this.stroke = shape.stroke.toObject();
        this.text = shape.text.toObject();
        this.cursor = shape.cursor;
        this.reset = EShapeRuntimeReset.NONE;
        this.written = EShapeRuntimeReset.NONE;
        this.effect = NaN;
        this.state = EShapeRuntimeState.NONE;
        this.interactive = false;
    }
    EShapeRuntime.prototype.onPointerClick = function (shape, e) {
        if (!shape.disabled) {
            if (!(this.state & EShapeRuntimeState.CLICKED)) {
                this.state |= EShapeRuntimeState.CHANGED | EShapeRuntimeState.CLICKED;
                DApplications.update(shape);
            }
        }
    };
    EShapeRuntime.prototype.onPointerDblClick = function (shape, e) {
        return false;
    };
    EShapeRuntime.prototype.onPointerOver = function (shape, e) {
        shape.hovered = true;
    };
    EShapeRuntime.prototype.onPointerOut = function (shape, e) {
        shape.hovered = false;
    };
    EShapeRuntime.prototype.onPointerDown = function (shape, e) {
        var layer = DApplications.getLayer(shape);
        if (!(this.state & EShapeRuntimeState.DOWN)) {
            this.state |= EShapeRuntimeState.CHANGED | EShapeRuntimeState.DOWN | EShapeRuntimeState.PRESSED;
            if (layer) {
                layer.update();
            }
        }
        if (layer) {
            var focusController = layer.getFocusController();
            focusController.setFocused(focusController.findFocusableParent(shape), true, true);
        }
    };
    EShapeRuntime.prototype.onPointerUp = function (shape, e) {
        if (!(this.state & EShapeRuntimeState.UP)) {
            this.state |= EShapeRuntimeState.CHANGED | EShapeRuntimeState.UP;
            this.state &= ~EShapeRuntimeState.PRESSED;
            DApplications.update(shape);
        }
    };
    EShapeRuntime.prototype.onPointerMove = function (shape, e) {
        //
    };
    EShapeRuntime.prototype.onKeyDown = function (shape, e) {
        if (UtilKeyboardEvent.isActivateKey(e)) {
            this.onPointerDown(shape);
        }
        return false;
    };
    EShapeRuntime.prototype.onKeyUp = function (shape, e) {
        if (UtilKeyboardEvent.isActivateKey(e)) {
            this.onPointerUp(shape);
            this.onPointerClick(shape);
        }
        return false;
    };
    EShapeRuntime.prototype.onStateChange = function (shape, newState, oldState) {
        this.state |= EShapeRuntimeState.CHANGED;
        DApplications.update(shape);
    };
    EShapeRuntime.prototype.update = function (shape, time) {
        var tag = shape.tag;
        var isEffectTimeUp = (this.effect <= time);
        if (tag.isChanged || (this.state & EShapeRuntimeState.CHANGED) || isEffectTimeUp) {
            if (isEffectTimeUp) {
                this.effect = NaN;
            }
            shape.disallowUploadedUpdate();
            this.onUpdate(shape, time);
            shape.allowUploadedUpdate();
            this.state &= EShapeRuntimeState.PERSISTENT;
            tag.isChanged = false;
        }
    };
    EShapeRuntime.prototype.onUpdate = function (shape, time) {
        if (0 < this.actions.length) {
            this.executeActions(shape, time);
            this.resetUnwrittenProperties(shape);
        }
    };
    EShapeRuntime.prototype.executeActions = function (shape, time) {
        this.written = EShapeRuntimeReset.NONE;
        var actions = this.actions;
        for (var i = 0, imax = actions.length; i < imax; ++i) {
            actions[i].execute(shape, this, time);
        }
    };
    EShapeRuntime.prototype.resetUnwrittenProperties = function (shape) {
        var target = (~this.written) & this.reset;
        if (target !== EShapeRuntimeReset.NONE) {
            if (target & EShapeRuntimeReset.POSITION_X) {
                shape.transform.position.x = this.x;
            }
            if (target & EShapeRuntimeReset.POSITION_Y) {
                shape.transform.position.y = this.y;
            }
            if (target & EShapeRuntimeReset.VISIBILITY) {
                shape.visible = true;
            }
            if (target & EShapeRuntimeReset.COLOR_FILL) {
                var fill = this.fill;
                shape.fill.set(undefined, fill.color, fill.alpha);
            }
            if (target & EShapeRuntimeReset.COLOR_STROKE) {
                var stroke = this.stroke;
                shape.stroke.set(undefined, stroke.color, stroke.alpha);
            }
            if (target & EShapeRuntimeReset.COLOR_TEXT) {
                var text = this.text;
                shape.text.set(undefined, text.color, text.alpha);
            }
            if (target & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
                var outline = this.text.outline;
                shape.text.outline.set(undefined, outline.color, outline.alpha);
            }
            if (target & EShapeRuntimeReset.HEIGHT) {
                shape.size.y = this.size.y;
            }
            if (target & EShapeRuntimeReset.WIDTH) {
                shape.size.x = this.size.x;
            }
            if (target & EShapeRuntimeReset.ROTATION) {
                shape.transform.rotation = this.rotation;
            }
            if (target & EShapeRuntimeReset.TEXT) {
                shape.text.value = this.text.value;
            }
            if (target & EShapeRuntimeReset.CURSOR) {
                shape.cursor = this.cursor;
            }
        }
    };
    return EShapeRuntime;
}());
export { EShapeRuntime };
//# sourceMappingURL=e-shape-runtime.js.map