/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DControllerDefaultCommand } from "./d-controller-default-command";
import { DControllerKeyboard } from "./d-controller-keyboard";
var DControllers = /** @class */ (function () {
    function DControllers() {
    }
    // Keyboard
    DControllers.getKeyboardController = function () {
        if (this.KEYBOARD == null) {
            this.KEYBOARD = new DControllerKeyboard();
        }
        return this.KEYBOARD;
    };
    DControllers.setKeyboardController = function (instance) {
        var result = this.KEYBOARD;
        this.KEYBOARD = instance;
        return result;
    };
    // Command
    DControllers.getCommandController = function () {
        if (this.COMMAND == null) {
            this.COMMAND = new DControllerDefaultCommand();
        }
        return this.COMMAND;
    };
    DControllers.setCommandController = function (instance) {
        var result = this.COMMAND;
        this.COMMAND = instance;
        return result;
    };
    // Document
    DControllers.getDocumentController = function () {
        if (this.DOCUMENT == null) {
            throw new Error("Not supported");
        }
        return this.DOCUMENT;
    };
    DControllers.setDocumentController = function (instance) {
        var result = this.DOCUMENT;
        this.DOCUMENT = instance;
        return result;
    };
    return DControllers;
}());
export { DControllers };
//# sourceMappingURL=d-controllers.js.map