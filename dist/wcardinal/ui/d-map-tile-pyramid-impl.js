/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point, utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DMapTilePlane } from "./d-map-tile-plane";
var DMapTilePyramidImpl = /** @class */ (function (_super) {
    __extends(DMapTilePyramidImpl, _super);
    function DMapTilePyramidImpl(options) {
        var _this = _super.call(this) || this;
        var canvas = _this._canvas = options.canvas;
        _this._builder = options.builder;
        var mappingLonLat = _this._mapping = options.mapping;
        var coordinate = _this._coordinate = options.coordinate;
        _this._mappingInternal = _this.toMapping(canvas, mappingLonLat, coordinate);
        _this._z = NaN;
        _this._tz = NaN;
        _this._minZ = options.plane.min;
        _this._maxZ = options.plane.max;
        _this._planes = [];
        _this._onLoadedBound = function () {
            _this.onLoaded();
        };
        _this._fitBound = function () {
            _this._fitBoundTimeout = undefined;
            _this.fit();
        };
        _this._fitThrottle = options.plane.throttle;
        var fitThrottledBound = _this._fitThrottledBound = function () {
            _this.fitThrottled();
        };
        canvas.on("scale", fitThrottledBound);
        canvas.on("move", fitThrottledBound);
        canvas.appendRenderable(_this, true);
        return _this;
    }
    Object.defineProperty(DMapTilePyramidImpl.prototype, "coordinate", {
        get: function () {
            return this._coordinate;
        },
        enumerable: true,
        configurable: true
    });
    DMapTilePyramidImpl.prototype.fitThrottled = function () {
        if (this._fitBoundTimeout == null) {
            this._fitBoundTimeout = window.setTimeout(this._fitBound, this._fitThrottle);
        }
    };
    DMapTilePyramidImpl.prototype.toMapping = function (canvas, mapping, coordinate) {
        var work = DMapTilePyramidImpl.WORK_LONLAT;
        var tileSize = coordinate.getTileSize();
        work.set(mapping.from.lon, mapping.from.lat);
        coordinate.lonLatToPixels(work, 0, tileSize, work);
        var x0 = work.x;
        var y0 = work.y;
        work.set(mapping.to.lon, mapping.to.lat);
        coordinate.lonLatToPixels(work, 0, tileSize, work);
        var x1 = work.x;
        var y1 = work.y;
        var dx = Math.abs(x1 - x0);
        var dy = Math.abs(y1 - y0);
        var dmin = 0.0000001;
        var scale = 1;
        if (dmin < dx) {
            if (dmin < dy) {
                scale = Math.max(canvas.width / dx, canvas.height / dy);
            }
            else {
                scale = canvas.width / dx;
            }
        }
        else {
            if (dmin < dy) {
                scale = canvas.height / dy;
            }
        }
        return {
            scale: scale,
            x: 0.5 * (x1 + x0) / tileSize,
            y: 0.5 * (y1 + y0) / tileSize
        };
    };
    Object.defineProperty(DMapTilePyramidImpl.prototype, "mapping", {
        get: function () {
            return this._mapping;
        },
        set: function (mapping) {
            var oldMapping = this._mappingInternal;
            var newMapping = this.toMapping(this._canvas, mapping, this._coordinate);
            var threshold = 0.0000001;
            if (threshold < Math.abs(oldMapping.scale - newMapping.scale) ||
                threshold < Math.abs(oldMapping.x - newMapping.x) ||
                threshold < Math.abs(oldMapping.y - newMapping.y)) {
                this._mappingInternal = newMapping;
                var planes = this._planes;
                for (var i = 0, imax = planes.length; i < imax; ++i) {
                    var plane = planes[i];
                    if (plane) {
                        plane.mapping = newMapping;
                    }
                }
                DApplications.update(this._canvas);
                this._fitThrottledBound();
            }
        },
        enumerable: true,
        configurable: true
    });
    DMapTilePyramidImpl.prototype.newPlane = function (tz) {
        return new DMapTilePlane(this._canvas, this._builder, tz, this._mappingInternal, this._coordinate, this._onLoadedBound);
    };
    DMapTilePyramidImpl.prototype.render = function (renderer) {
        var tz = this._tz;
        var planes = this._planes;
        for (var i = 0; i < tz; ++i) {
            var plane = planes[i];
            if (plane != null) {
                plane.render(renderer);
            }
        }
        for (var i = planes.length - 1; tz < i; --i) {
            var plane = planes[i];
            if (plane != null) {
                plane.render(renderer);
            }
        }
        var planeTz = planes[tz];
        if (planeTz != null) {
            planeTz.render(renderer);
        }
    };
    DMapTilePyramidImpl.prototype.toTileZ = function (tz) {
        return Math.min(this._maxZ, Math.max(this._minZ, Math.floor(tz)));
    };
    DMapTilePyramidImpl.prototype.updateTransform = function () {
        // DO NOTHING
    };
    DMapTilePyramidImpl.prototype.toZ = function (scale) {
        return Math.log(this._mappingInternal.scale * scale) / Math.log(2);
    };
    DMapTilePyramidImpl.prototype.move = function (scale, lon0, lat0, lon1, lat1) {
        var planes = this._planes;
        var z = this.toZ(scale);
        if (this._z !== z) {
            this._z = z;
            var tz = this.toTileZ(z);
            if (this._tz !== tz) {
                this._tz = tz;
                var newPlane = planes[tz];
                if (newPlane == null) {
                    newPlane = this.newPlane(tz);
                    planes[tz] = newPlane;
                }
            }
        }
        var plane = planes[this._tz];
        if (plane != null) {
            plane.move(lon0, lat0, lon1, lat1);
        }
        return this;
    };
    DMapTilePyramidImpl.prototype.fit = function () {
        var canvas = this._canvas;
        if (canvas != null) {
            var container = canvas.parent;
            if (container != null) {
                var scale = canvas.scale;
                var scaleX = scale.x;
                var scaleY = scale.y;
                var x = canvas.x;
                var y = canvas.y;
                var coordinate = this._coordinate;
                var mapping = this._mappingInternal;
                var tileSize = coordinate.getTileSize() * mapping.scale;
                var x0 = mapping.x * tileSize - (x / scaleX + 0.5 * canvas.width);
                var x1 = x0 + container.width / scaleX;
                var y0 = mapping.y * tileSize - (y / scaleY + 0.5 * canvas.height);
                var y1 = y0 + container.height / scaleY;
                var work = DMapTilePyramidImpl.WORK_LONLAT;
                work.set(x0, y0);
                coordinate.pixelsToLonLat(work, 0, tileSize, work);
                var lon0 = work.x;
                var lat0 = work.y;
                work.set(x1, y1);
                coordinate.pixelsToLonLat(work, 0, tileSize, work);
                var lon1 = work.x;
                var lat1 = work.y;
                this.move(scaleX, lon0, lat0, lon1, lat1);
            }
        }
        return this;
    };
    DMapTilePyramidImpl.prototype.destroyPlanesBefore = function (tz, planes) {
        for (var i = 0; i < tz; ++i) {
            var plane = planes[i];
            if (plane) {
                plane.destroy();
                planes[i] = undefined;
            }
        }
    };
    DMapTilePyramidImpl.prototype.destroyPlanesAfter = function (tz, planes) {
        for (var i = tz + 1, imax = planes.length; i < imax; ++i) {
            var plane = planes[i];
            if (plane) {
                plane.destroy();
                planes[i] = undefined;
            }
        }
    };
    DMapTilePyramidImpl.prototype.cleanup = function () {
        var tz = this._tz;
        var planes = this._planes;
        var planeTz = planes[tz];
        if (planeTz && planeTz.loaded) {
            this.destroyPlanesBefore(tz, planes);
            this.destroyPlanesAfter(tz, planes);
            return;
        }
        for (var i = tz + 1, imax = planes.length; i < imax; ++i) {
            var plane = planes[i];
            if (plane && plane.loaded) {
                this.destroyPlanesBefore(tz, planes);
                this.destroyPlanesAfter(i, planes);
                return;
            }
        }
        for (var i = tz - 1; 0 <= i; --i) {
            var plane = planes[i];
            if (plane && plane.loaded) {
                this.destroyPlanesBefore(i, planes);
                return;
            }
        }
    };
    DMapTilePyramidImpl.prototype.onLoaded = function () {
        this.cleanup();
        DApplications.update(this._canvas);
    };
    DMapTilePyramidImpl.prototype.destroy = function () {
        var planes = this._planes;
        for (var i = 0, imax = planes.length; i < imax; ++i) {
            var plane = planes[i];
            if (plane) {
                plane.destroy();
                planes[i] = undefined;
            }
        }
        var canvas = this._canvas;
        var fitThrottledBound = this._fitThrottledBound;
        canvas.off("scale", fitThrottledBound);
        canvas.off("move", fitThrottledBound);
        canvas.removeRenderable(this, true);
        return this;
    };
    DMapTilePyramidImpl.WORK_LONLAT = new Point();
    return DMapTilePyramidImpl;
}(utils.EventEmitter));
export { DMapTilePyramidImpl };
//# sourceMappingURL=d-map-tile-pyramid-impl.js.map