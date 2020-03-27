import { Point } from "pixi.js";
import { toIndexOf } from "../../util/to-index-of";
import { toDash } from "./to-dash";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";
var LINE_FMIN = 0.00001;
var LINE_WORK_POINT = new Point();
export var toLineVertexCount = function (pointCount) {
    return (Math.ceil(pointCount / 12) * 12) * 4 + 2;
};
export var buildLineClipping = function (clippings, voffset, vcount, pointCount, pointsClosed) {
    var ic = voffset * 3;
    if (2 <= pointCount) {
        // First
        if (!pointsClosed) {
            clippings[ic + 0] = 1;
            clippings[ic + 1] = 0;
            clippings[ic + 2] = 3;
            clippings[ic + 3] = 0;
            clippings[ic + 4] = 1;
            clippings[ic + 5] = 5;
            ic += 6;
        }
        // Middle
        for (var i = (pointsClosed ? 0 : 1), imax = pointCount - i; i < imax; ++i) {
            clippings[ic + 0] = 1;
            clippings[ic + 1] = 0;
            clippings[ic + 2] = 3;
            clippings[ic + 3] = 0;
            clippings[ic + 4] = 1;
            clippings[ic + 5] = 5;
            clippings[ic + 6] = 1;
            clippings[ic + 7] = 0;
            clippings[ic + 8] = 4;
            clippings[ic + 9] = 0;
            clippings[ic + 10] = 1;
            clippings[ic + 11] = 6;
            ic += 12;
        }
        // Last
        clippings[ic + 0] = 1;
        clippings[ic + 1] = 0;
        clippings[ic + 2] = 3;
        clippings[ic + 3] = 0;
        clippings[ic + 4] = 1;
        clippings[ic + 5] = 5;
        ic += 6;
    }
    // Fill the rest
    for (var icmax = (voffset + vcount) * 3; ic < icmax; ic += 3) {
        clippings[ic + 0] = 0;
        clippings[ic + 1] = 0;
        clippings[ic + 2] = 0;
    }
};
export var buildLineIndex = function (indices, voffset, ioffset, icount) {
    for (var ii = ioffset * 3, iimax = (ioffset + icount) * 3, io = voffset; ii < iimax; ii += 6, io += 2) {
        indices[ii + 0] = io + 0;
        indices[ii + 1] = io + 2;
        indices[ii + 2] = io + 1;
        indices[ii + 3] = io + 1;
        indices[ii + 4] = io + 2;
        indices[ii + 5] = io + 3;
    }
};
export var buildLineUv = function (uvs, colorFills, voffset, vcount, pointCount, pointsClosed, textureUvs, length) {
    var iuv = voffset << 1;
    if (2 <= pointCount) {
        var x0 = textureUvs.x0;
        var x1 = textureUvs.x1;
        var x2 = textureUvs.x2;
        var x3 = textureUvs.x3;
        var y0 = textureUvs.y0;
        var y1 = textureUvs.y1;
        var y2 = textureUvs.y2;
        var y3 = textureUvs.y3;
        var dx01 = x1 - x0;
        var dy01 = y1 - y0;
        var dx32 = x2 - x3;
        var dy32 = y2 - y3;
        // Uvs
        var icf = voffset << 2;
        var lengthInverse = 1 / Math.max(LINE_FMIN, length);
        var r = 0;
        // UV: First
        if (!pointsClosed) {
            r = colorFills[icf] * lengthInverse;
            uvs[iuv + 0] = x0 + r * dx01;
            uvs[iuv + 1] = y0 + r * dy01;
            uvs[iuv + 2] = x3 + r * dx32;
            uvs[iuv + 3] = y3 + r * dy32;
            iuv += 4;
            icf += 8;
        }
        // UV: Middle
        for (var i = (pointsClosed ? 0 : 1), imax = pointCount - i; i < imax; ++i) {
            r = colorFills[icf] * lengthInverse;
            uvs[iuv + 0] = x0 + r * dx01;
            uvs[iuv + 1] = y0 + r * dy01;
            uvs[iuv + 2] = x3 + r * dx32;
            uvs[iuv + 3] = y3 + r * dy32;
            iuv += 4;
            icf += 8;
            r = colorFills[icf] * lengthInverse;
            uvs[iuv + 0] = x0 + r * dx01;
            uvs[iuv + 1] = y0 + r * dy01;
            uvs[iuv + 2] = x3 + r * dx32;
            uvs[iuv + 3] = y3 + r * dy32;
            iuv += 4;
            icf += 8;
        }
        // UV: Last
        r = colorFills[icf] * lengthInverse;
        uvs[iuv + 0] = x0 + r * dx01;
        uvs[iuv + 1] = y0 + r * dy01;
        uvs[iuv + 2] = x3 + r * dx32;
        uvs[iuv + 3] = y3 + r * dy32;
        iuv += 4;
    }
    // Fill the rest
    for (var iuvmax = ((voffset + vcount) << 1); iuv < iuvmax; iuv += 2) {
        uvs[iuv + 0] = 0;
        uvs[iuv + 1] = 0;
    }
};
export var buildLineVertexStepAndColorFill = function (vertices, steps, colorFills, voffset, vcount, pointCount, pointsClosed, pointValues, pointSegments, pointsStyle, strokeWidth, internalTransform) {
    var iv = voffset << 1;
    var is = voffset * 6;
    var icf = voffset << 2;
    var lmax = 0;
    var px = 0;
    var py = 0;
    if (2 <= pointCount) {
        var scaleInvariant = toScaleInvariant(pointsStyle);
        //
        var l = 0;
        var lprev = 0;
        var lnext = 0;
        var llop = 0;
        var llo = 0;
        var pprevx = 0;
        var pprevy = 0;
        var pnextx = 0;
        var pnexty = 0;
        var pseg = false;
        var psegnext = false;
        var icfprev = icf;
        var loffset = 0;
        //
        var a = internalTransform.a;
        var b = internalTransform.b;
        var c = internalTransform.c;
        var d = internalTransform.d;
        var tx = internalTransform.tx;
        var ty = internalTransform.ty;
        // First point
        var pv0 = pointValues[0];
        var pv1 = pointValues[1];
        var pfirstx = a * pv0 + c * pv1 + tx;
        var pfirsty = b * pv0 + d * pv1 + ty;
        var psegfirst = (0 <= toIndexOf(pointSegments, 0));
        // Last point
        var lastIndex = (pointCount - 1) << 1;
        var pvl0 = pointValues[lastIndex + 0];
        var pvl1 = pointValues[lastIndex + 1];
        var plastx = a * pvl0 + c * pvl1 + tx;
        var plasty = b * pvl0 + d * pvl1 + ty;
        var pseglast = (0 <= toIndexOf(pointSegments, pointCount - 1));
        // Second point
        var psecondx = plastx;
        var psecondy = plasty;
        var psegsecond = pseglast;
        if (2 < pointCount) {
            var pv2 = pointValues[2];
            var pv3 = pointValues[3];
            psecondx = a * pv2 + c * pv3 + tx;
            psecondy = b * pv2 + d * pv3 + ty;
            psegsecond = (0 <= toIndexOf(pointSegments, 1));
        }
        // First segment
        if (pointsClosed) {
            px = plastx;
            py = plasty;
            pnextx = pfirstx;
            pnexty = pfirsty;
            pseg = pseglast;
            psegnext = psegfirst;
        }
        else {
            pprevx = pfirstx - (psecondx - pfirstx);
            pprevy = pfirsty - (psecondy - pfirsty);
            px = pfirstx;
            py = pfirsty;
            pnextx = psecondx;
            pnexty = psecondy;
            pseg = psegfirst;
            psegnext = psegsecond;
            lnext += toLength(px, py, pnextx, pnexty);
            //
            vertices[iv + 0] = px;
            vertices[iv + 1] = py;
            vertices[iv + 2] = px;
            vertices[iv + 3] = py;
            steps[is + 0] = strokeWidth;
            steps[is + 1] = scaleInvariant;
            steps[is + 2] = pprevx;
            steps[is + 3] = pprevy;
            steps[is + 4] = pnextx;
            steps[is + 5] = pnexty;
            steps[is + 6] = strokeWidth;
            steps[is + 7] = scaleInvariant;
            steps[is + 8] = pprevx;
            steps[is + 9] = pprevy;
            steps[is + 10] = pnextx;
            steps[is + 11] = pnexty;
            colorFills[icf + 0] = llo;
            colorFills[icf + 4] = llo;
            iv += 4;
            is += 12;
            icf += 8;
        }
        // Middle segments
        for (var i = (pointsClosed ? 0 : 1), imax = pointCount - i; i < imax; ++i) {
            pprevx = px;
            pprevy = py;
            px = pnextx;
            py = pnexty;
            pseg = psegnext;
            if (i === pointCount - 2) {
                pnextx = plastx;
                pnexty = plasty;
                psegnext = pseglast;
            }
            else if (i === 0) {
                pnextx = psecondx;
                pnexty = psecondy;
                psegnext = psegsecond;
            }
            else if (i < pointCount - 1) {
                var nextIndex = (i + 1) << 1;
                var pvn0 = pointValues[nextIndex + 0];
                var pvn1 = pointValues[nextIndex + 1];
                pnextx = a * pvn0 + c * pvn1 + tx;
                pnexty = b * pvn0 + d * pvn1 + ty;
                psegnext = (0 <= toIndexOf(pointSegments, i + 1));
            }
            else {
                pnextx = pfirstx;
                pnexty = pfirsty;
                psegnext = psegfirst;
            }
            lprev = l;
            l = lnext;
            lnext += toLength(px, py, pnextx, pnexty);
            var pnextxn = pnextx;
            var pnextyn = pnexty;
            var loffsetprev = loffset;
            if (pseg) {
                pprevx = px - (pnextx - px);
                pprevy = py - (pnexty - py);
                lmax = Math.max(lmax, llo);
                llop = lprev - loffset;
                var dash = toDash(llop, strokeWidth, pointsStyle, LINE_WORK_POINT);
                var dash0 = dash.x;
                var dash1 = dash.y;
                for (var j = icfprev; j < icf + 8; j += 4) {
                    colorFills[j + 1] = dash0;
                    colorFills[j + 2] = dash1;
                    colorFills[j + 3] = llop;
                }
                icfprev = icf + 8;
                loffsetprev = loffset;
                loffset = l;
            }
            else if (psegnext) {
                pnextxn = px + (px - pprevx);
                pnextyn = py + (py - pprevy);
            }
            // Vertices
            vertices[iv + 0] = px;
            vertices[iv + 1] = py;
            vertices[iv + 2] = px;
            vertices[iv + 3] = py;
            steps[is + 0] = strokeWidth;
            steps[is + 1] = scaleInvariant;
            steps[is + 2] = pprevx;
            steps[is + 3] = pprevy;
            steps[is + 4] = pnextxn;
            steps[is + 5] = pnextyn;
            steps[is + 6] = strokeWidth;
            steps[is + 7] = scaleInvariant;
            steps[is + 8] = pprevx;
            steps[is + 9] = pprevy;
            steps[is + 10] = pnextxn;
            steps[is + 11] = pnextyn;
            llop = l - loffsetprev;
            colorFills[icf + 0] = llop;
            colorFills[icf + 4] = llop;
            iv += 4;
            is += 12;
            icf += 8;
            vertices[iv + 0] = px;
            vertices[iv + 1] = py;
            vertices[iv + 2] = px;
            vertices[iv + 3] = py;
            steps[is + 0] = strokeWidth;
            steps[is + 1] = scaleInvariant;
            steps[is + 2] = pprevx;
            steps[is + 3] = pprevy;
            steps[is + 4] = pnextxn;
            steps[is + 5] = pnextyn;
            steps[is + 6] = strokeWidth;
            steps[is + 7] = scaleInvariant;
            steps[is + 8] = pprevx;
            steps[is + 9] = pprevy;
            steps[is + 10] = pnextxn;
            steps[is + 11] = pnextyn;
            llo = l - loffset;
            colorFills[icf + 0] = llo;
            colorFills[icf + 4] = llo;
            iv += 4;
            is += 12;
            icf += 8;
        }
        // Last segment
        {
            pprevx = px;
            pprevy = py;
            px = pnextx;
            py = pnexty;
            pseg = psegnext;
            if (pointsClosed) {
                pnextx = psecondx;
                pnexty = psecondy;
                psegnext = psegsecond;
            }
            else {
                pnextx = px + (px - pprevx);
                pnexty = py + (py - pprevy);
                psegnext = false;
            }
            lprev = l;
            l = lnext;
            var pnextxn = pnextx;
            var pnextyn = pnexty;
            var loffsetprev = loffset;
            if (pseg) {
                pprevx = px - (pnextx - px);
                pprevy = py - (pnexty - py);
                lmax = Math.max(lmax, llo);
                llop = lprev - loffset;
                var dash = toDash(llop, strokeWidth, pointsStyle, LINE_WORK_POINT);
                var dash0 = dash.x;
                var dash1 = dash.y;
                for (var j = icfprev; j < icf + 8; j += 4) {
                    colorFills[j + 1] = dash0;
                    colorFills[j + 2] = dash1;
                    colorFills[j + 3] = llop;
                }
                icfprev = icf + 8;
                loffsetprev = loffset;
                loffset = l;
            }
            else if (psegnext) {
                pnextxn = px + (px - pprevx);
                pnextyn = py + (py - pprevy);
            }
            // Vertices
            vertices[iv + 0] = px;
            vertices[iv + 1] = py;
            vertices[iv + 2] = px;
            vertices[iv + 3] = py;
            steps[is + 0] = strokeWidth;
            steps[is + 1] = scaleInvariant;
            steps[is + 2] = pprevx;
            steps[is + 3] = pprevy;
            steps[is + 4] = pnextxn;
            steps[is + 5] = pnextyn;
            steps[is + 6] = strokeWidth;
            steps[is + 7] = scaleInvariant;
            steps[is + 8] = pprevx;
            steps[is + 9] = pprevy;
            steps[is + 10] = pnextxn;
            steps[is + 11] = pnextyn;
            llop = l - loffsetprev;
            lmax = Math.max(lmax, llop);
            colorFills[icf + 0] = llop;
            colorFills[icf + 4] = llop;
            iv += 4;
            is += 12;
            icf += 8;
            // Total length
            if (icfprev < icf) {
                var dash = toDash(llop, strokeWidth, pointsStyle, LINE_WORK_POINT);
                var dash0 = dash.x;
                var dash1 = dash.y;
                if (pointsClosed) {
                    for (var i = icfprev; i < icf; i += 4) {
                        colorFills[i + 1] = dash0;
                        colorFills[i + 2] = dash1;
                        colorFills[i + 3] = -1;
                    }
                }
                else {
                    for (var i = icfprev; i < icf; i += 4) {
                        colorFills[i + 1] = dash0;
                        colorFills[i + 2] = dash1;
                        colorFills[i + 3] = llop;
                    }
                }
            }
        }
    }
    // Fill the rest
    for (var ivmax = ((voffset + vcount) << 1); iv < ivmax; iv += 2, is += 6, icf += 4) {
        vertices[iv + 0] = px;
        vertices[iv + 1] = py;
        steps[is + 0] = 0;
        steps[is + 1] = 0;
        steps[is + 2] = 0;
        steps[is + 3] = 0;
        steps[is + 4] = 0;
        steps[is + 5] = 0;
        colorFills[icf + 0] = 0;
        colorFills[icf + 1] = 0;
        colorFills[icf + 2] = 0;
        colorFills[icf + 4] = 0;
    }
    return lmax;
};
//# sourceMappingURL=build-line.js.map