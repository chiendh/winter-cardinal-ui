/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var UtilAttachAlign;
(function (UtilAttachAlign) {
    UtilAttachAlign[UtilAttachAlign["TOP"] = 0] = "TOP";
    UtilAttachAlign[UtilAttachAlign["LEFT"] = 1] = "LEFT";
    UtilAttachAlign[UtilAttachAlign["RIGHT"] = 2] = "RIGHT";
    UtilAttachAlign[UtilAttachAlign["BOTTOM"] = 3] = "BOTTOM";
})(UtilAttachAlign || (UtilAttachAlign = {}));
var UtilAttach = /** @class */ (function () {
    function UtilAttach() {
    }
    UtilAttach.attach = function (target, bounds, offsetX, offsetY, clippingWidth, clippingHeight, align) {
        var width = target.width;
        var height = target.height;
        var x = 0;
        var y = 0;
        switch (align) {
            case UtilAttachAlign.LEFT:
                x = bounds.left - width - offsetX;
                if (x < 0) {
                    x = bounds.right + offsetX;
                    if (clippingWidth < x + width) {
                        x = 0;
                    }
                }
                y = this.adjust(bounds.top, bounds.bottom, height, clippingHeight);
                break;
            case UtilAttachAlign.TOP:
                x = this.adjust(bounds.left, bounds.right, width, clippingWidth);
                y = bounds.top - height - offsetY;
                if (y < 0) {
                    y = bounds.bottom + offsetY;
                    if (clippingHeight < y + height) {
                        y = 0;
                    }
                }
                break;
            case UtilAttachAlign.RIGHT:
                x = bounds.right + offsetX;
                if (clippingWidth < x + width) {
                    x = bounds.left - width - offsetX;
                    if (x < 0) {
                        x = clippingWidth - width;
                    }
                }
                y = this.adjust(bounds.top, bounds.bottom, height, clippingHeight);
                break;
            case UtilAttachAlign.BOTTOM:
                x = this.adjust(bounds.left, bounds.right, width, clippingWidth);
                y = bounds.bottom + offsetY;
                if (clippingHeight < y + height) {
                    y = bounds.top - height - offsetY;
                    if (y < 0) {
                        y = clippingHeight - height;
                    }
                }
                break;
        }
        target.position.set(x, y);
    };
    UtilAttach.adjust = function (positionFirst, positionSecond, size, clippingSize) {
        if (positionFirst < 0) {
            if (clippingSize < positionFirst + size) {
                return (clippingSize - size) * 0.5;
            }
            else {
                return 0;
            }
        }
        else if (clippingSize < positionFirst + size) {
            if (clippingSize < size) {
                return (clippingSize - size) * 0.5;
            }
            else {
                return Math.min(clippingSize, positionSecond) - size;
            }
        }
        return positionFirst;
    };
    return UtilAttach;
}());
export { UtilAttach };
//# sourceMappingURL=util-attach.js.map