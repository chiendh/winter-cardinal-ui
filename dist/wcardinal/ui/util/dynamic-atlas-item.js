/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Rectangle, Texture } from "pixi.js";
var DynamicAtlasItem = /** @class */ (function () {
    function DynamicAtlasItem(id, width, height, strokeWidth, baseTexture) {
        this.id = id;
        this.ref = 0;
        var resolution = baseTexture.resolution;
        this.frame = new Rectangle(0, 0, width * resolution, height * resolution);
        this.texture = new Texture(baseTexture, new Rectangle(0, 0, 1, 1));
        this.width = width;
        this.height = height;
        this.strokeWidth = strokeWidth;
    }
    DynamicAtlasItem.prototype.applyFrame = function () {
        var resolutionInverse = 1 / this.texture.baseTexture.resolution;
        this.texture.frame.x = this.frame.x * resolutionInverse;
        this.texture.frame.y = this.frame.y * resolutionInverse;
        this.texture.frame.width = this.width;
        this.texture.frame.height = this.height;
        this.texture.updateUvs();
        this.texture.emit("update", this);
    };
    DynamicAtlasItem.prototype.destroy = function () {
        this.texture.destroy();
    };
    return DynamicAtlasItem;
}());
export { DynamicAtlasItem };
//# sourceMappingURL=dynamic-atlas-item.js.map