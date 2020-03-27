import { Point, Rectangle, Sprite, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";
var toImageAlign = function (theme, options) {
    var align = options && options.align;
    if (align) {
        var alignWith = (align.with != null ?
            (isString(align.with) ? DAlignWith[align.with] : align.with) :
            theme.getImageAlignWith());
        var alignVertical = (align.vertical != null ?
            (isString(align.vertical) ? DAlignVertical[align.vertical] : align.vertical) :
            theme.getImageAlignVertical());
        var alignHorizontal = (align.horizontal != null ?
            (isString(align.horizontal) ? DAlignHorizontal[align.horizontal] : align.horizontal) :
            theme.getImageAlignHorizontal());
        return {
            with: alignWith,
            vertical: alignVertical,
            horizontal: alignHorizontal
        };
    }
    return {
        with: theme.getImageAlignWith(),
        vertical: theme.getImageAlignVertical(),
        horizontal: theme.getImageAlignHorizontal()
    };
};
var toImageMargin = function (theme, options) {
    var margin = options && options.margin;
    if (margin) {
        var vertical = (margin.vertical != null ?
            margin.vertical : theme.getImageMarginVertial());
        var horizontal = (margin.horizontal != null ?
            margin.horizontal : theme.getImageMarginHorizontal());
        return {
            vertical: vertical,
            horizontal: horizontal
        };
    }
    return {
        vertical: theme.getImageMarginVertial(),
        horizontal: theme.getImageMarginHorizontal()
    };
};
var toImageTint = function (theme, options) {
    if (options && options.tint != null) {
        return options.tint;
    }
    return undefined;
};
var DImagePiece = /** @class */ (function () {
    function DImagePiece(parent, theme, options, textAlign, onChange, applyMask) {
        this._image = null;
        this._align = toImageAlign(theme, options);
        this._margin = toImageMargin(theme, options);
        this._tint = toImageTint(theme, options);
        this._bound = new Rectangle();
        this._point = new Point();
        this._source = (options && options.source);
        this._computed = null;
        this._parent = parent;
        this._theme = theme;
        this._textAlign = textAlign;
        this._onChange = onChange;
        this._applyMask = applyMask;
    }
    Object.defineProperty(DImagePiece.prototype, "image", {
        get: function () {
            return this._image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DImagePiece.prototype, "align", {
        get: function () {
            return this._align;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DImagePiece.prototype, "margin", {
        get: function () {
            return this._margin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DImagePiece.prototype, "bound", {
        get: function () {
            return this._bound;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DImagePiece.prototype, "source", {
        get: function () {
            return this._source;
        },
        set: function (source) {
            if (this._source !== source) {
                this._source = source;
                this._onChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    DImagePiece.prototype.computeSource = function () {
        var source = this._source;
        if (source !== undefined) {
            if (isFunction(source)) {
                var result = source(this._parent.state);
                if (result !== undefined) {
                    return result;
                }
            }
            else {
                return source;
            }
        }
        return this._theme.getImageSource(this._parent.state);
    };
    DImagePiece.prototype.onStateChange = function (newState, oldState) {
        this.updateTint();
    };
    DImagePiece.prototype.updateBound = function () {
        var bound = this._bound;
        var image = this._image;
        if (image != null) {
            image.updateTransform();
            image.getLocalBounds(bound);
            var bl = bound.left;
            var bt = bound.top;
            var br = bound.right;
            var bb = bound.bottom;
            var localTransform = image.localTransform;
            var a = localTransform.a;
            var b = localTransform.b;
            var c = localTransform.c;
            var d = localTransform.d;
            var x0 = a * bl + c * bt;
            var y0 = b * bl + d * bt;
            var x1 = a * br + c * bt;
            var y1 = b * br + d * bt;
            var x2 = a * br + c * bb;
            var y2 = b * br + d * bb;
            var x3 = a * bl + c * bb;
            var y3 = b * bl + d * bb;
            var xmin = Math.min(x0, x1, x2, x3);
            var xmax = Math.max(x0, x1, x2, x3);
            var ymin = Math.min(y0, y1, y2, y3);
            var ymax = Math.max(y0, y1, y2, y3);
            bound.x = xmin + localTransform.tx;
            bound.y = ymin + localTransform.ty;
            bound.width = xmax - xmin;
            bound.height = ymax - ymin;
        }
        else {
            bound.x = 0;
            bound.y = 0;
            bound.width = 0;
            bound.height = 0;
        }
    };
    DImagePiece.prototype.isTintAware = function (target) {
        return (target != null && "tint" in target);
    };
    DImagePiece.prototype.toTintColor = function (theme, state) {
        var tint = this._tint;
        if (tint) {
            var color = tint.color;
            if (color !== undefined) {
                if (isFunction(color)) {
                    var result = color(state);
                    if (result !== undefined) {
                        return result;
                    }
                }
                else {
                    return color;
                }
            }
        }
        return theme.getImageTintColor(state);
    };
    DImagePiece.prototype.toTintAlpha = function (theme, state) {
        var tint = this._tint;
        if (tint) {
            var alpha = tint.alpha;
            if (alpha !== undefined) {
                if (isFunction(alpha)) {
                    var result = alpha(state);
                    if (result !== undefined) {
                        return result;
                    }
                }
                else {
                    return alpha;
                }
            }
        }
        return theme.getImageTintAlpha(state);
    };
    /**
     * Updates the tint.
     *
     * @returns True if the tint is changed.
     */
    DImagePiece.prototype.updateTint = function () {
        var image = this._image;
        if (image) {
            if (this.isTintAware(image)) {
                var theme = this._theme;
                var state = this._parent.state;
                var color = this.toTintColor(theme, state);
                if (color != null) {
                    var result = false;
                    if (image.tint !== color) {
                        image.tint = color;
                        result = true;
                    }
                    var alpha = this.toTintAlpha(theme, state);
                    if (image.alpha !== alpha) {
                        image.alpha = alpha;
                        result = true;
                    }
                    return result;
                }
            }
        }
        return false;
    };
    /**
     * Updates the computed source.
     *
     * @returns True if the computed source is changed
     */
    DImagePiece.prototype.updateSource = function () {
        var newComputed = this.computeSource();
        var oldComputed = this._computed;
        if (newComputed !== oldComputed) {
            this._computed = newComputed;
            var parent_1 = this._parent;
            var oldImage = this._image;
            if (newComputed instanceof Texture) {
                if (oldComputed instanceof Texture) {
                    oldComputed.off("update", this._onChange);
                    if (oldImage instanceof Sprite) {
                        oldImage.texture = newComputed;
                        newComputed.on("update", this._onChange);
                    }
                }
                else {
                    if (oldImage != null) {
                        parent_1.removeChild(oldImage);
                    }
                    var newImage = new Sprite(newComputed);
                    this._applyMask(newImage);
                    newComputed.on("update", this._onChange);
                    parent_1.addChild(newImage);
                    this._image = newImage;
                }
            }
            else {
                if (oldComputed instanceof Texture) {
                    oldComputed.off("update", this._onChange);
                    if (oldImage != null) {
                        parent_1.removeChild(oldImage);
                        oldImage.destroy();
                    }
                }
                else if (oldImage != null) {
                    parent_1.removeChild(oldImage);
                }
                if (newComputed != null) {
                    this._applyMask(newComputed);
                    parent_1.addChild(newComputed);
                }
                this._image = newComputed;
            }
            return true;
        }
        return false;
    };
    DImagePiece.prototype.isRefitable = function (target) {
        return (target != null && target === this._image);
    };
    DImagePiece.prototype.destroy = function () {
        var image = this._image;
        if (image) {
            this._image = null;
            var computed = this._computed;
            if (computed instanceof Texture) {
                computed.off("update", this._onChange, this);
                image.destroy();
            }
        }
    };
    return DImagePiece;
}());
export { DImagePiece };
//# sourceMappingURL=d-image-piece.js.map