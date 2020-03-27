/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DApplications } from "./d-applications";
import { DBaseStates } from "./d-base-states";
import { DImageBase } from "./d-image-base";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
// Option parser
var isToggle = function (theme, options) {
    if (options != null && options.toggle != null) {
        return options.toggle;
    }
    return theme.isToggle();
};
var DButtonBase = /** @class */ (function (_super) {
    __extends(DButtonBase, _super);
    function DButtonBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DButtonBase.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.buttonMode = true;
        this._isToggle = isToggle(this.theme, options);
        // Event handlers
        this.initOnClick(options);
        if (!this._isToggle) {
            this.initOnPress(options);
        }
        // Group
        var group = options && options.group;
        if (group) {
            group.add(this);
        }
    };
    DButtonBase.prototype.onShortcut = function (e) {
        _super.prototype.onShortcut.call(this, e);
        this.onClick(e);
    };
    DButtonBase.prototype.isToggle = function () {
        return this._isToggle;
    };
    DButtonBase.prototype.initOnClick = function (options) {
        var _this = this;
        UtilPointerEvent.onClick(this, function (e) {
            _this.onClick(e);
        });
    };
    DButtonBase.prototype.initOnPress = function (options) {
        var _this = this;
        var interactionManager = null;
        var onUp = function () {
            _this.setPressed(false);
            if (interactionManager != null) {
                interactionManager.off(UtilPointerEvent.up, onUp);
                interactionManager = null;
            }
        };
        this.on(UtilPointerEvent.down, function () {
            _this.setPressed(true);
            var layer = DApplications.getLayer(_this);
            if (layer) {
                interactionManager = layer.renderer.plugins.interaction;
                interactionManager.on(UtilPointerEvent.up, onUp);
            }
        });
    };
    DButtonBase.prototype.onStateChange = function (newState, oldState) {
        _super.prototype.onStateChange.call(this, newState, oldState);
        this.buttonMode = DBaseStates.isActionable(newState);
    };
    DButtonBase.prototype.getType = function () {
        return "DButton";
    };
    DButtonBase.prototype.onClick = function (e) {
        if (this.isActionable()) {
            if (this.isToggle()) {
                this.onToggleStart();
                this.onToggleEnd();
            }
            else {
                this.onActivate(e);
            }
        }
    };
    DButtonBase.prototype.onActivate = function (e) {
        this.emit("active", this);
    };
    DButtonBase.prototype.toggle = function () {
        if (this.isActionable()) {
            if (this.isToggle()) {
                this.onToggleStart();
                this.onToggleEnd();
            }
        }
    };
    DButtonBase.prototype.onToggleStart = function () {
        this.setActive(!this.isActive());
    };
    DButtonBase.prototype.onToggleEnd = function () {
        this.emit(this.isActive() ? "active" : "inactive", this);
    };
    DButtonBase.prototype.onActivateKeyDown = function (e) {
        if (this.isActionable()) {
            if (this.isToggle()) {
                this.onToggleStart();
            }
            else {
                this.setPressed(true);
            }
        }
    };
    DButtonBase.prototype.onActivateKeyUp = function (e) {
        if (this.isActionable()) {
            if (this.isToggle()) {
                this.onToggleEnd();
            }
            else {
                if (this.isPressed()) {
                    this.onActivate(e);
                }
                this.setPressed(false);
            }
        }
    };
    DButtonBase.prototype.onKeyDown = function (e) {
        if (UtilKeyboardEvent.isActivateKey(e)) {
            this.onActivateKeyDown(e);
        }
        return _super.prototype.onKeyDown.call(this, e);
    };
    DButtonBase.prototype.onKeyUp = function (e) {
        if (UtilKeyboardEvent.isActivateKey(e)) {
            this.onActivateKeyUp(e);
        }
        return _super.prototype.onKeyUp.call(this, e);
    };
    DButtonBase.prototype.destroy = function () {
        // Group
        var options = this._options;
        if (options != null && options.group != null) {
            options.group.remove(this);
        }
        _super.prototype.destroy.call(this);
    };
    return DButtonBase;
}(DImageBase));
export { DButtonBase };
//# sourceMappingURL=d-button-base.js.map