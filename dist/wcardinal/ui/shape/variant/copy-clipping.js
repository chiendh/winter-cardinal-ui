export var copyClipping = function (clippings, voffset, vcountPerPoint, pointCount) {
    var iv = voffset + vcountPerPoint;
    for (var i = 1; i < pointCount; ++i) {
        var icd = iv * 3;
        var ics = voffset * 3;
        for (var j = 0; j < vcountPerPoint; ++j) {
            clippings[icd + 0] = clippings[ics + 0];
            clippings[icd + 1] = clippings[ics + 1];
            clippings[icd + 2] = clippings[ics + 2];
            icd += 3;
            ics += 3;
        }
        iv += vcountPerPoint;
    }
};
//# sourceMappingURL=copy-clipping.js.map