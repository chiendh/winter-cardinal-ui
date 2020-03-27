export var copyStep = function (steps, voffset, vcountPerPoint, pointCount) {
    var iss0 = voffset * 6;
    var isd = (voffset + vcountPerPoint) * 6;
    for (var i = 1; i < pointCount; ++i) {
        var iss = iss0;
        for (var j = 0; j < vcountPerPoint; ++j) {
            steps[isd + 0] = steps[iss + 0];
            steps[isd + 1] = steps[iss + 1];
            steps[isd + 2] = steps[iss + 2];
            steps[isd + 3] = steps[iss + 3];
            steps[isd + 4] = steps[iss + 4];
            steps[isd + 5] = steps[iss + 5];
            isd += 6;
            iss += 6;
        }
    }
};
//# sourceMappingURL=copy-step.js.map