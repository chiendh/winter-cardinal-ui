export var copyVertex = function (vertices, internalTransform, voffset, vcountPerPoint, pointCount, pointsValues, pointOffset) {
    var a = internalTransform.a;
    var b = internalTransform.b;
    var c = internalTransform.c;
    var d = internalTransform.d;
    var i = pointCount - 1;
    var iv = voffset + i * vcountPerPoint;
    if (pointOffset.isStaticX() && pointOffset.isStaticY()) {
        var ox = pointOffset.getX(0);
        var oy = pointOffset.getY(0);
        for (; 0 <= i; --i) {
            var ip = i << 1;
            var px = pointsValues[ip] + ox;
            var py = pointsValues[ip + 1] + oy;
            var dx = a * px + c * py;
            var dy = b * px + d * py;
            var ivd = iv << 1;
            var ivs = voffset << 1;
            for (var j = 0; j < vcountPerPoint; ++j) {
                vertices[ivd] = vertices[ivs] + dx;
                vertices[ivd + 1] = vertices[ivs + 1] + dy;
                ivd += 2;
                ivs += 2;
            }
            iv -= vcountPerPoint;
        }
    }
    else {
        for (; 0 <= i; --i) {
            var ip = i << 1;
            var px = pointsValues[ip] + pointOffset.getX(i);
            var py = pointsValues[ip + 1] + pointOffset.getY(i);
            var dx = a * px + c * py;
            var dy = b * px + d * py;
            var ivd = iv << 1;
            var ivs = voffset << 1;
            for (var j = 0; j < vcountPerPoint; ++j) {
                vertices[ivd] = vertices[ivs] + dx;
                vertices[ivd + 1] = vertices[ivs + 1] + dy;
                ivd += 2;
                ivs += 2;
            }
            iv -= vcountPerPoint;
        }
    }
};
//# sourceMappingURL=copy-vertex.js.map