/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { TextMetrics, utils } from "pixi.js";
var DynamicFontAtlasFont = /** @class */ (function () {
    function DynamicFontAtlasFont(fontId, size, color, padding) {
        this.id = fontId;
        this.size = size;
        this.color = utils.hex2string(color);
        this.height = size + padding * 2;
        var metrics = TextMetrics.measureFont(fontId);
        this.ascent = metrics.ascent;
        this.descent = metrics.descent;
    }
    return DynamicFontAtlasFont;
}());
export { DynamicFontAtlasFont };
//# sourceMappingURL=dynamic-font-atlas-font.js.map