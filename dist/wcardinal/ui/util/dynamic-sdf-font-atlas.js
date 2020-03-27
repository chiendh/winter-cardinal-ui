/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DThemes } from "../theme/d-themes";
import { ASCII_CHARACTERS } from "./ascii";
import { DynamicFontAtlasCharacter } from "./dynamic-font-atlas-character";
import { DynamicSDFFontGenerator } from "./dynamic-sdf-font-generator";
import { UtilCharacterIterator } from "./util-character-iterator";
var DynamicSDFFontAtlas = /** @class */ (function () {
    function DynamicSDFFontAtlas(fontFamily) {
        this._id = "font-atlas:" + fontFamily;
        this._generator = DynamicSDFFontGenerator.getInstance().init();
        this._canvas = document.createElement("canvas");
        this._font = {
            family: DynamicSDFFontAtlas.toFontFamily(fontFamily),
            size: 32,
            italic: false
        };
        this._characters = {};
        this._length = 0;
        this._width = 1;
        this._height = 1;
        this._isDirty = true;
    }
    Object.defineProperty(DynamicSDFFontAtlas.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicSDFFontAtlas.prototype, "font", {
        get: function () {
            return this._font;
        },
        set: function (font) {
            this._font.family = font.family;
            this._font.size = font.size;
            this._font.italic = font.italic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicSDFFontAtlas.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicSDFFontAtlas.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicSDFFontAtlas.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicSDFFontAtlas.prototype, "generator", {
        get: function () {
            return this._generator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicSDFFontAtlas.prototype, "characters", {
        get: function () {
            return this._characters;
        },
        enumerable: true,
        configurable: true
    });
    DynamicSDFFontAtlas.prototype.begin = function () {
        this._length = 0;
        var characters = this._characters;
        for (var character in characters) {
            characters[character].ref = 0;
        }
    };
    DynamicSDFFontAtlas.prototype.end = function () {
        var characters = this._characters;
        for (var character in characters) {
            var data = characters[character];
            if (data.ref <= 0) {
                data.life -= 1;
                if (data.life <= 0) {
                    delete characters[character];
                    this._isDirty = true;
                }
            }
        }
    };
    DynamicSDFFontAtlas.prototype.addAscii = function () {
        this.add(ASCII_CHARACTERS);
        this.addChar("...");
    };
    DynamicSDFFontAtlas.prototype.addChar = function (character) {
        var characters = this._characters;
        if (character !== "\n") {
            var data = characters[character];
            if (data != null) {
                if (data.ref <= 0) {
                    this._length += 1;
                }
                data.ref += 1;
            }
            else {
                characters[character] = new DynamicFontAtlasCharacter(0, 1, 1, false);
                this._length += 1;
                this._isDirty = true;
            }
        }
    };
    DynamicSDFFontAtlas.prototype.add = function (characters) {
        var iterator = UtilCharacterIterator.from(characters);
        while (iterator.hasNext()) {
            this.addChar(iterator.next());
        }
    };
    DynamicSDFFontAtlas.prototype.get = function (character) {
        return this._characters[character];
    };
    DynamicSDFFontAtlas.prototype.update = function () {
        if (this._isDirty) {
            var canvas = this._canvas;
            var generator = this._generator;
            if (canvas != null && generator != null) {
                var context = canvas.getContext("2d");
                if (context != null) {
                    this._isDirty = false;
                    var font = this._font;
                    var characters = this._characters;
                    var characterSize = font.size + 14;
                    var width = DynamicSDFFontAtlas.toPowerOf2(Math.ceil(Math.sqrt(this._length)) * characterSize);
                    this._width = width;
                    var fontStyle = (font.italic ? "italic " : "") + (font.size + "px ") + font.family;
                    context.font = fontStyle;
                    context.textAlign = "left";
                    context.textBaseline = "middle";
                    context.lineWidth = 0;
                    context.lineCap = "round";
                    context.lineJoin = "miter";
                    context.miterLimit = 0;
                    context.fillStyle = "#FFFFFF";
                    var offsetX = 7;
                    var offsetY = (characterSize >> 1);
                    var x = 0;
                    var y = 0;
                    for (var character in characters) {
                        var data = characters[character];
                        var advance = context.measureText(character).width;
                        var characterWidth = Math.ceil(offsetX + advance + offsetX);
                        var characterHeight = characterSize;
                        if (width <= x + characterWidth) {
                            x = 0;
                            y += characterSize;
                        }
                        data.x = x;
                        data.y = y;
                        data.width = characterWidth;
                        data.height = characterHeight;
                        data.advance = advance;
                        data.origin.x = x + offsetX;
                        data.origin.y = y + offsetY;
                        x += characterWidth;
                    }
                    var height = this._height = y + characterSize;
                    // Make a input canvas
                    // Here, we need to reset the context because
                    // context settings will be lost when we set the width/height.
                    canvas.width = width;
                    canvas.height = height;
                    context.font = fontStyle;
                    context.textAlign = "left";
                    context.textBaseline = "middle";
                    context.lineWidth = 0;
                    context.lineCap = "round";
                    context.lineJoin = "miter";
                    context.miterLimit = 4;
                    context.fillStyle = "#FFFFFF";
                    context.clearRect(0, 0, width, height);
                    for (var character in characters) {
                        var data = characters[character];
                        context.fillText(character, data.origin.x, data.origin.y);
                    }
                    // Convert to SDF font texture
                    generator.updateTexture(canvas);
                    generator.render();
                    generator.read(canvas);
                    return true;
                }
            }
        }
        return false;
    };
    Object.defineProperty(DynamicSDFFontAtlas.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    DynamicSDFFontAtlas.prototype.toJson = function () {
        return {
            width: this._width,
            height: this._height,
            font: this._font,
            characters: this._characters
        };
    };
    DynamicSDFFontAtlas.prototype.toString = function () {
        return JSON.stringify(this.toJson());
    };
    DynamicSDFFontAtlas.prototype.destroy = function () {
        var generator = this._generator;
        if (generator != null) {
            this._generator = null;
        }
        var canvas = this._canvas;
        if (canvas != null) {
            this._canvas = null;
        }
        var characters = this._characters;
        for (var character in characters) {
            delete characters[character];
        }
    };
    DynamicSDFFontAtlas.toFontFamily = function (fontFamily) {
        return (fontFamily === "auto" ?
            DynamicSDFFontAtlas.getAutoFontFamily() :
            fontFamily);
    };
    DynamicSDFFontAtlas.toPowerOf2 = function (size) {
        var result = 32;
        while (result < size) {
            result <<= 1;
        }
        return result;
    };
    DynamicSDFFontAtlas.getAutoFontFamily = function () {
        if (DynamicSDFFontAtlas.FONT_FAMILY_AUTO == null) {
            DynamicSDFFontAtlas.FONT_FAMILY_AUTO = DThemes.getInstance().get("DBase").getFontFamilly();
        }
        return DynamicSDFFontAtlas.FONT_FAMILY_AUTO;
    };
    DynamicSDFFontAtlas.FONT_FAMILY_AUTO = null;
    return DynamicSDFFontAtlas;
}());
export { DynamicSDFFontAtlas };
//# sourceMappingURL=dynamic-sdf-font-atlas.js.map