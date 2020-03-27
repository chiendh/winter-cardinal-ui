import { DApplications } from "../d-applications";
var UtilOverlay = /** @class */ (function () {
    function UtilOverlay(options) {
        this._layer = null;
        this._application = (options == null || options.parent == null ?
            DApplications.last() : null);
    }
    Object.defineProperty(UtilOverlay.prototype, "picked", {
        get: function () {
            return this._layer;
        },
        enumerable: true,
        configurable: true
    });
    UtilOverlay.prototype.pick = function (target) {
        var layer = this._layer;
        if (layer == null) {
            layer = DApplications.getLayerOverlay(target);
            if (!layer) {
                var application = this._application;
                if (application) {
                    layer = application.getLayerOverlay();
                }
                else {
                    layer = DApplications.last().getLayerOverlay();
                }
            }
            this._layer = layer;
        }
        return layer;
    };
    return UtilOverlay;
}());
export { UtilOverlay };
//# sourceMappingURL=util-overlay.js.map