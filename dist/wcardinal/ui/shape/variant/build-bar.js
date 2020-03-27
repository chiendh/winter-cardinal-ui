import { Point } from "pixi.js";
import { toDash } from "./to-dash";
import { toScaleInvariant } from "./to-scale-invariant";
export var BAR_VERTEX_COUNT = 4;
export var BAR_INDEX_COUNT = 2;
var BAR_FMIN = 0.00001;
var BAR_WORK_POINT = new Point();
export var buildBarClipping = function (clippings, voffset) {
    var ic = voffset * 3;
    clippings[ic + 0] = 1;
    clippings[ic + 1] = 0;
    clippings[ic + 2] = 3;
    clippings[ic + 3] = 0;
    clippings[ic + 4] = 1;
    clippings[ic + 5] = 5;
    clippings[ic + 6] = 1;
    clippings[ic + 7] = 0;
    clippings[ic + 8] = 3;
    clippings[ic + 9] = 0;
    clippings[ic + 10] = 1;
    clippings[ic + 11] = 5;
};
export var buildBarIndex = function (indices, voffset, ioffset) {
    var ii = ioffset * 3;
    indices[ii + 0] = voffset + 0;
    indices[ii + 1] = voffset + 2;
    indices[ii + 2] = voffset + 1;
    indices[ii + 3] = voffset + 1;
    indices[ii + 4] = voffset + 2;
    indices[ii + 5] = voffset + 3;
};
export var buildBarVertexStepAndColorFill = function (vertices, steps, colorFills, voffset, pointValues, pointsStyle, pointsSize, strokeWidth, internalTransform) {
    // First point
    var a = internalTransform.a;
    var b = internalTransform.b;
    var c = internalTransform.c;
    var d = internalTransform.d;
    var tx = internalTransform.tx;
    var ty = internalTransform.ty;
    var pv0 = pointValues[0];
    var pv1 = pointValues[1];
    var p1x = a * pv0 + c * pv1 + tx;
    var p1y = b * pv0 + d * pv1 + ty;
    // Last point
    var pv2 = pointValues[2];
    var pv3 = pointValues[3];
    var p2x = a * pv2 + c * pv3 + tx;
    var p2y = b * pv2 + d * pv3 + ty;
    // Normal
    var dx = p2x - p1x;
    var dy = p2y - p1y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var l = distance;
    if (0 <= pointsSize && BAR_FMIN < distance) {
        var ratio = pointsSize / distance;
        dx *= ratio;
        dy *= ratio;
        p2x = p1x + dx;
        p2y = p1y + dy;
        l = pointsSize;
    }
    // Other points
    var p0x = p1x - dx;
    var p0y = p1y - dy;
    var p3x = p2x + dx;
    var p3y = p2y + dy;
    //
    var scaleInvariant = toScaleInvariant(pointsStyle);
    var iv = voffset << 1;
    var icf = voffset << 2;
    var is = voffset * 6;
    vertices[iv + 0] = p1x;
    vertices[iv + 1] = p1y;
    vertices[iv + 2] = p1x;
    vertices[iv + 3] = p1y;
    steps[is + 0] = strokeWidth;
    steps[is + 1] = scaleInvariant;
    steps[is + 2] = p0x;
    steps[is + 3] = p0y;
    steps[is + 4] = p2x;
    steps[is + 5] = p2y;
    steps[is + 6] = strokeWidth;
    steps[is + 7] = scaleInvariant;
    steps[is + 8] = p0x;
    steps[is + 9] = p0y;
    steps[is + 10] = p2x;
    steps[is + 11] = p2y;
    colorFills[icf + 0] = 0.0;
    colorFills[icf + 4] = 0.0;
    vertices[iv + 4] = p2x;
    vertices[iv + 5] = p2y;
    vertices[iv + 6] = p2x;
    vertices[iv + 7] = p2y;
    steps[is + 12] = strokeWidth;
    steps[is + 13] = scaleInvariant;
    steps[is + 14] = p1x;
    steps[is + 15] = p1y;
    steps[is + 16] = p3x;
    steps[is + 17] = p3y;
    steps[is + 18] = strokeWidth;
    steps[is + 19] = scaleInvariant;
    steps[is + 20] = p1x;
    steps[is + 21] = p1y;
    steps[is + 22] = p3x;
    steps[is + 23] = p3y;
    colorFills[icf + 8] = l;
    colorFills[icf + 12] = l;
    // Total length
    var dash = toDash(l, strokeWidth, pointsStyle, BAR_WORK_POINT);
    var dash0 = dash.x;
    var dash1 = dash.y;
    colorFills[icf + 1] = dash0;
    colorFills[icf + 2] = dash1;
    colorFills[icf + 3] = l;
    colorFills[icf + 5] = dash0;
    colorFills[icf + 6] = dash1;
    colorFills[icf + 7] = l;
    colorFills[icf + 9] = dash0;
    colorFills[icf + 10] = dash1;
    colorFills[icf + 11] = l;
    colorFills[icf + 13] = dash0;
    colorFills[icf + 14] = dash1;
    colorFills[icf + 15] = l;
};
export var buildBarUv = function (uvs, voffset, textureUvs) {
    var iuv = voffset << 1;
    uvs[iuv + 0] = textureUvs.x0;
    uvs[iuv + 1] = textureUvs.y0;
    uvs[iuv + 2] = textureUvs.x3;
    uvs[iuv + 3] = textureUvs.y3;
    uvs[iuv + 4] = textureUvs.x1;
    uvs[iuv + 5] = textureUvs.y1;
    uvs[iuv + 6] = textureUvs.x2;
    uvs[iuv + 7] = textureUvs.y2;
};
//# sourceMappingURL=build-bar.js.map