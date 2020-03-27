/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DynamicFontAtlasCharacterOrigin } from "./dynamic-font-atlas-chaaracter-origin";
var DynamicFontAtlasCharacter = /** @class */ (function () {
    function DynamicFontAtlasCharacter(advance, width, height, reserved) {
        this.ref = 1;
        this.life = 10;
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.advance = advance;
        this.origin = new DynamicFontAtlasCharacterOrigin(0, 0);
        this.reserved = reserved;
    }
    return DynamicFontAtlasCharacter;
}());
export { DynamicFontAtlasCharacter };
//# sourceMappingURL=dynamic-font-atlas-character.js.map