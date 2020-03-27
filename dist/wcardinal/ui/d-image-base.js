/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DApplications } from "./d-applications";
import { DDynamicText } from "./d-dynamic-text";
import { DImageBaseThemeWrapperSecondary } from "./d-image-base-theme-wrapper-secondary";
import { DImageBaseThemeWrapperTertiary } from "./d-image-base-theme-wrapper-tertiary";
import { DImagePiece } from "./d-image-piece";
import { DTextBase } from "./d-text-base";
var hasSecondaryImageSource = function (theme) {
    return !!theme.getSecondaryImageSource;
};
var hasTertiaryImageSource = function (theme) {
    return !!theme.getTertiaryImageSource;
};
var DImageBase = /** @class */ (function (_super) {
    __extends(DImageBase, _super);
    function DImageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DImageBase.prototype.init = function (options) {
        var _this = this;
        this._onChangeBound = function () {
            _this.toDirty();
            DApplications.update(_this);
        };
        this._applyMaskBound = function (target) {
            if (_this._isOverflowMaskEnabled) {
                target.mask = _this.getOrCreateOverflowMask();
            }
        };
        this._images = this.newImages(this.theme, options);
        _super.prototype.init.call(this, options);
    };
    DImageBase.prototype.newImages = function (theme, options) {
        var images = [];
        images.push(this.newImage(theme, this.toImageOptions(theme, options && options.image)));
        if (hasSecondaryImageSource(theme)) {
            images.push(this.newImage(new DImageBaseThemeWrapperSecondary(theme)));
        }
        if (hasTertiaryImageSource(theme)) {
            images.push(this.newImage(new DImageBaseThemeWrapperTertiary(theme)));
        }
        return images;
    };
    DImageBase.prototype.toImageOptions = function (theme, options) {
        return options;
    };
    DImageBase.prototype.newImage = function (theme, options) {
        return new DImagePiece(this, theme, options, this._textAlign, this._onChangeBound, this._applyMaskBound);
    };
    Object.defineProperty(DImageBase.prototype, "image", {
        get: function () {
            return this._images[0].source;
        },
        set: function (imageSource) {
            this._images[0].source = imageSource;
        },
        enumerable: true,
        configurable: true
    });
    DImageBase.prototype.onStateChange = function (newState, oldState) {
        _super.prototype.onStateChange.call(this, newState, oldState);
        var images = this._images;
        for (var i = 0, imax = images.length; i < imax; ++i) {
            images[i].onStateChange(newState, oldState);
        }
    };
    DImageBase.prototype.updateText = function () {
        this.updateTextValue();
        this.updateTextAndImage();
    };
    DImageBase.prototype.updateTextAndImage = function () {
        var text = this._text;
        var images = this._images;
        var padding = this._padding;
        var toRounded = this.toRounded;
        var width = this.width;
        var height = this.height;
        var pl = padding.getLeft();
        var pr = padding.getRight();
        var pt = padding.getTop();
        var pb = padding.getBottom();
        var noText = text == null;
        var textLeftFirst = noText;
        var textTopFirst = noText;
        var textRightLastMargin = 0;
        var textBottomLastMargin = 0;
        var textLeft = 0;
        var textRight = 0;
        var textTop = 0;
        var textBottom = 0;
        var paddingLeft = pl;
        var paddingRight = width - pr;
        var paddingTop = pt;
        var paddingBottom = height - pb;
        var borderLeft = 0;
        var borderRight = width;
        var borderTop = 0;
        var borderBottom = height;
        for (var i = 0, imax = images.length; i < imax; ++i) {
            var image = images[i];
            image.updateSource();
            image.updateTint();
            image.updateBound();
            var imageImage = image.image;
            if (imageImage) {
                var imageBound = image.bound;
                var imageBoundWidth = imageBound.width;
                var imageBoundHeight = imageBound.height;
                var imageMargin = image.margin;
                var imageMarginHorizontal = imageMargin.horizontal;
                var imageMarginVertical = imageMargin.vertical;
                // Text
                if (image.align.with === DAlignWith.TEXT) {
                    switch (image.align.horizontal) {
                        case DAlignHorizontal.LEFT:
                            imageImage.x = textLeft;
                            textLeft += imageBoundWidth;
                            if (textLeftFirst) {
                                textLeftFirst = false;
                            }
                            else {
                                textLeft += imageMarginHorizontal;
                            }
                            break;
                        case DAlignHorizontal.CENTER:
                            // DO NOTHING
                            break;
                        case DAlignHorizontal.RIGHT:
                            textRight -= imageBoundWidth;
                            imageImage.x = textRight;
                            textRight -= imageMarginHorizontal;
                            textRightLastMargin = imageMarginHorizontal;
                            break;
                    }
                    switch (image.align.vertical) {
                        case DAlignVertical.TOP:
                            imageImage.y = textTop;
                            textTop += imageBoundHeight;
                            if (textTopFirst) {
                                textTopFirst = false;
                            }
                            else {
                                textTop += imageMarginVertical;
                            }
                            break;
                        case DAlignVertical.MIDDLE:
                            // DO NOTHING
                            break;
                        case DAlignVertical.BOTTOM:
                            textBottom -= imageBoundHeight;
                            imageImage.y = textBottom;
                            textBottom -= imageMarginVertical;
                            textBottomLastMargin = imageMarginVertical;
                            break;
                    }
                }
                // Padding
                if (image.align.with === DAlignWith.PADDING) {
                    switch (image.align.horizontal) {
                        case DAlignHorizontal.LEFT:
                            paddingLeft += imageMarginHorizontal;
                            imageImage.x = toRounded(paddingLeft);
                            paddingLeft += imageBoundWidth;
                            break;
                        case DAlignHorizontal.CENTER:
                            // DO NOTHING
                            break;
                        case DAlignHorizontal.RIGHT:
                            paddingRight -= imageBoundWidth + imageMarginHorizontal;
                            imageImage.x = toRounded(paddingRight);
                            break;
                    }
                    switch (image.align.vertical) {
                        case DAlignVertical.TOP:
                            paddingTop += imageMarginVertical;
                            imageImage.y = toRounded(paddingTop);
                            paddingTop += imageBoundHeight;
                            break;
                        case DAlignVertical.MIDDLE:
                            // DO NOTHING
                            break;
                        case DAlignVertical.BOTTOM:
                            paddingBottom -= imageBoundHeight + imageMarginVertical;
                            imageImage.y = toRounded(paddingBottom);
                            break;
                    }
                }
                // Border
                if (image.align.with === DAlignWith.BORDER) {
                    switch (image.align.horizontal) {
                        case DAlignHorizontal.LEFT:
                            borderLeft += imageMarginHorizontal;
                            imageImage.x = toRounded(borderLeft);
                            borderLeft += imageBoundWidth;
                            break;
                        case DAlignHorizontal.CENTER:
                            // DO NOTHING
                            break;
                        case DAlignHorizontal.RIGHT:
                            borderRight -= imageBoundWidth + imageMarginHorizontal;
                            imageImage.x = toRounded(borderRight);
                            break;
                    }
                    switch (image.align.vertical) {
                        case DAlignVertical.TOP:
                            borderTop += imageMarginVertical;
                            imageImage.y = toRounded(borderTop);
                            borderTop += imageBoundHeight;
                            break;
                        case DAlignVertical.MIDDLE:
                            // DO NOTHING
                            break;
                        case DAlignVertical.BOTTOM:
                            borderBottom -= imageBoundHeight + imageMarginVertical;
                            imageImage.y = toRounded(borderBottom);
                            break;
                    }
                }
            }
        }
        if (noText) {
            textRight += textRightLastMargin;
            textBottom += textBottomLastMargin;
        }
        // Text
        var textLeftAdjust = 0;
        var textCenterAdjust = 0;
        var textRightAdjust = 0;
        var textTopAdjust = 0;
        var textMiddleAdjust = 0;
        var textBottomAdjust = 0;
        if (text != null) {
            this.updateTextColor(text);
            if (text instanceof DDynamicText) {
                text.setClippingWidthDelta(textLeft - textRight);
            }
            var textAlign = this._textAlign;
            var textWidth = text.width;
            var textHeight = text.height;
            switch (textAlign.horizontal) {
                case DAlignHorizontal.LEFT:
                    textLeftAdjust = pl;
                    textRightAdjust = textLeftAdjust + textLeft + textWidth - textRight;
                    break;
                case DAlignHorizontal.CENTER:
                    textLeftAdjust = (width - textLeft + textRight - textWidth) * 0.5;
                    textRightAdjust = textLeftAdjust + textLeft + textWidth - textRight;
                    break;
                case DAlignHorizontal.RIGHT:
                    textRightAdjust = width - pr;
                    textLeftAdjust = textRightAdjust + textRight - textWidth - textLeft;
                    break;
            }
            text.x = toRounded(textLeftAdjust + textLeft);
            textCenterAdjust = textLeftAdjust + textLeft + textWidth * 0.5;
            switch (textAlign.vertical) {
                case DAlignVertical.TOP:
                    textTopAdjust = pt;
                    textBottomAdjust = textTopAdjust + textTop + textHeight - textBottom;
                    break;
                case DAlignVertical.MIDDLE:
                    textTopAdjust = (height - textTop + textBottom - textHeight) * 0.5;
                    textBottomAdjust = textTopAdjust + textTop + textHeight - textBottom;
                    break;
                case DAlignVertical.BOTTOM:
                    textBottomAdjust = height - pb;
                    textTopAdjust = textBottomAdjust + textBottom - textHeight - textTop;
                    break;
            }
            text.y = toRounded(textTopAdjust + textTop);
            textMiddleAdjust = textTopAdjust + textTop + textHeight * 0.5;
        }
        else {
            textLeftAdjust = (width - textLeft + textRight) * 0.5;
            textRightAdjust = textLeftAdjust + textLeft - textRight;
            textCenterAdjust = textLeftAdjust + textLeft;
            textTopAdjust = (height - textTop + textBottom) * 0.5;
            textBottomAdjust = textTopAdjust + textTop - textBottom;
            textMiddleAdjust = textTopAdjust + textTop;
        }
        var paddingCenterAdjust = width * 0.5;
        var paddingMiddleAdjust = height * 0.5;
        var borderCenterAdjust = width * 0.5;
        var borderMiddleAdjust = height * 0.5;
        for (var i = 0, imax = images.length; i < imax; ++i) {
            var image = images[i];
            var imageImage = image.image;
            if (imageImage) {
                var imageBound = image.bound;
                var imageBoundWidth = imageBound.width;
                var imageBoundHeight = imageBound.height;
                // Text
                if (image.align.with === DAlignWith.TEXT) {
                    switch (image.align.horizontal) {
                        case DAlignHorizontal.LEFT:
                            imageImage.x = toRounded(imageImage.x + textLeftAdjust);
                            break;
                        case DAlignHorizontal.CENTER:
                            imageImage.x = toRounded(textCenterAdjust - imageBoundWidth * 0.5);
                            break;
                        case DAlignHorizontal.RIGHT:
                            imageImage.x = toRounded(imageImage.x + textRightAdjust);
                            break;
                    }
                    switch (image.align.vertical) {
                        case DAlignVertical.TOP:
                            imageImage.y = toRounded(imageImage.y + textTopAdjust);
                            break;
                        case DAlignVertical.MIDDLE:
                            imageImage.y = toRounded(textMiddleAdjust - imageBoundHeight * 0.5);
                            break;
                        case DAlignVertical.BOTTOM:
                            imageImage.y = toRounded(imageImage.y + textBottomAdjust);
                            break;
                    }
                }
                // Padding
                if (image.align.with === DAlignWith.PADDING) {
                    switch (image.align.horizontal) {
                        case DAlignHorizontal.CENTER:
                            imageImage.x = toRounded(paddingCenterAdjust - imageBoundWidth * 0.5);
                            break;
                    }
                    switch (image.align.vertical) {
                        case DAlignVertical.MIDDLE:
                            imageImage.y = toRounded(paddingMiddleAdjust - imageBoundHeight * 0.5);
                            break;
                    }
                }
                // Border
                if (image.align.with === DAlignWith.BORDER) {
                    switch (image.align.horizontal) {
                        case DAlignHorizontal.CENTER:
                            imageImage.x = toRounded(borderCenterAdjust - imageBoundWidth * 0.5);
                            break;
                    }
                    switch (image.align.vertical) {
                        case DAlignVertical.MIDDLE:
                            imageImage.y = toRounded(borderMiddleAdjust - imageBoundHeight * 0.5);
                            break;
                    }
                }
            }
        }
    };
    DImageBase.prototype.isRefitable = function (target) {
        if (_super.prototype.isRefitable.call(this, target)) {
            return true;
        }
        var images = this._images;
        for (var i = 0, imax = images.length; i < imax; ++i) {
            if (images[i].isRefitable(target)) {
                return true;
            }
        }
        return false;
    };
    DImageBase.prototype.getType = function () {
        return "DImageBase";
    };
    DImageBase.prototype.destroy = function () {
        var images = this._images;
        for (var i = 0, imax = images.length; i < imax; ++i) {
            images[i].destroy();
        }
        _super.prototype.destroy.call(this);
    };
    return DImageBase;
}(DTextBase));
export { DImageBase };
//# sourceMappingURL=d-image-base.js.map