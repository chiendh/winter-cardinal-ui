import { Point } from "pixi.js";
import { buildStep } from "./build-step";
import { toLength } from "./to-length";
import { STEP_VALUES, toStep } from "./to-step";
export var CIRCLE_VERTEX_COUNT = 9;
export var CIRCLE_INDEX_COUNT = 8;
export var CIRCLE_WORLD_SIZE = [0, 0];
var CIRCLE_WORK_POINT = new Point();
export var buildCircleClipping = function (clippings, voffset) {
    var ic = voffset * 3;
    clippings[ic + 0] = 1;
    clippings[ic + 1] = 1;
    clippings[ic + 2] = 1;
    clippings[ic + 3] = 0;
    clippings[ic + 4] = 1;
    clippings[ic + 5] = 1;
    clippings[ic + 6] = 1;
    clippings[ic + 7] = 1;
    clippings[ic + 8] = 1;
    clippings[ic + 9] = 1;
    clippings[ic + 10] = 0;
    clippings[ic + 11] = 1;
    clippings[ic + 12] = 0;
    clippings[ic + 13] = 0;
    clippings[ic + 14] = 1;
    clippings[ic + 15] = 1;
    clippings[ic + 16] = 0;
    clippings[ic + 17] = 1;
    clippings[ic + 18] = 1;
    clippings[ic + 19] = 1;
    clippings[ic + 20] = 1;
    clippings[ic + 21] = 0;
    clippings[ic + 22] = 1;
    clippings[ic + 23] = 1;
    clippings[ic + 24] = 1;
    clippings[ic + 25] = 1;
    clippings[ic + 26] = 1;
};
export var buildCircleIndex = function (indices, voffset, ioffset) {
    var ii = ioffset * 3;
    indices[ii + 0] = voffset + 0;
    indices[ii + 1] = voffset + 1;
    indices[ii + 2] = voffset + 3;
    indices[ii + 3] = voffset + 1;
    indices[ii + 4] = voffset + 4;
    indices[ii + 5] = voffset + 3;
    indices[ii + 6] = voffset + 1;
    indices[ii + 7] = voffset + 2;
    indices[ii + 8] = voffset + 4;
    indices[ii + 9] = voffset + 2;
    indices[ii + 10] = voffset + 5;
    indices[ii + 11] = voffset + 4;
    indices[ii + 12] = voffset + 3;
    indices[ii + 13] = voffset + 4;
    indices[ii + 14] = voffset + 6;
    indices[ii + 15] = voffset + 4;
    indices[ii + 16] = voffset + 7;
    indices[ii + 17] = voffset + 6;
    indices[ii + 18] = voffset + 4;
    indices[ii + 19] = voffset + 5;
    indices[ii + 20] = voffset + 7;
    indices[ii + 21] = voffset + 5;
    indices[ii + 22] = voffset + 8;
    indices[ii + 23] = voffset + 7;
};
export var buildCircleVertex = function (vertices, voffset, originX, originY, sizeX, sizeY, strokeAlign, strokeWidth, internalTransform, worldSize) {
    // Calculate the transformed positions
    //
    //  0       1       2
    // |-------|-------|
    // |3      |4      |5
    // |-------|-------|
    // |6      |7      |8
    // |-------|-------|
    //
    var work = CIRCLE_WORK_POINT;
    var s = strokeAlign * strokeWidth;
    var sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
    var sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
    work.set(-sx + originX, -sy + originY);
    internalTransform.apply(work, work);
    var x0 = work.x;
    var y0 = work.y;
    work.set(0 + originX, -sy + originY);
    internalTransform.apply(work, work);
    var x1 = work.x;
    var y1 = work.y;
    var dx = x1 - x0;
    var dy = y1 - y0;
    work.set(originX, originY);
    internalTransform.apply(work, work);
    var x4 = work.x;
    var y4 = work.y;
    var x7 = x4 + (x4 - x1);
    var y7 = y4 + (y4 - y1);
    var x3 = x4 - dx;
    var y3 = y4 - dy;
    // Vertices
    var iv = voffset * 2;
    vertices[iv + 0] = x0;
    vertices[iv + 1] = y0;
    vertices[iv + 2] = x1;
    vertices[iv + 3] = y1;
    vertices[iv + 4] = x1 + dx;
    vertices[iv + 5] = y1 + dy;
    vertices[iv + 6] = x3;
    vertices[iv + 7] = y3;
    vertices[iv + 8] = x4;
    vertices[iv + 9] = y4;
    vertices[iv + 10] = x4 + dx;
    vertices[iv + 11] = y4 + dy;
    vertices[iv + 12] = x7 - dx;
    vertices[iv + 13] = y7 - dy;
    vertices[iv + 14] = x7;
    vertices[iv + 15] = y7;
    vertices[iv + 16] = x7 + dx;
    vertices[iv + 17] = y7 + dy;
    worldSize[0] = toLength(x0, y0, x1, y1);
    worldSize[1] = toLength(x0, y0, x3, y3);
};
export var buildCircleStep = function (steps, clippings, voffset, strokeWidth, antialiasWeight, worldSize) {
    toStep(worldSize[0], strokeWidth, antialiasWeight, STEP_VALUES);
    var swx = STEP_VALUES[0];
    var px0 = STEP_VALUES[1];
    var px1 = STEP_VALUES[2];
    toStep(worldSize[1], strokeWidth, antialiasWeight, STEP_VALUES);
    var swy = STEP_VALUES[0];
    var py0 = STEP_VALUES[1];
    var py1 = STEP_VALUES[2];
    buildStep(steps, clippings, voffset, CIRCLE_VERTEX_COUNT, swx, swy, px0, py0, px1, py1);
};
export var buildCircleUv = function (uvs, voffset, textureUvs) {
    var x0 = textureUvs.x0;
    var x1 = textureUvs.x1;
    var x2 = textureUvs.x2;
    var x3 = textureUvs.x3;
    var y0 = textureUvs.y0;
    var y1 = textureUvs.y1;
    var y2 = textureUvs.y2;
    var y3 = textureUvs.y3;
    // UVs
    var iuv = voffset * 2;
    uvs[iuv + 0] = x0;
    uvs[iuv + 1] = y0;
    uvs[iuv + 2] = 0.5 * (x0 + x1);
    uvs[iuv + 3] = 0.5 * (y0 + y1);
    uvs[iuv + 4] = x1;
    uvs[iuv + 5] = y1;
    uvs[iuv + 6] = 0.5 * (x0 + x3);
    uvs[iuv + 7] = 0.5 * (y0 + y3);
    uvs[iuv + 8] = 0.5 * (x0 + x2);
    uvs[iuv + 9] = 0.5 * (y0 + y2);
    uvs[iuv + 10] = 0.5 * (x1 + x2);
    uvs[iuv + 11] = 0.5 * (y1 + y2);
    uvs[iuv + 12] = x3;
    uvs[iuv + 13] = y3;
    uvs[iuv + 14] = 0.5 * (x3 + x2);
    uvs[iuv + 15] = 0.5 * (y3 + y2);
    uvs[iuv + 16] = x2;
    uvs[iuv + 17] = y2;
};
//# sourceMappingURL=build-circle.js.map