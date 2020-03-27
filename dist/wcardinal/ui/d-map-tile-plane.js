/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Point } from "pixi.js";
import { DMapTile } from "./d-map-tile";
var DMapTilePlane = /** @class */ (function () {
    function DMapTilePlane(parent, builder, tz, mapping, coordinate, onLoaded) {
        var _this = this;
        this._parent = parent;
        this._builder = builder;
        this._onLoaded = onLoaded;
        this._isOnLoadedCalled = false;
        this._isOnLoadedAllowed = true;
        this._onLoadedBound = function () {
            _this.onLoaded();
        };
        this._tz = tz;
        this._lon0 = NaN;
        this._lat0 = NaN;
        this._lon1 = NaN;
        this._lat1 = NaN;
        this._tiles = new Map();
        this._renderTileBound = function (tile) {
            _this.renderTile(tile);
        };
        this._txmin = NaN;
        this._txmax = NaN;
        this._tymin = NaN;
        this._tymax = NaN;
        this._deleteTileBound = function (tile, tileCode, tiles) {
            _this.deleteTile(tile, tileCode, tiles);
        };
        this._destroyTileBound = function (tile) {
            _this.destroyTile(tile);
        };
        this._updateLoadingStateForEach = function (tile) {
            if (!tile.loaded) {
                _this._isLoaded = false;
            }
        };
        this._tileCount = coordinate.toTileCount(tz);
        this._tileScaleRelative = 1 / this._tileCount;
        this._tileScale = mapping.scale * this._tileScaleRelative;
        this._tileSize = coordinate.getTileSize() * mapping.scale;
        this._mapping = mapping;
        this._coordinate = coordinate;
        this._isLoaded = true;
    }
    DMapTilePlane.prototype.newTile = function (tx, ty, px, py, scale) {
        return new DMapTile(this._parent, tx, ty, px, py, scale);
    };
    DMapTilePlane.prototype.renderTile = function (tile) {
        tile.render(this._renderer);
    };
    Object.defineProperty(DMapTilePlane.prototype, "tz", {
        get: function () {
            return this._tz;
        },
        enumerable: true,
        configurable: true
    });
    DMapTilePlane.prototype.render = function (renderer) {
        this._renderer = renderer;
        this._tiles.forEach(this._renderTileBound);
    };
    DMapTilePlane.prototype.move = function (lon0, lat0, lon1, lat1) {
        var oldLon0 = this._lon0;
        var oldLat0 = this._lat0;
        var oldLon1 = this._lon1;
        var oldLat1 = this._lat1;
        if (oldLon0 !== lon0 || oldLat0 !== lat0 || oldLon1 !== lon1 || oldLat1 !== lat1) {
            this._lon0 = lon0;
            this._lat0 = lat0;
            this._lon1 = lon1;
            this._lat1 = lat1;
            var tz = this._tz;
            var coordinate = this._coordinate;
            var work = DMapTilePlane.WORK;
            work.set(lon0, lat0);
            coordinate.lonLatToTile(work, tz, work);
            var tx0 = work.x;
            var ty0 = work.y;
            work.set(lon1, lat1);
            coordinate.lonLatToTile(work, tz, work);
            var tx1 = work.x;
            var ty1 = work.y;
            var tileCount = this._tileCount;
            var txmin = Math.max(0, tx0);
            var txmax = Math.min(tileCount - 1, tx1);
            var tymin = Math.max(0, ty0);
            var tymax = Math.min(tileCount - 1, ty1);
            var dtxmin = txmin - this._txmin;
            var dtxmax = txmax - this._txmax;
            var dtymin = tymin - this._tymin;
            var dtymax = tymax - this._tymax;
            var isTxMinChanged = dtxmin !== dtxmin || dtxmin < 0 || 1 < dtxmin;
            var isTxMaxChanged = dtxmax !== dtxmax || 0 < dtxmax || dtxmax < -1;
            var isTyMinChanged = dtymin !== dtymin || dtymin < 0 || 1 < dtymin;
            var isTyMaxChanged = dtymax !== dtymax || 0 < dtymax || dtymax < -1;
            if (isTxMinChanged || isTxMaxChanged || isTyMinChanged || isTyMaxChanged) {
                if (isTxMinChanged) {
                    this._txmin = txmin;
                }
                else {
                    txmin = this._txmin;
                }
                if (isTxMaxChanged) {
                    this._txmax = txmax;
                }
                else {
                    txmax = this._txmax;
                }
                if (isTyMinChanged) {
                    this._tymin = tymin;
                }
                else {
                    tymin = this._tymin;
                }
                if (isTyMaxChanged) {
                    this._tymax = tymax;
                }
                else {
                    tymax = this._tymax;
                }
                var tiles = this._tiles;
                tiles.forEach(this._deleteTileBound);
                var ctx = (txmin + txmax) >> 1;
                var cty = (tymin + tymax) >> 1;
                var ltx = Math.max(ctx - txmin, txmax - ctx);
                var lty = Math.max(cty - tymin, tymax - cty);
                var lt = Math.max(ltx, lty);
                this.toOffset(work);
                var offsetX = work.x;
                var offsetY = work.y;
                this._isOnLoadedCalled = false;
                this._isOnLoadedAllowed = false;
                this.loadTile(tz, ctx, cty, offsetX, offsetY, work);
                for (var it = 1; it <= lt; ++it) {
                    var txa = ctx - it;
                    if (txmin <= txa) {
                        this.loadTilesY(tz, txa, cty, it, tymin, tymax, offsetX, offsetY, work);
                    }
                    var txb = ctx + it;
                    if (txb <= txmax) {
                        this.loadTilesY(tz, txb, cty, it, tymin, tymax, offsetX, offsetY, work);
                    }
                    var tya = cty - it;
                    if (tymin <= tya) {
                        this.loadTilesX(tz, ctx, it - 1, txmin, txmax, tya, offsetX, offsetY, work);
                    }
                    var tyb = cty + it;
                    if (tyb <= tymax) {
                        this.loadTilesX(tz, ctx, it - 1, txmin, txmax, tyb, offsetX, offsetY, work);
                    }
                }
                this._isOnLoadedAllowed = true;
                if (this._isOnLoadedCalled) {
                    this.onLoaded();
                }
            }
        }
    };
    DMapTilePlane.prototype.loadTilesX = function (tz, ctx, ltx, txmin, txmax, ty, ox, oy, work) {
        this.loadTile(tz, ctx, ty, ox, oy, work);
        for (var i = 1; i <= ltx; ++i) {
            var txa = ctx - i;
            if (txmin <= txa) {
                this.loadTile(tz, txa, ty, ox, oy, work);
            }
            var txb = ctx + i;
            if (txb <= txmax) {
                this.loadTile(tz, txb, ty, ox, oy, work);
            }
        }
    };
    DMapTilePlane.prototype.loadTilesY = function (tz, tx, cty, lty, tymin, tymax, ox, oy, work) {
        this.loadTile(tz, tx, cty, ox, oy, work);
        for (var i = 1; i <= lty; ++i) {
            var tya = cty - i;
            if (tymin <= tya) {
                this.loadTile(tz, tx, tya, ox, oy, work);
            }
            var tyb = cty + i;
            if (tyb <= tymax) {
                this.loadTile(tz, tx, tyb, ox, oy, work);
            }
        }
    };
    DMapTilePlane.prototype.loadTile = function (tz, tx, ty, ox, oy, work) {
        var coordinate = this._coordinate;
        var tileCode = coordinate.toTileCode(tz, tx, ty);
        var tiles = this._tiles;
        var tile = tiles.get(tileCode);
        if (tile == null) {
            this.toTilePosition(tx, ty, ox, oy, work);
            tile = this.newTile(tx, ty, work.x, work.y, this._tileScale);
            tiles.set(tileCode, tile);
            tile.load(this._builder(tz, tx, ty), this._onLoadedBound);
            this._isLoaded = false;
        }
    };
    DMapTilePlane.prototype.toTilePosition = function (tx, ty, ox, oy, result) {
        var tileSize = this._tileSize;
        var tileScaleRelative = this._tileScaleRelative;
        result.set(tx, ty);
        this._coordinate.tileToPixels(result, tileSize, result);
        result.set(result.x * tileScaleRelative + ox, result.y * tileScaleRelative + oy);
        return result;
    };
    DMapTilePlane.prototype.toOffset = function (result) {
        var parent = this._parent;
        var mapping = this._mapping;
        var tileSize = this._tileSize;
        result.set(-mapping.x * tileSize + parent.width * 0.5, -mapping.y * tileSize + parent.height * 0.5);
        return result;
    };
    DMapTilePlane.prototype.deleteTile = function (tile, tileCode, tiles) {
        var tx = tile.tx;
        var ty = tile.ty;
        if (tx < this._txmin || this._txmax < tx || ty < this._tymin || this._tymax < ty) {
            tiles.delete(tileCode);
            tile.destroy();
        }
    };
    DMapTilePlane.prototype.destroy = function () {
        var tiles = this._tiles;
        tiles.forEach(this._destroyTileBound);
        tiles.clear();
    };
    DMapTilePlane.prototype.destroyTile = function (tile) {
        tile.destroy();
    };
    DMapTilePlane.prototype.updateLoadingState = function () {
        this._isLoaded = true;
        this._tiles.forEach(this._updateLoadingStateForEach);
    };
    DMapTilePlane.prototype.onLoaded = function () {
        if (this._isOnLoadedAllowed) {
            this._onLoaded();
        }
        else {
            this._isOnLoadedCalled = true;
        }
    };
    Object.defineProperty(DMapTilePlane.prototype, "loaded", {
        get: function () {
            if (!this._isLoaded) {
                this.updateLoadingState();
            }
            return this._isLoaded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DMapTilePlane.prototype, "mapping", {
        get: function () {
            return this._mapping;
        },
        set: function (mapping) {
            var _this = this;
            var coordinate = this._coordinate;
            var tileScale = mapping.scale * this._tileScaleRelative;
            var tileSize = coordinate.getTileSize() * mapping.scale;
            this._tileScale = tileScale;
            this._tileSize = tileSize;
            this._mapping = mapping;
            var work = DMapTilePlane.WORK;
            this.toOffset(work);
            var offsetX = work.x;
            var offsetY = work.y;
            this._tiles.forEach(function (tile) {
                _this.toTilePosition(tile.tx, tile.ty, offsetX, offsetY, work);
                tile.transform(work.x, work.y, tileScale);
            });
        },
        enumerable: true,
        configurable: true
    });
    DMapTilePlane.WORK = new Point();
    return DMapTilePlane;
}());
export { DMapTilePlane };
//# sourceMappingURL=d-map-tile-plane.js.map