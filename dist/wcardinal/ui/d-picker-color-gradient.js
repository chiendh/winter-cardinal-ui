/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point, Sprite } from "pixi.js";
import { DAlignWith } from "./d-align-with";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DInputReal } from "./d-input-real";
import { DPickerColor } from "./d-picker-color";
import { DPickerColorGradientData } from "./d-picker-color-gradient-data";
import { DPickerColorGradientDataView } from "./d-picker-color-gradient-data-view";
import { DPickerColorGradientRecent } from "./d-picker-color-gradient-recent";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
var DPickerColorGradient = /** @class */ (function (_super) {
    __extends(DPickerColorGradient, _super);
    function DPickerColorGradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DPickerColorGradient.prototype.init = function (options) {
        var _this = this;
        _super.prototype.init.call(this, options);
        this.setState(DBaseState.UNFOCUSABLE, true);
        var theme = this.theme;
        var padding = this._padding;
        var paddingTop = padding.getTop();
        var paddingRight = padding.getRight();
        var paddingBottom = padding.getBottom();
        var paddingLeft = padding.getLeft();
        this._work = new Point();
        // Picker
        var gradientPointsWidth = theme.getGradientPointsWidth();
        var gradientPointsMargin = theme.getGradientPointsMargin();
        var picker = this._picker = new DPickerColor({
            x: paddingLeft + gradientPointsWidth + gradientPointsMargin,
            y: paddingTop
        });
        picker.on("newcolorchange", function (color) {
            _this.onAnchorColorChange(color);
        });
        picker.on("newalphachange", function (alpha) {
            _this.onAnchorAlphaChange(alpha);
        });
        this.addChild(picker);
        // Points view
        var view = this._view = DPickerColorGradientDataView.from(17, 10);
        view.setRectangle(0, paddingLeft, paddingTop, gradientPointsWidth, picker.height);
        this.addChild(view);
        view.on(UtilPointerEvent.down, function (e) {
            if (view.getLastHitIndex() === 0) {
                _this.onViewDown(e);
            }
        });
        // Anchor
        this._onAnchorDownBound = function (e) {
            _this.onAnchorDown(e);
        };
        this._onAnchorMoveBound = function (e) {
            _this.onAnchorMove(e);
        };
        this._onAnchorUpBound = function (e) {
            _this.onAnchorUp(e);
        };
        this._anchors = [];
        //
        var inputLabelWidth = picker.theme.getInputLabelWidth();
        var inputWidth = picker.theme.getMainWidth() * 0.5;
        var inputMargin = 5;
        var inputDirectionMargin = theme.getGradientDirectionMargin();
        var inputDirectionTexture = theme.getGradientDirectionTexture();
        var inputLeft = picker.x + picker.width + inputDirectionMargin;
        var inputDirection = new DInputReal({
            parent: this,
            x: inputLeft + inputLabelWidth + inputMargin,
            y: paddingTop,
            width: inputWidth - inputLabelWidth - inputMargin,
            step: 1,
            image: {
                source: inputDirectionTexture,
                align: {
                    with: DAlignWith.BORDER
                },
                margin: {
                    horizontal: -inputDirectionTexture.width - inputMargin
                }
            },
            on: {
                change: function (value) {
                    _this._data._direction = value;
                }
            }
        });
        // Recent gradients
        var recentColumn = theme.getGradientRecentColumn();
        var recentWidth = theme.getGradientRecentWidth();
        var recentMargin = theme.getGradientRecentMargin();
        var recentWidthAndMargin = recentWidth + recentMargin;
        var x0 = inputLeft;
        var y0 = inputDirection.y + inputDirection.height + inputDirectionMargin;
        if (DPickerColorGradient.RECENT_COLOR_GRADIENT == null) {
            DPickerColorGradient.RECENT_COLOR_GRADIENT = new DPickerColorGradientRecent(theme.getGradientRecents(), theme.getGradientRecentCount());
        }
        this._recent = DPickerColorGradient.RECENT_COLOR_GRADIENT;
        var recent = this._recent;
        for (var i = 0, imax = recent.getCapacity(); i < imax; ++i) {
            var ix = i % recentColumn;
            var x = x0 + ix * recentWidthAndMargin;
            var iy = (i / recentColumn) | 0;
            var y = y0 + iy * recentWidthAndMargin;
            view.setRectangle(1 + i, x, y, recentWidth, recentWidth);
        }
        recent.on("change", function () {
            _this.onRecentUpdate();
        });
        UtilPointerEvent.onClick(view, function (e) {
            var lastHitIndex = view.getLastHitIndex();
            if (1 <= lastHitIndex) {
                _this.onRecentClick(view.getData(lastHitIndex));
            }
        });
        // Points
        var data = this._data = new DPickerColorGradientData();
        data.on("change", function () {
            _this.updateAnchors();
            view.update();
        });
        data.on("selectionchange", function (point) {
            _this.onAnchorSelect(point);
        });
        data.on("directionchange", function (value) {
            inputDirection.value = value;
        });
        view.setData(0, data);
        view.update();
        inputDirection.value = data.direction;
        this.updateAnchors();
        var selected = data.selected;
        if (selected != null) {
            this.onAnchorSelect(selected);
        }
        // Width
        if (options == null || options.width == null) {
            this.width = paddingLeft + gradientPointsWidth + gradientPointsMargin +
                picker.width + inputDirectionMargin + (recentColumn - 1) * recentMargin +
                recentColumn * recentWidth + paddingRight;
        }
        // Height
        if (options == null || options.height == null) {
            this.height = paddingTop + picker.height + paddingBottom;
        }
    };
    Object.defineProperty(DPickerColorGradient.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DPickerColorGradient.prototype, "recent", {
        get: function () {
            return this._recent;
        },
        enumerable: true,
        configurable: true
    });
    DPickerColorGradient.prototype.onRecentClick = function (recentData) {
        var data = this._data;
        if (recentData != null) {
            data.fromObject(recentData);
        }
        else {
            data.reset();
        }
    };
    DPickerColorGradient.prototype.onRecentUpdate = function () {
        var recent = this._recent;
        var view = this._view;
        for (var i = 0, imax = recent.size(); i < imax; ++i) {
            view.setData(1 + i, recent.get(i));
        }
        view.update();
        DApplications.update(this);
    };
    DPickerColorGradient.prototype.toAnchorPosition = function (e) {
        var local = this.toLocal(e.data.global, undefined, this._work);
        return Math.max(0, Math.min(1, (local.y - this.padding.getTop()) / this._picker.height));
    };
    DPickerColorGradient.prototype.onViewDown = function (e) {
        this._data.addAt(this.toAnchorPosition(e));
        this.onAnchorDragStart();
    };
    DPickerColorGradient.prototype.onAnchorDown = function (e) {
        var target = e.target;
        if (target instanceof Sprite) {
            var data = this._data;
            var index = this._anchors.indexOf(target);
            if (0 <= index && index < data.points.length) {
                data.points[index].selected = true;
                this.onAnchorDragStart();
            }
        }
    };
    DPickerColorGradient.prototype.onAnchorSelect = function (point) {
        var picker = this._picker;
        picker.current.color = point.color;
        picker.current.alpha = point.alpha;
        picker.new.color = point.color;
        picker.new.alpha = point.alpha;
    };
    DPickerColorGradient.prototype.onAnchorColorChange = function (color) {
        var points = this._data;
        if (points != null) {
            var selected = points.selected;
            if (selected != null) {
                selected.color = color;
            }
        }
    };
    DPickerColorGradient.prototype.onAnchorAlphaChange = function (alpha) {
        var points = this._data;
        if (points != null) {
            var selected = points.selected;
            if (selected != null) {
                selected.alpha = alpha;
            }
        }
    };
    DPickerColorGradient.prototype.onAnchorDragStart = function () {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var stage = layer.stage;
            stage.on(UtilPointerEvent.move, this._onAnchorMoveBound);
            stage.on(UtilPointerEvent.up, this._onAnchorUpBound);
        }
    };
    DPickerColorGradient.prototype.onAnchorMove = function (e) {
        var points = this._data;
        if (points != null) {
            var selected = points.selected;
            if (selected != null) {
                selected.position = this.toAnchorPosition(e);
            }
        }
    };
    DPickerColorGradient.prototype.onAnchorUp = function (e) {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var stage = layer.stage;
            stage.off(UtilPointerEvent.move, this._onAnchorMoveBound);
            stage.off(UtilPointerEvent.up, this._onAnchorUpBound);
        }
    };
    DPickerColorGradient.prototype.updateAnchors = function () {
        var theme = this.theme;
        var anchorTexture = theme.getGradientAnchorTexture();
        var anchorOutlinedTexture = theme.getGradientAnchorOutlinedTexture();
        var gradientPointsWidth = theme.getGradientPointsWidth();
        var data = this._data;
        var pointSize = data.points.length;
        var anchors = this._anchors;
        var anchorSize = anchors.length;
        for (var i = anchorSize; i < pointSize; ++i) {
            var newAnchor = new Sprite(anchorTexture);
            newAnchor.anchor.set(0.5, 0.5);
            newAnchor.cursor = "pointer";
            newAnchor.interactive = true;
            newAnchor.on(UtilPointerEvent.down, this._onAnchorDownBound);
            anchors.push(newAnchor);
            this.addChild(newAnchor);
        }
        for (var i = anchorSize - 1; pointSize <= i; --i) {
            var oldAnchor = anchors[i];
            oldAnchor.off(UtilPointerEvent.down, this._onAnchorDownBound);
            oldAnchor.destroy();
        }
        anchors.length = pointSize;
        var y = this.padding.getTop();
        var right = this.padding.getLeft() + gradientPointsWidth;
        var height = this._picker.height;
        for (var i = 0; i < pointSize; ++i) {
            var point = data.points[i];
            var anchor = anchors[i];
            anchor.tint = point.color;
            anchor.position.set(right, y + height * point.position);
            anchor.texture = (point.selected ? anchorOutlinedTexture : anchorTexture);
        }
        DApplications.update(this);
    };
    DPickerColorGradient.prototype.onKeyDown = function (e) {
        if (UtilKeyboardEvent.isDeleteKey(e)) {
            var points = this._data;
            if (points != null) {
                var selected = points.selected;
                if (selected != null) {
                    points.remove(selected);
                    _super.prototype.onKeyDown.call(this, e);
                    return true;
                }
            }
        }
        return _super.prototype.onKeyDown.call(this, e);
    };
    DPickerColorGradient.prototype.getType = function () {
        return "DPickerColorGradient";
    };
    DPickerColorGradient.RECENT_COLOR_GRADIENT = null;
    return DPickerColorGradient;
}(DBase));
export { DPickerColorGradient };
//# sourceMappingURL=d-picker-color-gradient.js.map