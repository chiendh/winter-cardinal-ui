/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DMapCoordinateEPSG3857 = /** @class */ (function () {
    function DMapCoordinateEPSG3857(tileSize) {
        if (tileSize === void 0) { tileSize = 256; }
        this._tileSize = tileSize;
    }
    DMapCoordinateEPSG3857.prototype.getTileSize = function () {
        return this._tileSize;
    };
    /**
     * Converts the given (lon, lat) point in WGS84 to (x, y) in EPSG:900913.
     * The origin of the converted point (x, y) is at the middle-left corner.
     * The `meters` can be the same instance that is passed in as the `lonlat`.
     *
     * @param lonlat (lon, lat) point
     * @param meters (x, y) point in meters converted from the given lonlat.
     * @return (x, y) point in meters
     * @see https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/
     * @see https://qiita.com/MALORGIS/items/1a9114dd090e5b891bf7
     */
    DMapCoordinateEPSG3857.prototype.lonLatToMeters = function (lonlat, meters) {
        var C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
        meters.x = lonlat.x * C / 180;
        meters.y = Math.log(Math.tan((90 + lonlat.y) * Math.PI / 360)) * C / Math.PI;
        return meters;
    };
    /**
     * The `lonlat` can be the same instance that is passed in as the `meters`.
     *
     * @param meters
     * @param lonlat
     */
    DMapCoordinateEPSG3857.prototype.metersToLonLat = function (meters, lonlat) {
        var C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
        lonlat.x = meters.x / C * 180;
        lonlat.y = Math.atan(Math.exp(meters.y * Math.PI / C)) * 360 / Math.PI - 90;
        return lonlat;
    };
    /**
     * Converts pixel coordinates in given zoom level of pyramid to EPSG:900913.
     * The origin of the `pixels` is the top-left corner.
     * The `meters` can be the same instance that is passed in as the `pixels`.
     */
    DMapCoordinateEPSG3857.prototype.pixelsToMeters = function (pixels, tz, tileSize, meters) {
        var R = this.toResolution(tz, tileSize);
        var C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
        meters.x = pixels.x * R - C;
        meters.y = C - pixels.y * R;
        return meters;
    };
    /**
     * Converts EPSG:900913 to pyramid pixel coordinates in given zoom level.
     * The origin of the pixels is the top-left corner.
     * The `pixels` can be the same instance that is passed in as the `meters`.
     */
    DMapCoordinateEPSG3857.prototype.metersToPixels = function (meters, tz, tileSize, pixels) {
        var R = this.toResolution(tz, tileSize);
        var C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
        pixels.x = (meters.x + C) / R;
        pixels.y = (C - meters.y) / R;
        return pixels;
    };
    /**
     * Returns a tile covering region in given pixel coordinates.
     * The origin of the tile is the top-left corner.
     * The `tile` can be the same instance that is passed in as the `pixels`.
     */
    DMapCoordinateEPSG3857.prototype.pixelsToTile = function (pixels, tileSize, tile) {
        tile.x = Math.ceil(pixels.x / tileSize) - 1;
        tile.y = Math.ceil(pixels.y / tileSize) - 1;
        return tile;
    };
    /**
     * The origin of the tile is the top-left corner.
     * The `tile` can be the same instance that is passed in as the `meters`.
     */
    DMapCoordinateEPSG3857.prototype.metersToTile = function (meters, tz, tile) {
        var C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
        var Z = 1 << tz;
        tile.x = Math.ceil(0.5 * (meters.x / C + 1) * Z) - 1;
        tile.y = Math.ceil(0.5 * (1 - meters.y / C) * Z) - 1;
        return tile;
    };
    DMapCoordinateEPSG3857.prototype.lonLatToTile = function (lonlat, tz, tile) {
        return this.metersToTile(this.lonLatToMeters(lonlat, tile), tz, tile);
    };
    DMapCoordinateEPSG3857.prototype.lonLatToPixels = function (lonlat, tz, tileSize, pixels) {
        return this.metersToPixels(this.lonLatToMeters(lonlat, pixels), tz, tileSize, pixels);
    };
    DMapCoordinateEPSG3857.prototype.pixelsToLonLat = function (pixels, tz, tileSize, lonlat) {
        return this.metersToLonLat(this.pixelsToMeters(pixels, tz, tileSize, lonlat), lonlat);
    };
    /**
     * The `pixels` can be the same instance that is passed in as the `tile`.
     */
    DMapCoordinateEPSG3857.prototype.tileToPixels = function (tile, tileSize, pixels) {
        pixels.x = tile.x * tileSize;
        pixels.y = tile.y * tileSize;
        return pixels;
    };
    /**
     * Returns bounds of the given tile in EPSG:900913 coordinates
     * The `meters` can be the same instance that is passed in as the `tile`.
     */
    DMapCoordinateEPSG3857.prototype.tileToMeters = function (tile, tz, meters) {
        var R = this.toResolutionMeter(tz);
        var C = DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF;
        meters.x = tile.x * R + C;
        meters.y = C - tile.y * R;
        return meters;
    };
    DMapCoordinateEPSG3857.prototype.toResolutionMeter = function (tz) {
        return (2 * DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF) / (1 << tz);
    };
    DMapCoordinateEPSG3857.prototype.toResolution = function (tz, tileSize) {
        return (2 * DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF) / (tileSize << tz);
    };
    DMapCoordinateEPSG3857.prototype.toTileCount = function (tz) {
        return (1 << tz);
    };
    DMapCoordinateEPSG3857.prototype.toTileCode = function (tz, tx, ty) {
        return (tx << tz) + ty;
    };
    DMapCoordinateEPSG3857.CIRCUMFERENCE_HALF = Math.PI * 6378137 /* Approximate earth radius in meter */;
    return DMapCoordinateEPSG3857;
}());
export { DMapCoordinateEPSG3857 };
//# sourceMappingURL=d-map-coordinate-epsg3857.js.map