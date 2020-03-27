/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Container } from "pixi.js";
import { DApplications } from "./d-applications";
import { DDiagramLayer } from "./d-diagram-layer";
var DDiagramLayerContainer = /** @class */ (function (_super) {
    __extends(DDiagramLayerContainer, _super);
    function DDiagramLayerContainer() {
        var _this = _super.call(this) || this;
        _this._active = null;
        _this.interactive = false;
        _this.interactiveChildren = false;
        return _this;
    }
    Object.defineProperty(DDiagramLayerContainer.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (layer) {
            if (this._active !== layer && (layer == null || 0 <= this.children.indexOf(layer))) {
                this._active = layer;
                this.emit("change", this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DDiagramLayerContainer.prototype.create = function (name, activate) {
        var result = new DDiagramLayer(name);
        this.attach(result, activate);
        return result;
    };
    /**
     * Adds the specified layer and activates it if the `activate` is true.
     *
     * @param layer
     * @param activate
     */
    DDiagramLayerContainer.prototype.attach = function (layer, activate) {
        this.addChild(layer);
        if (activate === true) {
            this._active = layer;
        }
        this.emit("change", this);
        DApplications.update(this);
    };
    DDiagramLayerContainer.prototype.attachAt = function (layer, index, activate) {
        this.addChildAt(layer, index);
        if (activate === true) {
            this._active = layer;
        }
        this.emit("change", this);
        DApplications.update(this);
    };
    /**
     * Removes the specified layer from this container and activates the specified layer.
     * This method does not destroy the secified layer.
     *
     * @param layer
     */
    DDiagramLayerContainer.prototype.detach = function (layer, active) {
        var children = this.children;
        var index = children.indexOf(layer);
        if (0 <= index) {
            this._active = active;
            children.splice(index, 1);
            layer.parent = undefined;
            this.emit("change", this);
            DApplications.update(this);
        }
    };
    /**
     * Removes the specified layer and activate the next layer.
     * This method does not destroy the specified layer.
     *
     * @param layer
     * @param activateNext
     */
    DDiagramLayerContainer.prototype.delete = function (layer, activateNext) {
        var children = this.children;
        var index = children.indexOf(layer);
        if (0 <= index) {
            children.splice(index, 1);
            layer.parent = undefined;
            if (this._active === layer) {
                if (activateNext === true) {
                    if (index < children.length) {
                        this._active = children[index];
                    }
                    else if (0 < children.length) {
                        this._active = children[index - 1];
                    }
                    else {
                        this._active = null;
                    }
                }
                else {
                    this._active = null;
                }
            }
            this.emit("change", this);
            DApplications.update(this);
        }
        return index;
    };
    DDiagramLayerContainer.prototype.get = function (index) {
        var child = this.children[index];
        if (child != null) {
            return child;
        }
        return null;
    };
    DDiagramLayerContainer.prototype.clear = function () {
        var children = this.children;
        if (0 < children.length) {
            for (var i = children.length - 1; 0 <= i; --i) {
                var child = children[i];
                child.parent = null;
                child.destroy();
            }
            children.length = 0;
            this.emit("change", this);
            DApplications.update(this);
        }
    };
    DDiagramLayerContainer.prototype.destroy = function () {
        if (!this._destroyed) {
            this.clear();
            _super.prototype.destroy.call(this);
        }
    };
    DDiagramLayerContainer.prototype.size = function () {
        return this.children.length;
    };
    DDiagramLayerContainer.prototype.serialize = function (manager, items) {
        var result = [];
        var children = this.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            result.push(child.serialize(i, manager, items));
        }
        return result;
    };
    return DDiagramLayerContainer;
}(Container));
export { DDiagramLayerContainer };
//# sourceMappingURL=d-diagram-layer-container.js.map