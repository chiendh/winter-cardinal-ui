/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DBaseState } from "./d-base-state";
var DButtonGroup = /** @class */ (function (_super) {
    __extends(DButtonGroup, _super);
    function DButtonGroup(options) {
        var _this = _super.call(this) || this;
        _this._buttons = [];
        _this._active = null;
        _this._stateOn = DBaseState.NONE;
        _this._stateOff = DBaseState.NONE;
        _this._onActiveBound = function (button) {
            _this.onActive(button);
        };
        // Events
        if (options != null) {
            var on = options.on;
            if (on != null) {
                for (var name_1 in on) {
                    _this.on(name_1, on[name_1]);
                }
            }
        }
        // Done
        _this.emit("init", _this);
        return _this;
    }
    DButtonGroup.prototype.add = function (button) {
        var buttons = this._buttons;
        var index = buttons.indexOf(button);
        if (index < 0) {
            this._buttons.push(button);
            button.setState(this._stateOn, true);
            button.setState(this._stateOff, false);
            button.on("active", this._onActiveBound);
            if (button.isActive()) {
                this.onActive(button);
            }
        }
    };
    Object.defineProperty(DButtonGroup.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    DButtonGroup.prototype.onActive = function (active) {
        if (active.isToggle()) {
            this._active = active;
            var buttons = this._buttons;
            for (var i = 0, imax = buttons.length; i < imax; ++i) {
                var button = buttons[i];
                if (button !== active && button.isToggle() && button.isActive()) {
                    button.toggle();
                }
            }
        }
    };
    DButtonGroup.prototype.remove = function (button) {
        var buttons = this._buttons;
        var index = buttons.indexOf(button);
        if (0 <= index) {
            buttons.splice(index, 1);
            button.off("active", this._onActiveBound);
        }
    };
    DButtonGroup.prototype.contains = function (button) {
        var buttons = this._buttons;
        var index = buttons.indexOf(button);
        return (0 <= index);
    };
    DButtonGroup.prototype.setHovered = function (isHovered) {
        return this.setState(DBaseState.HOVERED, isHovered);
    };
    DButtonGroup.prototype.setActive = function (isActive) {
        return this.setState(DBaseState.ACTIVE, isActive);
    };
    DButtonGroup.prototype.setReadOnly = function (isReadOnly) {
        return this.setState(DBaseState.READ_ONLY, isReadOnly);
    };
    DButtonGroup.prototype.setDisabled = function (isDisabled) {
        return this.setState(DBaseState.DISABLED, isDisabled);
    };
    DButtonGroup.prototype.setDragging = function (isDragging) {
        return this.setState(DBaseState.DRAGGING, isDragging);
    };
    DButtonGroup.prototype.isHovered = function () {
        return this.hasState(DBaseState.HOVERED);
    };
    DButtonGroup.prototype.isActive = function () {
        return this.hasState(DBaseState.ACTIVE);
    };
    DButtonGroup.prototype.isReadOnly = function () {
        return this.hasState(DBaseState.READ_ONLY);
    };
    DButtonGroup.prototype.isDisabled = function () {
        return this.hasState(DBaseState.DISABLED);
    };
    DButtonGroup.prototype.isDragging = function () {
        return this.hasState(DBaseState.DRAGGING);
    };
    DButtonGroup.prototype.isFocused = function () {
        return this.hasState(DBaseState.FOCUSED);
    };
    DButtonGroup.prototype.isUnfocusable = function () {
        return this.hasState(DBaseState.UNFOCUSABLE);
    };
    DButtonGroup.prototype.setState = function (state, isOn) {
        if (isOn) {
            this._stateOn |= state;
            this._stateOff &= ~state;
        }
        else {
            this._stateOff |= state;
            this._stateOn &= ~state;
        }
        var buttons = this._buttons;
        for (var i = 0, imax = buttons.length; i < imax; ++i) {
            var button = buttons[i];
            button.setState(state, isOn);
        }
        return this;
    };
    DButtonGroup.prototype.hasState = function (state) {
        var buttons = this._buttons;
        for (var i = 0, imax = buttons.length; i < imax; ++i) {
            if (buttons[i].hasState(state)) {
                return true;
            }
        }
        return false;
    };
    DButtonGroup.prototype.clear = function () {
        this._buttons.length = 0;
    };
    DButtonGroup.prototype.destroy = function () {
        this.clear();
    };
    return DButtonGroup;
}(utils.EventEmitter));
export { DButtonGroup };
//# sourceMappingURL=d-button-group.js.map