/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { Texture } from "pixi.js";
import { toSvgUrl } from "./to-svg-url";
export var toSvgTexture = function (svg, resolution) {
    return Texture.from(toSvgUrl(svg), {
        resolution: resolution
    });
};
//# sourceMappingURL=to-svg-texture.js.map