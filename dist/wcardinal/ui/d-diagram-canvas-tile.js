/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DDiagramCanvasTileMappingImpl } from "./d-diagram-canvas-mapping-impl";
var DDiagramCanvasTile = /** @class */ (function () {
    function DDiagramCanvasTile(canvas, options) {
        var _this = this;
        this._canvas = canvas;
        this._factory = options && options.factory;
        this._mapping = new DDiagramCanvasTileMappingImpl(function () {
            _this.onMappingChange();
        }, options && options.mapping);
    }
    DDiagramCanvasTile.prototype.init = function () {
        this.onMappingChange();
    };
    DDiagramCanvasTile.prototype.onMappingChange = function () {
        var factory = this._factory;
        if (factory) {
            var mapping = this._mapping;
            if (mapping.enable) {
                var pyramid = this._pyramid;
                if (pyramid) {
                    pyramid.mapping = mapping;
                }
                else {
                    this._pyramid = factory(this._canvas).fit();
                }
            }
            else {
                var pyramid = this._pyramid;
                if (pyramid) {
                    this._pyramid = undefined;
                    pyramid.destroy();
                }
            }
        }
    };
    Object.defineProperty(DDiagramCanvasTile.prototype, "pyramid", {
        get: function () {
            return this._pyramid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDiagramCanvasTile.prototype, "factory", {
        get: function () {
            return this._factory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DDiagramCanvasTile.prototype, "mapping", {
        get: function () {
            return this._mapping;
        },
        enumerable: true,
        configurable: true
    });
    DDiagramCanvasTile.prototype.serialize = function () {
        return {
            mapping: this._mapping.serialize()
        };
    };
    DDiagramCanvasTile.prototype.destroy = function () {
        var pyramid = this._pyramid;
        if (pyramid != null) {
            this._pyramid = undefined;
            pyramid.destroy();
        }
    };
    return DDiagramCanvasTile;
}());
export { DDiagramCanvasTile };
//# sourceMappingURL=d-diagram-canvas-tile.js.map