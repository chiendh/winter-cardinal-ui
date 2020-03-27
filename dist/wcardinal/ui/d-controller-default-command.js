/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DCommandClear } from "./d-command-clear";
import { DCommandFlag } from "./d-command-flag";
import { DCommandRedo } from "./d-command-redo";
import { DCommandUndo } from "./d-command-undo";
var isCommandStorable = function (command) {
    return (command.getFlag() & DCommandFlag.UNSTORABLE) === 0;
};
var isCommandClear = function (command) {
    return (command.getFlag() & DCommandFlag.CLEAR) !== 0;
};
var DControllerDefaultCommand = /** @class */ (function (_super) {
    __extends(DControllerDefaultCommand, _super);
    function DControllerDefaultCommand() {
        var _this = _super.call(this) || this;
        _this._position = 0;
        _this._done = [];
        _this._waiting = [];
        _this._executing = null;
        return _this;
    }
    DControllerDefaultCommand.prototype.last = function () {
        var done = this._done;
        var waiting = this._waiting;
        if (waiting.length <= 0) {
            if (0 < done.length) {
                return done[done.length - 1];
            }
            else {
                return null;
            }
        }
        else {
            return waiting[waiting.length - 1];
        }
    };
    DControllerDefaultCommand.prototype.push = function (command) {
        var waiting = this._waiting;
        waiting.push(command);
        this.next();
    };
    DControllerDefaultCommand.prototype.next = function () {
        var _this = this;
        if (this._executing == null) {
            var waiting = this._waiting;
            if (0 < waiting.length) {
                var command_1 = waiting.shift();
                if (command_1 != null) {
                    if (command_1 instanceof DCommandUndo) {
                        var done = this._done;
                        if (this._position < done.length) {
                            var current = done[done.length - 1 - this._position];
                            this._position += 1;
                            this.emit("change", this);
                            var result = current.undo();
                            if (result === true) {
                                this.onSuccess(command_1);
                            }
                            else if (result === false) {
                                this.onFail(command_1);
                            }
                            else {
                                this._executing = result.then(function () {
                                    _this.onSuccess(command_1);
                                }, function () {
                                    _this.onFail(command_1);
                                });
                            }
                        }
                    }
                    else if (command_1 instanceof DCommandRedo) {
                        var done = this._done;
                        if (0 < this._position) {
                            var current = done[done.length - this._position];
                            this._position -= 1;
                            this.emit("change", this);
                            var result = current.redo();
                            if (result === true) {
                                this.onSuccess(command_1);
                            }
                            else if (result === false) {
                                this.onFail(command_1);
                            }
                            else {
                                this._executing = result.then(function () {
                                    _this.onSuccess(command_1);
                                }, function () {
                                    _this.onFail(command_1);
                                });
                            }
                        }
                    }
                    else {
                        var isClear = isCommandClear(command_1);
                        var isStorable = isCommandStorable(command_1);
                        if (isClear || isStorable) {
                            var size = (isClear ? this._done.length : this._position);
                            if (0 < size) {
                                this.remove(size);
                                this._position = 0;
                                this.emit("change", this);
                            }
                            this.cleanup();
                        }
                        var result = command_1.execute();
                        if (result === true) {
                            this.onSuccess(command_1);
                        }
                        else if (result === false) {
                            this.onFail(command_1);
                        }
                        else {
                            this._executing = result.then(function () {
                                _this.onSuccess(command_1);
                            }, function () {
                                _this.onFail(command_1);
                            });
                        }
                    }
                }
            }
        }
    };
    DControllerDefaultCommand.prototype.cleanup = function () {
        var done = this._done;
        var size = done.length - 100;
        if (0 < size) {
            for (var i = 0; i < size; ++i) {
                done[i].destroy();
                done.shift();
            }
        }
    };
    DControllerDefaultCommand.prototype.remove = function (size) {
        var done = this._done;
        if (0 < size) {
            var ifrom = Math.max(0, done.length - size);
            size = done.length - ifrom;
            if (0 < size) {
                for (var i = ifrom, imax = done.length; i < imax; ++i) {
                    done[i].destroy();
                }
                done.splice(ifrom, done.length - ifrom);
                return true;
            }
        }
        return false;
    };
    DControllerDefaultCommand.prototype.onSuccess = function (command) {
        this._executing = null;
        if (isCommandStorable(command)) {
            this._done.push(command);
            this.emit("dirty", this);
        }
        else if (command instanceof DCommandUndo || command instanceof DCommandRedo) {
            this.emit("dirty", this);
        }
        this.emit("change", this);
        this.next();
    };
    DControllerDefaultCommand.prototype.onFail = function (command) {
        this._executing = null;
        var waiting = this._waiting;
        command.destroy();
        for (var i = 0, imax = waiting.length; i < imax; ++i) {
            waiting[i].destroy();
        }
        waiting.length = 0;
        this.emit("change", this);
    };
    DControllerDefaultCommand.prototype.size = function () {
        return this._done.length;
    };
    DControllerDefaultCommand.prototype.clear = function () {
        this.push(new DCommandClear());
    };
    DControllerDefaultCommand.prototype.redo = function () {
        if (this.isRedoable()) {
            this._waiting.push(new DCommandRedo());
            this.next();
        }
    };
    DControllerDefaultCommand.prototype.undo = function () {
        if (this.isUndoable()) {
            this._waiting.push(new DCommandUndo());
            this.next();
        }
    };
    DControllerDefaultCommand.prototype.isRedoable = function () {
        return (0 < this._position && this._executing == null);
    };
    DControllerDefaultCommand.prototype.isUndoable = function () {
        return (this._position < this._done.length && this._executing == null);
    };
    return DControllerDefaultCommand;
}(utils.EventEmitter));
export { DControllerDefaultCommand };
//# sourceMappingURL=d-controller-default-command.js.map