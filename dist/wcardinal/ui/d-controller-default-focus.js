/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBaseState } from "./d-base-state";
var isFocusable = function (target) {
    return (target != null && ("setState" in target));
};
var isFocusableContainer = function (target) {
    return (target != null && "children" in target);
};
var DControllerDefaultFocus = /** @class */ (function () {
    function DControllerDefaultFocus() {
        this._focused = null;
    }
    DControllerDefaultFocus.prototype.setFocused = function (focusable, isFocused, select) {
        if (isFocused) {
            var previous = this._focused;
            if (previous !== focusable) {
                if (previous != null) {
                    previous.setState(DBaseState.FOCUSED, false);
                }
                this._focused = focusable;
                if (focusable != null && this.isFocusable(focusable)) {
                    focusable.setState(DBaseState.FOCUSED, true);
                }
                return previous;
            }
            else {
                return null;
            }
        }
        else {
            if (focusable != null && this._focused === focusable) {
                this._focused = null;
                focusable.setState(DBaseState.FOCUSED, false);
                return focusable;
            }
            else {
                return null;
            }
        }
    };
    DControllerDefaultFocus.prototype.getFocused = function () {
        return this._focused;
    };
    DControllerDefaultFocus.prototype.findFocusableParent = function (mightBeFocusable) {
        var current = mightBeFocusable;
        while (current != null) {
            if (this.isFocusable(current)) {
                return current;
            }
            else {
                current = current.parent;
            }
        }
        return null;
    };
    DControllerDefaultFocus.prototype.isFocusable = function (target) {
        return (isFocusable(target) &&
            !target.hasState(DBaseState.DISABLED | DBaseState.UNFOCUSABLE) &&
            target.visible);
    };
    DControllerDefaultFocus.prototype.isFocusRoot = function (target) {
        return (isFocusable(target) &&
            target.hasState(DBaseState.FOCUS_ROOT) &&
            target.visible);
    };
    DControllerDefaultFocus.prototype.findFocusable = function (target, includesTarget, includesTargetChildren, direction) {
        if (direction) {
            var result = this.findFocusableNext(target, includesTarget, includesTargetChildren);
            if (result != null) {
                return result;
            }
            var parent_1 = target.parent;
            if (parent_1 != null) {
                var children = parent_1.children;
                var index = children.indexOf(target);
                if (0 <= index) {
                    // Siblings
                    for (var i = index + 1, imax = children.length; i < imax; ++i) {
                        var found = this.findFocusableNext(children[i], true, true);
                        if (found != null) {
                            return found;
                        }
                    }
                    if (this.isFocusRoot(parent_1)) {
                        for (var i = 0, imax = index + 1; i < imax; ++i) {
                            var found = this.findFocusableNext(children[i], true, true);
                            if (found != null) {
                                return found;
                            }
                        }
                    }
                    // Parent
                    return this.findFocusable(parent_1, false, false, true);
                }
            }
        }
        else {
            var result = this.findFocusablePrevious(target, includesTarget, includesTargetChildren);
            if (result != null) {
                return result;
            }
            var parent_2 = target.parent;
            if (parent_2 != null) {
                var children = parent_2.children;
                var index = children.indexOf(target);
                if (0 <= index) {
                    // Siblings
                    for (var i = index - 1; 0 <= i; --i) {
                        var found = this.findFocusablePrevious(children[i], true, true);
                        if (found != null) {
                            return found;
                        }
                    }
                    if (this.isFocusRoot(parent_2)) {
                        for (var i = children.length - 1; index <= i; --i) {
                            var found = this.findFocusablePrevious(children[i], true, true);
                            if (found != null) {
                                return found;
                            }
                        }
                        return parent_2;
                    }
                    // Parent
                    return this.findFocusable(parent_2, true, false, false);
                }
            }
        }
        return null;
    };
    DControllerDefaultFocus.prototype.findFocusableNext = function (target, includesTarget, includesTargetChildren) {
        // Target itself
        if (includesTarget) {
            if (this.isFocusable(target)) {
                return target;
            }
        }
        // Target children
        if (includesTargetChildren && isFocusableContainer(target) && target.visible) {
            var children = target.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var found = this.findFocusableNext(children[i], true, true);
                if (found != null) {
                    return found;
                }
            }
        }
        // Siblings
        if (this.isFocusRoot(target)) {
            return target;
        }
        // Found nothing
        return null;
    };
    DControllerDefaultFocus.prototype.findFocusablePrevious = function (target, includesTarget, includesTargetChildren) {
        // Target children
        if (includesTargetChildren && isFocusableContainer(target) && target.visible) {
            var children = target.children;
            for (var i = children.length - 1; 0 <= i; --i) {
                var found = this.findFocusablePrevious(children[i], true, true);
                if (found != null) {
                    return found;
                }
            }
        }
        // Target itself
        if (includesTarget) {
            if (this.isFocusable(target)) {
                return target;
            }
        }
        // Siblings
        if (this.isFocusRoot(target)) {
            return target;
        }
        // Found nothing
        return null;
    };
    return DControllerDefaultFocus;
}());
export { DControllerDefaultFocus };
//# sourceMappingURL=d-controller-default-focus.js.map