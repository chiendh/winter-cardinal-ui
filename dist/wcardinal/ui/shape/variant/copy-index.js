export var copyIndex = function (indices, vcountPerPoint, ioffset, icountPerPoint, pointCount) {
    var idiv = vcountPerPoint;
    var ii = ioffset + icountPerPoint;
    for (var i = 1; i < pointCount; ++i) {
        var iid = ii * 3;
        var iis = ioffset * 3;
        for (var j = 0; j < icountPerPoint; ++j) {
            indices[iid + 0] = indices[iis + 0] + idiv;
            indices[iid + 1] = indices[iis + 1] + idiv;
            indices[iid + 2] = indices[iis + 2] + idiv;
            iid += 3;
            iis += 3;
        }
        idiv += vcountPerPoint;
        ii += icountPerPoint;
    }
};
//# sourceMappingURL=copy-index.js.map