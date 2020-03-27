/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { BaseTexture, MIPMAP_MODES } from "pixi.js";
import { DynamicAtlasItemEmpty } from "./dynamic-atlas-item-empty";
import { DynamicAtlasItemWhite } from "./dynamic-atlas-item-white";
var MAXIMUM_TEXTURE_SIZE = 4096;
var DynamicAtlas = /** @class */ (function () {
    function DynamicAtlas(resolution) {
        var canvas = this._canvas = document.createElement("canvas");
        canvas.width = canvas.height = 256;
        var baseTexture = this._baseTexture = BaseTexture.from(canvas, {
            mipmap: MIPMAP_MODES.OFF,
            resolution: resolution
        });
        this._idToDatum = {};
        this._sortedData = [];
        this._predefined = {
            empty: new DynamicAtlasItemEmpty("empty", 10, 10, 0, baseTexture),
            white: new DynamicAtlasItemWhite("white", 10, 10, 0, baseTexture)
        };
        this._isDirty = true;
    }
    DynamicAtlas.prototype.updateFrames = function (width, data) {
        var padding = 4;
        var x = padding;
        var y = padding;
        var maxRowHeight = 0;
        for (var i = 0, imax = data.length; i < imax; ++i) {
            var datum = data[i];
            if (width < x + datum.frame.width + padding) {
                x = padding;
                y += maxRowHeight + padding;
                maxRowHeight = 0;
            }
            datum.frame.x = x | 0;
            datum.frame.y = y | 0;
            x += datum.frame.width + padding;
            maxRowHeight = Math.max(maxRowHeight, datum.frame.height);
        }
        var minHeight = y + maxRowHeight + padding;
        var result = 256;
        while (result < minHeight) {
            result <<= 1;
        }
        return Math.min(MAXIMUM_TEXTURE_SIZE, result);
    };
    DynamicAtlas.prototype.renderFrames = function (width, height, data) {
        var canvas = this._canvas;
        canvas.width = width;
        canvas.height = height;
        var context = canvas.getContext("2d");
        if (context != null) {
            for (var i = 0, imax = data.length; i < imax; ++i) {
                var datum = data[i];
                datum.render(context);
            }
        }
    };
    DynamicAtlas.prototype.applyFrames = function (data) {
        for (var i = 0, imax = data.length; i < imax; ++i) {
            var datum = data[i];
            datum.applyFrame();
        }
    };
    DynamicAtlas.prototype.calcCanvasWidth = function (data) {
        var result = 128;
        for (var i = data.length - 1; 0 <= i; --i) {
            var datum = data[i];
            var size = Math.max(datum.frame.width, datum.frame.height);
            while (result < size) {
                result <<= 1;
            }
        }
        return Math.min(MAXIMUM_TEXTURE_SIZE, result << 1);
    };
    DynamicAtlas.prototype.cleanup = function (data) {
        data.sort(DynamicAtlas.ITEM_COMPARATOR);
        for (var i = data.length - 1; 0 <= i; --i) {
            var datum = data[i];
            if (0 < datum.ref) {
                data.length = i + 1;
                return;
            }
        }
        data.length = 0;
    };
    DynamicAtlas.prototype.begin = function () {
        var data = this._sortedData;
        for (var i = 0, imax = data.length; i < imax; ++i) {
            var datum = data[i];
            datum.ref = 0;
        }
        this._isDirty = false;
    };
    DynamicAtlas.prototype.end = function () {
        var idToDatum = this._idToDatum;
        var data = this._sortedData;
        for (var i = 0, imax = data.length; i < imax; ++i) {
            var datum = data[i];
            if (datum.ref <= 0) {
                if (!(datum.id in this._predefined)) {
                    datum.destroy();
                }
                delete idToDatum[datum.id];
                this._isDirty = true;
            }
        }
    };
    DynamicAtlas.prototype.repack = function (forcibly) {
        if (forcibly === true || this._isDirty) {
            this._isDirty = false;
            var data = this._sortedData;
            this.cleanup(data);
            var canvasWidth = this.calcCanvasWidth(data);
            var canvasHeight = this.updateFrames(canvasWidth, data);
            this.renderFrames(canvasWidth, canvasHeight, data);
            this._baseTexture.setRealSize(canvasWidth, canvasHeight);
            this.applyFrames(data);
        }
    };
    DynamicAtlas.prototype.get = function (id) {
        var idToDatum = this._idToDatum;
        var datum = idToDatum[id];
        if (datum != null) {
            datum.ref += 1;
            return datum;
        }
        else {
            var predefined = this._predefined[id];
            if (predefined != null) {
                this.set(id, predefined);
                return predefined;
            }
        }
        return null;
    };
    DynamicAtlas.prototype.set = function (id, item) {
        var result = this._idToDatum[id];
        item.ref += 1;
        this._idToDatum[id] = item;
        this._sortedData.push(item);
        this._isDirty = true;
        return result;
    };
    DynamicAtlas.prototype.toDirty = function () {
        this._isDirty = true;
    };
    DynamicAtlas.prototype.getDefaultTexture = function () {
        return this.get("white").texture;
    };
    DynamicAtlas.prototype.getBaseTexture = function () {
        return this._baseTexture;
    };
    DynamicAtlas.prototype.release = function (id) {
        var idToDatum = this._idToDatum;
        var datum = idToDatum[id];
        if (datum != null) {
            datum.ref -= 1;
            if (datum.ref <= 0) {
                if (!(datum.id in this._predefined)) {
                    datum.destroy();
                }
                delete idToDatum[id];
                this._isDirty = true;
            }
        }
    };
    DynamicAtlas.ITEM_COMPARATOR = function (a, b) {
        if (a.ref <= 0) {
            if (b.ref <= 0) {
                return 0;
            }
            else {
                return +1;
            }
        }
        else {
            if (b.ref <= 0) {
                return -1;
            }
        }
        if (a.frame.height < b.frame.height) {
            return -1;
        }
        else if (b.frame.height < a.frame.height) {
            return +1;
        }
        else {
            return a.frame.width - b.frame.width;
        }
    };
    return DynamicAtlas;
}());
export { DynamicAtlas };
//# sourceMappingURL=dynamic-atlas.js.map