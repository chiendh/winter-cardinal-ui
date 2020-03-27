import { Point } from "pixi.js";
import { UtilCharacterIterator } from "../../util/util-character-iterator";
import { EShapeTextStyle, EShapeTextWeight } from "../e-shape-text";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { toLength } from "./to-length";
export var TEXT_VERTEX_COUNT = 4;
export var TEXT_INDEX_COUNT = 2;
var TEXT_SDF_WINDOW = 12;
var TEXT_FMIN = 0.00001;
var TEXT_WORK_POINT = new Point();
export var toTextBufferCount = function (shape) {
    return Math.ceil(shape.text.value.length / 12) * 12;
};
export var buildTextClipping = function (clippings, voffset, vcount) {
    for (var i = voffset * 3, imax = i + vcount * 3; i < imax; i += 3) {
        clippings[i + 0] = 0;
        clippings[i + 1] = 0;
        clippings[i + 2] = 2;
    }
};
export var buildTextIndex = function (indices, voffset, ioffset, icount) {
    for (var i = 0, ii = ioffset * 3, imax = (icount >> 1); i < imax; i += 1, ii += 6) {
        var j = voffset + (i << 2);
        indices[ii + 0] = j + 0;
        indices[ii + 1] = j + 1;
        indices[ii + 2] = j + 3;
        indices[ii + 3] = j + 1;
        indices[ii + 4] = j + 2;
        indices[ii + 5] = j + 3;
    }
};
export var buildTextStep = function (steps, voffset, vcount, textAtlas, textSize, textOutlineWidth, textWeight, antialiasWeight) {
    if (textAtlas != null) {
        var scaleBase = (0.4 / TEXT_SDF_WINDOW) * antialiasWeight;
        var scale = scaleBase * (textAtlas.font.size / textSize);
        var outlineWidth = textOutlineWidth * 0.4;
        var weight = (textWeight === EShapeTextWeight.NORMAL ? 0.0 : 0.05);
        for (var i = voffset * 6, imax = i + vcount * 6; i < imax; i += 6) {
            steps[i + 0] = scale;
            steps[i + 1] = outlineWidth;
            steps[i + 2] = weight;
            steps[i + 3] = TEXT_FMIN;
            steps[i + 4] = TEXT_FMIN;
            steps[i + 5] = TEXT_FMIN;
        }
    }
    else {
        for (var i = voffset * 6, imax = i + vcount * 6; i < imax; i += 6) {
            steps[i + 0] = 0;
            steps[i + 1] = 0;
            steps[i + 2] = TEXT_FMIN;
            steps[i + 3] = TEXT_FMIN;
            steps[i + 4] = TEXT_FMIN;
            steps[i + 5] = TEXT_FMIN;
        }
    }
};
var getTextBBox = function (halign, valign, hoffset, voffset, hpadding, vpadding, width, height, x0, y0, x1, y1, x2, y2, x3, y3, hnx, hny, vnx, vny, result) {
    switch (halign) {
        case EShapeTextAlignHorizontal.LEFT:
            switch (valign) {
                case EShapeTextAlignVertical.TOP:
                    result.x = x0
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset + vpadding);
                    result.y = y0
                        + hny * (hoffset + hpadding)
                        + vny * (voffset + vpadding);
                    break;
                case EShapeTextAlignVertical.MIDDLE:
                    result.x = 0.5 * (x0 + x3)
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset - 0.5 * height);
                    result.y = 0.5 * (y0 + y3)
                        + hny * (hoffset + hpadding)
                        + vny * (voffset - 0.5 * height);
                    break;
                case EShapeTextAlignVertical.BOTTOM:
                    result.x = x3
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset - vpadding - height);
                    result.y = y3
                        + hny * (hoffset + hpadding)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_TOP:
                    result.x = x0
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset - vpadding - height);
                    result.y = y0
                        + hny * (hoffset + hpadding)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
                    result.x = x3
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset + vpadding);
                    result.y = y3
                        + hny * (hoffset + hpadding)
                        + vny * (voffset + vpadding);
                    break;
            }
            break;
        case EShapeTextAlignHorizontal.CENTER:
            switch (valign) {
                case EShapeTextAlignVertical.TOP:
                    result.x = 0.5 * (x0 + x1)
                        + hnx * (hoffset - 0.5 * width)
                        + vnx * (voffset + vpadding);
                    result.y = 0.5 * (y0 + y1)
                        + hny * (hoffset - 0.5 * width)
                        + vny * (voffset + vpadding);
                    break;
                case EShapeTextAlignVertical.MIDDLE:
                    result.x = 0.5 * (x0 + x2)
                        + hnx * (hoffset - 0.5 * width)
                        + vnx * (voffset - 0.5 * height);
                    result.y = 0.5 * (y0 + y2)
                        + hny * (hoffset - 0.5 * width)
                        + vny * (voffset - 0.5 * height);
                    break;
                case EShapeTextAlignVertical.BOTTOM:
                    result.x = 0.5 * (x3 + x2)
                        + hnx * (hoffset - 0.5 * width)
                        + vnx * (voffset - vpadding - height);
                    result.y = 0.5 * (y3 + y2)
                        + hny * (hoffset - 0.5 * width)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_TOP:
                    result.x = 0.5 * (x0 + x1)
                        + hnx * (hoffset - 0.5 * width)
                        + vnx * (voffset - vpadding - height);
                    result.y = 0.5 * (y0 + y1)
                        + hny * (hoffset - 0.5 * width)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
                    result.x = 0.5 * (x3 + x2)
                        + hnx * (hoffset - 0.5 * width)
                        + vnx * (voffset + vpadding);
                    result.y = 0.5 * (y3 + y2)
                        + hny * (hoffset - 0.5 * width)
                        + vny * (voffset + vpadding);
                    break;
            }
            break;
        case EShapeTextAlignHorizontal.RIGHT:
            switch (valign) {
                case EShapeTextAlignVertical.TOP:
                    result.x = x1
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset + vpadding);
                    result.y = y1
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset + vpadding);
                    break;
                case EShapeTextAlignVertical.MIDDLE:
                    result.x = 0.5 * (x1 + x2)
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset - 0.5 * height);
                    result.y = 0.5 * (y1 + y2)
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset - 0.5 * height);
                    break;
                case EShapeTextAlignVertical.BOTTOM:
                    result.x = x2
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset - vpadding - height);
                    result.y = y2
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_TOP:
                    result.x = x1
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset - vpadding - height);
                    result.y = y1
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
                    result.x = x2
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset + vpadding);
                    result.y = y2
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset + vpadding);
                    break;
            }
            break;
        case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
            switch (valign) {
                case EShapeTextAlignVertical.TOP:
                    result.x = x0
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset + vpadding);
                    result.y = y0
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset + vpadding);
                    break;
                case EShapeTextAlignVertical.MIDDLE:
                    result.x = 0.5 * (x0 + x3)
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset - 0.5 * height);
                    result.y = 0.5 * (y0 + y3)
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset - 0.5 * height);
                    break;
                case EShapeTextAlignVertical.BOTTOM:
                    result.x = x3
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset - vpadding - height);
                    result.y = y3
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_TOP:
                    result.x = x0
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset - vpadding - height);
                    result.y = y0
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
                    result.x = x3
                        + hnx * (hoffset - hpadding - width)
                        + vnx * (voffset + vpadding);
                    result.y = y3
                        + hny * (hoffset - hpadding - width)
                        + vny * (voffset + vpadding);
                    break;
            }
            break;
        case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
            switch (valign) {
                case EShapeTextAlignVertical.TOP:
                    result.x = x1
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset + vpadding);
                    result.y = y1
                        + hny * (hoffset + hpadding)
                        + vny * (voffset + vpadding);
                    break;
                case EShapeTextAlignVertical.MIDDLE:
                    result.x = 0.5 * (x1 + x2)
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset - 0.5 * height);
                    result.y = 0.5 * (y1 + y2)
                        + hny * (hoffset + hpadding)
                        + vny * (voffset - 0.5 * height);
                    break;
                case EShapeTextAlignVertical.BOTTOM:
                    result.x = x2
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset - vpadding - height);
                    result.y = y2
                        + hny * (hoffset + hpadding)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_TOP:
                    result.x = x1
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset - vpadding - height);
                    result.y = y1
                        + hny * (hoffset + hpadding)
                        + vny * (voffset - vpadding - height);
                    break;
                case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
                    result.x = x2
                        + hnx * (hoffset + hpadding)
                        + vnx * (voffset + vpadding);
                    result.y = y2
                        + hny * (hoffset + hpadding)
                        + vny * (voffset + vpadding);
                    break;
            }
            break;
    }
};
var toNormalized = function (dx, dy, defx, defy, result) {
    var d = dx * dx + dy * dy;
    if (TEXT_FMIN < d) {
        var l = Math.sqrt(d);
        var li = 1 / l;
        result.set(dx * li, dy * li);
        return l;
    }
    else {
        result.set(defx, defy);
        return 0;
    }
};
var rotateAlignHorizontalRight = function (align) {
    switch (align) {
        case EShapeTextAlignHorizontal.LEFT:
            return EShapeTextAlignVertical.BOTTOM;
        case EShapeTextAlignHorizontal.CENTER:
            return EShapeTextAlignVertical.MIDDLE;
        case EShapeTextAlignHorizontal.RIGHT:
            return EShapeTextAlignVertical.TOP;
        case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
            return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
        case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
            return EShapeTextAlignVertical.OUTSIDE_TOP;
    }
};
var rotateAlignVerticalRight = function (align) {
    switch (align) {
        case EShapeTextAlignVertical.TOP:
            return EShapeTextAlignHorizontal.LEFT;
        case EShapeTextAlignVertical.MIDDLE:
            return EShapeTextAlignHorizontal.CENTER;
        case EShapeTextAlignVertical.BOTTOM:
            return EShapeTextAlignHorizontal.RIGHT;
        case EShapeTextAlignVertical.OUTSIDE_TOP:
            return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
        case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
            return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
    }
};
var rotateAlignHorizontalLeft = function (align) {
    switch (align) {
        case EShapeTextAlignHorizontal.LEFT:
            return EShapeTextAlignVertical.TOP;
        case EShapeTextAlignHorizontal.CENTER:
            return EShapeTextAlignVertical.MIDDLE;
        case EShapeTextAlignHorizontal.RIGHT:
            return EShapeTextAlignVertical.BOTTOM;
        case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
            return EShapeTextAlignVertical.OUTSIDE_TOP;
        case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
            return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
    }
};
var rotateAlignVerticalLeft = function (align) {
    switch (align) {
        case EShapeTextAlignVertical.TOP:
            return EShapeTextAlignHorizontal.RIGHT;
        case EShapeTextAlignVertical.MIDDLE:
            return EShapeTextAlignHorizontal.CENTER;
        case EShapeTextAlignVertical.BOTTOM:
            return EShapeTextAlignHorizontal.LEFT;
        case EShapeTextAlignVertical.OUTSIDE_TOP:
            return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
        case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
            return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
    }
};
export var buildTextVertex = function (vertices, uvs, voffset, vcount, originX, originY, sizeX, sizeY, textAtlas, textSize, textValue, textStyle, textAlignHorizontal, textAlignVertical, textOffsetHorizontal, textOffsetVertical, textSpacingHorizontal, textSpacingVertical, textDirection, textPaddingHorizontal, textPaddingVertical, textClipping, textWorld, textureUvs, internalTransform) {
    // Calculate the transformed positions
    //
    //  0               1
    // |---------------|
    // |               |
    // |3              |2
    // |---------------|
    //
    var sx = sizeX * 0.5;
    var sy = sizeY * 0.5;
    var work = TEXT_WORK_POINT;
    work.set(originX - sx, originY - sy);
    internalTransform.apply(work, work);
    var x0 = work.x;
    var y0 = work.y;
    work.set(originX + sx, originY - sy);
    internalTransform.apply(work, work);
    var x1 = work.x;
    var y1 = work.y;
    work.set(originX + sx, originY + sy);
    internalTransform.apply(work, work);
    var x2 = work.x;
    var y2 = work.y;
    var x3 = x0 + (x2 - x1);
    var y3 = y0 + (y2 - y1);
    // Horizontal normal
    var hl = toLength(x0, y0, x1, y1);
    toNormalized(internalTransform.a, internalTransform.b, 1, 0, work);
    var hnx = work.x;
    var hny = work.y;
    // Vertical normal
    var vl = toLength(x0, y0, x3, y3);
    toNormalized(internalTransform.c, internalTransform.d, 0, 1, work);
    var vnx = work.x;
    var vny = work.y;
    // Calculate the width / height
    var width = 0;
    var height = 0;
    var heightChar = 0;
    var lineHeight = Math.max(0, textSize + textSpacingVertical);
    var lineWidth = 0;
    var textAtlasCharacters = textAtlas.characters;
    var iterator = UtilCharacterIterator.from(textValue);
    var advancePrevious = 0;
    while (iterator.hasNext()) {
        var character = iterator.next();
        if (character !== "\n") {
            if (0 < advancePrevious) {
                lineWidth += Math.max(0, advancePrevious + textSpacingHorizontal);
            }
            var data = textAtlasCharacters[character];
            if (data) {
                advancePrevious = data.advance;
                heightChar = data.height;
            }
            else {
                advancePrevious = 0;
            }
        }
        else {
            lineWidth += advancePrevious;
            advancePrevious = 0;
            width = Math.max(width, lineWidth);
            lineWidth = 0;
            height += lineHeight;
        }
    }
    var scale = textSize / textAtlas.font.size;
    lineWidth += advancePrevious;
    width = Math.max(width, lineWidth) * scale;
    lineWidth = 0;
    heightChar *= scale;
    height += textSize;
    //
    var tx0 = 0;
    var ty0 = 0;
    var lineWidthMaximum = NaN;
    switch (textDirection) {
        case EShapeTextDirection.LEFT_TO_RIGHT:
            getTextBBox(textAlignHorizontal, textAlignVertical, textOffsetHorizontal, textOffsetVertical, textPaddingHorizontal, textPaddingVertical, width, height, x0, y0, x1, y1, x2, y2, x3, y3, hnx, hny, vnx, vny, work);
            tx0 = work.x;
            ty0 = work.y;
            if (textClipping) {
                switch (textAlignHorizontal) {
                    case EShapeTextAlignHorizontal.LEFT:
                    case EShapeTextAlignHorizontal.CENTER:
                    case EShapeTextAlignHorizontal.RIGHT:
                        switch (textAlignVertical) {
                            case EShapeTextAlignVertical.TOP:
                            case EShapeTextAlignVertical.MIDDLE:
                            case EShapeTextAlignVertical.BOTTOM:
                                lineWidthMaximum = hl - textPaddingHorizontal * 2;
                                break;
                        }
                        break;
                }
            }
            break;
        case EShapeTextDirection.TOP_TO_BOTTOM:
            // Swap normals
            work.set(vnx, vny);
            vnx = -hnx;
            vny = -hny;
            hnx = work.x;
            hny = work.y;
            // Get text bbox
            getTextBBox(rotateAlignVerticalRight(textAlignVertical), rotateAlignHorizontalRight(textAlignHorizontal), textOffsetVertical, textOffsetHorizontal, textPaddingVertical, textPaddingHorizontal, width, height, x1, y1, x2, y2, x3, y3, x0, y0, hnx, hny, vnx, vny, work);
            tx0 = work.x;
            ty0 = work.y;
            if (textClipping) {
                switch (textAlignVertical) {
                    case EShapeTextAlignVertical.TOP:
                    case EShapeTextAlignVertical.MIDDLE:
                    case EShapeTextAlignVertical.BOTTOM:
                        switch (textAlignHorizontal) {
                            case EShapeTextAlignHorizontal.LEFT:
                            case EShapeTextAlignHorizontal.CENTER:
                            case EShapeTextAlignHorizontal.RIGHT:
                                lineWidthMaximum = vl - textPaddingVertical * 2;
                                break;
                        }
                        break;
                }
            }
            break;
        case EShapeTextDirection.BOTTOM_TO_TOP:
            // Swap normals
            work.set(vnx, vny);
            vnx = hnx;
            vny = hny;
            hnx = -work.x;
            hny = -work.y;
            // Get text bbox
            getTextBBox(rotateAlignVerticalLeft(textAlignVertical), rotateAlignHorizontalLeft(textAlignHorizontal), textOffsetVertical, textOffsetHorizontal, textPaddingVertical, textPaddingHorizontal, width, height, x3, y3, x0, y0, x1, y1, x2, y2, hnx, hny, vnx, vny, work);
            tx0 = work.x;
            ty0 = work.y;
            if (textClipping) {
                switch (textAlignVertical) {
                    case EShapeTextAlignVertical.TOP:
                    case EShapeTextAlignVertical.MIDDLE:
                    case EShapeTextAlignVertical.BOTTOM:
                        switch (textAlignHorizontal) {
                            case EShapeTextAlignHorizontal.LEFT:
                            case EShapeTextAlignHorizontal.CENTER:
                            case EShapeTextAlignHorizontal.RIGHT:
                                lineWidthMaximum = vl - textPaddingVertical * 2;
                                break;
                        }
                        break;
                }
            }
            break;
    }
    //
    if (lineWidthMaximum < width) {
        var dwidth = (width - lineWidthMaximum) * 0.5;
        textWorld[0] = tx0 + hnx * dwidth;
        textWorld[1] = ty0 + hny * dwidth;
        textWorld[2] = hnx;
        textWorld[3] = hny;
        textWorld[4] = vnx;
        textWorld[5] = vny;
        textWorld[6] = lineWidthMaximum;
        textWorld[7] = height;
    }
    else {
        textWorld[0] = tx0;
        textWorld[1] = ty0;
        textWorld[2] = hnx;
        textWorld[3] = hny;
        textWorld[4] = vnx;
        textWorld[5] = vny;
        textWorld[6] = width;
        textWorld[7] = height;
    }
    // Texture
    var uvx0 = textureUvs.x0;
    var uvx1 = textureUvs.x1;
    var uvx3 = textureUvs.x3;
    var uvy0 = textureUvs.y0;
    var uvy1 = textureUvs.y1;
    var uvy3 = textureUvs.y3;
    var duvx01 = (uvx1 - uvx0);
    var duvy01 = (uvy1 - uvy0);
    var duvx03 = (uvx3 - uvx0);
    var duvy03 = (uvy3 - uvy0);
    // Vertices & UVs
    var lhx = lineHeight * vnx;
    var lhy = lineHeight * vny;
    var snx = scale * hnx;
    var sny = scale * hny;
    var offsetY = (heightChar - textSize) * 0.5;
    var oyx = offsetY * vnx;
    var oyy = offsetY * vny;
    var offsetItalic = (textStyle === EShapeTextStyle.NORMAL ? 0 : textSize * 0.25);
    var bx0 = tx0 - oyx + offsetItalic * snx;
    var by0 = ty0 - oyy + offsetItalic * sny;
    var bx3 = tx0 + oyx + textSize * vnx;
    var by3 = ty0 + oyy + textSize * vny;
    var cx0 = bx0;
    var cy0 = by0;
    var cx3 = bx3;
    var cy3 = by3;
    lineWidth = 0;
    advancePrevious = 0;
    iterator.position = 0;
    var lineCount = 0;
    var iv = voffset * 2;
    for (; iterator.hasNext(); iv += 8) {
        var character = iterator.next();
        if (character !== "\n") {
            var lineWidthPrevious = lineWidth;
            if (0 < advancePrevious) {
                lineWidth += Math.max(0, advancePrevious + textSpacingHorizontal);
            }
            var ax = lineWidth * snx;
            var ay = lineWidth * sny;
            cx0 = bx0 + ax;
            cy0 = by0 + ay;
            cx3 = bx3 + ax;
            cy3 = by3 + ay;
            var data = textAtlasCharacters[character];
            lineCount += 1;
            if (data) {
                var advance = data.advance;
                if (lineWidthMaximum < (lineWidth + advance) * scale) {
                    var dots = textAtlasCharacters["..."];
                    if (dots) {
                        if (1 < lineCount && lineWidthMaximum < (lineWidth + dots.advance) * scale) {
                            lineWidth = lineWidthPrevious;
                            iv -= 8;
                            lineCount -= 1;
                            var bx = lineWidth * snx;
                            var by = lineWidth * sny;
                            cx0 = bx0 + bx;
                            cy0 = by0 + by;
                            cx3 = bx3 + bx;
                            cy3 = by3 + by;
                        }
                        advancePrevious = dots.advance;
                        writeCharacter(vertices, uvs, iv, dots, textAtlas, snx, sny, cx0, cy0, cx3, cy3, duvx01, duvy01, duvx03, duvy03, uvx0, uvy0);
                        for (iv += 8; true; iv += 8) {
                            if (iterator.hasNext() && iterator.advance("\n")) {
                                writeCharacterEmpty(vertices, uvs, iv, cx0, cy0, cx3, cy3, uvx0, uvy0, uvx3, uvy3);
                                lineCount += 1;
                            }
                            else {
                                iv -= 8;
                                break;
                            }
                        }
                    }
                    else {
                        advancePrevious = advance;
                        writeCharacterEmpty(vertices, uvs, iv, cx0, cy0, cx3, cy3, uvx0, uvy0, uvx3, uvy3);
                    }
                }
                else {
                    advancePrevious = advance;
                    writeCharacter(vertices, uvs, iv, data, textAtlas, snx, sny, cx0, cy0, cx3, cy3, duvx01, duvy01, duvx03, duvy03, uvx0, uvy0);
                }
            }
            else {
                advancePrevious = 0;
                writeCharacterEmpty(vertices, uvs, iv, cx0, cy0, cx3, cy3, uvx0, uvy0, uvx3, uvy3);
            }
        }
        else {
            lineWidth += advancePrevious;
            advancePrevious = 0;
            bx0 += lhx;
            by0 += lhy;
            bx3 += lhx;
            by3 += lhy;
            cx0 = bx0;
            cy0 = by0;
            cx3 = bx3;
            cy3 = by3;
            writeCharacterEmpty(vertices, uvs, iv, cx0, cy0, cx3, cy3, uvx0, uvy0, uvx3, uvy3);
            adjustTextAlignment(vertices, hnx, hny, lineCount, iv, width - lineWidth * scale, textDirection, textAlignHorizontal, textAlignVertical);
            lineWidth = 0;
            lineCount = 0;
        }
    }
    lineWidth += advancePrevious;
    adjustTextAlignment(vertices, hnx, hny, lineCount, iv, width - lineWidth * scale, textDirection, textAlignHorizontal, textAlignVertical);
    for (var ivmax = (voffset + vcount) * 2; iv < ivmax; iv += 2) {
        vertices[iv + 0] = tx0;
        vertices[iv + 1] = ty0;
        uvs[iv + 0] = uvx0;
        uvs[iv + 1] = uvy0;
    }
};
var writeCharacterEmpty = function (vertices, uvs, iv, cx0, cy0, cx3, cy3, uvx0, uvy0, uvx3, uvy3) {
    vertices[iv + 0] = cx0;
    vertices[iv + 1] = cy0;
    vertices[iv + 2] = cx0;
    vertices[iv + 3] = cy0;
    vertices[iv + 4] = cx3;
    vertices[iv + 5] = cy3;
    vertices[iv + 6] = cx3;
    vertices[iv + 7] = cy3;
    uvs[iv + 0] = uvx0;
    uvs[iv + 1] = uvy0;
    uvs[iv + 2] = uvx0;
    uvs[iv + 3] = uvy0;
    uvs[iv + 4] = uvx3;
    uvs[iv + 5] = uvy3;
    uvs[iv + 6] = uvx3;
    uvs[iv + 7] = uvy3;
};
var writeCharacter = function (vertices, uvs, iv, data, atlas, snx, sny, cx0, cy0, cx3, cy3, duvx01, duvy01, duvx03, duvy03, uvx0, uvy0) {
    // Vertices
    var dataOffsetX = data.x - data.origin.x;
    var dataWidth = data.width;
    var dx0 = dataOffsetX * snx;
    var dy0 = dataOffsetX * sny;
    var dx1 = (dataOffsetX + dataWidth) * snx;
    var dy1 = (dataOffsetX + dataWidth) * sny;
    vertices[iv + 0] = cx0 + dx0;
    vertices[iv + 1] = cy0 + dy0;
    vertices[iv + 2] = cx0 + dx1;
    vertices[iv + 3] = cy0 + dy1;
    vertices[iv + 4] = cx3 + dx1;
    vertices[iv + 5] = cy3 + dy1;
    vertices[iv + 6] = cx3 + dx0;
    vertices[iv + 7] = cy3 + dy0;
    // UVs
    var px0 = data.x / atlas.width;
    var py0 = data.y / atlas.height;
    var px1 = (data.x + data.width) / atlas.width;
    var py1 = (data.y + data.height) / atlas.height;
    var dux0 = duvx01 * px0;
    var duy0 = duvy01 * px0;
    var dux1 = duvx01 * px1;
    var duy1 = duvy01 * px1;
    var dvx0 = duvx03 * py0;
    var dvy0 = duvy03 * py0;
    var dvx1 = duvx03 * py1;
    var dvy1 = duvy03 * py1;
    uvs[iv + 0] = uvx0 + dux0 + dvx0;
    uvs[iv + 1] = uvy0 + duy0 + dvy0;
    uvs[iv + 2] = uvx0 + dux1 + dvx0;
    uvs[iv + 3] = uvy0 + duy1 + dvy0;
    uvs[iv + 4] = uvx0 + dux1 + dvx1;
    uvs[iv + 5] = uvy0 + duy1 + dvy1;
    uvs[iv + 6] = uvx0 + dux0 + dvx1;
    uvs[iv + 7] = uvy0 + duy0 + dvy1;
};
var moveText = function (vertices, vertexIndex, textCount, dx, dy) {
    for (var i = 0, iv = vertexIndex - 8 * textCount; i < textCount; i += 1, iv += 8) {
        vertices[iv + 0] += dx;
        vertices[iv + 1] += dy;
        vertices[iv + 2] += dx;
        vertices[iv + 3] += dy;
        vertices[iv + 4] += dx;
        vertices[iv + 5] += dy;
        vertices[iv + 6] += dx;
        vertices[iv + 7] += dy;
    }
};
var moveTextHalf = function (vertices, vertexIndex, textCount, offset, nx, ny) {
    offset *= 0.5;
    moveText(vertices, vertexIndex, textCount, offset * nx, offset * ny);
};
var moveTextFull = function (vertices, vertexIndex, textCount, offset, nx, ny) {
    moveText(vertices, vertexIndex, textCount, offset * nx, offset * ny);
};
var adjustTextAlignment = function (vertices, nx, ny, lineCount, vertexIndex, offset, textDirection, textAlignHorizontal, textAlignVertical) {
    if (TEXT_FMIN < offset) {
        switch (textDirection) {
            case EShapeTextDirection.LEFT_TO_RIGHT:
                switch (textAlignHorizontal) {
                    case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
                    case EShapeTextAlignHorizontal.LEFT:
                        // DO NOTHING
                        break;
                    case EShapeTextAlignHorizontal.CENTER:
                        moveTextHalf(vertices, vertexIndex, lineCount, offset, nx, ny);
                        break;
                    case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
                    case EShapeTextAlignHorizontal.RIGHT:
                        moveTextFull(vertices, vertexIndex, lineCount, offset, nx, ny);
                        break;
                }
                break;
            case EShapeTextDirection.TOP_TO_BOTTOM:
                switch (textAlignVertical) {
                    case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
                    case EShapeTextAlignVertical.TOP:
                        // DO NOTHING
                        break;
                    case EShapeTextAlignVertical.MIDDLE:
                        moveTextHalf(vertices, vertexIndex, lineCount, offset, nx, ny);
                        break;
                    case EShapeTextAlignVertical.OUTSIDE_TOP:
                    case EShapeTextAlignVertical.BOTTOM:
                        moveTextFull(vertices, vertexIndex, lineCount, offset, nx, ny);
                        break;
                }
                break;
            case EShapeTextDirection.BOTTOM_TO_TOP:
                switch (textAlignVertical) {
                    case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
                    case EShapeTextAlignVertical.TOP:
                        moveTextFull(vertices, vertexIndex, lineCount, offset, nx, ny);
                        break;
                    case EShapeTextAlignVertical.MIDDLE:
                        moveTextHalf(vertices, vertexIndex, lineCount, offset, nx, ny);
                        break;
                    case EShapeTextAlignVertical.OUTSIDE_TOP:
                    case EShapeTextAlignVertical.BOTTOM:
                        // DO NOTHING
                        break;
                }
                break;
        }
    }
};
//# sourceMappingURL=build-text.js.map