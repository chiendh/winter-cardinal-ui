/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DDiagramBase } from "./d-diagram-base";
import { DDiagramCanvas } from "./d-diagram-canvas";
import { DDiagramShape } from "./d-diagram-shape";
import { DDiagramTag } from "./d-diagram-tag";
import { EShapeActionRuntimeOpen } from "./shape/action/e-shape-action-runtime-open";
import { EShapeRuntime } from "./shape/e-shape-runtime";
import { EShapeRuntimes } from "./shape/e-shape-runtimes";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DDiagram = /** @class */ (function (_super) {
    __extends(DDiagram, _super);
    function DDiagram(options) {
        var _this = _super.call(this, options) || this;
        // Hover handling
        _this.on(UtilPointerEvent.move, function (e) {
            if (UtilPointerEvent.contains(_this, e.target)) {
                var canvas = _this.canvas;
                if (canvas) {
                    canvas.onShapeMove(e);
                }
            }
        });
        // Pointer down / up handling
        _this.on(UtilPointerEvent.up, function (e) {
            if (UtilPointerEvent.contains(_this, e.target)) {
                var canvas = _this.canvas;
                if (canvas) {
                    canvas.onShapeUp(e);
                }
            }
        });
        // Click handling
        _this.on("click", function (e) {
            if (UtilPointerEvent.contains(_this, e.target)) {
                var canvas = _this.canvas;
                if (canvas) {
                    canvas.onShapeClick(e);
                }
            }
        });
        //
        _this.tag = new DDiagramTag(_this);
        _this.shape = new DDiagramShape(_this);
        return _this;
    }
    DDiagram.prototype.initialize = function (shapes) {
        var formatterMap = {};
        var initialMap = {};
        var actionMap = new Map();
        for (var i = 0, imax = shapes.length; i < imax; ++i) {
            var shape = shapes[i];
            var runtimeConstructor = EShapeRuntimes[shape.type] || EShapeRuntime;
            var runtime = shape.runtime = new (runtimeConstructor)(shape);
            // Tag
            var tag = shape.tag;
            for (var j = 0, jmax = tag.size(); j < jmax; ++j) {
                var value = tag.get(j);
                if (value) {
                    // Format
                    var tagFormat = value.format;
                    var tagInitial = value.initial;
                    if (tagFormat in formatterMap) {
                        value.formatter = formatterMap[tagFormat];
                    }
                    else if (0 < tagFormat.length) {
                        try {
                            var formatter = Function("value", "try {" +
                                ("return (" + tagFormat + ");") +
                                "} catch( e1 ) {" +
                                "try {" +
                                ("return (" + (0 < tagInitial.length ? tagInitial : 0) + ");") +
                                "} catch( e2 ) {" +
                                "return 0;" +
                                "}" +
                                "}");
                            formatterMap[tagFormat] = formatter;
                            value.formatter = formatter;
                        }
                        catch (e) {
                            //
                        }
                    }
                    // Initial
                    if (tagInitial in initialMap) {
                        value.value = initialMap[tagInitial];
                    }
                    else if (0 < tagInitial.length) {
                        try {
                            value.value = initialMap[tagInitial] = (Function("try {" +
                                ("return (" + tagInitial + ");") +
                                "} catch( e ) {" +
                                "return 0;" +
                                "}")());
                        }
                        catch (e) {
                            //
                        }
                    }
                }
            }
            // Initialize runtime actions
            var values = shape.action.values;
            var actions = runtime.actions;
            for (var j = 0, jmax = values.length; j < jmax; ++j) {
                var value = values[j];
                var action = actionMap.get(value);
                if (action == null) {
                    action = value.toRuntime(shape);
                    if (action != null) {
                        if (action instanceof EShapeActionRuntimeOpen) {
                            if (shape.cursor.length <= 0) {
                                shape.cursor = "pointer";
                            }
                        }
                        actionMap.set(value, action);
                        actions.push(action);
                        runtime.reset |= action.reset;
                    }
                }
                else {
                    actions.push(action);
                    runtime.reset |= action.reset;
                }
            }
            // Children
            var children = shape.children;
            if (0 < children.length) {
                this.initialize(children);
            }
        }
    };
    DDiagram.prototype.newCanvas = function (serialized) {
        return new DDiagramCanvas(this.toCanvasOptions(serialized));
    };
    DDiagram.prototype.toCanvasOptions = function (serialized) {
        var options = this._options;
        return {
            name: serialized.name,
            width: serialized.width,
            height: serialized.height,
            background: {
                color: null
            },
            border: {
                color: null
            },
            tile: {
                factory: this._tileFactory,
                mapping: serialized.tile && serialized.tile.mapping
            },
            tag: options && options.tag
        };
    };
    DDiagram.prototype.onDown = function (e) {
        var canvas = this.canvas;
        if (canvas && canvas.onShapeDown(e)) {
            return;
        }
        _super.prototype.onDown.call(this, e);
    };
    DDiagram.prototype.onDblClick = function (e, interactionManager) {
        var canvas = this.canvas;
        if (canvas && canvas.onShapeDblClick(e, interactionManager)) {
            return true;
        }
        return _super.prototype.onDblClick.call(this, e, interactionManager);
    };
    DDiagram.prototype.render = function (renderer) {
        this.shape.update();
        _super.prototype.render.call(this, renderer);
    };
    DDiagram.prototype.getType = function () {
        return "DDiagram";
    };
    return DDiagram;
}(DDiagramBase));
export { DDiagram };
//# sourceMappingURL=d-diagram.js.map