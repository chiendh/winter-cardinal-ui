/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
var DControllerKeyboard = /** @class */ (function (_super) {
    __extends(DControllerKeyboard, _super);
    function DControllerKeyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DControllerKeyboard.prototype.init = function (element, stage, focusController) {
        var _this = this;
        element.addEventListener("keydown", function (e) {
            _this.emit("keydown", e);
            var focused = focusController.getFocused();
            if (focused != null) {
                var current = focused;
                while (current != null) {
                    if (_this.hasOnKeyDown(current)) {
                        if (current.onKeyDown(e)) {
                            return;
                        }
                    }
                    current = current.parent;
                }
            }
            if (UtilKeyboardEvent.isFocusKey(e)) {
                var direction = UtilKeyboardEvent.getFocusDirection(e);
                var next = (focused != null ?
                    focusController.findFocusable(focused, false, focused.hasState(DBaseState.FOCUS_ROOT) || direction, direction) :
                    focusController.findFocusable(stage, false, true, direction));
                if (next != null) {
                    focusController.setFocused(next, true, true);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            }
        });
        element.addEventListener("keyup", function (e) {
            _this.emit("keyup", e);
            var focused = focusController.getFocused();
            if (focused != null) {
                var current = focused;
                while (current != null) {
                    if (_this.hasOnKeyUp(current)) {
                        if (current.onKeyUp(e)) {
                            return;
                        }
                    }
                    current = current.parent;
                }
            }
        });
    };
    DControllerKeyboard.prototype.hasOnKeyDown = function (target) {
        return "onKeyDown" in target;
    };
    DControllerKeyboard.prototype.hasOnKeyUp = function (target) {
        return "onKeyUp" in target;
    };
    return DControllerKeyboard;
}(utils.EventEmitter));
export { DControllerKeyboard };
//# sourceMappingURL=d-controller-keyboard.js.map