import { __extends } from "tslib";
import { utils } from "pixi.js";
import { DApplications } from "./d-applications";
/**
 * A shape helper class for diagrams.
 */
var DDiagramShape = /** @class */ (function (_super) {
    __extends(DDiagramShape, _super);
    function DDiagramShape(diagram) {
        var _this = _super.call(this) || this;
        _this._diagram = diagram;
        _this._updateBound = function () {
            DApplications.update(diagram);
        };
        return _this;
    }
    DDiagramShape.prototype.update = function () {
        var diagram = this._diagram;
        var canvas = diagram.canvas;
        if (canvas) {
            var actionables = canvas.actionables;
            if (0 < actionables.length) {
                var effect = -1;
                var time = Date.now();
                for (var i = 0, imax = actionables.length; i < imax; ++i) {
                    var actionable = actionables[i];
                    actionable.update(time);
                    var runtime = actionable.runtime;
                    if (runtime && time < runtime.effect) {
                        var runtimeEffect = runtime.effect;
                        if (time < runtimeEffect) {
                            effect = (effect < 0 ? runtimeEffect : Math.min(effect, runtimeEffect));
                        }
                    }
                }
                if (0 <= effect) {
                    setTimeout(this._updateBound, effect - Date.now());
                }
            }
        }
    };
    DDiagramShape.prototype.get = function (id) {
        var canvas = this._diagram.canvas;
        var shapes = (canvas && canvas.ids[id]);
        return (shapes && 0 < shapes.length ? shapes[0] : null);
    };
    DDiagramShape.prototype.getAll = function (id) {
        var canvas = this._diagram.canvas;
        return (canvas && canvas.ids[id]) || [];
    };
    DDiagramShape.prototype.each = function (callback, reverse) {
        if (reverse === void 0) { reverse = false; }
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var layers = canvas.layer.children;
            if (!reverse) {
                for (var i = 0, imax = layers.length; i < imax; ++i) {
                    var layer = layers[i];
                    var children = layer.children;
                    for (var j = 0, jmax = children.length; j < jmax; ++j) {
                        var child = children[j];
                        if (callback(child) === false) {
                            return child;
                        }
                    }
                }
            }
            else {
                for (var i = layers.length - 1; 0 <= i; --i) {
                    var layer = layers[i];
                    var children = layer.children;
                    for (var j = children.length - 1; 0 <= j; --j) {
                        var child = children[j];
                        if (callback(child) === false) {
                            return child;
                        }
                    }
                }
            }
        }
        return null;
    };
    return DDiagramShape;
}(utils.EventEmitter));
export { DDiagramShape };
//# sourceMappingURL=d-diagram-shape.js.map