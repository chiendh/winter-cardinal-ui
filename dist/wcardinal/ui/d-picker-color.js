/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Container, Point, Sprite, Texture } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DInputRealAndLabel } from "./d-input-real-and-label";
import { DInputTextAndLabel } from "./d-input-text-and-label";
import { DPickerColorAndAlpha } from "./d-picker-color-and-alpha";
import { DPickerColorRecent } from "./d-picker-color-recent";
import { UtilHsv } from "./util/util-hsv";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilRgb } from "./util/util-rgb";
var DPickerColor = /** @class */ (function (_super) {
    __extends(DPickerColor, _super);
    function DPickerColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DPickerColor.prototype, "current", {
        get: function () {
            return this._currentPicker;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerColor.prototype, "new", {
        get: function () {
            return this._newPicker;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerColor.prototype, "recent", {
        get: function () {
            return this._recent;
        },
        enumerable: true,
        configurable: true
    });
    DPickerColor.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
        this._base = 0xff0000;
        this._new = { color: 0xffffff, alpha: 1 };
        this._newPicker = new DPickerColorAndAlpha(this._new, function (color) {
            _this.setColorNew(color);
        }, function (alpha) {
            _this.setAlphaNew(alpha);
        });
        this._current = { color: 0xffffff, alpha: 1 };
        this._currentPicker = new DPickerColorAndAlpha(this._current, function (color) {
            _this.setColorCurrent(color);
        }, function (alpha) {
            _this.setAlphaCurrent(alpha);
        });
        var theme = this.theme;
        var padding = this._padding;
        var paddingTop = padding.getTop();
        var paddingRight = padding.getRight();
        var paddingBottom = padding.getBottom();
        var paddingLeft = padding.getLeft();
        this._pointerPoint = new Point();
        // Main
        var mainWidth = theme.getMainWidth();
        var mainHeight = theme.getMainHeight();
        var mainBaseSprite = this._mainBaseSprite = new Sprite(Texture.WHITE);
        mainBaseSprite.x = paddingLeft;
        mainBaseSprite.y = paddingTop;
        mainBaseSprite.width = mainWidth;
        mainBaseSprite.height = mainHeight;
        mainBaseSprite.interactive = true;
        this.addChild(mainBaseSprite);
        var mainSprite = this._mainSprite = new Sprite(theme.getMainTexture());
        mainSprite.x = paddingLeft;
        mainSprite.y = paddingTop;
        mainSprite.tint = this._base;
        mainSprite.interactive = false;
        this.addChild(mainSprite);
        // Main event handling
        this._onMainMoveBound = function (e) {
            _this.onMainMove(e);
        };
        this._onMainUpBound = function (e) {
            _this.onMainUp(e);
        };
        mainBaseSprite.on(UtilPointerEvent.down, function (e) {
            _this.onMainDown(e);
        });
        // Base color picker
        var baseSprite = this._baseSprite = new Sprite(theme.getBaseTexture());
        baseSprite.x = paddingLeft;
        baseSprite.y = mainBaseSprite.y + mainBaseSprite.height + theme.getBaseMargin();
        baseSprite.interactive = true;
        this.addChild(baseSprite);
        // Base event
        this._onBaseMoveBound = function (e) {
            _this.onBaseMove(e);
        };
        this._onBaseUpBound = function (e) {
            _this.onBaseUp(e);
        };
        baseSprite.on(UtilPointerEvent.down, function (e) {
            _this.onBaseDown(e);
        });
        // Alpha picker
        var alphaCheckerboardSprite = this._alphaCheckerboardSprite =
            new Sprite(theme.getAlphaCheckerboardTexture());
        alphaCheckerboardSprite.x = padding.getLeft();
        alphaCheckerboardSprite.y = baseSprite.y + theme.getBaseHeight() + theme.getBaseMargin();
        alphaCheckerboardSprite.interactive = false;
        this.addChild(alphaCheckerboardSprite);
        var alphaSprite = new Sprite(theme.getAlphaTexture());
        alphaSprite.tint = this._new.color;
        alphaSprite.interactive = true;
        alphaCheckerboardSprite.addChild(alphaSprite);
        // Alpha event
        this._onAlphaMoveBound = function (e) {
            _this.onAlphaMove(e);
        };
        this._onAlphaUpBound = function (e) {
            _this.onAlphaUp(e);
        };
        alphaSprite.on(UtilPointerEvent.down, function (e) {
            _this.onAlphaDown(e);
        });
        // Pointers
        var mainPointerSprite = this._mainPointerSprite = new Sprite(theme.getMainPointerTexture());
        mainPointerSprite.x = paddingLeft;
        mainPointerSprite.y = paddingTop;
        mainPointerSprite.anchor.x = 0.5;
        mainPointerSprite.anchor.y = 0.5;
        mainPointerSprite.tint = theme.getMainPointerColor();
        mainPointerSprite.alpha = theme.getMainPointerAlpha();
        mainPointerSprite.interactive = false;
        this.addChild(mainPointerSprite);
        var alphaPointerSprite = this._alphaPointerSprite = new Sprite(theme.getAlphaPointerTexture());
        alphaPointerSprite.x = mainWidth;
        alphaPointerSprite.y = alphaCheckerboardSprite.height * 0.5;
        alphaPointerSprite.tint = theme.getAlphaPointerColor();
        alphaPointerSprite.alpha = theme.getAlphaPointerAlpha();
        alphaPointerSprite.anchor.set(0.5, 0.5);
        alphaPointerSprite.interactive = false;
        alphaCheckerboardSprite.addChild(alphaPointerSprite);
        var basePointerSprite = this._basePointerSprite = new Sprite(theme.getBasePointerTexture());
        basePointerSprite.x = 0;
        basePointerSprite.y = baseSprite.height * 0.5;
        basePointerSprite.tint = theme.getBasePointerColor();
        basePointerSprite.alpha = theme.getBasePointerAlpha();
        basePointerSprite.anchor.set(0.5, 0.5);
        basePointerSprite.interactive = false;
        baseSprite.addChild(basePointerSprite);
        // Recently used
        this._recentColorSprites = [];
        var recentColorSprites = this._recentColorSprites;
        var recentColorCount = theme.getRecentColorCount();
        var recentColorWidth = theme.getRecentColorWidth();
        var recentColorHeight = theme.getRecentColorHeight();
        var recentColorWidthHalf = recentColorWidth * 0.5;
        var recentColorHeightHalf = recentColorHeight * 0.5;
        var recentColorMargin = theme.getRecentColorMargin();
        var recentColorY = alphaCheckerboardSprite.y + theme.getAlphaHeight() + theme.getRecentMargin();
        var recentCheckerboardTexture = theme.getRecentCheckerboardTexture();
        if (DPickerColor.RECENT_COLORS == null) {
            DPickerColor.RECENT_COLORS = new DPickerColorRecent(theme.getRecents().slice(0), recentColorCount);
        }
        var recent = this._recent = DPickerColor.RECENT_COLORS;
        recent.on("change", function () {
            _this.onRecentChange();
        });
        var onRecentClick = function (e) {
            var checkerboardSprite = e.currentTarget;
            if (checkerboardSprite instanceof Container) {
                var sprite = checkerboardSprite.children[0];
                if (sprite instanceof Sprite) {
                    _this.setColorNew(sprite.tint);
                    _this.setAlphaNew(sprite.alpha);
                }
            }
        };
        for (var i = 0; i < recentColorCount; ++i) {
            var x = paddingLeft + i * (recentColorWidth + recentColorMargin);
            var checkerboardSprite = new Sprite(recentCheckerboardTexture);
            checkerboardSprite.x = x + recentColorWidthHalf;
            checkerboardSprite.y = recentColorY + recentColorHeightHalf;
            checkerboardSprite.anchor.x = 0.5;
            checkerboardSprite.anchor.y = 0.5;
            checkerboardSprite.buttonMode = true;
            checkerboardSprite.interactive = true;
            UtilPointerEvent.onClick(checkerboardSprite, onRecentClick);
            this.addChild(checkerboardSprite);
            var sprite = new Sprite(Texture.WHITE);
            var recentColorAndAlpha = recent.get(i);
            if (recentColorAndAlpha != null) {
                sprite.tint = recentColorAndAlpha.color;
                sprite.alpha = recentColorAndAlpha.alpha;
            }
            else {
                sprite.tint = 0xffffff;
                sprite.alpha = 0;
            }
            sprite.width = recentColorWidth;
            sprite.height = recentColorHeight;
            sprite.anchor.x = 0.5;
            sprite.anchor.y = 0.5;
            sprite.interactive = false;
            checkerboardSprite.addChild(sprite);
            recentColorSprites.push(sprite);
        }
        // Input color
        var inputMargin = theme.getInputMargin();
        var inputY = recentColorY + recentColorHeight + inputMargin;
        var inputWidth = mainWidth * 0.5;
        var inputAndLabelColor = this._inputAndLabelColor = new DInputTextAndLabel({
            parent: this,
            x: paddingLeft,
            y: inputY,
            width: inputWidth,
            label: {
                width: theme.getInputLabelWidth(),
                text: {
                    value: "#"
                }
            },
            input: {
                weight: 1,
                text: {
                    value: "FFFFFF"
                },
                on: {
                    input: function (code) {
                        var color = UtilRgb.fromCode(code);
                        if (color != null) {
                            _this.setColorNew(color);
                        }
                    }
                }
            }
        });
        var inputAndLabelAlpha = this._inputAndLabelAlpha = new DInputRealAndLabel({
            parent: this,
            x: paddingLeft,
            y: inputY + inputAndLabelColor.height + inputMargin,
            width: inputWidth,
            label: {
                width: theme.getInputLabelWidth(),
                text: {
                    value: "A"
                }
            },
            input: {
                weight: 1,
                text: {
                    value: 1
                },
                min: 0,
                max: 1,
                on: {
                    input: function (value) {
                        _this.setAlphaNew(value);
                    }
                }
            }
        });
        // Samples
        var sampleWidth = theme.getSampleWidth();
        var sampleHeight = theme.getSampleHeight();
        var sampleX = paddingLeft + mainWidth * 0.75 - sampleWidth;
        var sampleY = inputY + (inputAndLabelColor.height + inputMargin + inputAndLabelAlpha.height - sampleHeight) * 0.5;
        var sampleCurrentCheckerboardSprite = this._sampleCurrentCheckerboardSprite =
            new Sprite(theme.getSampleCheckerboardTexture());
        sampleCurrentCheckerboardSprite.x = sampleX;
        sampleCurrentCheckerboardSprite.y = sampleY;
        sampleCurrentCheckerboardSprite.width = sampleWidth;
        sampleCurrentCheckerboardSprite.height = sampleHeight;
        sampleCurrentCheckerboardSprite.interactive = false;
        this.addChild(sampleCurrentCheckerboardSprite);
        var current = this._current;
        var sampleCurrentSprite = this._sampleCurrentSprite = new Sprite(Texture.WHITE);
        sampleCurrentSprite.x = sampleX;
        sampleCurrentSprite.y = sampleY;
        sampleCurrentSprite.tint = current.color;
        sampleCurrentSprite.alpha = current.alpha;
        sampleCurrentSprite.width = sampleWidth;
        sampleCurrentSprite.height = sampleHeight;
        sampleCurrentSprite.interactive = true;
        sampleCurrentSprite.buttonMode = true;
        UtilPointerEvent.onClick(sampleCurrentSprite, function () {
            _this.setColorNew(current.color);
            _this.setAlphaNew(current.alpha);
        });
        this.addChild(sampleCurrentSprite);
        var sampleNewCheckerboardSprite = this._sampleNewCheckerboardSprite =
            new Sprite(theme.getSampleCheckerboardTexture());
        sampleNewCheckerboardSprite.x = sampleX + sampleWidth;
        sampleNewCheckerboardSprite.y = sampleY;
        sampleNewCheckerboardSprite.width = sampleWidth;
        sampleNewCheckerboardSprite.height = sampleHeight;
        sampleNewCheckerboardSprite.interactive = false;
        this.addChild(sampleNewCheckerboardSprite);
        var sampleNewSprite = this._sampleNewSprite = new Sprite(Texture.WHITE);
        sampleNewSprite.x = sampleX + sampleWidth;
        sampleNewSprite.y = sampleY;
        sampleNewSprite.tint = this._new.color;
        sampleNewSprite.alpha = this._new.alpha;
        sampleNewSprite.width = sampleWidth;
        sampleNewSprite.height = sampleHeight;
        sampleNewSprite.interactive = false;
        this.addChild(sampleNewSprite);
        // Width
        if (options == null || options.width == null) {
            this.width = paddingLeft + mainWidth + paddingRight;
        }
        // Height
        if (options == null || options.height == null) {
            this.height = inputY + inputAndLabelColor.height + inputMargin + inputAndLabelAlpha.height + paddingBottom;
        }
    };
    DPickerColor.prototype.onMainDown = function (e) {
        this.onMainPick(e.data.global);
        var layer = DApplications.getLayer(this);
        if (layer) {
            var stage = layer.stage;
            stage.on(UtilPointerEvent.move, this._onMainMoveBound);
            stage.on(UtilPointerEvent.up, this._onMainUpBound);
        }
    };
    DPickerColor.prototype.onMainMove = function (e) {
        this.onMainPick(e.data.global);
    };
    DPickerColor.prototype.onMainUp = function (e) {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var stage = layer.stage;
            stage.off(UtilPointerEvent.move, this._onMainMoveBound);
            stage.off(UtilPointerEvent.up, this._onMainUpBound);
        }
    };
    DPickerColor.prototype.toMainHex = function (b, w0, w1, shift) {
        return Math.max(0, Math.min(255, w0 * 255 + w1 * ((b >> shift) & 0xff))) << shift;
    };
    DPickerColor.prototype.toMainColor = function (base, tx, ty, width, height) {
        var hw = width * 0.5;
        var ux = Math.max(0, Math.min(1, ((tx - hw) * (1 - ty / height) + hw) / width));
        var uy = Math.max(0, Math.min(1, ty / height));
        var w1 = Math.abs(0.5 * uy - ux);
        var w0 = 1 - w1 - uy;
        var r = this.toMainHex(base, w0, w1, 16);
        var g = this.toMainHex(base, w0, w1, 8);
        var b = this.toMainHex(base, w0, w1, 0);
        return r | g | b;
    };
    DPickerColor.prototype.onMainPick = function (global) {
        var point = this._pointerPoint;
        var padding = this._padding;
        var paddingLeft = padding.getLeft();
        var paddingTop = padding.getTop();
        var theme = this.theme;
        var mainWidth = theme.getMainWidth();
        var mainHeight = theme.getMainHeight();
        this.toLocal(global, undefined, point);
        var x = Math.max(0, Math.min(mainWidth, point.x - paddingLeft));
        var y = Math.max(0, Math.min(mainHeight, point.y - paddingTop));
        var mainPointerSprite = this._mainPointerSprite;
        mainPointerSprite.position.set(paddingLeft + x, paddingTop + y);
        this.onColorNew(this.toMainColor(this._base, x, y, mainWidth, mainHeight));
    };
    DPickerColor.prototype.setColorCurrent = function (color) {
        this._sampleCurrentSprite.tint = this._current.color = color;
    };
    DPickerColor.prototype.setAlphaCurrent = function (alpha) {
        this._sampleCurrentSprite.alpha = this._current.alpha = alpha;
    };
    DPickerColor.prototype.setColorNew = function (color) {
        var theme = this.theme;
        var mainWidth = theme.getMainWidth();
        var mainHeight = theme.getMainHeight();
        var padding = this._padding;
        // Base color
        var hsv = UtilHsv.fromRgb(color);
        this._mainSprite.tint = this._base = UtilHsv.toRgb(hsv[0], 255, 255);
        // Move the base pointer
        var basePointerSprite = this._basePointerSprite;
        basePointerSprite.x = Math.max(0, Math.min(1, hsv[0] / 360)) * mainWidth;
        // Move the main pointer
        var ns = Math.max(0, Math.min(1, hsv[1] / 255));
        var nv = Math.max(0, Math.min(1, 1 - hsv[2] / 255));
        var mainPointerSprite = this._mainPointerSprite;
        mainPointerSprite.tint = (nv < 0.45 ? theme.getMainPointerColor() : 0xffffff);
        mainPointerSprite.position.set(padding.getLeft() + ns * mainWidth, padding.getTop() + nv * mainHeight);
        // New color
        this.onColorNew(color);
    };
    DPickerColor.prototype.onColorNew = function (color) {
        var layer = DApplications.getLayer(this);
        if (layer) {
            layer.disallowUpdate();
        }
        this._sampleNewSprite.tint = this._new.color = color;
        this._inputAndLabelColor.input.value = UtilRgb.toCode(color);
        this.emit("newcolorchange", color, this);
        if (layer) {
            layer.allowUpdate();
            layer.update();
        }
    };
    DPickerColor.prototype.onBaseDown = function (e) {
        this.onBasePick(e.data.global);
        var layer = DApplications.getLayer(this);
        if (layer) {
            var stage = layer.stage;
            stage.on(UtilPointerEvent.move, this._onBaseMoveBound);
            stage.on(UtilPointerEvent.up, this._onBaseUpBound);
        }
    };
    DPickerColor.prototype.onBaseMove = function (e) {
        this.onBasePick(e.data.global);
    };
    DPickerColor.prototype.onBaseUp = function (e) {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var stage = layer.stage;
            stage.off(UtilPointerEvent.move, this._onBaseMoveBound);
            stage.off(UtilPointerEvent.up, this._onBaseUpBound);
        }
    };
    DPickerColor.prototype.toBaseHex = function (t, shift) {
        return Math.max(0, Math.min(255, t * 6 * 255)) << shift;
    };
    DPickerColor.prototype.toBaseColor = function (t) {
        if (t <= 0.167) {
            return 0xff0000 + this.toBaseHex(t, 8);
        }
        else if (t <= 0.333) {
            t = 0.333 - t;
            return 0x00ff00 + this.toBaseHex(t, 16);
        }
        else if (t <= 0.5) {
            t -= 0.333;
            return 0x00ff00 + this.toBaseHex(t, 0);
        }
        else if (t < 0.667) {
            t = 0.667 - t;
            return 0x0000ff + this.toBaseHex(t, 8);
        }
        else if (t < 0.883) {
            t -= 0.667;
            return 0x0000ff + this.toBaseHex(t, 16);
        }
        else {
            t = 0.883 - t;
            return 0xff0000 + this.toBaseHex(t, 0);
        }
    };
    DPickerColor.prototype.onBasePick = function (global) {
        var point = this._pointerPoint;
        var padding = this._padding;
        var theme = this.theme;
        var mainWidth = theme.getMainWidth();
        this.toLocal(global, undefined, point);
        var x = Math.max(0, Math.min(mainWidth, point.x - padding.getLeft()));
        var basePointerSprite = this._basePointerSprite;
        basePointerSprite.x = x;
        this.onColorBase(this.toBaseColor(x / mainWidth));
    };
    DPickerColor.prototype.setColorBase = function (h) {
        var theme = this.theme;
        var mainWidth = theme.getMainWidth();
        var basePointerSprite = this._basePointerSprite;
        basePointerSprite.x = Math.max(0, Math.min(1, h / 360)) * mainWidth;
        this.onColorBase(UtilHsv.toRgb(h, 255, 255));
    };
    DPickerColor.prototype.onColorBase = function (color) {
        this._mainSprite.tint = this._base = color;
        var mainPointerSprite = this._mainPointerSprite;
        var theme = this.theme;
        var mainWidth = theme.getMainWidth();
        var mainHeight = theme.getMainHeight();
        var padding = this._padding;
        this.onColorNew(this.toMainColor(this._base, mainPointerSprite.x - padding.getLeft(), mainPointerSprite.y - padding.getTop(), mainWidth, mainHeight));
    };
    DPickerColor.prototype.onAlphaDown = function (e) {
        this.onAlphaPick(e.data.global);
        var layer = DApplications.getLayer(this);
        if (layer) {
            var stage = layer.stage;
            stage.on(UtilPointerEvent.move, this._onAlphaMoveBound);
            stage.on(UtilPointerEvent.up, this._onAlphaUpBound);
        }
    };
    DPickerColor.prototype.onAlphaMove = function (e) {
        this.onAlphaPick(e.data.global);
    };
    DPickerColor.prototype.onAlphaUp = function (e) {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var stage = layer.stage;
            stage.off(UtilPointerEvent.move, this._onAlphaMoveBound);
            stage.off(UtilPointerEvent.up, this._onAlphaUpBound);
        }
    };
    DPickerColor.prototype.onAlphaPick = function (global) {
        var point = this._pointerPoint;
        var padding = this._padding;
        var theme = this.theme;
        var mainWidth = theme.getMainWidth();
        this.toLocal(global, undefined, point);
        var x = Math.max(0, Math.min(mainWidth, point.x - padding.getLeft()));
        this._alphaPointerSprite.x = x;
        this.onAlphaNew(x / mainWidth);
    };
    DPickerColor.prototype.setAlphaNew = function (alpha) {
        var theme = this.theme;
        var mainWidth = theme.getMainWidth();
        this._alphaPointerSprite.x = Math.max(0, Math.min(1, alpha)) * mainWidth;
        this.onAlphaNew(alpha);
    };
    DPickerColor.prototype.onAlphaNew = function (alpha) {
        var layer = DApplications.getLayer(this);
        if (layer) {
            layer.disallowUpdate();
        }
        this._sampleNewSprite.alpha = this._new.alpha = alpha;
        this._inputAndLabelAlpha.input.value = Number(alpha.toFixed(2));
        this.emit("newalphachange", alpha, this);
        if (layer) {
            layer.allowUpdate();
            layer.update();
        }
    };
    DPickerColor.prototype.onRecentChange = function () {
        var sprites = this._recentColorSprites;
        var recent = this._recent;
        for (var i = 0, imax = sprites.length; i < imax; ++i) {
            var sprite = sprites[i];
            var colorAndAlpha = recent.get(i);
            if (colorAndAlpha != null) {
                sprite.tint = colorAndAlpha.color;
                sprite.alpha = colorAndAlpha.alpha;
            }
            else {
                sprite.tint = 0xffffff;
                sprite.alpha = 0;
            }
        }
    };
    DPickerColor.prototype.getType = function () {
        return "DPickerColor";
    };
    DPickerColor.RECENT_COLORS = null;
    return DPickerColor;
}(DBase));
export { DPickerColor };
//# sourceMappingURL=d-picker-color.js.map