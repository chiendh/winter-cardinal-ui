/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeBase } from "./variant/e-shape-base";
var EShapeSearch = /** @class */ (function () {
    function EShapeSearch() {
    }
    EShapeSearch.toIndices = function (shapes) {
        var result = [];
        for (var i = 0, imax = shapes.length; i < imax; ++i) {
            result.push(shapes[i].index);
        }
        return result;
    };
    EShapeSearch.toDepth = function (shape) {
        var result = 0;
        var parent = shape.parent;
        while (parent instanceof EShapeBase) {
            result += 1;
            parent = parent.parent;
        }
        return result;
    };
    EShapeSearch.toSharedParent = function (first, shape) {
        var depthA = this.toDepth(first);
        var depthB = this.toDepth(shape);
        if (depthA < depthB) {
            var parent_1 = first.parent;
            while (parent_1 instanceof EShapeBase) {
                if (this.isParent(shape, parent_1)) {
                    return parent_1;
                }
                parent_1 = parent_1.parent;
            }
            return parent_1;
        }
        else {
            var parent_2 = shape.parent;
            while (parent_2 instanceof EShapeBase) {
                if (this.isParent(first, parent_2)) {
                    return parent_2;
                }
                parent_2 = parent_2.parent;
            }
            return parent_2;
        }
    };
    EShapeSearch.toOfParent = function (shape, parent) {
        var shapeParent = shape.parent;
        while (shapeParent !== parent && shapeParent instanceof EShapeBase) {
            shape = shapeParent;
            shapeParent = shapeParent.parent;
        }
        return shape;
    };
    EShapeSearch.isParent = function (shape, target) {
        var parent = shape.parent;
        while (parent instanceof EShapeBase) {
            if (parent === target) {
                return true;
            }
            parent = parent.parent;
        }
        return false;
    };
    EShapeSearch.toSelected = function (shape) {
        var target = shape;
        while (target instanceof EShapeBase) {
            if (target.selected) {
                return target;
            }
            target = target.parent;
        }
        return null;
    };
    EShapeSearch.findChildById = function (shape, id, recursively) {
        var children = shape.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child.id === id) {
                return child;
            }
            if (recursively === true) {
                var result = EShapeSearch.findChildById(child, id, recursively);
                if (result != null) {
                    return result;
                }
            }
        }
        return null;
    };
    EShapeSearch.findChildByType = function (shape, type, recursively) {
        var children = shape.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child.type === type) {
                return child;
            }
            if (recursively === true) {
                var result = EShapeSearch.findChildByType(child, type, recursively);
                if (result != null) {
                    return result;
                }
            }
        }
        return null;
    };
    EShapeSearch.findChild = function (shape, matcher, recursively) {
        var children = shape.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (matcher(child)) {
                return child;
            }
            if (recursively === true) {
                var result = EShapeSearch.findChild(child, matcher, recursively);
                if (result != null) {
                    return result;
                }
            }
        }
        return null;
    };
    EShapeSearch.findChildrenByType = function (shape, type, recursively, result) {
        result = result || [];
        var children = shape.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (child.type === type) {
                result.push(child);
            }
            if (recursively === true) {
                EShapeSearch.findChildrenByType(child, type, recursively, result);
            }
        }
        return result;
    };
    EShapeSearch.findChildren = function (shape, matcher, recursively, result) {
        result = result || [];
        var children = shape.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var child = children[i];
            if (matcher(child)) {
                result.push(child);
            }
            if (recursively === true) {
                EShapeSearch.findChildren(child, matcher, recursively, result);
            }
        }
        return result;
    };
    EShapeSearch.COMPARATOR_INDEX = function (a, b) {
        return a.index - b.index;
    };
    return EShapeSearch;
}());
export { EShapeSearch };
//# sourceMappingURL=e-shape-search.js.map