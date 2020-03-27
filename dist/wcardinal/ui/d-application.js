import { Renderer } from "pixi.js";
import { DApplicationLayer } from "./d-application-layer";
import { DApplicationLayerOptions } from "./d-application-layer-options";
import { DApplications } from "./d-applications";
import { isString } from "./util/is-string";
var DApplication = /** @class */ (function () {
    function DApplication(options) {
        DApplications.add(this);
        // Root
        this._root = this.toRootElement(options);
        // Resolution
        var resolution = (options && options.resolution != null ?
            options.resolution : (window.devicePixelRatio || 1));
        this._resolution = resolution;
        // Remove the accessibility plugin
        delete Renderer.__plugins.accessibility;
        // Options
        this._options = options;
        // Base layer
        var base = this._base = this.newLayerBase(options);
        // Overlay layer
        this._isOverlayEnabled = !!(options && options.overlay);
        if (!this._isOverlayEnabled) {
            this._overlay = base;
        }
    }
    Object.defineProperty(DApplication.prototype, "stage", {
        get: function () {
            return this._base.stage;
        },
        enumerable: true,
        configurable: true
    });
    DApplication.prototype.getRootElement = function () {
        return this._root;
    };
    DApplication.prototype.getResolution = function () {
        return this._resolution;
    };
    DApplication.prototype.toRootElement = function (options) {
        var root = options && options.root;
        if (root != null) {
            if (isString(root)) {
                var found = document.querySelector(root);
                if (found) {
                    return found;
                }
            }
            else {
                return root;
            }
        }
        return document.body;
    };
    DApplication.prototype.toLayerBaseOptions = function (options) {
        var root = this._root;
        var resolution = this._resolution;
        if (options) {
            return new DApplicationLayerOptions({
                root: root,
                padding: options.padding,
                width: options.width,
                height: options.height,
                background: options.background,
                resolution: resolution,
                antialias: options.antialias,
                overlay: false
            });
        }
        return new DApplicationLayerOptions({
            root: root,
            resolution: resolution,
            overlay: false
        });
    };
    DApplication.prototype.newLayerBase = function (options) {
        return new DApplicationLayer(this, this.toLayerBaseOptions(options));
    };
    DApplication.prototype.getLayerBase = function () {
        return this._base;
    };
    DApplication.prototype.toLayerOverlayOptions = function (options) {
        var root = this._root;
        var resolution = this._resolution;
        if (options) {
            return new DApplicationLayerOptions({
                root: root,
                padding: options.padding,
                width: options.width,
                height: options.height,
                background: {
                    color: null
                },
                resolution: resolution,
                antialias: options.antialias,
                overlay: true
            });
        }
        return new DApplicationLayerOptions({
            root: root,
            resolution: resolution,
            overlay: true
        });
    };
    DApplication.prototype.newLayerOverlay = function (options) {
        return new DApplicationLayer(this, this.toLayerOverlayOptions(options));
    };
    DApplication.prototype.getLayerOverlay = function () {
        if (this._isOverlayEnabled) {
            if (this._overlay == null) {
                this._overlay = this.newLayerOverlay(this._options);
            }
            return this._overlay;
        }
        else {
            return this._base;
        }
    };
    DApplication.prototype.update = function () {
        if (this._isOverlayEnabled) {
            var base = this._base;
            base.update();
            var overlay = this._overlay;
            if (overlay) {
                overlay.update();
            }
        }
        else {
            return this._base.update();
        }
    };
    DApplication.prototype.render = function () {
        if (this._isOverlayEnabled) {
            var base = this._base;
            base.render();
            var overlay = this._overlay;
            if (overlay) {
                overlay.render();
            }
        }
        else {
            return this._base.render();
        }
    };
    return DApplication;
}());
export { DApplication };
//# sourceMappingURL=d-application.js.map