/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DCornerMask } from "./d-corner-mask";
import { DLayoutClearType } from "./d-layout-clear-type";
import { DLayoutDirection } from "./d-layout-direction";
import { DLayoutSpace } from "./d-layout-space";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";
var isVisible = function (child) {
    return child instanceof DBase && (child.visible || child instanceof DLayoutSpace);
};
var toMultiplicity = function (theme, options) {
    if (options) {
        if (options.row != null) {
            return options.row;
        }
        if (options.column != null) {
            return options.column;
        }
    }
    return theme.getMultiplicity();
};
var toMargin = function (theme, options) {
    if (options && options.margin != null) {
        var margin = options.margin;
        if (isNumber(margin)) {
            return {
                horizontal: margin,
                vertical: margin
            };
        }
        else {
            var themeMargin = theme.getMargin();
            return {
                horizontal: (margin.horizontal != null ? margin.horizontal : themeMargin),
                vertical: (margin.vertical != null ? margin.vertical : themeMargin)
            };
        }
    }
    else {
        var themeMargin = theme.getMargin();
        return {
            horizontal: themeMargin,
            vertical: themeMargin
        };
    }
};
var toDirection = function (theme, options) {
    if (options && options.direction != null) {
        var direction = options.direction;
        if (isString(direction)) {
            return DLayoutDirection[direction];
        }
        else {
            return direction;
        }
    }
    return theme.getDirection();
};
var toCornerAdjust = function (theme, options) {
    if (options && options.corner != null && !isNumber(options.corner) && options.corner.adjust != null) {
        return options.corner.adjust;
    }
    return theme.getCornerAdjust();
};
var toReverse = function (theme, options) {
    if (options && options.reverse != null) {
        return options.reverse;
    }
    return theme.getReverse();
};
var DLayout = /** @class */ (function (_super) {
    __extends(DLayout, _super);
    function DLayout(options) {
        return _super.call(this, options) || this;
    }
    DLayout.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
        var theme = this.theme;
        this._margin = toMargin(theme, options);
        this._direction = toDirection(theme, options);
        this._cornerAdjust = toCornerAdjust(theme, options);
        this._multiplicity = toMultiplicity(theme, options);
        this._reverse = toReverse(theme, options);
    };
    DLayout.prototype.getWeightTotal = function () {
        var children = this.children;
        var result = 0;
        var multiplicity = this._multiplicity;
        var reverse = this._reverse;
        for (var i = 0, imax = children.length; i < imax;) {
            var weight = -1;
            var j = 0;
            for (; j < multiplicity && i + j < imax; ++j) {
                var child = children[reverse ? imax - 1 - (i + j) : i + j];
                if (isVisible(child)) {
                    var clearType = child.getClearType();
                    if (j !== 0 && (clearType & DLayoutClearType.BEFORE)) {
                        break;
                    }
                    else {
                        weight = Math.max(weight, child.weight);
                        if (clearType && DLayoutClearType.AFTER) {
                            j += 1;
                            break;
                        }
                    }
                }
                else {
                    i += 1;
                    j -= 1;
                }
            }
            i += j;
            if (0 <= weight) {
                result += weight;
            }
        }
        return result;
    };
    DLayout.prototype.getSpaceLeft = function (baseSize, margin) {
        var children = this.children;
        var multiplicity = this._multiplicity;
        var reverse = this._reverse;
        if (this._direction === DLayoutDirection.VERTICAL) {
            var result = baseSize;
            var marginNext = 0;
            for (var i = 0, imax = children.length; i < imax;) {
                var height = 0;
                var weight = -1;
                var j = 0;
                for (; j < multiplicity && i + j < imax; ++j) {
                    var child = children[reverse ? imax - 1 - (i + j) : i + j];
                    if (isVisible(child)) {
                        var clearType = child.getClearType();
                        if (j !== 0 && (clearType & DLayoutClearType.BEFORE)) {
                            break;
                        }
                        else {
                            weight = Math.max(weight, child.weight);
                            if (weight < 0) {
                                height = Math.max(height, child.height + marginNext);
                            }
                            else {
                                height = marginNext;
                            }
                            if (clearType & DLayoutClearType.AFTER) {
                                j += 1;
                                break;
                            }
                        }
                    }
                    else {
                        i += 1;
                        j -= 1;
                    }
                }
                i += j;
                result -= height;
                marginNext = margin;
            }
            return Math.max(0, result);
        }
        else {
            var result = baseSize;
            var marginNext = 0;
            for (var i = 0, imax = children.length; i < imax;) {
                var width = 0;
                var weight = -1;
                var j = 0;
                for (; j < multiplicity && i + j < imax; ++j) {
                    var child = children[reverse ? imax - 1 - (i + j) : i + j];
                    if (isVisible(child)) {
                        var clearType = child.getClearType();
                        if (j !== 0 && (clearType & DLayoutClearType.BEFORE)) {
                            break;
                        }
                        else {
                            weight = Math.max(weight, child.weight);
                            if (weight < 0) {
                                width = Math.max(width, child.width + marginNext);
                            }
                            else {
                                width = marginNext;
                            }
                            if (clearType & DLayoutClearType.AFTER) {
                                j += 1;
                                break;
                            }
                        }
                    }
                    else {
                        i += 1;
                        j -= 1;
                    }
                }
                i += j;
                result -= width;
                marginNext = margin;
            }
            return Math.max(0, result);
        }
    };
    DLayout.prototype.onRefit = function () {
        var children = this.children;
        var padding = this._padding;
        var paddingTop = padding.getTop();
        var paddingBottom = padding.getBottom();
        var paddingLeft = padding.getLeft();
        var paddingRight = padding.getRight();
        var margin = this._margin;
        var marginVertical = margin.vertical;
        var marginHorizontal = margin.horizontal;
        var weightTotal = this.getWeightTotal();
        var multiplicity = this._multiplicity;
        var reverse = this._reverse;
        var cornerAdjustWork = null;
        if (this._cornerAdjust) {
            var requiredSize = 4 + (children.length << 1);
            if (DLayout.CORNER_ADJUST_WORK == null || DLayout.CORNER_ADJUST_WORK.length < requiredSize) {
                DLayout.CORNER_ADJUST_WORK = new Float32Array(requiredSize);
            }
            cornerAdjustWork = DLayout.CORNER_ADJUST_WORK;
            cornerAdjustWork[0] = -2;
            cornerAdjustWork[1] = -2;
            cornerAdjustWork[requiredSize - 2] = -3;
            cornerAdjustWork[requiredSize - 1] = -3;
        }
        if (this._direction === DLayoutDirection.VERTICAL) {
            var irow = 0;
            var y = paddingTop - marginVertical;
            if (0 < weightTotal) {
                var weightTotalInverse = 1 / weightTotal;
                var baseSize = this.height - paddingTop - paddingBottom;
                var spaceLeft = this.getSpaceLeft(baseSize, marginVertical);
                for (var i = 0, imax = children.length; i < imax;) {
                    var x = paddingLeft - marginHorizontal;
                    var height = 0;
                    var j = 0;
                    for (; j < multiplicity && i + j < imax; ++j) {
                        var child = children[reverse ? imax - 1 - (i + j) : i + j];
                        if (isVisible(child)) {
                            var clearType = child.getClearType();
                            if (j !== 0 && (clearType & DLayoutClearType.BEFORE)) {
                                break;
                            }
                            else {
                                child.position.set(marginHorizontal + x, marginVertical + y);
                                var weight = child.weight;
                                if (0 <= weight) {
                                    child.height = spaceLeft * (weight * weightTotalInverse);
                                }
                                x += marginHorizontal + child.width;
                                height = Math.max(height, child.height);
                                if (clearType & DLayoutClearType.AFTER) {
                                    if (cornerAdjustWork != null) {
                                        var k = (i + j + 1) << 1;
                                        cornerAdjustWork[k + 0] = j;
                                        cornerAdjustWork[k + 1] = irow;
                                    }
                                    j += 1;
                                    break;
                                }
                                else {
                                    if (cornerAdjustWork != null) {
                                        var k = (i + j + 1) << 1;
                                        cornerAdjustWork[k + 0] = j;
                                        cornerAdjustWork[k + 1] = irow;
                                    }
                                }
                            }
                        }
                        else {
                            if (cornerAdjustWork != null) {
                                var k = (i + j + 1) << 1;
                                cornerAdjustWork[k + 0] = j - 1;
                                cornerAdjustWork[k + 1] = irow;
                            }
                            i += 1;
                            j -= 1;
                        }
                    }
                    y += marginVertical + height;
                    i += j;
                    irow += 1;
                }
                if (cornerAdjustWork != null) {
                    for (var i = 0, imax = children.length; i < imax; ++i) {
                        var child = children[reverse ? imax - 1 - i : i];
                        if (isVisible(child)) {
                            var i1 = 2 + (i << 1);
                            var icolumn1 = cornerAdjustWork[i1 + 0];
                            var irow1 = cornerAdjustWork[i1 + 1];
                            var clearType = child.getClearType();
                            var icolumn0 = -2;
                            if (!(clearType & DLayoutClearType.BEFORE)) {
                                var i0 = this.findRowIndexPrevious(i1, irow1, cornerAdjustWork);
                                if (!this.hasClearTypeAfter(children, i0)) {
                                    icolumn0 = cornerAdjustWork[i0];
                                }
                            }
                            var icolumn2 = -2;
                            if (!(clearType & DLayoutClearType.AFTER)) {
                                var i2 = this.findRowIndexNext(i1, irow1, cornerAdjustWork);
                                if (!this.hasClearTypeBefore(children, i2)) {
                                    icolumn2 = cornerAdjustWork[i2];
                                }
                            }
                            var ncolumn = this.countColumn(i1, irow1, cornerAdjustWork);
                            child.corner.mask = this.toCornerMaskColumn(icolumn0, icolumn1, icolumn2, ncolumn);
                        }
                    }
                }
            }
            else {
                for (var i = 0, imax = children.length; i < imax;) {
                    var x = paddingLeft - marginHorizontal;
                    var height = 0;
                    var j = 0;
                    for (; j < multiplicity && i + j < imax; ++j) {
                        var child = children[reverse ? imax - 1 - (i + j) : i + j];
                        if (isVisible(child)) {
                            var clearType = child.getClearType();
                            if (j !== 0 && (clearType & DLayoutClearType.BEFORE)) {
                                break;
                            }
                            else {
                                child.position.set(marginHorizontal + x, marginVertical + y);
                                var weight = child.weight;
                                if (0 <= weight) {
                                    child.height = 0;
                                }
                                x += marginHorizontal + child.width;
                                height = Math.max(height, child.height);
                                if (clearType & DLayoutClearType.AFTER) {
                                    if (cornerAdjustWork != null) {
                                        var k = (i + j + 1) << 1;
                                        cornerAdjustWork[k + 0] = j;
                                        cornerAdjustWork[k + 1] = irow;
                                    }
                                    j += 1;
                                    break;
                                }
                                else {
                                    if (cornerAdjustWork != null) {
                                        var k = (i + j + 1) << 1;
                                        cornerAdjustWork[k + 0] = j;
                                        cornerAdjustWork[k + 1] = irow;
                                    }
                                }
                            }
                        }
                        else {
                            if (cornerAdjustWork != null) {
                                var k = (i + j + 1) << 1;
                                cornerAdjustWork[k + 0] = j - 1;
                                cornerAdjustWork[k + 1] = irow;
                            }
                            i += 1;
                            j -= 1;
                        }
                    }
                    y += marginVertical + height;
                    i += j;
                    irow += 1;
                }
                if (cornerAdjustWork != null) {
                    for (var i = 0, imax = children.length; i < imax; ++i) {
                        var child = children[reverse ? imax - 1 - i : i];
                        if (isVisible(child)) {
                            var i1 = 2 + (i << 1);
                            var icolumn1 = cornerAdjustWork[i1 + 0];
                            var irow1 = cornerAdjustWork[i1 + 1];
                            var clearType = child.getClearType();
                            var icolumn0 = -2;
                            if (!(clearType & DLayoutClearType.BEFORE)) {
                                var i0 = this.findRowIndexPrevious(i1, irow1, cornerAdjustWork);
                                if (!this.hasClearTypeAfter(children, i0)) {
                                    icolumn0 = cornerAdjustWork[i0];
                                }
                            }
                            var icolumn2 = -2;
                            if (!(clearType & DLayoutClearType.AFTER)) {
                                var i2 = this.findRowIndexNext(i1, irow1, cornerAdjustWork);
                                if (!this.hasClearTypeBefore(children, i2)) {
                                    icolumn2 = cornerAdjustWork[i2];
                                }
                            }
                            var ncolumn = this.countColumn(i1, irow1, cornerAdjustWork);
                            child.corner.mask = this.toCornerMaskColumn(icolumn0, icolumn1, icolumn2, ncolumn);
                        }
                    }
                }
            }
        }
        else {
            var icolumn = 0;
            var x = paddingLeft - marginHorizontal;
            if (0 < weightTotal) {
                var weightTotalInverse = 1 / weightTotal;
                var baseSize = this.width - paddingLeft - paddingRight;
                var spaceLeft = this.getSpaceLeft(baseSize, marginHorizontal);
                for (var i = 0, imax = children.length; i < imax;) {
                    var y = paddingTop - marginVertical;
                    var width = 0;
                    var j = 0;
                    for (; j < multiplicity && i + j < imax; ++j) {
                        var child = children[reverse ? imax - 1 - (i + j) : i + j];
                        if (isVisible(child)) {
                            var clearType = child.getClearType();
                            if (j !== 0 && (clearType & DLayoutClearType.BEFORE)) {
                                break;
                            }
                            else {
                                child.position.set(marginHorizontal + x, marginVertical + y);
                                var weight = child.weight;
                                if (0 <= weight) {
                                    child.width = spaceLeft * (weight * weightTotalInverse);
                                }
                                width = Math.max(width, child.width);
                                y += marginVertical + child.height;
                                if (clearType & DLayoutClearType.AFTER) {
                                    if (cornerAdjustWork != null) {
                                        var k = (i + j + 1) << 1;
                                        cornerAdjustWork[k + 0] = icolumn;
                                        cornerAdjustWork[k + 1] = j;
                                    }
                                    j += 1;
                                    break;
                                }
                                else {
                                    if (cornerAdjustWork != null) {
                                        var k = (i + j + 1) << 1;
                                        cornerAdjustWork[k + 0] = icolumn;
                                        cornerAdjustWork[k + 1] = j;
                                    }
                                }
                            }
                        }
                        else {
                            if (cornerAdjustWork != null) {
                                var k = (i + j + 1) << 1;
                                cornerAdjustWork[k + 0] = icolumn;
                                cornerAdjustWork[k + 1] = j - 1;
                            }
                            i += 1;
                            j -= 1;
                        }
                    }
                    x += marginHorizontal + width;
                    i += j;
                    icolumn += 1;
                }
                if (cornerAdjustWork != null) {
                    for (var i = 0, imax = children.length; i < imax; ++i) {
                        var child = children[reverse ? imax - 1 - i : i];
                        if (isVisible(child)) {
                            var i1 = 2 + (i << 1);
                            var icolumn1 = cornerAdjustWork[i1 + 0];
                            var irow1 = cornerAdjustWork[i1 + 1];
                            var clearType = child.getClearType();
                            var irow0 = -2;
                            if (!(clearType & DLayoutClearType.BEFORE)) {
                                var i0 = this.findColumnIndexPrevious(i1, icolumn1, cornerAdjustWork);
                                if (!this.hasClearTypeAfter(children, i0)) {
                                    irow0 = cornerAdjustWork[i0 + 1];
                                }
                            }
                            var irow2 = -2;
                            if (!(clearType & DLayoutClearType.AFTER)) {
                                var i2 = this.findColumnIndexNext(i1, icolumn1, cornerAdjustWork);
                                if (!this.hasClearTypeBefore(children, i2)) {
                                    irow2 = cornerAdjustWork[i2 + 1];
                                }
                            }
                            var nrow = this.countRow(i1, icolumn1, cornerAdjustWork);
                            child.corner.mask = this.toCornerMaskRow(irow0, irow1, irow2, nrow);
                        }
                    }
                }
            }
            else {
                for (var i = 0, imax = children.length; i < imax;) {
                    var y = paddingTop - marginVertical;
                    var width = 0;
                    var j = 0;
                    for (; j < multiplicity && i + j < imax; ++j) {
                        var child = children[reverse ? imax - 1 - (i + j) : i + j];
                        if (isVisible(child)) {
                            var clearType = child.getClearType();
                            if (j !== 0 && (clearType & DLayoutClearType.BEFORE)) {
                                break;
                            }
                            else {
                                child.position.set(marginHorizontal + x, marginVertical + y);
                                var weight = child.weight;
                                if (0 <= weight) {
                                    child.width = 0;
                                }
                                width = Math.max(width, child.width);
                                y += marginVertical + child.height;
                                if (clearType & DLayoutClearType.AFTER) {
                                    if (cornerAdjustWork != null) {
                                        var k = (i + j + 1) << 1;
                                        cornerAdjustWork[k + 0] = icolumn;
                                        cornerAdjustWork[k + 1] = j;
                                    }
                                    j += 1;
                                    break;
                                }
                                else {
                                    if (cornerAdjustWork != null) {
                                        var k = (i + j + 1) << 1;
                                        cornerAdjustWork[k + 0] = icolumn;
                                        cornerAdjustWork[k + 1] = j;
                                    }
                                }
                            }
                        }
                        else {
                            if (cornerAdjustWork != null) {
                                var k = (i + j + 1) << 1;
                                cornerAdjustWork[k + 0] = icolumn;
                                cornerAdjustWork[k + 1] = j - 1;
                            }
                            i += 1;
                            j -= 1;
                        }
                    }
                    x += marginHorizontal + width;
                    i += j;
                    icolumn += 1;
                }
                if (cornerAdjustWork != null) {
                    for (var i = 0, imax = children.length; i < imax; ++i) {
                        var child = children[reverse ? imax - 1 - i : i];
                        if (isVisible(child)) {
                            var i1 = 2 + (i << 1);
                            var icolumn1 = cornerAdjustWork[i1 + 0];
                            var irow1 = cornerAdjustWork[i1 + 1];
                            var clearType = child.getClearType();
                            var irow0 = -2;
                            if (!(clearType & DLayoutClearType.BEFORE)) {
                                var i0 = this.findColumnIndexPrevious(i1, icolumn1, cornerAdjustWork);
                                if (!this.hasClearTypeAfter(children, i0)) {
                                    irow0 = cornerAdjustWork[i0 + 1];
                                }
                            }
                            var irow2 = -2;
                            if (!(clearType & DLayoutClearType.AFTER)) {
                                var i2 = this.findColumnIndexNext(i1, icolumn1, cornerAdjustWork);
                                if (!this.hasClearTypeBefore(children, i2)) {
                                    irow2 = cornerAdjustWork[i2 + 1];
                                }
                            }
                            var nrow = this.countRow(i1, icolumn1, cornerAdjustWork);
                            child.corner.mask = this.toCornerMaskRow(irow0, irow1, irow2, nrow);
                        }
                    }
                }
            }
        }
        _super.prototype.onRefit.call(this);
    };
    DLayout.prototype.hasClearTypeBefore = function (children, index) {
        return this.hasClearType(children, index, DLayoutClearType.BEFORE);
    };
    DLayout.prototype.hasClearTypeAfter = function (children, index) {
        return this.hasClearType(children, index, DLayoutClearType.AFTER);
    };
    DLayout.prototype.hasClearType = function (children, index, clearType) {
        if (2 <= index) {
            var i = (index - 2) >> 1;
            if (0 <= i && i < children.length) {
                var child = children[i];
                if (child instanceof DBase) {
                    return !!(child.getClearType() & clearType);
                }
            }
        }
        return false;
    };
    DLayout.prototype.findColumnIndexPrevious = function (istart, icolumn, cornerAdjustWork) {
        for (var i = istart - 2; 0 <= i; i -= 2) {
            if (cornerAdjustWork[i] !== icolumn) {
                return i;
            }
        }
        return 0;
    };
    DLayout.prototype.findColumnIndexNext = function (istart, icolumn, cornerAdjustWork) {
        for (var i = istart + 2, imax = cornerAdjustWork.length; i < imax; i += 2) {
            var icolumn2 = cornerAdjustWork[i];
            if (icolumn2 !== icolumn) {
                for (var j = i + 2; j < imax; j += 2) {
                    if (cornerAdjustWork[j] !== icolumn2) {
                        return j - 2;
                    }
                }
                return i;
            }
        }
        return cornerAdjustWork.length - 2;
    };
    DLayout.prototype.countRow = function (istart, icolumn, cornerAdjustWork) {
        for (var i = istart + 2, imax = cornerAdjustWork.length; i < imax; i += 2) {
            var icolumn2 = cornerAdjustWork[i];
            if (icolumn2 !== icolumn) {
                return cornerAdjustWork[i - 2 + 1] + 1;
            }
        }
        return 0;
    };
    DLayout.prototype.findRowIndexPrevious = function (istart, irow, cornerAdjustWork) {
        for (var i = istart - 2; 0 <= i; i -= 2) {
            if (cornerAdjustWork[i + 1] !== irow) {
                return i;
            }
        }
        return 0;
    };
    DLayout.prototype.findRowIndexNext = function (istart, irow, cornerAdjustWork) {
        for (var i = istart + 2, imax = cornerAdjustWork.length; i < imax; i += 2) {
            var irow2 = cornerAdjustWork[i + 1];
            if (irow2 !== irow) {
                for (var j = i + 2; j < imax; j += 2) {
                    if (cornerAdjustWork[j + 1] !== irow2) {
                        return j - 2;
                    }
                }
                return i;
            }
        }
        return cornerAdjustWork.length - 2;
    };
    DLayout.prototype.countColumn = function (istart, irow, cornerAdjustWork) {
        for (var i = istart + 2, imax = cornerAdjustWork.length; i < imax; i += 2) {
            var irow2 = cornerAdjustWork[i + 1];
            if (irow2 !== irow) {
                return cornerAdjustWork[i - 2 + 0] + 1;
            }
        }
        return 0;
    };
    DLayout.prototype.toCornerMaskColumn = function (i0, i1, i2, n) {
        var result = DCornerMask.NONE;
        if (i0 + 1 < i1 && i1 === 0) {
            result |= DCornerMask.TOP_LEFT;
        }
        if (i2 + 1 < i1 && i1 === 0) {
            result |= DCornerMask.BOTTOM_LEFT;
        }
        if (i0 < i1 && i1 + 1 === n) {
            result |= DCornerMask.TOP_RIGHT;
        }
        if (i2 < i1 && i1 + 1 === n) {
            result |= DCornerMask.BOTTOM_RIGHT;
        }
        return DCornerMask.ALL & (~result);
    };
    DLayout.prototype.toCornerMaskRow = function (i0, i1, i2, n) {
        var result = DCornerMask.NONE;
        if (i0 + 1 < i1 && i1 === 0) {
            result |= DCornerMask.TOP_LEFT;
        }
        if (i2 + 1 < i1 && i1 === 0) {
            result |= DCornerMask.TOP_RIGHT;
        }
        if (i0 < i1 && i1 + 1 === n) {
            result |= DCornerMask.BOTTOM_LEFT;
        }
        if (i2 < i1 && i1 + 1 === n) {
            result |= DCornerMask.BOTTOM_RIGHT;
        }
        return DCornerMask.ALL & (~result);
    };
    DLayout.prototype.addSpace = function (options) {
        return this.addChild(new DLayoutSpace(options));
    };
    DLayout.prototype.getType = function () {
        return "DLayout";
    };
    DLayout.CORNER_ADJUST_WORK = null;
    return DLayout;
}(DBase));
export { DLayout };
//# sourceMappingURL=d-layout.js.map