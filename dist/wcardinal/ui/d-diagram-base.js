/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DApplications } from "./d-applications";
import { DCanvasContainer } from "./d-canvas-container";
import { DDiagrams } from "./d-diagrams";
var DDiagramBase = /** @class */ (function (_super) {
    __extends(DDiagramBase, _super);
    function DDiagramBase(options) {
        var _this = _super.call(this, options) || this;
        _this._serialized = null;
        _this._tileFactory = options && options.tile;
        return _this;
    }
    DDiagramBase.prototype.set = function (serialized) {
        var oldSerialized = this._serialized;
        if (oldSerialized !== serialized) {
            if (oldSerialized) {
                this._serialized = null;
                this.onUnset();
            }
            this._serialized = serialized;
            if (serialized) {
                this.onSet(serialized);
            }
        }
    };
    DDiagramBase.prototype.onSet = function (serialized) {
        var _this = this;
        var canvas = this.newCanvas(serialized);
        DDiagrams.newLayer(serialized, canvas.layer).then(function (shapes) {
            _this.initialize(shapes);
            canvas.initialize(shapes);
            DApplications.update(_this);
            _this.emit("ready", _this);
        });
        DDiagrams.applyBackground(serialized, canvas, this);
        this.canvas = canvas;
    };
    DDiagramBase.prototype.initialize = function (shapes) {
        // DO NOTHING
    };
    DDiagramBase.prototype.onUnset = function () {
        var canvas = this.canvas;
        if (canvas != null) {
            this.canvas = null;
        }
    };
    DDiagramBase.prototype.get = function () {
        return this._serialized;
    };
    Object.defineProperty(DDiagramBase.prototype, "layer", {
        get: function () {
            var canvas = this.canvas;
            if (canvas != null) {
                return canvas.layer.active;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    DDiagramBase.prototype.getType = function () {
        return "DDiagramBase";
    };
    return DDiagramBase;
}(DCanvasContainer));
export { DDiagramBase };
//# sourceMappingURL=d-diagram-base.js.map