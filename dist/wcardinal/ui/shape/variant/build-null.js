export var buildNullClipping = function (clippings, voffset, vcount) {
    for (var i = voffset * 3, imax = (voffset + vcount) * 3; i < imax; i += 3) {
        clippings[i + 0] = 0;
        clippings[i + 1] = 0;
        clippings[i + 2] = 0;
    }
};
export var buildNullIndex = function (indices, voffset, ioffset, icount) {
    for (var ii = ioffset * 3, iimax = (ioffset + icount) * 3; ii < iimax; ii += 3) {
        indices[ii + 0] = voffset;
        indices[ii + 1] = voffset;
        indices[ii + 2] = voffset;
    }
};
export var buildNullVertex = function (vertices, voffset, vcount) {
    for (var i = voffset * 2, imax = (voffset + vcount) * 2; i < imax; i += 2) {
        vertices[i + 0] = 0;
        vertices[i + 1] = 0;
    }
};
export var buildNullStep = function (steps, voffset, vcount) {
    for (var i = voffset * 6, imax = (voffset + vcount) * 6; i < imax; i += 6) {
        steps[i + 0] = 0;
        steps[i + 1] = 0;
        steps[i + 2] = 0;
        steps[i + 3] = 0;
        steps[i + 4] = 0;
        steps[i + 5] = 0;
    }
};
export var buildNullUv = function (uvs, voffset, vcount) {
    for (var i = voffset * 2, imax = (voffset + vcount) * 2; i < imax; i += 2) {
        uvs[i + 0] = 0;
        uvs[i + 1] = 0;
    }
};
//# sourceMappingURL=build-null.js.map