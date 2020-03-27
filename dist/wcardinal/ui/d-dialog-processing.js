/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBaseState } from "./d-base-state";
import { DDialogConfirm } from "./d-dialog-confirm";
import { DDialogProcessingMessage } from "./d-dialog-processing-message";
var DDialogProcessing = /** @class */ (function (_super) {
    __extends(DDialogProcessing, _super);
    function DDialogProcessing(options) {
        var _this = _super.call(this, options) || this;
        _this._isDone = true;
        _this._startTime = 0;
        _this._interval = (options && options.interval != null ? options.interval : _this.theme.getInterval());
        return _this;
    }
    DDialogProcessing.prototype.newMessage = function (options) {
        return new DDialogProcessingMessage(options);
    };
    DDialogProcessing.prototype.onOpen = function () {
        this._isDone = false;
        this._startTime = Date.now();
        var timeoutId = this._timeoutId;
        if (timeoutId != null) {
            clearTimeout(timeoutId);
        }
        this._message.setStates(DBaseState.NONE, DBaseState.SUCCEEDED | DBaseState.FAILED);
        var buttonLayout = this._buttonLayout;
        if (buttonLayout != null) {
            buttonLayout.setDisabled(true);
        }
        _super.prototype.onOpen.call(this);
    };
    DDialogProcessing.prototype.onDone = function () {
        var buttonLayout = this._buttonLayout;
        if (buttonLayout != null) {
            buttonLayout.setDisabled(false);
        }
        else {
            this.close();
        }
    };
    DDialogProcessing.prototype.onResolved = function (message) {
        if (message != null) {
            this._message.text = message;
        }
        this._message.setStates(DBaseState.SUCCEEDED, DBaseState.FAILED);
        this.onDone();
    };
    DDialogProcessing.prototype.onRejected = function (message) {
        if (message != null) {
            this._message.text = message;
        }
        this._message.setStates(DBaseState.FAILED, DBaseState.SUCCEEDED);
        this.onDone();
    };
    DDialogProcessing.prototype.resolve = function (message) {
        var _this = this;
        if (!this._isDone) {
            this._isDone = true;
            var elapsedTime = Date.now() - this._startTime;
            var delay = this._interval - elapsedTime;
            if (0 < delay) {
                this._timeoutId = window.setTimeout(function () {
                    _this._timeoutId = undefined;
                    _this.onResolved(message);
                }, delay);
            }
            else {
                this.onResolved(message);
            }
        }
    };
    DDialogProcessing.prototype.reject = function (message) {
        var _this = this;
        if (!this._isDone) {
            this._isDone = true;
            var elapsedTime = Date.now() - this._startTime;
            var delay = this._interval - elapsedTime;
            if (0 < delay) {
                this._timeoutId = window.setTimeout(function () {
                    _this._timeoutId = undefined;
                    _this.onRejected(message);
                }, delay);
            }
            else {
                this.onRejected(message);
            }
        }
    };
    DDialogProcessing.prototype.onCloseOn = function () {
        if (this._isDone) {
            _super.prototype.onCloseOn.call(this);
        }
    };
    DDialogProcessing.prototype.getType = function () {
        return "DDialogProcessing";
    };
    return DDialogProcessing;
}(DDialogConfirm));
export { DDialogProcessing };
//# sourceMappingURL=d-dialog-processing.js.map