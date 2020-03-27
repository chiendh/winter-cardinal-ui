/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Container, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseBackground } from "./d-base-background";
import { DBaseBorder } from "./d-base-border";
import { DBaseCorner } from "./d-base-corner";
import { DBaseInteractive } from "./d-base-interactive";
import { DBaseOutline } from "./d-base-outline";
import { DBasePadding } from "./d-base-padding";
import { DBasePoint } from "./d-base-point";
import { DBaseReflowable } from "./d-base-reflowable";
import { DBaseState } from "./d-base-state";
import { DBaseStates } from "./d-base-states";
import { DLayoutClearType } from "./d-layout-clear-type";
import { DScalarFunctions } from "./d-scalar-functions";
import { DThemes } from "./theme/d-themes";
import { isFunction } from "./util/is-function";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
var toTheme = function (options) {
    if (options != null && options.theme != null) {
        var theme = options.theme;
        if (isString(theme)) {
            return DThemes.getInstance().get(theme);
        }
        else {
            return theme;
        }
    }
    return null;
};
var toShortcuts = function (options) {
    if (options != null && (options.shortcuts != null || options.shortcut != null)) {
        var result = [];
        if (options.shortcut != null) {
            result.push(UtilKeyboardEvent.toShortcut(options.shortcut));
        }
        if (options.shortcuts != null) {
            var shortcuts = options.shortcuts;
            for (var i = 0, imax = shortcuts.length; i < imax; ++i) {
                UtilKeyboardEvent.toShortcut(shortcuts[i]);
            }
        }
        return result;
    }
    return undefined;
};
var AutoFlag;
(function (AutoFlag) {
    AutoFlag[AutoFlag["NONE"] = 0] = "NONE";
    AutoFlag[AutoFlag["WIDTH"] = 1] = "WIDTH";
    AutoFlag[AutoFlag["HEIGHT"] = 2] = "HEIGHT";
})(AutoFlag || (AutoFlag = {}));
var DBase = /** @class */ (function (_super) {
    __extends(DBase, _super);
    function DBase(options) {
        var _this = _super.call(this) || this;
        // Transform
        var transform = _this.transform;
        _this._position = new DBasePoint(transform.position, function () {
            _this.onPositionChanged();
        });
        _this._scale = new DBasePoint(transform.scale, function () {
            _this.onScaleChanged();
        });
        _this._skew = new DBasePoint(transform.skew, function () {
            _this.onSkewChanged();
        });
        //
        _this._options = options;
        var scalarSet = _this._scalarSet = {};
        _this._autoFlags = 0 /* NONE */;
        _this._isDirty = true;
        _this._hasDirty = false;
        _this._isChildrenDirty = false;
        _this._shadow = null;
        _this._name = (options && options.name) || "";
        var theme = _this._theme = toTheme(options) || _this.getThemeDefault();
        _this._befores = [];
        _this._afters = [];
        _this._reflowables = [];
        _this._clearType = (options && options.clear != null ?
            (isString(options.clear) ? DLayoutClearType[options.clear] : options.clear) :
            theme.getClearType());
        _this._padding = new DBasePadding(theme, options, function () {
            _this.layout();
            _this.toChildrenDirty();
            DApplications.update(_this);
        });
        var toDirtyAndUpdate = function () {
            _this.toDirty();
            DApplications.update(_this);
        };
        _this._background = new DBaseBackground(theme, options, toDirtyAndUpdate);
        _this._border = new DBaseBorder(theme, options, toDirtyAndUpdate);
        _this._outline = new DBaseOutline(theme, options, toDirtyAndUpdate);
        _this._corner = new DBaseCorner(theme, options, toDirtyAndUpdate);
        _this.initReflowable();
        // X
        var position = transform.position;
        var x = (options && options.x != null ? options.x : theme.getX());
        if (isNumber(x)) {
            position.x = x;
        }
        else {
            position.x = 0;
            scalarSet.x = DScalarFunctions.position(x);
        }
        // Y
        var y = (options && options.y != null ? options.y : theme.getY());
        if (isNumber(y)) {
            position.y = y;
        }
        else {
            position.y = 0;
            scalarSet.y = DScalarFunctions.position(y);
        }
        // Width
        var width = (options && options.width != null ? options.width : theme.getWidth());
        if (isNumber(width)) {
            _this._width = width;
        }
        else if (width === "auto" || width === "AUTO") {
            _this._width = 100;
            _this.toWidthAuto();
        }
        else {
            _this._width = 100;
            scalarSet.width = DScalarFunctions.size(width);
        }
        // Height
        var height = (options && options.height != null ? options.height : theme.getHeight());
        if (isNumber(height)) {
            _this._height = height;
        }
        else if (height === "auto" || height === "AUTO") {
            _this._height = 100;
            _this.toHeightAuto();
        }
        else {
            _this._height = 100;
            scalarSet.height = DScalarFunctions.size(height);
        }
        // Visibility
        if (options && options.visible != null) {
            _this.visible = options.visible;
        }
        // State
        _this._state = DBaseState.NONE;
        _this._stateLocal = DBaseState.NONE;
        // Interactive
        var interactive = (options && options.interactive != null ?
            (isString(options.interactive) ? DBaseInteractive[options.interactive] : options.interactive) :
            theme.getInteractive());
        _this.interactive = ((interactive & DBaseInteractive.SELF) !== 0);
        _this.interactiveChildren = ((interactive & DBaseInteractive.CHILDREN) !== 0);
        // Events
        var on = options && options.on;
        if (on) {
            for (var name_1 in on) {
                var handler = on[name_1];
                if (handler) {
                    _this.on(name_1, handler);
                }
            }
        }
        // Title
        _this._title = (options && options.title != null ? options.title : theme.getTitle());
        // Weight
        _this._weight = (options && options.weight != null ? options.weight : theme.getWeight());
        // Shadow
        _this._onShadowUpdateBound = function () {
            DApplications.update(_this);
        };
        var shadow = (options && options.shadow) || theme.getShadow();
        if (shadow) {
            if (isString(shadow)) {
                switch (shadow) {
                    case "WEAK":
                        _this.shadow = theme.newShadowWeak();
                        break;
                    case "DEFAULT":
                        _this.shadow = theme.newShadow();
                        break;
                }
            }
            else {
                _this.shadow = shadow;
            }
        }
        // Event handlers
        _this.on(UtilPointerEvent.over, function (e) {
            _this.onOver(e);
        });
        _this.on(UtilPointerEvent.out, function (e) {
            _this.onOut(e);
        });
        _this.on(UtilPointerEvent.down, function (e) {
            _this.onDown(e);
        });
        _this.on(UtilPointerEvent.up, function (e) {
            _this.onUp(e);
        });
        // Children change detection
        _this.on("added", function () {
            _this.layout();
            if (_this.isDirty() || _this.hasDirty()) {
                _this.toParentHasDirty();
            }
            if (_this._isChildrenDirty) {
                _this.toParentChildrenDirty();
            }
            _this.updateState();
            DApplications.update(_this);
        });
        _this.on("removed", function () {
            _this.blur(true);
            _this.updateState();
            DApplications.update(_this);
        });
        // Shortcut
        var shortcuts = _this._shortcuts = toShortcuts(options);
        if (shortcuts != null) {
            var onShortcutBound = function (e) {
                _this.onShortcut(e);
            };
            for (var i = 0, imax = shortcuts.length; i < imax; ++i) {
                UtilKeyboardEvent.on(_this, shortcuts[i], onShortcutBound);
            }
        }
        // Cursor
        var cursor = options && options.cursor;
        if (cursor == null) {
            cursor = theme.getCursor();
        }
        if (cursor != null) {
            _this.cursor = cursor;
        }
        // Other initialization
        _this.init(options);
        // State Override
        if (options && options.state != null) {
            if (isString(options.state)) {
                _this.setState(DBaseState[options.state], true);
            }
            else if (isNumber(options.state)) {
                _this.setState(options.state, true);
            }
            else {
                var states = options.state;
                for (var i = 0, imax = states.length; i < imax; ++i) {
                    _this.setState(DBaseState[states[i]], true);
                }
            }
        }
        // Parent
        if (options && options.parent != null) {
            options.parent.addChild(_this);
        }
        // Children
        if (options && options.children != null) {
            var children = options.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child != null) {
                    _this.addChild(child);
                }
            }
        }
        // Done
        _this.emit("init", _this);
        return _this;
    }
    DBase.prototype.prependRenderable = function (renderable, phase) {
        renderable.parent = this;
        var list = (phase ? this._befores : this._afters);
        list.unshift(renderable);
    };
    DBase.prototype.appendRenderable = function (renderable, phase) {
        renderable.parent = this;
        var list = (phase ? this._befores : this._afters);
        list.push(renderable);
    };
    DBase.prototype.removeRenderable = function (renderable, phase) {
        renderable.parent = null;
        var list = (phase ? this._befores : this._afters);
        var index = list.indexOf(renderable);
        if (0 <= index) {
            list.splice(index, 1);
        }
    };
    DBase.prototype.addReflowable = function (reflowable) {
        this._reflowables.push(reflowable);
    };
    DBase.prototype.removeReflowable = function (reflowable) {
        var reflowables = this._reflowables;
        var index = reflowables.indexOf(reflowable);
        if (0 <= index) {
            reflowables.splice(index, 1);
        }
    };
    DBase.prototype.initReflowable = function () {
        new DBaseReflowable(this);
    };
    DBase.prototype.onChildrenChange = function () {
        this.toChildrenDirty();
        _super.prototype.onChildrenChange.call(this);
    };
    DBase.prototype.onShortcut = function (e) {
        // DO NOTHING
    };
    DBase.prototype.init = function (options) {
        // OTHER INITIALIZATIONS BEFORE `parent.addChild( this )`
    };
    Object.defineProperty(DBase.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        enumerable: true,
        configurable: true
    });
    DBase.prototype.onPositionChanged = function () {
        this.moveChildren();
        DApplications.update(this);
        this.emit("move", this);
    };
    DBase.prototype.resize = function (width, height) {
        var oldWidth = this._width;
        var oldHeight = this._height;
        var widthResized = oldWidth !== width;
        var heightResized = oldHeight !== height;
        if (widthResized) {
            this._width = width;
        }
        if (heightResized) {
            this._height = height;
        }
        var resized = widthResized || heightResized;
        if (resized) {
            this.onResize(width, height, oldWidth, oldHeight);
        }
        if (widthResized) {
            var scalarSet = this._scalarSet;
            if (scalarSet.x != null) {
                var position = this.transform.position;
                var parent_1 = this.getParentOfSize();
                if (parent_1) {
                    this.x = scalarSet.x(parent_1.width, width, parent_1.padding.getLeft(), position.x);
                }
            }
        }
        if (heightResized) {
            var scalarSet = this._scalarSet;
            if (scalarSet.y != null) {
                var position = this.transform.position;
                var parent_2 = this.getParentOfSize();
                if (parent_2) {
                    this.y = scalarSet.y(parent_2.height, height, parent_2.padding.getTop(), position.y);
                }
            }
        }
        return resized;
    };
    DBase.prototype.getClearType = function () {
        return this._clearType;
    };
    DBase.prototype.onResize = function (newWidth, newHeight, oldWidth, oldHeight) {
        this.toDirty();
        this.toChildrenDirty();
        this.resizeChildren();
        DApplications.update(this);
        this.emit("resize", newWidth, newHeight, oldWidth, oldHeight, this);
    };
    DBase.prototype.onScaleChanged = function () {
        DApplications.update(this);
        this.emit("scale", this);
    };
    DBase.prototype.onSkewChanged = function () {
        DApplications.update(this);
        this.emit("skew", this);
    };
    Object.defineProperty(DBase.prototype, "type", {
        get: function () {
            return this.getType();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "x", {
        get: function () {
            return this._position.x;
        },
        set: function (x) {
            this._position.x = x;
        },
        enumerable: true,
        configurable: true
    });
    DBase.prototype.getX = function () {
        var scalarSet = this._scalarSet;
        if (scalarSet.x != null) {
            return scalarSet.x;
        }
        else {
            return this.x;
        }
    };
    DBase.prototype.setX = function (x) {
        if (isNumber(x)) {
            this.x = x;
        }
        else {
            var scalarSet = this._scalarSet;
            var scalar = DScalarFunctions.position(x);
            if (scalarSet.x !== scalar) {
                scalarSet.x = scalar;
                this.layout();
            }
        }
    };
    Object.defineProperty(DBase.prototype, "y", {
        get: function () {
            return this._position.y;
        },
        set: function (y) {
            this._position.y = y;
        },
        enumerable: true,
        configurable: true
    });
    DBase.prototype.getY = function () {
        var scalarSet = this._scalarSet;
        if (scalarSet.y != null) {
            return scalarSet.y;
        }
        else {
            return this.y;
        }
    };
    DBase.prototype.setY = function (y) {
        if (isNumber(y)) {
            this.y = y;
        }
        else {
            var scalarSet = this._scalarSet;
            var scalar = DScalarFunctions.position(y);
            if (scalarSet.y !== scalar) {
                scalarSet.y = scalar;
                this.layout();
            }
        }
    };
    Object.defineProperty(DBase.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            var oldWidth = this._width;
            if (oldWidth !== width) {
                this._width = width;
                var height = this._height;
                this.onResize(width, height, oldWidth, height);
                // Layout
                var scalarSet = this._scalarSet;
                if (scalarSet.x != null) {
                    var position = this.transform.position;
                    var parent_3 = this.getParentOfSize();
                    if (parent_3) {
                        this.x = scalarSet.x(parent_3.width, width, parent_3.padding.getLeft(), position.x);
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBase.prototype.toWidthAuto = function () {
        this._autoFlags |= 1 /* WIDTH */;
    };
    DBase.prototype.isWidthAuto = function () {
        return (this._autoFlags & 1 /* WIDTH */) !== 0;
    };
    DBase.prototype.getWidth = function () {
        var scalarSet = this._scalarSet;
        if (this.isWidthAuto()) {
            return "auto";
        }
        else if (scalarSet.width != null) {
            return scalarSet.width;
        }
        else {
            return this.width;
        }
    };
    DBase.prototype.setWidth = function (width) {
        if (isNumber(width)) {
            this.width = width;
        }
        else if (width === "auto" || width === "AUTO") {
            if (!this.isWidthAuto()) {
                this.toWidthAuto();
                this.toChildrenDirty();
                DApplications.update(this);
            }
        }
        else {
            var scalarSet = this._scalarSet;
            var scalar = DScalarFunctions.size(width);
            if (scalarSet.width !== scalar) {
                scalarSet.width = scalar;
                this.layout();
            }
        }
    };
    Object.defineProperty(DBase.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            var oldHeight = this._height;
            if (oldHeight !== height) {
                this._height = height;
                var width = this._width;
                this.onResize(width, height, width, oldHeight);
                // Layout
                var scalarSet = this._scalarSet;
                if (scalarSet.y != null) {
                    var position = this.transform.position;
                    var parent_4 = this.getParentOfSize();
                    if (parent_4) {
                        this.y = scalarSet.y(parent_4.height, height, parent_4.padding.getTop(), position.y);
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBase.prototype.toHeightAuto = function () {
        this._autoFlags |= 2 /* HEIGHT */;
    };
    DBase.prototype.isHeightAuto = function () {
        return (this._autoFlags & 2 /* HEIGHT */) !== 0;
    };
    DBase.prototype.getHeight = function () {
        var scalarSet = this._scalarSet;
        if (this.isHeightAuto()) {
            return "auto";
        }
        else if (scalarSet.height != null) {
            return scalarSet.height;
        }
        else {
            return this.height;
        }
    };
    DBase.prototype.setHeight = function (height) {
        if (isNumber(height)) {
            this.height = height;
        }
        else if (height === "auto" || height === "AUTO") {
            if (!this.isHeightAuto()) {
                this.toHeightAuto();
                this.toChildrenDirty();
                DApplications.update(this);
            }
        }
        else {
            var scalarSet = this._scalarSet;
            var scalar = DScalarFunctions.size(height);
            if (scalarSet.height !== scalar) {
                scalarSet.height = scalar;
                this.layout();
            }
        }
    };
    Object.defineProperty(DBase.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "skew", {
        get: function () {
            return this._skew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "padding", {
        get: function () {
            return this._padding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "corner", {
        get: function () {
            return this._corner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "background", {
        get: function () {
            return this._background;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "border", {
        get: function () {
            return this._border;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "outline", {
        get: function () {
            return this._outline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "unsafe", {
        get: function () {
            return this.transform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBase.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            if (this._title !== title) {
                this._title = title;
                if (this.isHovered()) {
                    this.applyTitle();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DBase.prototype.applyTitle = function () {
        var layer = DApplications.getLayer(this);
        if (layer) {
            layer.view.title = this._title;
        }
    };
    DBase.prototype.show = function () {
        if (!this.visible) {
            this.visible = true;
            this.toParentChildrenDirty();
            DApplications.update(this);
        }
        return this;
    };
    DBase.prototype.isShown = function () {
        return this.visible;
    };
    DBase.prototype.hide = function () {
        if (this.visible) {
            this.visible = false;
            this.toParentChildrenDirty();
            DApplications.update(this);
        }
        return this;
    };
    DBase.prototype.isHidden = function () {
        return !this.visible;
    };
    DBase.prototype.toDirty = function () {
        if (!this._isDirty) {
            this._isDirty = true;
            this.toParentHasDirty();
            return true;
        }
        return false;
    };
    DBase.prototype.toHasDirty = function () {
        if (!this._hasDirty) {
            this._hasDirty = true;
            this.toParentHasDirty();
            return true;
        }
        return false;
    };
    DBase.prototype.toParentHasDirty = function () {
        var parent = this.parent;
        if (parent instanceof DBase) {
            parent.toHasDirty();
        }
    };
    DBase.prototype.toChildrenDirty = function () {
        if (!this._isChildrenDirty) {
            this._isChildrenDirty = true;
            this.onChildrenDirty();
            this.toParentChildrenDirty();
            return true;
        }
        return false;
    };
    DBase.prototype.toParentChildrenDirty = function () {
        var parent = this.parent;
        if (parent instanceof DBase) {
            parent.toChildrenDirty();
        }
    };
    DBase.prototype.isChildrenDirty = function () {
        return this._isChildrenDirty;
    };
    DBase.prototype.onChildrenDirty = function () {
        // DO NOTHING
    };
    DBase.prototype.isDirty = function () {
        return this._isDirty;
    };
    DBase.prototype.hasDirty = function () {
        return this._hasDirty;
    };
    DBase.prototype.setHovered = function (isHovered) {
        return this.setState(DBaseState.HOVERED, isHovered);
    };
    DBase.prototype.setActive = function (isActive) {
        return this.setState(DBaseState.ACTIVE, isActive);
    };
    DBase.prototype.setPressed = function (isPressed) {
        return this.setState(DBaseState.PRESSED, isPressed);
    };
    DBase.prototype.setReadOnly = function (isReadOnly) {
        return this.setState(DBaseState.READ_ONLY, isReadOnly);
    };
    DBase.prototype.setDisabled = function (isDisabled) {
        return this.setState(DBaseState.DISABLED, isDisabled);
    };
    DBase.prototype.setDragging = function (isDragging) {
        return this.setState(DBaseState.DRAGGING, isDragging);
    };
    DBase.prototype.setInvalid = function (isInvalid) {
        return this.setState(DBaseState.INVALID, isInvalid);
    };
    DBase.prototype.setSucceeded = function (isSucceeded) {
        return this.setState(DBaseState.SUCCEEDED, isSucceeded);
    };
    DBase.prototype.setFailed = function (isFailed) {
        return this.setState(DBaseState.FAILED, isFailed);
    };
    DBase.prototype.setFocused = function (isFocused) {
        if (this.isFocused() !== isFocused) {
            var layer = DApplications.getLayer(this);
            if (layer) {
                layer.getFocusController().setFocused(this, isFocused, false);
            }
        }
        return this;
    };
    DBase.prototype.focus = function () {
        return this.setFocused(true);
    };
    DBase.prototype.blur = function (recursively) {
        if (recursively) {
            var layer = DApplications.getLayer(this);
            if (layer) {
                var focusController = layer.getFocusController();
                var focused = focusController.getFocused();
                if (focused instanceof DBase) {
                    var current = focused;
                    while (current) {
                        if (current === this) {
                            focused.setFocused(false);
                            break;
                        }
                        current = current.parent;
                    }
                }
            }
        }
        else {
            this.setFocused(false);
        }
        return this;
    };
    DBase.prototype.isHovered = function () {
        return this.hasState(DBaseState.HOVERED);
    };
    DBase.prototype.isActive = function () {
        return this.hasState(DBaseState.ACTIVE);
    };
    DBase.prototype.isActiveIn = function () {
        return this.hasState(DBaseState.ACTIVE | DBaseState.ACTIVE_IN);
    };
    DBase.prototype.isPressed = function () {
        return this.hasState(DBaseState.PRESSED);
    };
    DBase.prototype.isReadOnly = function () {
        return this.hasState(DBaseState.READ_ONLY);
    };
    DBase.prototype.isDisabled = function () {
        return this.hasState(DBaseState.DISABLED);
    };
    DBase.prototype.isActionable = function () {
        return !this.hasState(DBaseState.DISABLED | DBaseState.READ_ONLY);
    };
    DBase.prototype.isDragging = function () {
        return this.hasState(DBaseState.DRAGGING);
    };
    DBase.prototype.isFocused = function () {
        return this.hasState(DBaseState.FOCUSED);
    };
    DBase.prototype.isFocusedIn = function () {
        return this.hasState(DBaseState.FOCUSED | DBaseState.FOCUSED_IN);
    };
    DBase.prototype.isUnfocusable = function () {
        return this.hasState(DBaseState.UNFOCUSABLE);
    };
    DBase.prototype.isInvalid = function () {
        return this.hasState(DBaseState.INVALID);
    };
    DBase.prototype.isSucceeded = function () {
        return this.hasState(DBaseState.SUCCEEDED);
    };
    DBase.prototype.isFailed = function () {
        return this.hasState(DBaseState.FAILED);
    };
    DBase.prototype.setState = function (state, isOn) {
        var oldStateLocal = this._stateLocal;
        var newStateLocal = (isOn ? (oldStateLocal | state) : (oldStateLocal & ~state));
        if (oldStateLocal !== newStateLocal) {
            this._stateLocal = newStateLocal;
            this.updateState();
        }
        return this;
    };
    DBase.prototype.setStates = function (statesOn, statesOff) {
        var oldStateLocal = this._stateLocal;
        var newStateLocal = ((oldStateLocal | statesOn) & ~statesOff);
        if (oldStateLocal !== newStateLocal) {
            this._stateLocal = newStateLocal;
            this.updateState();
        }
        return this;
    };
    DBase.prototype.updateState = function () {
        var parent = this.parent;
        var stateLocal = this._stateLocal;
        var newState = (parent instanceof DBase ?
            this.mergeState(stateLocal, parent.state) :
            stateLocal);
        var oldState = this._state;
        if (oldState !== newState) {
            this._state = newState;
            this.onStateChange(newState, oldState);
        }
    };
    DBase.prototype.mergeState = function (stateLocal, stateParent) {
        return stateLocal |
            (stateParent & DBaseState.DISABLED) |
            (stateParent & DBaseState.READ_ONLY) |
            (stateParent & (DBaseState.FOCUSED | DBaseState.FOCUSED_IN) ? DBaseState.FOCUSED_IN : DBaseState.NONE) |
            (stateParent & (DBaseState.ACTIVE | DBaseState.ACTIVE_IN) ? DBaseState.ACTIVE_IN : DBaseState.NONE);
    };
    DBase.prototype.onStateChange = function (newState, oldState) {
        this.toDirty();
        DApplications.update(this);
        this.emit("statechange", newState, oldState, this);
        var children = this.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child instanceof DBase) {
                child.onParentStateChange(newState, oldState);
            }
        }
        if (DBaseStates.isFocused(newState)) {
            if (!DBaseStates.isFocused(oldState)) {
                this.onFocused();
            }
        }
        else {
            if (DBaseStates.isFocused(oldState)) {
                this.onBlured();
            }
        }
    };
    DBase.prototype.onChildFocused = function (focused) {
        var parent = this.parent;
        if (parent instanceof DBase) {
            parent.onChildFocused(focused);
        }
    };
    DBase.prototype.onFocused = function () {
        var parent = this.parent;
        if (parent instanceof DBase) {
            parent.onChildFocused(this);
        }
    };
    DBase.prototype.onBlured = function () {
        //
    };
    DBase.prototype.onParentStateChange = function (newStateParent, oldStateParent) {
        var newState = this.mergeState(this._stateLocal, newStateParent);
        var oldState = this._state;
        if (oldState !== newState) {
            this._state = newState;
            this.onStateChange(newState, oldState);
        }
    };
    Object.defineProperty(DBase.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    DBase.prototype.getState = function () {
        return this._state;
    };
    DBase.prototype.hasState = function (state) {
        return !!(this._state & state);
    };
    Object.defineProperty(DBase.prototype, "theme", {
        get: function () {
            return this._theme;
        },
        set: function (theme) {
            var result = this._theme;
            if (result !== theme) {
                this._theme = theme;
                this._padding.setTheme(theme);
                this._background.setTheme(theme);
                this._border.setTheme(theme);
                this._outline.setTheme(theme);
                this._corner.setTheme(theme);
                this.toDirty();
                DApplications.update(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DBase.prototype.refit = function () {
        if (this._isChildrenDirty) {
            this._isChildrenDirty = false;
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child instanceof DBase) {
                    child.refit();
                }
            }
            this.onRefit();
        }
    };
    DBase.prototype.onRefit = function () {
        var isWidthAuto = this.isWidthAuto();
        var isHeightAuto = this.isHeightAuto();
        if (isWidthAuto && isHeightAuto) {
            var width = 0;
            var height = 0;
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child.visible) {
                    if (this.hasRefitableWidth(child)) {
                        width = Math.max(width, child.x + child.width);
                    }
                    if (this.hasRefitableHeight(child)) {
                        height = Math.max(height, child.y + child.height);
                    }
                }
            }
            var padding = this.padding;
            this.resize(width + padding.getRight(), height + padding.getBottom());
        }
        else if (isWidthAuto) {
            var width = 0;
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child.visible && this.hasRefitableWidth(child)) {
                    width = Math.max(width, child.x + child.width);
                }
            }
            var padding = this.padding;
            this.width = width + padding.getRight();
        }
        else if (isHeightAuto) {
            var height = 0;
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child.visible && this.hasRefitableHeight(child)) {
                    height = Math.max(height, child.y + child.height);
                }
            }
            var padding = this.padding;
            this.height = height + padding.getBottom();
        }
    };
    DBase.prototype.isRefitable = function (target) {
        return target instanceof DBase;
    };
    DBase.prototype.hasRefitableHeight = function (target) {
        return this.isRefitable(target) &&
            !(target instanceof DBase && isFunction(target.getHeight()));
    };
    DBase.prototype.hasRefitableWidth = function (target) {
        return this.isRefitable(target) &&
            !(target instanceof DBase && isFunction(target.getWidth()));
    };
    DBase.prototype.reflow = function () {
        if (this._isDirty) {
            this.onReflow();
            this._isDirty = false;
        }
        if (this._hasDirty) {
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child instanceof DBase) {
                    child.reflow();
                }
            }
            this._hasDirty = false;
        }
    };
    DBase.prototype.onReflow = function () {
        var width = this._width;
        var height = this._height;
        var reflowables = this._reflowables;
        for (var i = 0, imax = reflowables.length; i < imax; ++i) {
            reflowables[i].onReflow(this, width, height);
        }
    };
    Object.defineProperty(DBase.prototype, "shadow", {
        get: function () {
            return this._shadow;
        },
        set: function (shadow) {
            var previous = this._shadow;
            if (previous !== shadow) {
                if (previous != null) {
                    previous.off("update", this._onShadowUpdateBound);
                    this.removeReflowable(previous);
                    this.removeRenderable(previous, true);
                }
                this._shadow = shadow;
                if (shadow != null) {
                    shadow.on("update", this._onShadowUpdateBound);
                    this.addReflowable(shadow);
                    this.prependRenderable(shadow, true);
                }
                DApplications.update(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DBase.prototype.layout = function () {
        var parent = this.getParentOfSize();
        if (parent) {
            this.onParentResize(parent.width, parent.height, parent.padding);
        }
    };
    DBase.prototype.getParentOfSize = function () {
        var parent = this.parent;
        if (parent instanceof DBase) {
            return parent;
        }
        else {
            return DApplications.getLayer(this);
        }
    };
    /**
     * Called when a parent resized.
     *
     * @param parentWidth a parent's local width
     * @param parentHeight a parent's local height
     */
    DBase.prototype.onParentResize = function (parentWidth, parentHeight, parentPadding) {
        var scalarSet = this._scalarSet;
        var position = this.transform.position;
        var x = position.x;
        var y = position.y;
        var width = this._width;
        var height = this._height;
        // Width & height
        var paddingWidth = parentPadding.getLeft() + parentPadding.getRight();
        var paddingHeight = parentPadding.getTop() + parentPadding.getBottom();
        var newWidth = (scalarSet.width != null ?
            scalarSet.width(parentWidth, width, paddingWidth, width) : width);
        var newHeight = (scalarSet.height != null ?
            scalarSet.height(parentHeight, height, paddingHeight, height) : height);
        this.resize(newWidth, newHeight);
        // X & Y
        var newX = (scalarSet.x != null ? scalarSet.x(parentWidth, this._width, parentPadding.getLeft(), x) : x);
        var newY = (scalarSet.y != null ? scalarSet.y(parentHeight, this._height, parentPadding.getTop(), y) : y);
        this.position.set(newX, newY);
    };
    DBase.prototype.resizeChildren = function () {
        var width = this._width;
        var height = this._height;
        var padding = this._padding;
        var children = this.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child instanceof DBase) {
                child.onParentResize(width, height, padding);
            }
        }
    };
    /**
     * Called when a parent moved.
     *
     * @param x a parent's local x position
     * @param y a parent's local y position
     */
    DBase.prototype.onParentMove = function (x, y) {
        // DO NOTHING
    };
    DBase.prototype.moveChildren = function () {
        var x = this.x;
        var y = this.y;
        var children = this.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child instanceof DBase) {
                child.onParentMove(x, y);
            }
        }
    };
    // Wheel
    DBase.prototype.onWheel = function (e, deltas, global) {
        this.emit("wheel", e, deltas, global, this);
        return false;
    };
    // Keydown
    DBase.prototype.onKeyDown = function (e) {
        this.emit("keydown", e, this);
        return false;
    };
    DBase.prototype.onKeyUp = function (e) {
        this.emit("keyup", e, this);
        return false;
    };
    // Down
    DBase.prototype.isEventTarget = function (e) {
        var target = e.target;
        if (target === this) {
            return true;
        }
        else if (!(target instanceof DBase)) {
            var parent_5 = target.parent;
            while (parent_5 != null && !(parent_5 instanceof DBase)) {
                parent_5 = parent_5.parent;
            }
            return (parent_5 === this);
        }
        return false;
    };
    DBase.prototype.onDown = function (e) {
        if (this.isEventTarget(e)) {
            this.onDownThis(e);
        }
    };
    DBase.prototype.onDownThis = function (e) {
        var oe = e.data.originalEvent;
        if ("touches" in oe) {
            var lastDownPoint = this._lastDownPoint || new Point();
            this._lastDownPoint = lastDownPoint;
            lastDownPoint.copyFrom(e.data.global);
        }
        else {
            this.focusOnClosest();
        }
    };
    DBase.prototype.onUp = function (e) {
        if (this.isEventTarget(e)) {
            this.onUpThis(e);
        }
    };
    DBase.prototype.onUpThis = function (e) {
        var oe = e.data.originalEvent;
        if ("touches" in oe) {
            var lastDownPoint = this._lastDownPoint;
            if (lastDownPoint) {
                var global_1 = e.data.global;
                var dx = Math.abs(global_1.x - lastDownPoint.x);
                var dy = Math.abs(global_1.y - lastDownPoint.y);
                var threshold = UtilPointerEvent.CLICK_DISTANCE_THRESHOLD;
                if (dx < threshold && dy < threshold) {
                    this.focusOnClosest();
                }
            }
        }
    };
    DBase.prototype.focusOnClosest = function () {
        var layer = DApplications.getLayer(this);
        if (layer) {
            var focusController = layer.getFocusController();
            focusController.setFocused(focusController.findFocusableParent(this), true, true);
        }
    };
    // Over
    DBase.prototype.onOver = function (e) {
        // Hover
        this.setHovered(true);
        // Title
        if (e.target === this) {
            this.applyTitle();
        }
    };
    // Out
    DBase.prototype.onOut = function (e) {
        this.setHovered(false);
    };
    // Double click
    DBase.prototype.onDblClick = function (e, interactionManager) {
        this.emit("dblclick", e, interactionManager, this);
        return false;
    };
    //
    DBase.prototype.render = function (renderer) {
        if (this.visible && 0 < this.worldAlpha && this.renderable) {
            this.renderBefore(renderer);
            _super.prototype.render.call(this, renderer);
            this.renderAfter(renderer);
        }
    };
    DBase.prototype.renderBefore = function (renderer) {
        var befores = this._befores;
        for (var i = 0, imax = befores.length; i < imax; ++i) {
            var before = befores[i];
            before.updateTransform();
            before.render(renderer);
        }
    };
    DBase.prototype.renderAfter = function (renderer) {
        var afters = this._afters;
        for (var i = 0, imax = afters.length; i < imax; ++i) {
            var after = afters[i];
            after.updateTransform();
            after.render(renderer);
        }
    };
    //
    DBase.prototype.getThemeDefault = function () {
        return DThemes.getInstance().get(this.getType());
    };
    DBase.prototype.getType = function () {
        return "DBase";
    };
    //
    DBase.prototype._calculateBounds = function () {
        var worldTransform = this.transform.worldTransform;
        var bounds = this._bounds;
        var work = DBase.WORK_CONTAINS_POINT;
        work.set(0, 0);
        worldTransform.apply(work, work);
        bounds.addPoint(work);
        work.set(this._width, this._height);
        worldTransform.apply(work, work);
        bounds.addPoint(work);
        _super.prototype._calculateBounds.call(this);
    };
    DBase.prototype.containsPoint = function (point) {
        return this.containsGlobalPoint(point) || this.containsLocalPoint(this.worldTransform.applyInverse(point, DBase.WORK_CONTAINS_POINT));
    };
    DBase.prototype.containsGlobalPoint = function (point) {
        return false;
    };
    DBase.prototype.containsLocalPoint = function (point) {
        return (0 <= point.x && point.x <= this._width &&
            0 <= point.y && point.y <= this._height);
    };
    /**
     * Returns a clipping rect.
     *
     * @param result a clipping rect
     */
    DBase.prototype.getClippingRect = function (target, result) {
        result.x = 0;
        result.y = 0;
        result.width = this._width;
        result.height = this._height;
    };
    DBase.prototype.destroy = function () {
        // Layout
        var scalarSet = this._scalarSet;
        scalarSet.x = null;
        scalarSet.y = null;
        scalarSet.width = null;
        scalarSet.height = null;
        // Shadow
        var shadow = this._shadow;
        if (shadow) {
            this._shadow = null;
            shadow.destroy();
        }
        // Children
        var children = this.children;
        for (var i = children.length - 1; 0 <= i; --i) {
            children[i].destroy();
        }
        children.length = 0;
        //
        _super.prototype.destroy.call(this);
    };
    DBase.WORK_CONTAINS_POINT = new Point();
    return DBase;
}(Container));
export { DBase };
//# sourceMappingURL=d-base.js.map