/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DMapCoordinates } from "./d-map-coordinates";
import { DMapTilePyramidImpl } from "./d-map-tile-pyramid-impl";
export var DMapTileUrlBuilderKokudo = function (tz, tx, ty) {
    if (5 <= tz) {
        return "https://cyberjapandata.gsi.go.jp/xyz/pale/" + tz + "/" + tx + "/" + ty + ".png";
    }
    else if (2 <= tz) {
        return "https://cyberjapandata.gsi.go.jp/xyz/std/" + tz + "/" + tx + "/" + ty + ".png";
    }
    else {
        return "https://cyberjapandata.gsi.go.jp/xyz/earthhillshade/" + tz + "/" + tx + "/" + ty + ".png";
    }
};
export var DMapTileUrlBuilderOsm = function (tz, tx, ty) {
    return "https://" + "abc"[(tx + ty) % 3] + ".tile.openstreetmap.org/" + tz + "/" + tx + "/" + ty + ".png";
};
export var DMapTileUrlBuilderOsmfj = function (tz, tx, ty) {
    return "https://j.tile.openstreetmap.jp/" + tz + "/" + tx + "/" + ty + ".png";
};
var DMapTilePyramids = /** @class */ (function () {
    function DMapTilePyramids() {
    }
    DMapTilePyramids.toPlaneOptions = function (options) {
        var plane = options.plane;
        if (plane) {
            return {
                min: (plane.min != null ? plane.min : this.MIN),
                max: (plane.max != null ? plane.max : this.MAX),
                throttle: (plane.throttle != null ? plane.throttle : this.THROTTLE)
            };
        }
        else {
            return {
                min: this.MIN,
                max: this.MAX,
                throttle: this.THROTTLE
            };
        }
    };
    DMapTilePyramids.from = function (options) {
        return new DMapTilePyramidImpl({
            canvas: options.canvas,
            builder: options.builder || DMapTileUrlBuilderOsmfj,
            mapping: options.canvas.tile.mapping,
            coordinate: options.coordinate || DMapCoordinates.DEFAULT,
            plane: this.toPlaneOptions(options)
        });
    };
    DMapTilePyramids.MIN = 0;
    DMapTilePyramids.MAX = 18;
    DMapTilePyramids.THROTTLE = 333;
    return DMapTilePyramids;
}());
export { DMapTilePyramids };
//# sourceMappingURL=d-map-tile-pyramids.js.map