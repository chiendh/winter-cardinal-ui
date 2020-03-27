/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAnimationFadeIn } from "./d-animation-fade-in";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DDialogCloseOn } from "./d-dialog-close-on";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilOverlay } from "./util/util-overlay";
/**
 * A base class for dialogs.
 *
 * If multiple application instances are there, better to set
 * the constructor option `parent` to an `application.stage`
 * so that the dialog picks a right application.
 *
 * By default, the dialog assumes the last created application is
 * the one it belongs to at the time when it is created.
 */
var DDialog = /** @class */ (function (_super) {
    __extends(DDialog, _super);
    function DDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialog.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.visible = false;
        this.setState(DBaseState.FOCUS_ROOT, true);
        this._focusable = null;
        this._isOpened = false;
        // Animation
        var animation = this._animation = (options && options.animation ?
            options.animation : new DAnimationFadeIn());
        animation.target = this;
        animation.on("end", function (isReverse) {
            _this.onAnimationEnd(isReverse);
        });
        // Close-on
        var closeOn = this._closeOn = (options && options.closeOn != null ?
            options.closeOn : this.theme.closeOn());
        if (closeOn & DDialogCloseOn.CLICK_OUTSIDE) {
            UtilClickOutside.apply(this, function () {
                _this.onCloseOn();
            });
        }
        this._overlay = new UtilOverlay();
    };
    DDialog.prototype.onAnimationEnd = function (isReverse) {
        if (isReverse) {
            var parent_1 = this.parent;
            if (parent_1) {
                parent_1.removeChild(this);
            }
        }
        else {
            var layer = DApplications.getLayer(this);
            if (layer) {
                var focusController = layer.getFocusController();
                this._focusable = focusController.getFocused();
                var firstFocusable = focusController.findFocusable(this, false, true, true);
                focusController.setFocused(firstFocusable || this, true, true);
            }
        }
    };
    DDialog.prototype.open = function () {
        if (!this._isOpened) {
            var layer = this._overlay.pick(this);
            this._isOpened = true;
            layer.stage.addChild(this);
            this.onOpen();
        }
    };
    DDialog.prototype.onOpen = function () {
        this.emit("open", this);
        // Animation
        this._animation.start();
    };
    DDialog.prototype.isOpened = function () {
        return this._isOpened;
    };
    DDialog.prototype.close = function () {
        if (this._isOpened) {
            this._isOpened = false;
            this.onClose();
        }
    };
    DDialog.prototype.onClose = function () {
        // Focus
        var focusable = this._focusable;
        if (focusable != null) {
            this._focusable = null;
            var layer = DApplications.getLayer(this);
            if (layer) {
                layer.getFocusController().setFocused(focusable, true, false);
            }
        }
        // Animation
        this._animation.start(true);
        this.emit("close", this);
    };
    DDialog.prototype.getType = function () {
        return "DDialog";
    };
    DDialog.prototype.onKeyDown = function (e) {
        var closeOn = this._closeOn;
        if (closeOn & DDialogCloseOn.ESC) {
            if (UtilKeyboardEvent.isCancelKey(e)) {
                this.onCloseOn();
            }
        }
        return _super.prototype.onKeyDown.call(this, e);
    };
    DDialog.prototype.onCloseOn = function () {
        this.close();
    };
    DDialog.prototype.containsGlobalPoint = function (point) {
        return true;
    };
    return DDialog;
}(DBase));
export { DDialog };
//# sourceMappingURL=d-dialog.js.map