/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DDiagramCanvasBase } from "./d-diagram-canvas-base";
import { EShapeBase } from "./shape/variant/e-shape-base";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
var defaultTagMapper = function (tag) { return tag; };
var DDiagramCanvas = /** @class */ (function (_super) {
    __extends(DDiagramCanvas, _super);
    function DDiagramCanvas(options) {
        var _this = _super.call(this, options) || this;
        _this.tags = {};
        _this.tagMapper = (options.tag && options.tag.mapper) || defaultTagMapper;
        _this.interactives = [];
        _this.actionables = [];
        _this.ids = {};
        _this._workLocal = new Point();
        _this._workGlobal = new Point();
        _this._lastOverShape = null;
        return _this;
    }
    DDiagramCanvas.prototype.initialize = function () {
        var time = Date.now();
        var tags = this.tags;
        var tagMapper = this.tagMapper;
        var interactives = this.interactives;
        var actionables = this.actionables;
        var ids = this.ids;
        var layers = this._layer.children;
        for (var i = 0, imax = layers.length; i < imax; ++i) {
            this.initializeShapes(layers[i].children, tags, tagMapper, interactives, actionables, ids);
        }
        for (var i = 0, imax = layers.length; i < imax; ++i) {
            this.updateShapes(layers[i].children, time);
        }
        this.initializeFocus();
    };
    DDiagramCanvas.prototype.initializeFocus = function () {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var focusController = layer.getFocusController();
            var focusable = focusController.findFocusable(this, false, true, true);
            if (focusable) {
                focusController.setFocused(focusable, true, true);
            }
        }
    };
    DDiagramCanvas.prototype.initializeShapes = function (shapes, tags, tagMapper, interactives, actionables, ids) {
        var _loop_1 = function (i, imax) {
            var shape = shapes[i];
            // Tag mappings
            var tag = shape.tag;
            for (var j = 0, jmax = tag.size(); j < jmax; ++j) {
                var value = tag.get(j);
                if (value) {
                    var valueId = value.id;
                    if (0 < valueId.length) {
                        var mappedValueId = tagMapper(valueId);
                        if (mappedValueId != null) {
                            var values = tags[mappedValueId];
                            if (values == null) {
                                values = [];
                                tags[mappedValueId] = values;
                            }
                            values.push(value);
                        }
                    }
                }
            }
            // Id mappings
            var shapeId = shape.id;
            if (0 < shapeId.length) {
                var mapping = ids[shapeId];
                if (mapping == null) {
                    ids[shapeId] = [shape];
                }
                else {
                    mapping.push(shape);
                }
            }
            // Interactives
            var runtime = shape.runtime;
            if (shape.interactive || (0 < shape.cursor.length) || (runtime && runtime.interactive)) {
                interactives.push(shape);
            }
            // Actionables
            if (runtime && 0 < runtime.actions.length) {
                actionables.push(shape);
            }
            // Shortcuts
            var shortcut = shape.shortcut;
            if (shortcut != null) {
                UtilKeyboardEvent.on(this_1, shortcut, function (e) {
                    shape.onShortcut(e);
                });
            }
            // Children
            var children = shape.children;
            if (0 < children.length) {
                this_1.initializeShapes(children, tags, tagMapper, interactives, actionables, ids);
            }
        };
        var this_1 = this;
        for (var i = 0, imax = shapes.length; i < imax; ++i) {
            _loop_1(i, imax);
        }
    };
    DDiagramCanvas.prototype.updateShapes = function (shapes, time) {
        for (var i = 0, imax = shapes.length; i < imax; ++i) {
            shapes[i].update(time);
        }
    };
    DDiagramCanvas.prototype.onShapeMove = function (e) {
        var global = e.data.global;
        var local = this._workLocal;
        var interactives = this.interactives;
        var found = null;
        for (var i = interactives.length - 1; 0 <= i; --i) {
            var interactive = interactives[i];
            if (interactive.visible) {
                interactive.toLocal(global, undefined, local);
                if (interactive.contains(local)) {
                    found = interactive;
                    break;
                }
            }
        }
        var layer = DApplications.getLayer(this);
        if (found) {
            if (0 < found.cursor.length) {
                if (layer && layer.view.style.cursor !== found.cursor) {
                    layer.view.style.cursor = found.cursor;
                }
            }
            var lastOverShape = this._lastOverShape;
            if (found === lastOverShape) {
                var runtime = lastOverShape.runtime;
                if (runtime) {
                    runtime.onPointerMove(lastOverShape, e);
                }
            }
            else {
                this._lastOverShape = found;
                // Previous
                if (lastOverShape) {
                    var previousRuntime = lastOverShape.runtime;
                    if (previousRuntime) {
                        previousRuntime.onPointerOut(lastOverShape, e);
                    }
                    // Parents
                    var lastOverParent = lastOverShape.parent;
                    while ((lastOverParent instanceof EShapeBase) && lastOverParent !== found) {
                        var parentRuntime = lastOverShape.runtime;
                        if (parentRuntime) {
                            parentRuntime.onPointerOut(lastOverParent, e);
                        }
                        lastOverParent = lastOverParent.parent;
                    }
                }
                // Next
                var runtime = found.runtime;
                if (runtime) {
                    runtime.onPointerOver(found, e);
                }
                if (layer) {
                    layer.view.title = (found.title || "");
                }
                // Parents
                var parent_1 = found.parent;
                while (parent_1 instanceof EShapeBase) {
                    var parentRuntime = parent_1.runtime;
                    if (parentRuntime) {
                        parentRuntime.onPointerOver(parent_1, e);
                    }
                    parent_1 = parent_1.parent;
                }
            }
            return true;
        }
        else {
            if (layer && layer.view.style.cursor !== "auto") {
                layer.view.style.cursor = "auto";
            }
            // Previous
            var lastOverShape = this._lastOverShape;
            this._lastOverShape = null;
            if (lastOverShape) {
                var runtime = lastOverShape.runtime;
                if (runtime) {
                    runtime.onPointerOut(lastOverShape, e);
                }
                // Parents
                var lastOverParent = lastOverShape.parent;
                while (lastOverParent instanceof EShapeBase) {
                    var parentRuntime = lastOverParent.runtime;
                    if (parentRuntime) {
                        parentRuntime.onPointerOut(lastOverParent, e);
                    }
                    lastOverParent = lastOverParent.parent;
                }
            }
            //
            if (layer) {
                layer.view.title = "";
            }
            return false;
        }
    };
    DDiagramCanvas.prototype.onShapeDown = function (e) {
        var interactives = this.interactives;
        var global = e.data.global;
        var local = this._workLocal;
        for (var i = interactives.length - 1; 0 <= i; --i) {
            var interactive = interactives[i];
            if (interactive.visible) {
                interactive.toLocal(global, undefined, local);
                if (interactive.contains(local)) {
                    var runtime = interactive.runtime;
                    if (runtime) {
                        runtime.onPointerDown(interactive, e);
                    }
                    return true;
                }
            }
        }
        return false;
    };
    DDiagramCanvas.prototype.onShapeUp = function (e) {
        var interactives = this.interactives;
        var global = e.data.global;
        var local = this._workLocal;
        for (var i = interactives.length - 1; 0 <= i; --i) {
            var interactive = interactives[i];
            if (interactive.visible) {
                interactive.toLocal(global, undefined, local);
                if (interactive.contains(local)) {
                    var runtime = interactive.runtime;
                    if (runtime) {
                        runtime.onPointerUp(interactive, e);
                    }
                    return true;
                }
            }
        }
        return false;
    };
    DDiagramCanvas.prototype.onShapeClick = function (e) {
        var interactives = this.interactives;
        var global = e.data.global;
        var local = this._workLocal;
        for (var i = interactives.length - 1; 0 <= i; --i) {
            var interactive = interactives[i];
            if (interactive.visible) {
                interactive.toLocal(global, undefined, local);
                if (interactive.contains(local)) {
                    var target = interactive;
                    while (true) {
                        var runtime = target.runtime;
                        if (runtime) {
                            runtime.onPointerClick(target, e);
                        }
                        var parent_2 = target.parent;
                        if (parent_2 instanceof EShapeBase) {
                            target = parent_2;
                        }
                        else {
                            break;
                        }
                    }
                    return true;
                }
            }
        }
        return false;
    };
    DDiagramCanvas.prototype.onShapeDblClick = function (e, interactionManager) {
        var interactives = this.interactives;
        var global = UtilPointerEvent.toGlobal(e, interactionManager, this._workGlobal);
        var local = this._workLocal;
        for (var i = interactives.length - 1; 0 <= i; --i) {
            var interactive = interactives[i];
            if (interactive.visible) {
                interactive.toLocal(global, undefined, local);
                if (interactive.contains(local)) {
                    var target = interactive;
                    while (true) {
                        var runtime = target.runtime;
                        if (runtime) {
                            runtime.onPointerDblClick(target, e);
                        }
                        var parent_3 = target.parent;
                        if (parent_3 instanceof EShapeBase) {
                            target = parent_3;
                        }
                        else {
                            break;
                        }
                    }
                    return true;
                }
            }
        }
        return false;
    };
    DDiagramCanvas.prototype.getType = function () {
        return "DDiagramCanvas";
    };
    return DDiagramCanvas;
}(DDiagramCanvasBase));
export { DDiagramCanvas };
//# sourceMappingURL=d-diagram-canvas.js.map