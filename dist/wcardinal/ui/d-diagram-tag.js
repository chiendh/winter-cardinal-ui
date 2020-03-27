import { EShapeTagValueRangeType } from "./shape/e-shape-tag-value-range";
/**
 * A tag helper class for diagrams.
 */
var DDiagramTag = /** @class */ (function () {
    function DDiagramTag(diagram) {
        this._diagram = diagram;
    }
    DDiagramTag.prototype.update = function () {
        // DO NOTHING
    };
    DDiagramTag.prototype.getIds = function () {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            return Object.keys(canvas.tags);
        }
        return [];
    };
    DDiagramTag.prototype.each = function (callback) {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var tags = canvas.tags;
            for (var id in tags) {
                if (callback(id) === false) {
                    return id;
                }
            }
        }
        return null;
    };
    DDiagramTag.prototype.set = function (id, value, time, from, to) {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var tagValues = canvas.tags[id];
            if (tagValues != null) {
                for (var i = 0, imax = tagValues.length; i < imax; ++i) {
                    var tagValue = tagValues[i];
                    var range = tagValue.range;
                    // Range
                    range.set(from, to);
                    // Time
                    if (time !== undefined) {
                        tagValue.time = time;
                    }
                    // Value
                    tagValue.value = value;
                }
            }
        }
    };
    DDiagramTag.prototype.clear = function (id) {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var tagValues = canvas.tags[id];
            if (tagValues != null) {
                for (var i = 0, imax = tagValues.length; i < imax; ++i) {
                    tagValues[i].clear();
                }
            }
        }
    };
    DDiagramTag.prototype.setAll = function (id, values, times, from, to) {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var tagValues = canvas.tags[id];
            if (tagValues != null) {
                for (var i = 0, imax = tagValues.length; i < imax; ++i) {
                    var tagValue = tagValues[i];
                    var range = tagValue.range;
                    // Range
                    range.set(from, to);
                    // Time
                    if (times !== undefined) {
                        tagValue.times = times;
                    }
                    // Value
                    tagValue.values = values;
                }
            }
        }
    };
    DDiagramTag.prototype.setValue = function (id, value, time) {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var tagValues = canvas.tags[id];
            if (tagValues != null) {
                for (var i = 0, imax = tagValues.length; i < imax; ++i) {
                    var tagValue = tagValues[i];
                    if (time !== undefined) {
                        tagValue.time = time;
                    }
                    tagValue.value = value;
                }
            }
        }
    };
    DDiagramTag.prototype.setValues = function (id, values, times) {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var tagValues = canvas.tags[id];
            if (tagValues != null) {
                for (var i = 0, imax = tagValues.length; i < imax; ++i) {
                    var tagValue = tagValues[i];
                    if (times !== undefined) {
                        tagValue.times = times;
                    }
                    tagValue.values = values;
                }
            }
        }
    };
    DDiagramTag.prototype.setTime = function (id, time) {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var tagValues = canvas.tags[id];
            if (tagValues != null) {
                for (var i = 0, imax = tagValues.length; i < imax; ++i) {
                    tagValues[i].time = time;
                }
            }
        }
    };
    DDiagramTag.prototype.setTimes = function (id, times) {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var tagValues = canvas.tags[id];
            if (tagValues != null) {
                for (var i = 0, imax = tagValues.length; i < imax; ++i) {
                    tagValues[i].times = times;
                }
            }
        }
    };
    DDiagramTag.prototype.setRange = function (id, from, to) {
        var canvas = this._diagram.canvas;
        if (canvas != null) {
            var tagValues = canvas.tags[id];
            if (tagValues != null) {
                for (var i = 0, imax = tagValues.length; i < imax; ++i) {
                    var range = tagValues[i].range;
                    if (from !== undefined) {
                        if (from !== null) {
                            range.type |= EShapeTagValueRangeType.FROM;
                            range.from = from;
                        }
                        else {
                            range.type &= ~EShapeTagValueRangeType.FROM;
                        }
                    }
                    if (to !== undefined) {
                        if (to !== null) {
                            range.type |= EShapeTagValueRangeType.TO;
                            range.to = to;
                        }
                        else {
                            range.type &= ~EShapeTagValueRangeType.TO;
                        }
                    }
                }
            }
        }
    };
    return DDiagramTag;
}());
export { DDiagramTag };
//# sourceMappingURL=d-diagram-tag.js.map