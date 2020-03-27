/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Texture } from "pixi.js";
var UtilTexture = /** @class */ (function () {
    function UtilTexture() {
    }
    UtilTexture.fromImage = function (url, resolution, onLoad) {
        var texture = Texture.from(url, {
            resolution: resolution
        });
        if (!texture.baseTexture.valid) {
            texture.once("update", onLoad);
        }
        else {
            onLoad(texture);
        }
    };
    return UtilTexture;
}());
export { UtilTexture };
//# sourceMappingURL=util-texture.js.map