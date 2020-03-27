import { buildColor } from "./build-color";
export var toLineOfAnyPointCount = function (pointCount) {
    return (Math.ceil(pointCount / 12) * 12);
};
export var buildLineOfAnyColor = function (voffset, vcountPerPoint, point, pointCount, colors, isEnabled, colorDef, alphaDef) {
    if (isEnabled) {
        if (point.isStaticColor()) {
            var color = point.getColor(0, colorDef);
            if (point.isStaticAlpha()) {
                var alpha = point.getAlpha(0, alphaDef);
                buildColor(color, alpha, voffset, vcountPerPoint * pointCount, colors);
            }
            else {
                for (var i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint) {
                    var alpha = point.getAlpha(i, alphaDef);
                    buildColor(color, alpha, iv, vcountPerPoint, colors);
                }
            }
        }
        else {
            if (point.isStaticAlpha()) {
                var alpha = point.getAlpha(0, alphaDef);
                for (var i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint) {
                    var color = point.getColor(i, colorDef);
                    buildColor(color, alpha, iv, vcountPerPoint, colors);
                }
            }
            else {
                for (var i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint) {
                    var color = point.getColor(i, colorDef);
                    var alpha = point.getAlpha(i, alphaDef);
                    buildColor(color, alpha, iv, vcountPerPoint, colors);
                }
            }
        }
    }
    else {
        if (point.isStaticColor()) {
            var color = point.getColor(0, colorDef);
            buildColor(color, 0, voffset, vcountPerPoint * pointCount, colors);
        }
        else {
            for (var i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint) {
                var color = point.getColor(i, colorDef);
                buildColor(color, 0, iv, vcountPerPoint, colors);
            }
        }
    }
};
//# sourceMappingURL=build-line-of-any.js.map