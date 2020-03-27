/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { MIPMAP_MODES, SCALE_MODES, Texture } from "pixi.js";
import { ASCII_CHARACTERS } from "./ascii";
import { DynamicFontAtlasCharacter } from "./dynamic-font-atlas-character";
import { DynamicFontAtlasFont } from "./dynamic-font-atlas-font";
import { UtilCharacterIterator } from "./util-character-iterator";
var PADDING = 3;
var DynamicFontAtlas = /** @class */ (function () {
    function DynamicFontAtlas(fontId, fontSize, fontColor, resolution) {
        this._id = fontId;
        this._canvas = document.createElement("canvas");
        this._context = null;
        this._font = new DynamicFontAtlasFont(fontId, fontSize, fontColor, PADDING);
        this._characters = {};
        this._length = 0;
        this._unrefCount = 0;
        this._width = 1;
        this._height = 1;
        this._revision = 0;
        this._revisionUpdated = 0;
        this._texture = Texture.from(this._canvas, {
            mipmap: MIPMAP_MODES.OFF,
            resolution: resolution,
            scaleMode: SCALE_MODES.NEAREST
        });
        this.add(ASCII_CHARACTERS, true);
        this.add_("...", this._characters, true);
    }
    Object.defineProperty(DynamicFontAtlas.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFontAtlas.prototype, "font", {
        get: function () {
            return this._font;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFontAtlas.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFontAtlas.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFontAtlas.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFontAtlas.prototype, "characters", {
        get: function () {
            return this._characters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFontAtlas.prototype, "texture", {
        get: function () {
            return this._texture;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFontAtlas.prototype.add_ = function (character, characters, reserved) {
        if (character !== "\n") {
            var data = characters[character];
            if (data != null) {
                if (!data.reserved) {
                    if (data.ref === 0) {
                        this._unrefCount -= 1;
                    }
                    data.ref += 1;
                }
            }
            else {
                var advance = this.getAdvance(character);
                var width = Math.ceil(PADDING + advance + PADDING);
                var height = this.font.height;
                characters[character] = new DynamicFontAtlasCharacter(advance, width, height, !!reserved);
                this._length += 1;
                this._revision += 1;
            }
        }
    };
    DynamicFontAtlas.prototype.remove_ = function (character, characters) {
        if (character !== "\n") {
            var data = characters[character];
            if (data != null) {
                if (!data.reserved && 0 < data.ref) {
                    data.ref -= 1;
                    if (data.ref === 0) {
                        this._unrefCount += 1;
                    }
                }
            }
        }
    };
    DynamicFontAtlas.prototype.cleanup_ = function () {
        if ((this._length >> 1) <= this._unrefCount) {
            var characters = this._characters;
            for (var character in characters) {
                if (characters[character].ref <= 0) {
                    delete characters[character];
                }
            }
            this._length -= this._unrefCount;
            this._revision += 1;
            this._unrefCount = 0;
        }
    };
    DynamicFontAtlas.prototype.add = function (targets, reserved) {
        var characters = this._characters;
        var iterator = UtilCharacterIterator.from(targets);
        while (iterator.hasNext()) {
            this.add_(iterator.next(), characters, reserved);
        }
    };
    DynamicFontAtlas.prototype.remove = function (targets) {
        var characters = this._characters;
        var iterator = UtilCharacterIterator.from(targets);
        while (iterator.hasNext()) {
            this.remove_(iterator.next(), characters);
        }
    };
    DynamicFontAtlas.prototype.get = function (character) {
        return this._characters[character];
    };
    DynamicFontAtlas.prototype.getAdvance = function (target) {
        var context = this.getContext();
        if (context != null) {
            return context.measureText(target).width;
        }
        return 0;
    };
    DynamicFontAtlas.prototype.getContext = function () {
        var context = this._context;
        if (context == null) {
            var canvas = this._canvas;
            if (canvas != null) {
                context = this._context = canvas.getContext("2d", { alpha: true });
                if (context == null) {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        var font = this._font;
        if (context.font !== font.id) {
            context.font = font.id;
            font.id = context.font;
            context.textAlign = "left";
            context.textBaseline = "alphabetic";
            context.lineWidth = 0;
            context.lineCap = "round";
            context.lineJoin = "miter";
            context.miterLimit = 0;
            context.fillStyle = font.color;
            context.strokeStyle = "#0000ff";
        }
        return context;
    };
    DynamicFontAtlas.prototype.update = function () {
        this.cleanup_();
        if (this._revisionUpdated < this._revision) {
            this._revisionUpdated = this._revision;
            var canvas = this._canvas;
            if (canvas != null) {
                var font = this._font;
                var fontHeight = font.height;
                var characters = this._characters;
                var width = this._width = this.toPowerOf2(Math.ceil(Math.sqrt(this._length)) * fontHeight);
                var offsetX = PADDING;
                var offsetY = Math.round((fontHeight - (font.ascent + font.descent)) * 0.5 + font.ascent);
                var x = 0;
                var y = 0;
                for (var key in characters) {
                    var character = characters[key];
                    if (width <= x + character.width) {
                        x = 0;
                        y += fontHeight;
                    }
                    character.x = x;
                    character.y = y;
                    character.origin.x = x + offsetX;
                    character.origin.y = y + offsetY;
                    x += character.width;
                }
                var height = this._height = y + fontHeight;
                // Make a input canvas
                // Here, we need to reset the context because
                // context settings will be lost when we set the width/height.
                var baseTexture = this._texture.baseTexture;
                var resolution = baseTexture.resolution;
                var realWidth = Math.ceil(width * resolution);
                var realHeight = Math.ceil(height * resolution);
                canvas.width = realWidth;
                canvas.height = realHeight;
                var context = this.getContext();
                if (context != null) {
                    context.save();
                    context.scale(resolution, resolution);
                    context.clearRect(0, 0, width, height);
                    for (var key in characters) {
                        var character = characters[key];
                        context.fillText(key, character.origin.x, character.origin.y);
                    }
                    context.restore();
                }
                baseTexture.setRealSize(realWidth, realHeight);
                return true;
            }
        }
        return false;
    };
    DynamicFontAtlas.prototype.getRevision = function () {
        return this._revision;
    };
    DynamicFontAtlas.prototype.getRevisionUpdate = function () {
        return this._revisionUpdated;
    };
    Object.defineProperty(DynamicFontAtlas.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    DynamicFontAtlas.prototype.destroy = function () {
        var canvas = this._canvas;
        if (canvas != null) {
            this._canvas = null;
        }
        var characters = this._characters;
        for (var character in characters) {
            delete characters[character];
        }
    };
    DynamicFontAtlas.prototype.toPowerOf2 = function (size) {
        var result = 32;
        while (result < size) {
            result <<= 1;
        }
        return result;
    };
    return DynamicFontAtlas;
}());
export { DynamicFontAtlas };
//# sourceMappingURL=dynamic-font-atlas.js.map