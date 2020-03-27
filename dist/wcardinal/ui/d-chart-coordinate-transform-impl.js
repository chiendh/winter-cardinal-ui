import { DChartCoordinateDirection } from "./d-chart-coordinate";
var DChartCoordinateTransformImpl = /** @class */ (function () {
    function DChartCoordinateTransformImpl(theme) {
        this._theme = theme;
        this._id = 0;
        this._translate = 0;
        this._scale = 1;
        this._itranslate = 0;
        this._iscale = 1;
    }
    Object.defineProperty(DChartCoordinateTransformImpl.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartCoordinateTransformImpl.prototype, "translate", {
        get: function () {
            return this._translate;
        },
        set: function (translate) {
            this.set(translate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DChartCoordinateTransformImpl.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (scale) {
            this.set(undefined, scale);
        },
        enumerable: true,
        configurable: true
    });
    DChartCoordinateTransformImpl.prototype.bind = function (container, direction) {
        this.set(0, direction === DChartCoordinateDirection.X ? +1 : -1);
    };
    DChartCoordinateTransformImpl.prototype.unbind = function () {
        // DO NOTHING
    };
    DChartCoordinateTransformImpl.prototype.set = function (translate, scale) {
        var isChanged = false;
        if (translate != null && this._translate !== translate) {
            isChanged = true;
            this._translate = translate;
        }
        if (scale != null && this._scale !== scale) {
            isChanged = true;
            this._scale = scale;
        }
        if (isChanged) {
            this._id += 1;
            this._iscale = (this._theme.isZero(this._scale) ? 0 : 1 / this._scale);
            this._itranslate = -this._translate * this._iscale;
        }
    };
    DChartCoordinateTransformImpl.prototype.blend = function (ratio, mark) {
        var ratioi = 1 - ratio;
        var newTranslate = mark.newTranslate * ratio + mark.oldTranslate * ratioi;
        var newScale = mark.newScale * ratio + mark.oldScale * ratioi;
        this.set(newTranslate, newScale);
    };
    DChartCoordinateTransformImpl.prototype.map = function (value) {
        return this._translate + this._scale * value;
    };
    DChartCoordinateTransformImpl.prototype.mapAll = function (values, ifrom, iend, stride, offset) {
        var translate = this._translate;
        var scale = this._scale;
        for (var i = ifrom + offset; i < iend; i += stride) {
            values[i] = translate + scale * values[i];
        }
    };
    DChartCoordinateTransformImpl.prototype.unmap = function (value) {
        return this._itranslate + this._iscale * value;
    };
    DChartCoordinateTransformImpl.prototype.unmapAll = function (values, ifrom, iend, stride, offset) {
        var itranslate = this._itranslate;
        var iscale = this._iscale;
        for (var i = ifrom + offset; i < iend; i += stride) {
            values[i] = itranslate + iscale * values[i];
        }
    };
    return DChartCoordinateTransformImpl;
}());
export { DChartCoordinateTransformImpl };
//# sourceMappingURL=d-chart-coordinate-transform-impl.js.map