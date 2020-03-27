/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { UtilRgb } from "../../util/util-rgb";
var EShapeGradients = /** @class */ (function () {
    function EShapeGradients() {
    }
    EShapeGradients.serializeGradient = function (gradient) {
        var points = gradient.points;
        var result = "[" + gradient.direction;
        for (var i = 0, imax = points.length, j = 1; i < imax; i += 1, j += 3) {
            var point = points[i];
            result += "," + point.color + "," + point.alpha + "," + point.position;
        }
        result += "]";
        return result;
    };
    EShapeGradients.parseGradient = function (target) {
        try {
            return JSON.parse(target);
        }
        catch (e) {
            return null;
        }
    };
    EShapeGradients.deserializeGradient = function (target) {
        var parsed = this.parseGradient(target);
        if (parsed == null || parsed.length < 7) {
            return undefined;
        }
        else {
            var direction = parsed[0];
            var points = [];
            for (var i = 1, imax = parsed.length; i < imax; i += 3) {
                points.push({
                    color: parsed[i + 0],
                    alpha: parsed[i + 1],
                    position: parsed[i + 2]
                });
            }
            return {
                points: points,
                direction: direction
            };
        }
    };
    EShapeGradients.toGradientId = function (gradient, manager) {
        if (gradient != null) {
            if (gradient.serialized == null) {
                gradient.serialized = this.serializeGradient(gradient);
            }
            return manager.add(gradient.serialized);
        }
        return -1;
    };
    EShapeGradients.toGradientImageUrl = function (gradient) {
        var direction = gradient.direction;
        var points = gradient.points;
        var stops = "";
        for (var i = 0, imax = points.length; i < imax; ++i) {
            var point = points[i];
            var color = UtilRgb.toCode(point.color);
            var alpha = point.alpha;
            var offset = point.position * 100;
            stops += "<stop offset=\"" + offset + "%\" stop-color=\"#" + color + "\" stop-opacity=\"" + alpha + "\" />";
        }
        var radian = direction * Math.PI / 180;
        var dx = 0.5 * Math.cos(radian);
        var dy = -0.5 * Math.sin(radian);
        var url = "data:image/svg+xml;base64," + btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">" +
            "<defs>" +
            ("<linearGradient id=\"o2glkm3aeu2oio\" x1=\"" + (0.5 - dx) + "\" x2=\"" + (0.5 + dx) + "\" y1=\"" + (0.5 - dy) + "\" y2=\"" + (0.5 + dy) + "\">") +
            stops +
            "</linearGradient>" +
            "</defs>" +
            "<rect x=\"0\" y=\"0\" width=\"32\" height=\"32\" stroke=\"none\" fill=\"url(#o2glkm3aeu2oio)\" />" +
            "</svg>");
        return url;
    };
    return EShapeGradients;
}());
export { EShapeGradients };
//# sourceMappingURL=e-shape-gradients.js.map