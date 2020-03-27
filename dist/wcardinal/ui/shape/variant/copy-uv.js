export var copyUvs = function (uvs, voffset, vcountPerPoint, pointCount) {
    var iv = voffset + vcountPerPoint;
    for (var i = 1; i < pointCount; ++i) {
        var iuvd = iv << 1;
        var iuvs = voffset << 1;
        for (var j = 0; j < vcountPerPoint; ++j) {
            uvs[iuvd] = uvs[iuvs];
            uvs[iuvd + 1] = uvs[iuvs + 1];
            iuvd += 2;
            iuvs += 2;
        }
        iv += vcountPerPoint;
    }
};
//# sourceMappingURL=copy-uv.js.map