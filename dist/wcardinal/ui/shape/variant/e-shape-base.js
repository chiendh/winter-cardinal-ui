/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Point, Rectangle, Transform, utils } from "pixi.js";
import { DApplications } from "../../d-applications";
import { DBaseState } from "../../d-base-state";
import { EShapeAction } from "../action/e-shape-action";
import { EShapeCopyPart } from "../e-shape";
import { EShapeRuntimeState } from "../e-shape-runtime";
import { EShapeTransformImpl } from "../e-shape-transform";
import { EShapeGradients } from "./e-shape-gradients";
var EShapeBase = /** @class */ (function (_super) {
    __extends(EShapeBase, _super);
    function EShapeBase(type) {
        var _this = _super.call(this) || this;
        _this.id = "";
        _this.type = type;
        _this.transform = _this.newTransform();
        _this._onTransformChangeLock = 0;
        _this._isOnTransformChanged = false;
        _this.action = new EShapeAction();
        _this._visible = true;
        _this._uploadedUpdateLock = 0;
        _this._isUploadedUpdated = false;
        _this._isUploadedUpdatedRecursively = false;
        _this._boundsTransformId = NaN;
        _this._boundsInternalTransformId = NaN;
        _this._boundsLocalTransformId = NaN;
        _this._state = _this._stateLocal = DBaseState.UNFOCUSABLE;
        _this.interactive = false;
        //
        _this.parent = null;
        _this.children = [];
        //
        _this.selected = false;
        _this.index = 0;
        _this.reference = 0;
        return _this;
    }
    EShapeBase.prototype.newTransform = function () {
        return new EShapeTransformImpl(this);
    };
    EShapeBase.prototype.onSizeChange = function () {
        this._boundsTransformId = NaN;
        this._boundsInternalTransformId = NaN;
        this._boundsLocalTransformId = NaN;
        this.onTransformChange_();
        this.updateUploaded();
    };
    EShapeBase.prototype.onTransformChange = function () {
        this.onTransformChange_();
        this.updateUploadedRecursively();
    };
    EShapeBase.prototype.onTransformChange_ = function () {
        if (this._onTransformChangeLock === 0) {
            var parent_1 = this.parent;
            if (parent_1 != null) {
                parent_1.onChildTransformChange();
            }
        }
        else {
            this._isOnTransformChanged = true;
        }
    };
    EShapeBase.prototype.disallowOnTransformChange = function () {
        this._onTransformChangeLock += 1;
        if (this._onTransformChangeLock === 1) {
            this._isOnTransformChanged = false;
        }
    };
    EShapeBase.prototype.allowOnTransformChange = function (invokeOnTransformChange) {
        this._onTransformChangeLock -= 1;
        if (this._onTransformChangeLock === 0) {
            if (this._isOnTransformChanged) {
                this._isOnTransformChanged = false;
                if (invokeOnTransformChange) {
                    this.onTransformChange();
                }
            }
        }
    };
    EShapeBase.prototype.onChildTransformChange = function () {
        //
    };
    EShapeBase.prototype.disallowUploadedUpdate = function () {
        this._uploadedUpdateLock += 1;
        if (this._uploadedUpdateLock === 1) {
            this._isUploadedUpdated = false;
            this._isUploadedUpdatedRecursively = false;
        }
    };
    EShapeBase.prototype.allowUploadedUpdate = function () {
        this._uploadedUpdateLock -= 1;
        if (this._uploadedUpdateLock === 0) {
            if (this._isUploadedUpdatedRecursively) {
                this._isUploadedUpdatedRecursively = false;
                this._isUploadedUpdated = false;
                this.updateUploadedRecursively();
            }
            else if (this._isUploadedUpdated) {
                this._isUploadedUpdated = false;
                this.updateUploaded();
            }
        }
    };
    EShapeBase.prototype.updateUploadedRecursively = function () {
        if (this._uploadedUpdateLock === 0) {
            this.updateUploaded();
            var children = this.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                children[i].updateUploadedRecursively();
            }
        }
        else {
            this._isUploadedUpdatedRecursively = true;
        }
    };
    EShapeBase.prototype.updateUploaded = function () {
        if (this._uploadedUpdateLock === 0) {
            var uploaded = this.uploaded;
            if (uploaded != null) {
                uploaded.update(this);
            }
        }
        else {
            this._isUploadedUpdated = true;
        }
    };
    Object.defineProperty(EShapeBase.prototype, "root", {
        //
        get: function () {
            var root = this;
            while (root.parent instanceof EShapeBase) {
                root = root.parent;
            }
            return root;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "visible", {
        //
        get: function () {
            var parent = this.parent;
            if (parent instanceof EShapeBase) {
                return parent.visible && this._visible;
            }
            else {
                return this._visible;
            }
        },
        set: function (visible) {
            if (this._visible !== visible) {
                this._visible = visible;
                this.updateUploadedRecursively();
            }
        },
        enumerable: true,
        configurable: true
    });
    //
    EShapeBase.prototype.toDirty = function () {
        var parent = this.parent;
        if (parent != null) {
            parent.toDirty();
        }
    };
    // Hierarchy
    EShapeBase.prototype.attach = function (parent, at) {
        this.detach();
        this.parent = parent;
        var children = parent.children;
        if (at != null && 0 <= at && at < children.length) {
            children.splice(at, 0, this);
        }
        else {
            children.push(this);
        }
        this.uploaded = undefined;
        parent.onChildTransformChange();
        parent.toDirty();
        return this;
    };
    EShapeBase.prototype.detach = function () {
        var parent = this.parent;
        if (parent != null) {
            this.parent = null;
            this.uploaded = undefined;
            var children = parent.children;
            var index = children.indexOf(this);
            if (0 <= index) {
                children.splice(index, 1);
                parent.onChildTransformChange();
                parent.toDirty();
            }
        }
        return this;
    };
    // Transform
    EShapeBase.prototype.updateTransform = function () {
        var parent = this.parent;
        if (parent) {
            if (parent.parent) {
                parent.updateTransform();
            }
            this.transform.updateTransform(parent.transform);
        }
        else {
            this.transform.updateTransform(Transform.IDENTITY);
        }
    };
    // Serialization
    EShapeBase.prototype.serializeChildren = function (manager) {
        var children = this.children;
        var childrenSerialized = [];
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            childrenSerialized.push(child.serialize(manager));
        }
        return childrenSerialized;
    };
    EShapeBase.prototype.serializeImage = function (manager) {
        var image = this.image;
        return (image != null ? manager.add(image.src) : -1);
    };
    EShapeBase.prototype.serializeGradient = function (manager) {
        return EShapeGradients.toGradientId(this.gradient, manager);
    };
    EShapeBase.prototype.serialize = function (manager) {
        var transform = this.transform;
        var position = transform.position;
        var pivot = transform.pivot;
        var size = this.size;
        var shortcut = this.shortcut;
        var shortcutId = (shortcut != null ? manager.add(shortcut) : -1);
        var title = this.title;
        var titleId = (title != null ? manager.add(title) : -1);
        return [
            this.type,
            manager.add(this.id),
            position.x,
            position.y,
            size.x,
            size.y,
            transform.rotation,
            transform.skew.x,
            this.fill.serialize(manager),
            this.stroke.serialize(manager),
            manager.add(this.cursor.trim()),
            this.text.serialize(manager),
            this.tag.serialize(manager),
            this.radius,
            this.corner,
            -1,
            -1,
            this.action.serialize(manager),
            this.serializeImage(manager),
            this.serializeGradient(manager),
            this.serializeChildren(manager),
            pivot.x,
            pivot.y,
            (this.interactive ? 1 : 0) | (this.unfocusable ? 2 : 0),
            shortcutId,
            titleId
        ];
    };
    // Hit test
    EShapeBase.prototype.toLocalRect = function (point, result) {
        var x = point.x;
        var y = point.y;
        var size = this.size;
        var sx = 0.5 * size.x;
        var sy = 0.5 * size.y;
        var pivot = this.transform.pivot;
        var dx = x - pivot.x;
        var dy = y - pivot.y;
        var stroke = this.stroke;
        var s = stroke.width * stroke.align;
        if (0 <= sx) {
            if (0 <= sy) {
                result.x = +dx;
                result.y = +dy;
                result.width = +sx + s;
                result.height = +sy + s;
            }
            else {
                result.x = +dx;
                result.y = -dy;
                result.width = +sx + s;
                result.height = -sy + s;
            }
        }
        else {
            if (0 <= sy) {
                result.x = -dx;
                result.y = +dy;
                result.width = -sx + s;
                result.height = +sy + s;
            }
            else {
                result.x = -dx;
                result.y = -dy;
                result.width = -sx + s;
                result.height = -sy + s;
            }
        }
        return result;
    };
    EShapeBase.prototype.contains = function (point) {
        var rect = this.toLocalRect(point, EShapeBase.WORK_RECT);
        if (this.containsAbs(rect.x, rect.y, rect.width, rect.height)) {
            return this;
        }
        var x = point.x;
        var y = point.y;
        return this.containsText(x, y, point) || this.containsChildren(x, y, point);
    };
    EShapeBase.prototype.containsText = function (x, y, work) {
        var text = this.text;
        var textAtlas = text.atlas;
        if (textAtlas != null) {
            var textWorld = text.world;
            if (textWorld != null) {
                work.set(x, y);
                this.transform.internalTransform.apply(work, work);
                var tx = work.x - textWorld[0];
                var ty = work.y - textWorld[1];
                var th = textWorld[2] * tx + textWorld[3] * ty;
                var tv = textWorld[4] * tx + textWorld[5] * ty;
                if (0 <= th && th <= textWorld[6] && 0 <= tv && tv <= textWorld[7]) {
                    return this;
                }
            }
        }
        return null;
    };
    EShapeBase.prototype.containsChildren = function (x, y, work) {
        var children = this.children;
        for (var i = children.length - 1; 0 <= i; --i) {
            var child = children[i];
            work.set(x, y);
            child.updateTransform();
            child.transform.localTransform.applyInverse(work, work);
            var childResult = child.contains(work);
            if (childResult != null) {
                if (this.shadowed) {
                    return this;
                }
                else {
                    return childResult;
                }
            }
        }
        return null;
    };
    EShapeBase.prototype.containsBBox = function (point) {
        var rect = this.toLocalRect(point, EShapeBase.WORK_RECT);
        return this.containsAbsBBox(rect.x, rect.y, rect.width, rect.height);
    };
    EShapeBase.prototype.containsAbs = function (x, y, ax, ay) {
        return this.containsAbsBBox(x, y, ax, ay);
    };
    EShapeBase.prototype.containsAbsBBox = function (x, y, ax, ay) {
        return (-ax <= x && x <= +ax && -ay <= y && y <= +ay);
    };
    EShapeBase.prototype.select = function (point) {
        return false;
    };
    //
    EShapeBase.prototype.toGlobal = function (position, result, skipUpdate) {
        if (skipUpdate !== true) {
            this.updateTransform();
        }
        result.copyFrom(position);
        this.transform.worldTransform.apply(result, result);
        return result;
    };
    EShapeBase.prototype.toLocal = function (position, from, result, skipUpdate) {
        if (skipUpdate !== true) {
            this.updateTransform();
        }
        if (result === undefined) {
            result = new Point();
        }
        result.copyFrom(position);
        this.transform.worldTransform.applyInverse(result, result);
        return result;
    };
    EShapeBase.prototype.getBounds = function (work, skipUpdate, result) {
        if (skipUpdate !== true) {
            this.updateTransform();
        }
        var bounds = this._bounds = (this._bounds || new Rectangle());
        var worldId = this.transform.getWorldId();
        if (worldId !== this._boundsTransformId) {
            this._boundsTransformId = worldId;
            this.getBounds_(this.transform.worldTransform, work, bounds);
        }
        result.copyFrom(bounds);
        return result;
    };
    EShapeBase.prototype.getBoundsInternal = function (work, skipUpdate, result) {
        if (skipUpdate !== true) {
            this.updateTransform();
        }
        var boundsInternal = this._boundsInternal = (this._boundsInternal || new Rectangle());
        var currentLocalId = this.transform.getLocalIdCurrent();
        if (currentLocalId !== this._boundsInternalTransformId) {
            this._boundsInternalTransformId = currentLocalId;
            this.getBounds_(this.transform.internalTransform, work, boundsInternal);
        }
        result.copyFrom(boundsInternal);
        return result;
    };
    EShapeBase.prototype.getBoundsLocal = function (work, skipUpdate, result) {
        if (skipUpdate !== true) {
            this.updateTransform();
        }
        var boundsLocal = this._boundsLocal = (this._boundsLocal || new Rectangle());
        var currentLocalId = this.transform.getLocalIdCurrent();
        if (currentLocalId !== this._boundsLocalTransformId) {
            this._boundsLocalTransformId = currentLocalId;
            this.getBounds_(this.transform.localTransform, work, boundsLocal);
        }
        result.copyFrom(boundsLocal);
        return result;
    };
    EShapeBase.prototype.getBoundsSize = function () {
        return this.size;
    };
    EShapeBase.prototype.getBounds_ = function (transform, work, result) {
        var pivot = this.transform.pivot;
        var px = pivot.x;
        var py = pivot.y;
        var size = this.getBoundsSize();
        var sx = 0.5 * size.x;
        var sy = 0.5 * size.y;
        var a = transform.a;
        var b = transform.b;
        var c = transform.c;
        var d = transform.d;
        var x = -sx + px;
        var y = -sy + py;
        var x0 = a * x + c * y;
        var y0 = b * x + d * y;
        x = +sx + px;
        y = -sy + py;
        var x1 = a * x + c * y;
        var y1 = b * x + d * y;
        x = -sx + px;
        y = +sy + py;
        var x2 = a * x + c * y;
        var y2 = b * x + d * y;
        x = +sx + px;
        y = +sy + py;
        var x3 = a * x + c * y;
        var y3 = b * x + d * y;
        var xmin = Math.min(x0, x1, x2, x3);
        var ymin = Math.min(y0, y1, y2, y3);
        var xmax = Math.max(x0, x1, x2, x3);
        var ymax = Math.max(y0, y1, y2, y3);
        result.x = xmin + transform.tx;
        result.y = ymin + transform.ty;
        result.width = xmax - xmin;
        result.height = ymax - ymin;
        return result;
    };
    //
    EShapeBase.prototype.destroy = function () {
        var children = this.children;
        for (var i = children.length - 1; 0 <= i; --i) {
            children[i].destroy();
        }
        children.length = 0;
    };
    //
    EShapeBase.prototype.updateState = function () {
        var parent = this.parent;
        var stateLocal = this._stateLocal;
        var newState = (parent instanceof EShapeBase ?
            this.mergeState(stateLocal, parent.getState()) :
            stateLocal);
        var oldState = this._state;
        if (oldState !== newState) {
            this._state = newState;
            this.onStateChange(newState, oldState);
        }
    };
    EShapeBase.prototype.mergeState = function (stateLocal, stateParent) {
        return stateLocal | (stateParent & DBaseState.DISABLED) |
            (stateParent & (DBaseState.FOCUSED | DBaseState.FOCUSED_IN) ? DBaseState.FOCUSED_IN : DBaseState.NONE);
    };
    EShapeBase.prototype.onStateChange = function (newState, oldState) {
        var runtime = this.runtime;
        if (runtime != null) {
            runtime.onStateChange(this, newState, oldState);
        }
        var children = this.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child instanceof EShapeBase) {
                child.onParentStateChange(newState, oldState);
            }
        }
    };
    EShapeBase.prototype.onParentStateChange = function (newStateParent, oldStateParent) {
        var newState = this.mergeState(this._stateLocal, newStateParent);
        var oldState = this._state;
        if (oldState !== newState) {
            this._state = newState;
            this.onStateChange(newState, oldState);
        }
    };
    EShapeBase.prototype.getState = function () {
        return this._state;
    };
    EShapeBase.prototype.setState = function (state, isOn) {
        if ((!!(this._stateLocal & state)) !== isOn) {
            if (isOn) {
                this._stateLocal |= state;
            }
            else {
                this._stateLocal &= ~state;
            }
            this.updateState();
        }
        return this;
    };
    EShapeBase.prototype.hasState = function (state) {
        return !!(this._state & state);
    };
    EShapeBase.prototype.focus = function () {
        this.focused = true;
        return this;
    };
    EShapeBase.prototype.blur = function () {
        this.focused = false;
        return this;
    };
    Object.defineProperty(EShapeBase.prototype, "hovered", {
        get: function () {
            return this.hasState(DBaseState.HOVERED);
        },
        set: function (isHovered) {
            this.setState(DBaseState.HOVERED, isHovered);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "active", {
        get: function () {
            return this.hasState(DBaseState.ACTIVE);
        },
        set: function (isActive) {
            this.setState(DBaseState.ACTIVE, isActive);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "readonly", {
        get: function () {
            return this.hasState(DBaseState.READ_ONLY);
        },
        set: function (isReadOnly) {
            this.setState(DBaseState.READ_ONLY, isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "enabled", {
        get: function () {
            return !this.hasState(DBaseState.DISABLED);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "disabled", {
        get: function () {
            return this.hasState(DBaseState.DISABLED);
        },
        set: function (isDisabled) {
            this.setState(DBaseState.DISABLED, isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "dragging", {
        get: function () {
            return this.hasState(DBaseState.DRAGGING);
        },
        set: function (isDragging) {
            this.setState(DBaseState.DRAGGING, isDragging);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "focused", {
        get: function () {
            return this.hasState(DBaseState.FOCUSED);
        },
        set: function (focused) {
            if (this.focused !== focused) {
                var layer = DApplications.getLayer(this);
                if (layer) {
                    layer.getFocusController().setFocused(this, focused, false);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "focusedin", {
        get: function () {
            return this.hasState(DBaseState.FOCUSED | DBaseState.FOCUSED_IN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "unfocusable", {
        get: function () {
            return this.hasState(DBaseState.UNFOCUSABLE);
        },
        set: function (unforcusable) {
            this.setState(DBaseState.UNFOCUSABLE, unforcusable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "clicked", {
        get: function () {
            var runtime = this.runtime;
            return !!(runtime && (runtime.state & EShapeRuntimeState.CLICKED));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "pressed", {
        get: function () {
            var runtime = this.runtime;
            return !!(runtime && (runtime.state & EShapeRuntimeState.PRESSED));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "down", {
        get: function () {
            var runtime = this.runtime;
            return !!(runtime && (runtime.state & EShapeRuntimeState.DOWN));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "up", {
        get: function () {
            var runtime = this.runtime;
            return !!(runtime && (runtime.state & EShapeRuntimeState.UP));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeBase.prototype, "shadowed", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    EShapeBase.prototype.onDblClick = function (e) {
        var runtime = this.runtime;
        if (runtime != null) {
            return runtime.onPointerDblClick(this);
        }
        return false;
    };
    EShapeBase.prototype.onShortcut = function (e) {
        var runtime = this.runtime;
        if (runtime != null) {
            return runtime.onPointerClick(this);
        }
    };
    EShapeBase.prototype.onKeyDown = function (e) {
        var runtime = this.runtime;
        if (runtime != null) {
            return runtime.onKeyDown(this, e);
        }
        return false;
    };
    EShapeBase.prototype.onKeyUp = function (e) {
        var runtime = this.runtime;
        if (runtime != null) {
            return runtime.onKeyUp(this, e);
        }
        return false;
    };
    //
    EShapeBase.prototype.update = function (time) {
        var runtime = this.runtime;
        if (runtime != null) {
            runtime.update(this, time);
        }
    };
    EShapeBase.prototype.updateRecursively = function (time) {
        this.update(time);
        var children = this.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            children[i].update(time);
        }
    };
    EShapeBase.prototype.copy = function (source, part) {
        if (part === void 0) { part = EShapeCopyPart.ALL; }
        this.id = source.id;
        if ((part & EShapeCopyPart.TRANSFORM) !== 0) {
            var transform = this.transform;
            var sourceTransform = source.transform;
            transform.position.copyFrom(sourceTransform.position);
            transform.rotation = sourceTransform.rotation;
            transform.skew.copyFrom(sourceTransform.skew);
            transform.pivot.copyFrom(sourceTransform.pivot);
            transform.scale.copyFrom(sourceTransform.scale);
        }
        if ((part & EShapeCopyPart.SIZE) !== 0) {
            this.size.copyFrom(source.size);
        }
        if ((part & EShapeCopyPart.STYLE) !== 0) {
            this.fill.copy(source.fill);
            this.stroke.copy(source.stroke);
            this.tag.copy(source.tag);
            this.text.copy(source.text);
            this.radius = source.radius;
            this.corner = source.corner;
            if (this.image == null) {
                this.image = source.image;
            }
        }
        if ((part & EShapeCopyPart.ACTION) !== 0) {
            this.action.addAll(source.action.values);
            this.interactive = source.interactive;
            this.cursor = source.cursor;
            this.shortcut = source.shortcut;
        }
        if ((part & EShapeCopyPart.POINTS) !== 0) {
            var sourcePoints = source.points;
            if (sourcePoints != null) {
                var points = this.points;
                if (points != null) {
                    points.copy(sourcePoints);
                }
                else {
                    this.points = sourcePoints.clone(this);
                }
            }
        }
        if ((part & EShapeCopyPart.STATE) !== 0) {
            this.setState(source.getState(), true);
        }
        return this;
    };
    EShapeBase.WORK_RECT = new Rectangle();
    return EShapeBase;
}(utils.EventEmitter));
export { EShapeBase };
//# sourceMappingURL=e-shape-base.js.map