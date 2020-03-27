export var buildStep = function (steps, clippings, voffset, vcount, swx, swy, px0, py0, px1, py1) {
    var ic = voffset * 3;
    var is = voffset * 6;
    for (var i = 0; i < vcount; ++i) {
        steps[is + 0] = swx * clippings[ic + 0];
        steps[is + 1] = swy * clippings[ic + 1];
        steps[is + 2] = px0;
        steps[is + 3] = py0;
        steps[is + 4] = px1;
        steps[is + 5] = py1;
        ic += 3;
        is += 6;
    }
};
//# sourceMappingURL=build-step.js.map