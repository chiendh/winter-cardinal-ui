import { Point } from "pixi.js";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { toLength } from "./to-length";
import { STEP_VALUES, toStep } from "./to-step";
export var RECTANGLE_VERTEX_COUNT = 18;
export var RECTANGLE_INDEX_COUNT = 12;
export var RECTANGLE_WORLD_SIZE = [0, 0, 0];
var RECTANGLE_WORK_POINT = new Point();
export var buildRectangleClipping = function (clippings, voffset, worldSize) {
    var br = worldSize[0];
    var bri = 1 - br;
    var worldSizeX = worldSize[1];
    var worldSizeY = worldSize[2];
    if (worldSizeX < worldSizeY) {
        buildRectangleClippingVertical(0, 1, 0, bri, clippings, voffset);
    }
    else {
        buildRectangleClippingVertical(1, 0, bri, 0, clippings, voffset);
    }
};
export var buildRectangleClippingVertical = function (cx, cy, cbx, cby, clippings, voffset) {
    var ic = voffset * 3;
    clippings[ic + 0] = cx;
    clippings[ic + 1] = cy;
    clippings[ic + 2] = 0;
    clippings[ic + 3] = cx;
    clippings[ic + 4] = cy;
    clippings[ic + 5] = 0;
    clippings[ic + 6] = cx;
    clippings[ic + 7] = cy;
    clippings[ic + 8] = 0;
    ic += 9;
    clippings[ic + 0] = cbx;
    clippings[ic + 1] = cby;
    clippings[ic + 2] = 0;
    ic += 3;
    clippings[ic + 0] = cbx;
    clippings[ic + 1] = cby;
    clippings[ic + 2] = 0;
    ic += 3;
    clippings[ic + 0] = cx;
    clippings[ic + 1] = cy;
    clippings[ic + 2] = 0;
    clippings[ic + 3] = cx;
    clippings[ic + 4] = cy;
    clippings[ic + 5] = 0;
    clippings[ic + 6] = cx;
    clippings[ic + 7] = cy;
    clippings[ic + 8] = 0;
    ic += 9;
    // --------------------------------
    clippings[ic + 0] = cy;
    clippings[ic + 1] = cx;
    clippings[ic + 2] = 0;
    clippings[ic + 3] = cy;
    clippings[ic + 4] = cx;
    clippings[ic + 5] = 0;
    clippings[ic + 6] = cy;
    clippings[ic + 7] = cx;
    clippings[ic + 8] = 0;
    clippings[ic + 9] = cy;
    clippings[ic + 10] = cx;
    clippings[ic + 11] = 0;
    ic += 12;
    clippings[ic + 0] = 0;
    clippings[ic + 1] = 0;
    clippings[ic + 2] = 0;
    ic += 3;
    clippings[ic + 0] = 0;
    clippings[ic + 1] = 0;
    clippings[ic + 2] = 0;
    ic += 3;
    // --------------------------------
    clippings[ic + 0] = cy;
    clippings[ic + 1] = cx;
    clippings[ic + 2] = 0;
    clippings[ic + 3] = cy;
    clippings[ic + 4] = cx;
    clippings[ic + 5] = 0;
    clippings[ic + 6] = cy;
    clippings[ic + 7] = cx;
    clippings[ic + 8] = 0;
    clippings[ic + 9] = cy;
    clippings[ic + 10] = cx;
    clippings[ic + 11] = 0;
};
export var buildRectangleIndex = function (indices, voffset, ioffset) {
    var ii = ioffset * 3;
    indices[ii + 0] = voffset + 0;
    indices[ii + 1] = voffset + 1;
    indices[ii + 2] = voffset + 3;
    ii += 3;
    indices[ii + 0] = voffset + 1;
    indices[ii + 1] = voffset + 2;
    indices[ii + 2] = voffset + 3;
    ii += 3;
    indices[ii + 0] = voffset + 4;
    indices[ii + 1] = voffset + 6;
    indices[ii + 2] = voffset + 5;
    ii += 3;
    indices[ii + 0] = voffset + 4;
    indices[ii + 1] = voffset + 7;
    indices[ii + 2] = voffset + 6;
    ii += 3;
    // --------------------------------
    indices[ii + 0] = voffset + 8;
    indices[ii + 1] = voffset + 12;
    indices[ii + 2] = voffset + 9;
    ii += 3;
    indices[ii + 0] = voffset + 9;
    indices[ii + 1] = voffset + 12;
    indices[ii + 2] = voffset + 10;
    ii += 3;
    indices[ii + 0] = voffset + 10;
    indices[ii + 1] = voffset + 12;
    indices[ii + 2] = voffset + 13;
    ii += 3;
    indices[ii + 0] = voffset + 10;
    indices[ii + 1] = voffset + 13;
    indices[ii + 2] = voffset + 11;
    ii += 3;
    // --------------------------------
    indices[ii + 0] = voffset + 14;
    indices[ii + 1] = voffset + 15;
    indices[ii + 2] = voffset + 12;
    ii += 3;
    indices[ii + 0] = voffset + 12;
    indices[ii + 1] = voffset + 15;
    indices[ii + 2] = voffset + 16;
    ii += 3;
    indices[ii + 0] = voffset + 16;
    indices[ii + 1] = voffset + 13;
    indices[ii + 2] = voffset + 12;
    ii += 3;
    indices[ii + 0] = voffset + 13;
    indices[ii + 1] = voffset + 16;
    indices[ii + 2] = voffset + 17;
};
export var buildRectangleVertex = function (vertices, voffset, originX, originY, sizeX, sizeY, strokeAlign, strokeWidth, internalTransform, worldSize) {
    // 0               1
    // |-------|-------|
    // |       |       |
    // |-------|-------|
    // |       |       |
    // |-------|-------|
    //                 2
    var s = strokeAlign * strokeWidth;
    var sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
    var sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
    var work = RECTANGLE_WORK_POINT;
    work.set(originX - sx, originY - sy);
    internalTransform.apply(work, work);
    var bx0 = work.x;
    var by0 = work.y;
    work.set(originX + sx, originY - sy);
    internalTransform.apply(work, work);
    var bx1 = work.x;
    var by1 = work.y;
    work.set(originX + sx, originY + sy);
    internalTransform.apply(work, work);
    var bx2 = work.x;
    var by2 = work.y;
    var bx3 = bx0 + (bx2 - bx1);
    var by3 = by0 + (by2 - by1);
    var ax = toLength(bx0, by0, bx1, by1) * 0.5;
    var ay = toLength(bx1, by1, bx2, by2) * 0.5;
    worldSize[1] = ax;
    worldSize[2] = ay;
    if (ax <= ay) {
        var br = ax / ay;
        worldSize[0] = br;
        buildRectangleVertexVertical(br, bx0, by0, bx1, by1, bx2, by2, bx3, by3, vertices, voffset, worldSize);
    }
    else {
        var br = ay / ax;
        worldSize[0] = br;
        buildRectangleVertexVertical(br, bx3, by3, bx0, by0, bx1, by1, bx2, by2, vertices, voffset, worldSize);
    }
};
export var buildRectangleVertexVertical = function (br, bx0, by0, bx1, by1, bx2, by2, bx3, by3, vertices, voffset, worldSize) {
    // 0       1       2
    // |-------|-------|
    // |       |       |
    // |-------3-------|
    // |       |       |
    // |-------4-------|
    // |       |       |
    // |-------|-------|
    // 5       6       7
    var x0 = bx0;
    var y0 = by0;
    var x1 = (bx0 + bx1) * 0.5;
    var y1 = (by0 + by1) * 0.5;
    var x2 = bx1;
    var y2 = by1;
    var xc = (bx0 + bx2) * 0.5;
    var yc = (by0 + by2) * 0.5;
    var x3 = x1 + br * (xc - x1);
    var y3 = y1 + br * (yc - y1);
    var x5 = bx3;
    var y5 = by3;
    var x6 = (bx3 + bx2) * 0.5;
    var y6 = (by3 + by2) * 0.5;
    var x7 = bx2;
    var y7 = by2;
    var x4 = x6 + br * (xc - x6);
    var y4 = y6 + br * (yc - y6);
    var iv = voffset << 1;
    vertices[iv + 0] = x0;
    vertices[iv + 1] = y0;
    vertices[iv + 2] = x1;
    vertices[iv + 3] = y1;
    vertices[iv + 4] = x2;
    vertices[iv + 5] = y2;
    iv += 6;
    vertices[iv + 0] = x3;
    vertices[iv + 1] = y3;
    iv += 2;
    vertices[iv + 0] = x4;
    vertices[iv + 1] = y4;
    iv += 2;
    vertices[iv + 0] = x5;
    vertices[iv + 1] = y5;
    vertices[iv + 2] = x6;
    vertices[iv + 3] = y6;
    vertices[iv + 4] = x7;
    vertices[iv + 5] = y7;
    iv += 6;
    // 8               14
    // |-------|-------|
    // |       |       |
    // 9-------12------15
    // |       |       |
    // 10------13------16
    // |       |       |
    // |-------|-------|
    // 11              17
    var xcl = (bx0 + bx3) * 0.5;
    var ycl = (by0 + by3) * 0.5;
    var x8 = bx0;
    var y8 = by0;
    var x9 = bx0 + br * (xcl - bx0);
    var y9 = by0 + br * (ycl - by0);
    var x10 = bx3 + br * (xcl - bx3);
    var y10 = by3 + br * (ycl - by3);
    var x11 = bx3;
    var y11 = by3;
    var x12 = x3;
    var y12 = y3;
    var x13 = x4;
    var y13 = y4;
    var xcr = (bx1 + bx2) * 0.5;
    var ycr = (by1 + by2) * 0.5;
    var x14 = bx1;
    var y14 = by1;
    var x15 = bx1 + br * (xcr - bx1);
    var y15 = by1 + br * (ycr - by1);
    var x16 = bx2 + br * (xcr - bx2);
    var y16 = by2 + br * (ycr - by2);
    var x17 = bx2;
    var y17 = by2;
    vertices[iv + 0] = x8;
    vertices[iv + 1] = y8;
    vertices[iv + 2] = x9;
    vertices[iv + 3] = y9;
    vertices[iv + 4] = x10;
    vertices[iv + 5] = y10;
    vertices[iv + 6] = x11;
    vertices[iv + 7] = y11;
    iv += 8;
    vertices[iv + 0] = x12;
    vertices[iv + 1] = y12;
    iv += 2;
    vertices[iv + 0] = x13;
    vertices[iv + 1] = y13;
    iv += 2;
    vertices[iv + 0] = x14;
    vertices[iv + 1] = y14;
    vertices[iv + 2] = x15;
    vertices[iv + 3] = y15;
    vertices[iv + 4] = x16;
    vertices[iv + 5] = y16;
    vertices[iv + 6] = x17;
    vertices[iv + 7] = y17;
};
export var buildRectangleStep = function (voffset, steps, strokeWidth, strokeSide, antialiasWeight, worldSize) {
    var br = worldSize[0];
    var bri = 1 - br;
    var worldSizeX = worldSize[1];
    var worldSizeY = worldSize[2];
    toStep(worldSizeX, strokeWidth, antialiasWeight, STEP_VALUES);
    var swx = STEP_VALUES[0];
    var px0 = STEP_VALUES[1];
    var px1 = STEP_VALUES[2];
    toStep(worldSizeY, strokeWidth, antialiasWeight, STEP_VALUES);
    var swy = STEP_VALUES[0];
    var py0 = STEP_VALUES[1];
    var py1 = STEP_VALUES[2];
    var swt = swy;
    var pt0 = py0;
    if (!(strokeSide & EShapeStrokeSide.TOP)) {
        swt = 1;
        pt0 = py1;
    }
    var swr = swx;
    var pr0 = px0;
    if (!(strokeSide & EShapeStrokeSide.RIGHT)) {
        swr = 1;
        pr0 = px1;
    }
    var swb = swy;
    var pb0 = py0;
    if (!(strokeSide & EShapeStrokeSide.BOTTOM)) {
        swb = 1;
        pb0 = py1;
    }
    var swl = swx;
    var pl0 = px0;
    if (!(strokeSide & EShapeStrokeSide.LEFT)) {
        swl = 1;
        pl0 = px1;
    }
    var pc0 = 0.5 * (pl0 + pr0);
    var pm0 = 0.5 * (pt0 + pb0);
    if (worldSizeX < worldSizeY) {
        buildRectangleStepVertical(bri, swx, px0, px1, swy, py0, py1, swt, pt0, swr, pr0, swb, pb0, swl, pl0, pc0, pm0, voffset, steps);
    }
    else {
        buildRectangleStepHorizontal(bri, swx, px0, px1, swy, py0, py1, swt, pt0, swr, pr0, swb, pb0, swl, pl0, pc0, pm0, voffset, steps);
    }
};
export var buildRectangleStepVertical = function (bri, swx, px0, px1, swy, py0, py1, swt, pt0, swr, pr0, swb, pb0, swl, pl0, pc0, pm0, voffset, steps) {
    var is = voffset * 6;
    // 0
    steps[is] = swl;
    steps[is + 1] = swt;
    steps[is + 2] = pl0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 1
    steps[is] = 0;
    steps[is + 1] = swt;
    steps[is + 2] = pc0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 2
    steps[is] = swr;
    steps[is + 1] = swt;
    steps[is + 2] = pr0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 3
    steps[is] = 0;
    steps[is + 1] = bri * swt;
    steps[is + 2] = pc0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 4
    steps[is] = 0;
    steps[is + 1] = bri * swb;
    steps[is + 2] = pc0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 5
    steps[is] = swl;
    steps[is + 1] = swb;
    steps[is + 2] = pl0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 6
    steps[is] = 0;
    steps[is + 1] = swb;
    steps[is + 2] = pc0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 7
    steps[is] = swr;
    steps[is + 1] = swb;
    steps[is + 2] = pr0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // ------------------------------
    // 8
    steps[is] = swl;
    steps[is + 1] = swt;
    steps[is + 2] = pl0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 9
    steps[is] = swl;
    steps[is + 1] = bri * swt;
    steps[is + 2] = pl0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 10
    steps[is] = swl;
    steps[is + 1] = bri * swb;
    steps[is + 2] = pl0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 11
    steps[is] = swl;
    steps[is + 1] = swb;
    steps[is + 2] = pl0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // ------------------------------
    // 12
    steps[is] = 0;
    steps[is + 1] = bri * swt;
    steps[is + 2] = pc0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 13
    steps[is] = 0;
    steps[is + 1] = bri * swb;
    steps[is + 2] = pc0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // ------------------------------
    // 14
    steps[is] = swr;
    steps[is + 1] = swt;
    steps[is + 2] = pr0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 15
    steps[is] = swr;
    steps[is + 1] = bri * swt;
    steps[is + 2] = pr0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 16
    steps[is] = swr;
    steps[is + 1] = bri * swb;
    steps[is + 2] = pr0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 17
    steps[is] = swr;
    steps[is + 1] = swb;
    steps[is + 2] = pr0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
};
export var buildRectangleStepHorizontal = function (bri, swx, px0, px1, swy, py0, py1, swt, pt0, swr, pr0, swb, pb0, swl, pl0, pc0, pm0, voffset, steps) {
    var is = voffset * 6;
    // 0
    steps[is] = swl;
    steps[is + 1] = swb;
    steps[is + 2] = pl0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 1
    steps[is] = swl;
    steps[is + 1] = 0;
    steps[is + 2] = pl0;
    steps[is + 3] = pm0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 2
    steps[is] = swl;
    steps[is + 1] = swt;
    steps[is + 2] = pl0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 3
    steps[is] = bri * swl;
    steps[is + 1] = 0;
    steps[is + 2] = pl0;
    steps[is + 3] = pm0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 4
    steps[is] = bri * swr;
    steps[is + 1] = 0;
    steps[is + 2] = pr0;
    steps[is + 3] = pm0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 5
    steps[is] = swr;
    steps[is + 1] = swb;
    steps[is + 2] = pr0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 6
    steps[is] = swr;
    steps[is + 1] = 0;
    steps[is + 2] = pr0;
    steps[is + 3] = pm0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 7
    steps[is] = swr;
    steps[is + 1] = swt;
    steps[is + 2] = pr0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // ------------------------------
    // 8
    steps[is] = swl;
    steps[is + 1] = swb;
    steps[is + 2] = pl0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 9
    steps[is] = bri * swl;
    steps[is + 1] = swb;
    steps[is + 2] = pl0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 10
    steps[is] = bri * swr;
    steps[is + 1] = swb;
    steps[is + 2] = pr0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 11
    steps[is] = swr;
    steps[is + 1] = swb;
    steps[is + 2] = pr0;
    steps[is + 3] = pb0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // ------------------------------
    // 12
    steps[is] = bri * swl;
    steps[is + 1] = 0;
    steps[is + 2] = pl0;
    steps[is + 3] = pm0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 13
    steps[is] = bri * swr;
    steps[is + 1] = 0;
    steps[is + 2] = pr0;
    steps[is + 3] = pm0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // ------------------------------
    // 14
    steps[is] = swl;
    steps[is + 1] = swt;
    steps[is + 2] = pl0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 15
    steps[is] = bri * swl;
    steps[is + 1] = swt;
    steps[is + 2] = pl0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 16
    steps[is] = bri * swr;
    steps[is + 1] = swt;
    steps[is + 2] = pr0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
    is += 6;
    // 17
    steps[is] = swr;
    steps[is + 1] = swt;
    steps[is + 2] = pr0;
    steps[is + 3] = pt0;
    steps[is + 4] = px1;
    steps[is + 5] = py1;
};
export var buildRectangleUv = function (uvs, voffset, textureUvs, worldSize) {
    var br = worldSize[0];
    var bri = 1 - br;
    var worldSizeX = worldSize[1];
    var worldSizeY = worldSize[2];
    var x0 = textureUvs.x0;
    var x1 = textureUvs.x1;
    var x2 = textureUvs.x2;
    var x3 = textureUvs.x3;
    var y0 = textureUvs.y0;
    var y1 = textureUvs.y1;
    var y2 = textureUvs.y2;
    var y3 = textureUvs.y3;
    if (worldSizeX < worldSizeY) {
        buildRectangleUvVertical(bri, x0, x1, x2, x3, y0, y1, y2, y3, uvs, voffset);
    }
    else {
        buildRectangleUvVertical(bri, x3, x0, x1, x2, y3, y0, y1, y2, uvs, voffset);
    }
};
export var buildRectangleUvVertical = function (bri, x0, x1, x2, x3, y0, y1, y2, y3, uvs, voffset) {
    var x01 = 0.5 * (x0 + x1);
    var y01 = 0.5 * (y0 + y1);
    var x02 = 0.5 * (x0 + x2);
    var y02 = 0.5 * (y0 + y2);
    var x23 = 0.5 * (x2 + x3);
    var y23 = 0.5 * (y2 + y3);
    var x03 = 0.5 * (x0 + x3);
    var y03 = 0.5 * (y0 + y3);
    var x12 = 0.5 * (x1 + x2);
    var y12 = 0.5 * (y1 + y2);
    var xbu = x02 + bri * (x01 - x02);
    var ybu = y02 + bri * (y01 - y02);
    var xbb = x02 + bri * (x23 - x02);
    var ybb = y02 + bri * (y23 - y02);
    // UVs
    var iuv = voffset << 1;
    uvs[iuv + 0] = x0;
    uvs[iuv + 1] = y0;
    uvs[iuv + 2] = x01;
    uvs[iuv + 3] = y01;
    uvs[iuv + 4] = x1;
    uvs[iuv + 5] = y1;
    iuv += 6;
    uvs[iuv + 0] = xbu;
    uvs[iuv + 1] = ybu;
    iuv += 2;
    uvs[iuv + 0] = xbb;
    uvs[iuv + 1] = ybb;
    iuv += 2;
    uvs[iuv + 0] = x3;
    uvs[iuv + 1] = y3;
    uvs[iuv + 2] = x23;
    uvs[iuv + 3] = y23;
    uvs[iuv + 4] = x2;
    uvs[iuv + 5] = y2;
    iuv += 6;
    // ------------------------------
    uvs[iuv + 0] = x0;
    uvs[iuv + 1] = y0;
    uvs[iuv + 2] = x03 + bri * (x0 - x03);
    uvs[iuv + 3] = y03 + bri * (y0 - y03);
    uvs[iuv + 4] = x03 + bri * (x3 - x03);
    uvs[iuv + 5] = y03 + bri * (y3 - y03);
    uvs[iuv + 6] = x3;
    uvs[iuv + 7] = y3;
    iuv += 8;
    uvs[iuv + 0] = xbu;
    uvs[iuv + 1] = ybu;
    iuv += 2;
    uvs[iuv + 0] = xbb;
    uvs[iuv + 1] = ybb;
    iuv += 2;
    uvs[iuv + 0] = x1;
    uvs[iuv + 1] = y1;
    uvs[iuv + 2] = x12 + bri * (x1 - x12);
    uvs[iuv + 3] = y12 + bri * (y1 - y12);
    uvs[iuv + 4] = x12 + bri * (x2 - x12);
    uvs[iuv + 5] = y12 + bri * (y2 - y12);
    uvs[iuv + 6] = x2;
    uvs[iuv + 7] = y2;
};
//# sourceMappingURL=build-rectangle.js.map