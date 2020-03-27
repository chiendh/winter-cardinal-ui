/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DDialogCommand } from "./d-dialog-command";
import { DDialogConfirmMessage } from "./d-dialog-confirm-message";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";
var DDialogConfirm = /** @class */ (function (_super) {
    __extends(DDialogConfirm, _super);
    function DDialogConfirm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDialogConfirm.prototype.onInit = function (layout, options) {
        _super.prototype.onInit.call(this, layout, options);
        var message = this.toMessage(this.theme, options);
        this._message = message;
        layout.addChild(message);
    };
    DDialogConfirm.prototype.toMessage = function (theme, options) {
        if (options && options.message != null) {
            var message = options.message;
            if (isString(message) || isFunction(message)) {
                return this.newMessage(this.toMessageOptions(message));
            }
            else if (message instanceof DBase) {
                return message;
            }
            else {
                return this.newMessage(this.toMessageOptionsMerged(message, theme.getMessage()));
            }
        }
        return this.newMessage(this.toMessageOptions(theme.getMessage()));
    };
    DDialogConfirm.prototype.toMessageOptionsMerged = function (options, message) {
        if (options.text == null) {
            options.text = {};
        }
        if (options.text.value === undefined) {
            options.text.value = message;
        }
        return options;
    };
    DDialogConfirm.prototype.toMessageOptions = function (message) {
        return {
            text: {
                value: message
            }
        };
    };
    DDialogConfirm.prototype.newMessage = function (options) {
        return new DDialogConfirmMessage(options);
    };
    Object.defineProperty(DDialogConfirm.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    DDialogConfirm.prototype.getType = function () {
        return "DDialogConfirm";
    };
    return DDialogConfirm;
}(DDialogCommand));
export { DDialogConfirm };
//# sourceMappingURL=d-dialog-confirm.js.map