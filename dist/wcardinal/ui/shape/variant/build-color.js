export var buildColor = function (color, alpha, voffset, vcount, colors) {
    var r = ((color >> 16) & 0xFF) / 255.0 * alpha;
    var g = ((color >> 8) & 0xFF) / 255.0 * alpha;
    var b = ((color >> 0) & 0xFF) / 255.0 * alpha;
    var a = alpha;
    var ic = voffset << 2;
    for (var i = 0; i < vcount; ++i) {
        colors[ic + 0] = r;
        colors[ic + 1] = g;
        colors[ic + 2] = b;
        colors[ic + 3] = a;
        ic += 4;
    }
};
//# sourceMappingURL=build-color.js.map