export var STEP_VALUES = [0, 0, 0];
export var toStep = function (size, strokeWidth, antialiasWeight, result) {
    var FMIN = 0.00001;
    if (FMIN < strokeWidth) {
        var dpc0 = size - strokeWidth;
        if (FMIN < dpc0) {
            var pc0 = antialiasWeight / dpc0;
            var pc1 = antialiasWeight / Math.max(FMIN, size);
            var swc = 1 / Math.max(FMIN, 1 - strokeWidth / size);
            result[0] = swc;
            result[1] = pc0;
            result[2] = pc1;
        }
        else {
            var pc0 = antialiasWeight / FMIN;
            var pc1 = antialiasWeight / Math.max(FMIN, size);
            var swc = 1 / FMIN;
            result[0] = swc;
            result[1] = pc0;
            result[2] = pc1;
        }
    }
    else {
        // Assumes strokeWidth === 0
        var pc = antialiasWeight / Math.max(FMIN, size);
        result[0] = 1;
        result[1] = pc;
        result[2] = pc;
    }
    return result;
};
//# sourceMappingURL=to-step.js.map