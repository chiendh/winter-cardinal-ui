/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeSearch } from "./e-shape-search";
var EShapeDeleter = /** @class */ (function () {
    function EShapeDeleter() {
    }
    EShapeDeleter.delete = function (parent, shapes, generateListOfDetachedShapes) {
        var children = parent.children;
        var length = children.length;
        // Update indices
        for (var i = 0; i < length; ++i) {
            var child = children[i];
            if (child.selected) {
                child.index = length + i;
            }
            else {
                child.index = i;
            }
        }
        // Sort
        children.sort(EShapeSearch.COMPARATOR_INDEX);
        // Detach
        if (generateListOfDetachedShapes === true) {
            for (var i = length - 1; 0 <= i; --i) {
                var child = children[i];
                if (child.selected) {
                    child.index -= length;
                    child.parent = null;
                    child.selected = false;
                    child.uploaded = undefined;
                }
                else {
                    var size = children.length - (i + 1);
                    if (0 < size) {
                        var result = children.splice(i + 1, size);
                        if (shapes != null) {
                            shapes.length = 0;
                        }
                        parent.onChildTransformChange();
                        parent.toDirty();
                        return result;
                    }
                    else {
                        if (shapes != null) {
                            shapes.length = 0;
                        }
                        return null;
                    }
                }
            }
            if (0 < children.length) {
                var result = children.splice(0, children.length);
                if (shapes != null) {
                    shapes.length = 0;
                }
                parent.onChildTransformChange();
                parent.toDirty();
                return result;
            }
            else {
                if (shapes != null) {
                    shapes.length = 0;
                }
                return null;
            }
        }
        else {
            for (var i = length - 1; 0 <= i; --i) {
                var child = children[i];
                if (child.selected) {
                    child.parent = null;
                    child.selected = false;
                    child.uploaded = undefined;
                }
                else {
                    children.length = i + 1;
                    if (shapes != null) {
                        shapes.length = 0;
                    }
                    parent.onChildTransformChange();
                    parent.toDirty();
                    return null;
                }
            }
            if (0 < children.length) {
                children.length = 0;
                if (shapes != null) {
                    shapes.length = 0;
                }
                parent.onChildTransformChange();
                parent.toDirty();
            }
            else {
                if (shapes != null) {
                    shapes.length = 0;
                }
            }
            return null;
        }
    };
    return EShapeDeleter;
}());
export { EShapeDeleter };
//# sourceMappingURL=e-shape-deleter.js.map