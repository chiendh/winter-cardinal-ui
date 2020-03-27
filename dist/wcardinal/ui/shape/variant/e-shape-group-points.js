/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapePointsStyle } from "../e-shape-points-style";
var EShapeGroupPoints = /** @class */ (function () {
    function EShapeGroupPoints(parent) {
        this._parent = parent;
    }
    Object.defineProperty(EShapeGroupPoints.prototype, "length", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                var points = children[children.length - 1].points;
                if (points != null) {
                    return points.length;
                }
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupPoints.prototype, "id", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                var points = children[children.length - 1].points;
                if (points != null) {
                    return points.id;
                }
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupPoints.prototype, "values", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                var points = children[children.length - 1].points;
                if (points != null) {
                    return points.values;
                }
            }
            return [];
        },
        set: function (values) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var points = children[i].points;
                if (points != null) {
                    points.values = values;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupPoints.prototype, "segments", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                var points = children[children.length - 1].points;
                if (points != null) {
                    return points.segments;
                }
            }
            return [];
        },
        set: function (segments) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var points = children[i].points;
                if (points != null) {
                    points.segments = segments;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EShapeGroupPoints.prototype, "style", {
        get: function () {
            var children = this._parent.children;
            if (0 < children.length) {
                var points = children[children.length - 1].points;
                if (points != null) {
                    return points.style;
                }
            }
            return EShapePointsStyle.NONE;
        },
        set: function (style) {
            var children = this._parent.children;
            for (var i = 0, imax = children.length; i < imax; ++i) {
                var points = children[i].points;
                if (points != null) {
                    points.style = style;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    EShapeGroupPoints.prototype.copy = function (source) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var points = children[i].points;
            if (points != null) {
                points.copy(source);
            }
        }
        return this;
    };
    EShapeGroupPoints.prototype.set = function (values, segments, style) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var points = children[i].points;
            if (points != null) {
                points.set(values, segments, style);
            }
        }
        return this;
    };
    EShapeGroupPoints.prototype.clone = function (parent) {
        return new EShapeGroupPoints(parent);
    };
    EShapeGroupPoints.prototype.toPoints = function (transform) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var points = children[i].points;
            if (points != null) {
                return points.toPoints(transform);
            }
        }
        return [];
    };
    EShapeGroupPoints.prototype.serialize = function (manager) {
        var children = this._parent.children;
        for (var i = 0, imax = children.length; i < imax; ++i) {
            var points = children[i].points;
            if (points != null) {
                return points.serialize(manager);
            }
        }
        return -1;
    };
    return EShapeGroupPoints;
}());
export { EShapeGroupPoints };
//# sourceMappingURL=e-shape-group-points.js.map