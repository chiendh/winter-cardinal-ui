/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DButton } from "./d-button";
import { DButtonPrimary } from "./d-button-primary";
import { DDialog } from "./d-dialog";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DLayoutVertical } from "./d-layout-vertical";
var DDialogCommand = /** @class */ (function (_super) {
    __extends(DDialogCommand, _super);
    function DDialogCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._promise = null;
        _this._resolve = null;
        _this._reject = null;
        return _this;
    }
    DDialogCommand.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        var theme = this.theme;
        var layout = new DLayoutVertical({
            parent: this,
            x: theme.getLayoutX(),
            y: theme.getLayoutY(),
            width: theme.getLayoutWidth(),
            height: theme.getLayoutHeight()
        });
        this.onInit(layout, options);
        // Buttons
        var ok = (options && options.ok || theme.getOk());
        var cancel = (options && options.cancel || theme.getCancel());
        if (ok != null || cancel != null) {
            var buttonLayout = new DLayoutHorizontal({
                parent: layout,
                width: "padding", height: "auto",
                padding: {
                    top: this.padding.getTop()
                }
            });
            this._buttonLayout = buttonLayout;
            new DLayoutSpace({
                parent: buttonLayout,
                weight: 1
            });
            if (ok != null && cancel != null) {
                this._buttonCancel = new DButtonPrimary({
                    parent: buttonLayout,
                    text: {
                        value: cancel
                    },
                    on: {
                        active: function () {
                            _this.onCancel();
                        }
                    }
                });
                this._buttonOk = new DButton({
                    parent: buttonLayout,
                    text: {
                        value: ok
                    },
                    on: {
                        active: function () {
                            _this.onOk();
                        }
                    }
                });
            }
            else if (ok != null) {
                this._buttonOk = new DButtonPrimary({
                    parent: buttonLayout,
                    text: {
                        value: ok
                    },
                    on: {
                        active: function () {
                            _this.onOk();
                        }
                    }
                });
            }
            else if (cancel != null) {
                this._buttonCancel = new DButtonPrimary({
                    parent: buttonLayout,
                    text: {
                        value: cancel
                    },
                    on: {
                        active: function () {
                            _this.onCancel();
                        }
                    }
                });
            }
            new DLayoutSpace({
                parent: buttonLayout,
                weight: 1
            });
        }
    };
    DDialogCommand.prototype.onInit = function (layout, options) {
        // OVERRIDE THIS
    };
    DDialogCommand.prototype.open = function () {
        _super.prototype.open.call(this);
        return this._promise;
    };
    DDialogCommand.prototype.onOpen = function () {
        var _this = this;
        _super.prototype.onOpen.call(this);
        if (this._promise == null) {
            this._promise = new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
            });
        }
    };
    DDialogCommand.prototype.onClose = function () {
        _super.prototype.onClose.call(this);
        var reject = this._reject;
        this._promise = null;
        this._resolve = null;
        this._reject = null;
        if (reject != null) {
            reject();
        }
    };
    DDialogCommand.prototype.onOk = function () {
        var resolve = this._resolve;
        this._promise = null;
        this._resolve = null;
        this._reject = null;
        this.close();
        if (resolve != null) {
            resolve();
        }
        this.emit("ok", this);
    };
    DDialogCommand.prototype.onCancel = function () {
        var reject = this._reject;
        this._promise = null;
        this._resolve = null;
        this._reject = null;
        this.close();
        if (reject != null) {
            reject();
        }
        this.emit("cancel", this);
    };
    DDialogCommand.prototype.getType = function () {
        return "DDialogCommand";
    };
    return DDialogCommand;
}(DDialog));
export { DDialogCommand };
//# sourceMappingURL=d-dialog-command.js.map