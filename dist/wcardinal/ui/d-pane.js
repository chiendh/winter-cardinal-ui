/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DContent } from "./d-content";
import { DDragMode } from "./d-drag-mode";
import { DScrollBar } from "./d-scroll-bar";
import { DScrollBarHorizontal } from "./d-scroll-bar-horizontal";
import { DScrollBarVertical } from "./d-scroll-bar-vertical";
import { isString } from "./util/is-string";
import { UtilDrag } from "./util/util-drag";
// Option parsers
var isOverflowMaskEnabled = function (theme, options) {
    if (options && options.mask != null) {
        return options.mask;
    }
    return theme.isOverflowMaskEnabled();
};
var toBarOptionsVertical = function (options) {
    return options && options.bar && options.bar.vertical;
};
var toBarOptionsHorizontal = function (options) {
    return options && options.bar && options.bar.horizontal;
};
// Class
var DPane = /** @class */ (function (_super) {
    __extends(DPane, _super);
    function DPane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DPane.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this._overflowMask = null;
        // Content
        var theme = this.theme;
        var content = this._content = this.toContent(options);
        if (isOverflowMaskEnabled(theme, options)) {
            this.mask = this.getOrCreateOverflowMask();
        }
        this.addChild(content);
        // Scroll bar
        this.initScrollBar(content, theme, options);
        // Drag
        this.initDrag(content, theme, options);
    };
    DPane.prototype.initDrag = function (content, theme, options) {
        var _this = this;
        var dragMode = (options && options.drag && options.drag.mode != null ?
            (isString(options.drag.mode) ? DDragMode[options.drag.mode] : options.drag.mode) :
            theme.getDragMode());
        // Edge does not fire the wheel event when scrolling using the 2-fingure scroll gesture on a touchpad.
        // Instead, it fires touch events. This is why the dragging is enabled regardless of the `UtilPointerEvent.touchable`.
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7134034/
        if (dragMode === DDragMode.ON || dragMode === DDragMode.TOUCH) {
            var position_1 = new Point();
            this._dragUtil = new UtilDrag({
                target: this,
                touch: dragMode === DDragMode.TOUCH,
                on: {
                    start: function () {
                        position_1.copyFrom(content.position);
                    },
                    move: function (dx, dy) {
                        position_1.set(position_1.x + dx, position_1.y + dy);
                        content.position.set(_this.toContentX(content, position_1.x), _this.toContentY(content, position_1.y));
                    }
                }
            });
        }
    };
    DPane.prototype.onRegionMoveX = function (content, start) {
        var dragUtil = this._dragUtil;
        if (dragUtil != null) {
            dragUtil.stop();
        }
        content.x = -content.width * start;
    };
    DPane.prototype.onRegionMoveY = function (content, start) {
        var dragUtil = this._dragUtil;
        if (dragUtil != null) {
            dragUtil.stop();
        }
        content.y = -content.height * start;
    };
    DPane.prototype.initScrollBar = function (content, theme, options) {
        var _this = this;
        // Vertical bar
        var verticalBar = this._verticalBar = new DScrollBarVertical(toBarOptionsVertical(options));
        verticalBar.on("regionmove", function (start) {
            _this.onRegionMoveY(content, start);
        });
        this.addChild(verticalBar);
        // Horizontal bar
        var horizontalBar = this._horizontalBar = new DScrollBarHorizontal(toBarOptionsHorizontal(options));
        horizontalBar.on("regionmove", function (start) {
            _this.onRegionMoveX(content, start);
        });
        this.addChild(horizontalBar);
        //
        content.on("move", function () {
            _this.onContentChanged();
        });
        content.on("resize", function () {
            _this.onContentChanged();
        });
        this.updateScrollBar();
    };
    DPane.prototype.getType = function () {
        return "DPane";
    };
    Object.defineProperty(DPane.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: true,
        configurable: true
    });
    DPane.prototype.toContent = function (options) {
        if (options && options.content) {
            var content = options.content;
            if (content instanceof DBase) {
                return content;
            }
            else {
                return this.newContent(content);
            }
        }
        return this.newContent();
    };
    DPane.prototype.newContent = function (options) {
        return new DContent(options);
    };
    DPane.prototype.getOrCreateOverflowMask = function () {
        if (this._overflowMask == null) {
            this._overflowMask = new DBaseOverflowMask(this);
            this.addReflowable(this._overflowMask);
            this.toDirty();
        }
        return this._overflowMask;
    };
    DPane.prototype.onWheel = function (e, deltas, global) {
        var content = this._content;
        var x = this.getWheelContentX(content, deltas.deltaX * deltas.lowest);
        var y = this.getWheelContentY(content, deltas.deltaY * deltas.lowest);
        if (content.x !== x || content.y !== y) {
            var dragUtil = this._dragUtil;
            if (dragUtil != null) {
                dragUtil.stop();
            }
            content.position.set(x, y);
            return true;
        }
        return false;
    };
    DPane.prototype.getWheelContentX = function (content, delta) {
        if (0 < delta || delta < 0) {
            var speed = this.theme.getWheelSpeed();
            return this.toContentX(content, content.x - delta * speed);
        }
        return content.x;
    };
    DPane.prototype.getWheelContentY = function (content, delta) {
        if (0 < delta || delta < 0) {
            var speed = this.theme.getWheelSpeed();
            return this.toContentY(content, content.y + delta * speed);
        }
        return content.y;
    };
    DPane.prototype.toContentX = function (content, x) {
        return Math.min(0, Math.max(this.width - content.width, x));
    };
    DPane.prototype.toContentY = function (content, y) {
        return Math.min(0, Math.max(this.height - content.height, y));
    };
    DPane.prototype.isRefitable = function (target) {
        return _super.prototype.isRefitable.call(this, target) && !(target instanceof DScrollBar);
    };
    DPane.prototype.onResize = function (newWidth, newHeight, oldWidth, oldHeight) {
        _super.prototype.onResize.call(this, newWidth, newHeight, oldWidth, oldHeight);
        this.updateScrollBar();
    };
    DPane.prototype.onContentChanged = function () {
        this.updateScrollBar();
    };
    DPane.prototype.updateScrollBar = function () {
        var verticalBar = this._verticalBar;
        var horizontalBar = this._horizontalBar;
        if (verticalBar != null && horizontalBar != null) {
            this.updateScrollBarRegions(verticalBar, horizontalBar);
            this.updateScrollBarVisibilities(verticalBar, horizontalBar);
            this.updateScrollBarPositions(verticalBar, horizontalBar);
        }
    };
    DPane.prototype.getScrollBarOffsetHorizontalStart = function (size) {
        return size * 0.5;
    };
    DPane.prototype.getScrollBarOffsetHorizontalEnd = function (size) {
        return size * 0.5;
    };
    DPane.prototype.getScrollBarOffsetVerticalStart = function (size) {
        return size * 0.5;
    };
    DPane.prototype.getScrollBarOffsetVerticalEnd = function (size) {
        return size * 0.5;
    };
    DPane.prototype.updateScrollBarPositions = function (verticalBar, horizontalBar) {
        var width = this.width;
        var height = this.height;
        var verticalBarWidth = verticalBar.width;
        var verticalBarOffsetStart = this.getScrollBarOffsetVerticalStart(verticalBarWidth);
        var verticalBarOffsetEnd = this.getScrollBarOffsetVerticalEnd(verticalBarWidth);
        verticalBar.position.set(width - verticalBarWidth, verticalBarOffsetStart);
        verticalBar.height = height - verticalBarOffsetStart - verticalBarOffsetEnd;
        var horizontalBarHeight = horizontalBar.height;
        var horizontalBarOffsetStart = this.getScrollBarOffsetHorizontalStart(horizontalBarHeight);
        var horizontalBarOffsetEnd = this.getScrollBarOffsetHorizontalEnd(horizontalBarHeight);
        horizontalBar.position.set(horizontalBarOffsetStart, height - horizontalBarHeight);
        horizontalBar.width = width - horizontalBarOffsetStart - horizontalBarOffsetEnd;
    };
    DPane.prototype.updateScrollBarRegions = function (verticalBar, horizontalBar) {
        var content = this._content;
        var x = -content.x;
        var y = -content.y;
        horizontalBar.setRegion(x, x + this.width, content.width);
        verticalBar.setRegion(y, y + this.height, content.height);
    };
    DPane.prototype.updateScrollBarVisibilities = function (verticalBar, horizontalBar) {
        var isChangedHorizontal = this.updateScrollBarVisibility(horizontalBar);
        var isChangedVertical = this.updateScrollBarVisibility(verticalBar);
        if (isChangedHorizontal || isChangedVertical) {
            // Update the overflow mask
            var overflowMask = this._overflowMask;
            if (overflowMask != null) {
                if (horizontalBar.visible || verticalBar.visible) {
                    var content = this._content;
                    if (content.mask !== overflowMask) {
                        content.mask = overflowMask;
                    }
                }
                else {
                    var content = this._content;
                    if (content.mask) {
                        content.mask = null;
                    }
                }
            }
            // Rerender
            DApplications.update(this);
        }
    };
    DPane.prototype.updateScrollBarVisibility = function (bar) {
        var isRegionVisible = bar.isRegionVisible();
        if (bar.visible !== isRegionVisible) {
            bar.visible = isRegionVisible;
            return true;
        }
        return false;
    };
    DPane.prototype.onChildFocused = function (focused) {
        var work = DPane.WORK_ON_FOCUSED;
        var content = this.content;
        var contentX = content.x;
        var contentY = content.y;
        var contentWidth = content.width;
        var contentHeight = content.height;
        work.set(0, 0);
        focused.toGlobal(work, work, false);
        content.toLocal(work, undefined, work, false);
        var x0 = contentX + Math.min(contentWidth, Math.max(0, work.x));
        var y0 = contentY + Math.min(contentHeight, Math.max(0, work.y));
        work.set(focused.width, focused.height);
        focused.toGlobal(work, work, true);
        content.toLocal(work, undefined, work, true);
        var x1 = contentX + Math.min(contentWidth, Math.max(0, work.x));
        var y1 = contentY + Math.min(contentHeight, Math.max(0, work.y));
        var width = this.width;
        var newX = null;
        if (x0 < 0) {
            if (x1 <= width) {
                newX = contentX - Math.max(x0, x1 - width);
                newX = Math.max(width - contentWidth, Math.min(0, newX));
            }
        }
        else {
            if (width < x1) {
                newX = contentX - Math.min(x0, x1 - width);
                newX = Math.max(width - contentWidth, Math.min(0, newX));
            }
        }
        var height = this.height;
        var newY = null;
        if (y0 < 0) {
            if (y1 <= height) {
                newY = contentY - Math.max(y0, y1 - height);
                newY = Math.max(height - contentHeight, Math.min(0, newY));
            }
        }
        else {
            if (height < y1) {
                newY = contentY - Math.min(y0, y1 - height);
                newY = Math.max(height - contentHeight, Math.min(0, newY));
            }
        }
        if (newX != null) {
            if (newY != null) {
                content.position.set(newX, newY);
            }
            else {
                content.position.x = newX;
            }
        }
        else {
            if (newY != null) {
                content.position.y = newY;
            }
        }
        _super.prototype.onChildFocused.call(this, focused);
    };
    DPane.prototype.destroy = function () {
        // Overflow mask
        var overflowMask = this._overflowMask;
        if (overflowMask != null) {
            this._overflowMask = null;
            overflowMask.destroy();
        }
        this.mask = null;
        _super.prototype.destroy.call(this);
    };
    DPane.WORK_ON_FOCUSED = new Point();
    return DPane;
}(DBase));
export { DPane };
//# sourceMappingURL=d-pane.js.map