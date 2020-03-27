/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { resources, Sprite, Texture } from "pixi.js";
var DMapTile = /** @class */ (function () {
    function DMapTile(parent, tx, ty, px, py, scale) {
        this.tx = tx;
        this.ty = ty;
        var sprite = new Sprite(Texture.EMPTY);
        sprite.parent = parent;
        sprite.position.set(px, py);
        sprite.scale.set(scale, scale);
        this._sprite = sprite;
    }
    DMapTile.prototype.load = function (url, onLoaded) {
        var texture = Texture.from(url, { resolution: 1 });
        this._sprite.texture = texture;
        if (texture.valid) {
            onLoaded();
        }
        else {
            texture.on("update", onLoaded);
        }
    };
    DMapTile.prototype.transform = function (px, py, scale) {
        var sprite = this._sprite;
        sprite.position.set(px, py);
        sprite.scale.set(scale, scale);
    };
    Object.defineProperty(DMapTile.prototype, "loaded", {
        get: function () {
            return this._sprite.texture.valid;
        },
        enumerable: true,
        configurable: true
    });
    DMapTile.prototype.render = function (renderer) {
        var sprite = this._sprite;
        sprite.updateTransform();
        sprite.render(renderer);
    };
    DMapTile.prototype.destroy = function () {
        var sprite = this._sprite;
        var texture = sprite.texture;
        var resource = texture.baseTexture.resource;
        var image = null;
        if (resource instanceof resources.BaseImageResource) {
            if (resource.source instanceof HTMLImageElement) {
                image = resource.source;
            }
        }
        texture.destroy(true);
        sprite.destroy();
        if (image) {
            image.src = "";
        }
    };
    return DMapTile;
}());
export { DMapTile };
//# sourceMappingURL=d-map-tile.js.map