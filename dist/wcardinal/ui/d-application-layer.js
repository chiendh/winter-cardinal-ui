/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { Application, Point } from "pixi.js";
import { DBase } from "./d-base";
import { DControllerDefaultFocus } from "./d-controller-default-focus";
import { DControllers } from "./d-controllers";
import { DynamicFontAtlases } from "./util/dynamic-font-atlases";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilWheelEvent } from "./util/util-wheel-event";
var isDblClickable = function (target) {
    return target != null && target.onDblClick != null;
};
var isWheelable = function (target) {
    return target != null && target.onWheel != null;
};
var DApplicationLayer = /** @class */ (function (_super) {
    __extends(DApplicationLayer, _super);
    function DApplicationLayer(application, options) {
        var _this = _super.call(this, options.getPixiApplicationOptions()) || this;
        _this._renderId = null;
        _this._dynamicFontAtlases = null;
        _this.application = application;
        var stageAny = _this.stage;
        stageAny.layer = _this;
        stageAny.application = application;
        _this._options = options;
        _this._isUpdateAllowed = true;
        _this._refitLimit = 5;
        _this._reflowLimit = 5;
        _this._isVisible = true;
        _this._renderBound = function () {
            if (_this._renderId != null) {
                _this.render();
            }
        };
        // Canvas initialization
        var rootElement = options.getRootElement();
        var elementContainer = document.createElement("div");
        elementContainer.setAttribute("style", "position: absolute; top: 0; left: 0; width: 0; height: 0;" +
            "margin: 0; padding: 0; outline: none;");
        _this._elementContainer = elementContainer;
        var children = rootElement.children;
        if (options.isOverlay()) {
            if (3 <= children.length) {
                var thirdChild = children[2];
                rootElement.insertBefore(_this.view, thirdChild);
                rootElement.insertBefore(elementContainer, thirdChild);
            }
            else {
                rootElement.appendChild(_this.view);
                rootElement.appendChild(elementContainer);
            }
            var oldOnChildrenChange_1 = stageAny.onChildrenChange;
            stageAny.onChildrenChange = function () {
                _this.updateVisibility();
                oldOnChildrenChange_1.call(stageAny);
            };
        }
        else {
            if (0 < children.length) {
                var firstChild = children[0];
                rootElement.insertBefore(_this.view, firstChild);
                rootElement.insertBefore(elementContainer, firstChild);
            }
            else {
                rootElement.appendChild(_this.view);
                rootElement.appendChild(elementContainer);
            }
        }
        var rootElementStyle = rootElement.style;
        if (rootElement !== document.body) {
            var rootElementStylePosition = window.getComputedStyle(rootElement).position;
            if (rootElementStylePosition === "static") {
                rootElementStyle.position = "relative";
            }
        }
        rootElementStyle.margin = "0";
        rootElementStyle.padding = "0";
        rootElementStyle.overflow = "hidden";
        var viewStyle = _this.view.style;
        viewStyle.position = "absolute";
        viewStyle.top = "0";
        viewStyle.left = "0";
        viewStyle.width = "100%";
        viewStyle.height = "100%";
        viewStyle.display = "block";
        viewStyle.outline = "none";
        // Focus handling
        var hasFocus = false;
        var focusController = _this.getFocusController();
        var onBlurBound = function () {
            if (!hasFocus) {
                focusController.setFocused(null, true, false);
            }
        };
        rootElement.addEventListener("focus", function (e) {
            hasFocus = true;
        }, true);
        rootElement.addEventListener("blur", function (e) {
            hasFocus = false;
            setTimeout(onBlurBound, 0);
        }, true);
        _this.view.setAttribute("tabindex", "0");
        DControllers.getKeyboardController().init(_this.view, _this.stage, focusController);
        var interactionManager = _this.renderer.plugins.interaction;
        interactionManager.on(UtilPointerEvent.down, function (e) {
            if (e.target == null) {
                focusController.setFocused(null, true, false);
            }
        });
        // Resize handling
        var onResize = function () {
            var bbox = options.getRootElement().getBoundingClientRect();
            _this.renderer.resize(bbox.width, bbox.height);
            _this.resizeChildren(bbox.width, bbox.height, options.getPadding());
            _this.update();
        };
        window.addEventListener("resize", onResize);
        window.addEventListener("orientationchange", onResize);
        // Mouse wheel handling
        var wheelGlobal = new Point();
        var wheelEventUtil = UtilWheelEvent.getInstance();
        wheelEventUtil.on(_this.view, function (e) {
            var wheelEvent = e;
            UtilPointerEvent.toGlobal(wheelEvent, interactionManager, wheelGlobal);
            var current = interactionManager.hitTest(wheelGlobal);
            var deltas = wheelEventUtil.normalize(e);
            if (deltas != null) {
                while (current != null) {
                    if (isWheelable(current)) {
                        if (current.onWheel(wheelEvent, deltas, wheelGlobal)) {
                            wheelEvent.preventDefault();
                            break;
                        }
                    }
                    current = current.parent;
                }
            }
        });
        // Double click handling
        UtilPointerEvent.onDblClick(_this.view, function (e) {
            var focused = focusController.getFocused();
            if (focused != null) {
                var current = focused;
                while (current != null) {
                    if (isDblClickable(current)) {
                        if (current.onDblClick(e, interactionManager)) {
                            break;
                        }
                    }
                    current = current.parent;
                }
            }
        });
        //
        _this.stage.interactive = true;
        return _this;
    }
    DApplicationLayer.prototype.disallowUpdate = function () {
        this._isUpdateAllowed = false;
    };
    DApplicationLayer.prototype.allowUpdate = function () {
        this._isUpdateAllowed = true;
    };
    DApplicationLayer.prototype.update = function () {
        if (this._isUpdateAllowed && this._renderId == null) {
            this._renderId = requestAnimationFrame(this._renderBound);
        }
    };
    DApplicationLayer.prototype.updateVisibility = function () {
        if (this._options.isOverlay()) {
            if (0 < this.stage.children.length) {
                if (!this._isVisible) {
                    this._isVisible = true;
                    this.view.style.display = "block";
                }
            }
            else {
                if (this._isVisible) {
                    this._isVisible = false;
                    this.view.style.display = "none";
                }
            }
        }
    };
    DApplicationLayer.prototype.render = function () {
        this.refit();
        this.reflow();
        // Please note why the following line is here.
        //
        // Before this line, the update method does not enque a rendering task
        // because `this._renderId` is not null. As a result, this prevents
        // an unintentional rendering loop caused by the refit or the reflow.
        //
        // After this line, the update method enques a rendering task.
        // Namely, in the DisplayObject#render(Renderer) method, allowed to enque
        // a rendering task. For instance, please refer to the DDiagramShape#update().
        this._renderId = null;
        // Render
        _super.prototype.render.call(this);
    };
    Object.defineProperty(DApplicationLayer.prototype, "width", {
        get: function () {
            return this.screen.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DApplicationLayer.prototype, "height", {
        get: function () {
            return this.screen.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DApplicationLayer.prototype, "padding", {
        get: function () {
            return this._options.getPadding();
        },
        enumerable: true,
        configurable: true
    });
    DApplicationLayer.prototype.resizeChildren = function (width, height, padding) {
        var children = this.stage.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child instanceof DBase) {
                child.onParentResize(width, height, padding);
            }
        }
    };
    DApplicationLayer.prototype.refit = function () {
        var children = this.stage.children;
        for (var ilimit = 0, limit = this._refitLimit; ilimit < limit; ++ilimit) {
            var isChildrenDirty = false;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child instanceof DBase) {
                    child.refit();
                    isChildrenDirty = isChildrenDirty || child.isChildrenDirty();
                }
            }
            // If DBases are changed during the `refit` process, need to refit again.
            if (!isChildrenDirty) {
                break;
            }
        }
    };
    DApplicationLayer.prototype.reflow = function () {
        var children = this.stage.children;
        for (var ilimit = 0, limit = this._refitLimit; ilimit < limit; ++ilimit) {
            var isDirty = false;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var child = children[i];
                if (child instanceof DBase) {
                    child.reflow();
                    isDirty = isDirty || child.isDirty() || child.hasDirty();
                }
            }
            // If DBases are changed during the `reflow` process, need to reflow again.
            if (!isDirty) {
                break;
            }
        }
    };
    DApplicationLayer.prototype.getFocusController = function () {
        if (this._focus == null) {
            this._focus = new DControllerDefaultFocus();
        }
        return this._focus;
    };
    DApplicationLayer.prototype.getElementContainer = function () {
        return this._elementContainer;
    };
    DApplicationLayer.prototype.getDynamicFontAtlases = function () {
        if (this._dynamicFontAtlases == null) {
            this._dynamicFontAtlases = new DynamicFontAtlases(this);
        }
        return this._dynamicFontAtlases;
    };
    return DApplicationLayer;
}(Application));
export { DApplicationLayer };
//# sourceMappingURL=d-application-layer.js.map