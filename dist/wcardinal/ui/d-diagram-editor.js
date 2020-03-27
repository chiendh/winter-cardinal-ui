/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DControllers } from "./d-controllers";
import { DDiagramBase } from "./d-diagram-base";
import { DDiagramCanvasEditor } from "./d-diagram-canvas-editor";
import { DDiagramSerializedVersion } from "./d-diagram-serialized";
import { DDiagrams } from "./d-diagrams";
import { ESnapper } from "./snapper/e-snapper";
var DDiagramEditor = /** @class */ (function (_super) {
    __extends(DDiagramEditor, _super);
    function DDiagramEditor(options) {
        var _this = _super.call(this, options) || this;
        _this._isChanged = false;
        _this._controller = options.controller;
        _this._isChanged = false;
        var commands = DControllers.getCommandController();
        commands.on("dirty", function () {
            if (_this._isChanged !== true) {
                _this._isChanged = true;
                _this.emit("change", _this);
            }
        });
        _this.snapper = new ESnapper(_this);
        return _this;
    }
    DDiagramEditor.prototype.newCanvas = function (serialized) {
        return new DDiagramCanvasEditor(this.toCanvasOptions(serialized));
    };
    DDiagramEditor.prototype.toCanvasOptions = function (serialized) {
        return {
            name: serialized.name,
            width: serialized.width,
            height: serialized.height,
            snapper: this.snapper,
            tile: {
                factory: this._tileFactory,
                mapping: serialized.tile && serialized.tile.mapping
            }
        };
    };
    DDiagramEditor.prototype.serialize = function () {
        var canvas = this.canvas;
        var serialized = this._serialized;
        if (canvas != null && serialized != null) {
            return canvas.serialize(serialized.id);
        }
        return null;
    };
    DDiagramEditor.prototype.save = function () {
        var _this = this;
        var serialized = this.serialize();
        if (serialized != null) {
            return this.controller.save({
                version: serialized.version,
                id: serialized.id,
                name: serialized.name,
                data: JSON.stringify(serialized)
            })
                .then(function (newId) {
                _this._isChanged = false;
                serialized.id = newId;
                _this._serialized = serialized;
                _this.emit("change", _this);
                _this.emit("success", "save", _this);
            }, function (reason) {
                _this.emit("fail", "save", _this);
            });
        }
        return true;
    };
    DDiagramEditor.prototype.saveAs = function (name) {
        var _this = this;
        var serialized = this.serialize();
        if (serialized != null) {
            serialized.id = undefined;
            serialized.name = name;
            return this.controller.save({
                version: serialized.version,
                id: serialized.id,
                name: serialized.name,
                data: JSON.stringify(serialized)
            })
                .then(function (newId) {
                _this._isChanged = false;
                serialized.id = newId;
                _this._serialized = serialized;
                var canvas = _this.canvas;
                if (canvas != null) {
                    canvas.name = name;
                }
                _this.emit("change", _this);
                _this.emit("success", "save-as", _this);
            }, function (reason) {
                _this.emit("fail", "save-as", _this);
            });
        }
        return true;
    };
    DDiagramEditor.prototype.delete = function () {
        var _this = this;
        var serialized = this._serialized;
        if (serialized != null) {
            if (serialized.id != null) {
                return this.controller.delete(serialized.id)
                    .then(function () {
                    _this.set(null);
                    _this.emit("success", "delete", _this);
                }, function (reason) {
                    _this.emit("fail", "delete", _this);
                });
            }
            else {
                this.set(null);
                this.emit("success", "delete", this);
            }
            return true;
        }
        return false;
    };
    DDiagramEditor.prototype.create = function (name, width, height) {
        this.set({
            version: DDiagramSerializedVersion,
            id: undefined,
            name: name,
            width: width,
            height: height,
            resources: [],
            layers: [["Default layer"]],
            items: [],
            snap: undefined
        });
        return true;
    };
    DDiagramEditor.prototype.onSet = function (serialized) {
        _super.prototype.onSet.call(this, serialized);
        var snap = serialized.snap;
        var snapper = this.snapper;
        if (snap != null) {
            snapper.deserialize(snap);
        }
        else {
            snapper.reset();
        }
        this._isChanged = false;
        this.emit("change", this);
    };
    DDiagramEditor.prototype.onUnset = function () {
        _super.prototype.onUnset.call(this);
        this._isChanged = false;
        this.emit("change", this);
    };
    DDiagramEditor.prototype.open = function (id) {
        var _this = this;
        return this._controller.get(id).then(function (serialized) {
            _this.set(DDiagrams.toSerialized(serialized));
            _this.emit("success", "open", _this);
        }, function (reason) {
            _this.emit("fail", "open", _this);
        });
    };
    DDiagramEditor.prototype.close = function () {
        this.set(null);
    };
    DDiagramEditor.prototype.isChanged = function () {
        return this._isChanged || this.isNew();
    };
    DDiagramEditor.prototype.isNew = function () {
        var serialized = this._serialized;
        if (serialized != null) {
            return serialized.id == null;
        }
        return false;
    };
    DDiagramEditor.prototype.getName = function () {
        var serialized = this._serialized;
        if (serialized != null) {
            return serialized.name;
        }
        return null;
    };
    Object.defineProperty(DDiagramEditor.prototype, "controller", {
        get: function () {
            return this._controller;
        },
        enumerable: true,
        configurable: true
    });
    DDiagramEditor.prototype.getType = function () {
        return "DDiagramEditor";
    };
    return DDiagramEditor;
}(DDiagramBase));
export { DDiagramEditor };
//# sourceMappingURL=d-diagram-editor.js.map