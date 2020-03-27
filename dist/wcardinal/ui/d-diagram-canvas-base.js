/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DCanvas } from "./d-canvas";
import { DDiagramCanvasTile } from "./d-diagram-canvas-tile";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
var DDiagramCanvasBase = /** @class */ (function (_super) {
    __extends(DDiagramCanvasBase, _super);
    function DDiagramCanvasBase(options) {
        var _this = _super.call(this, options) || this;
        var layer = new DDiagramLayerContainer();
        _this._layer = layer;
        _this.addChild(layer);
        var tile = _this._tile = new DDiagramCanvasTile(_this, options && options.tile);
        tile.init();
        return _this;
    }
    Object.defineProperty(DDiagramCanvasBase.prototype, "tile", {
        get: function () {
            return this._tile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDiagramCanvasBase.prototype, "layer", {
        get: function () {
            return this._layer;
        },
        enumerable: true,
        configurable: true
    });
    DDiagramCanvasBase.prototype.initialize = function (shapes) {
        // DO NOTHING
    };
    DDiagramCanvasBase.prototype.destroy = function () {
        if (!this._destroyed) {
            this._tile.destroy();
            this._layer.destroy();
            _super.prototype.destroy.call(this);
        }
    };
    DDiagramCanvasBase.prototype.hitTest = function (global, handler) {
        var layers = this._layer.children;
        for (var i = layers.length - 1; 0 <= i; --i) {
            var layer = layers[i];
            var shape = layer.hitTest(global, handler);
            if (shape != null) {
                return shape;
            }
        }
        return null;
    };
    DDiagramCanvasBase.prototype.getType = function () {
        return "DDiagramCanvasBase";
    };
    return DDiagramCanvasBase;
}(DCanvas));
export { DDiagramCanvasBase };
//# sourceMappingURL=d-diagram-canvas-base.js.map