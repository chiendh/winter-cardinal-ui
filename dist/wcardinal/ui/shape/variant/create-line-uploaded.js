/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { toLineVertexCount } from "./build-line";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeLineUploaded } from "./e-shape-line-uploaded";
export var createLineUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    var points = shape.points;
    var pointCount = (points ? points.length : 0);
    var tcount = toTextBufferCount(shape);
    var tvcount = tcount * TEXT_VERTEX_COUNT;
    var ticount = tcount * TEXT_INDEX_COUNT;
    var vcount = toLineVertexCount(pointCount) + tvcount;
    var icount = vcount - tvcount - 2 + ticount;
    if (buffer.check(voffset, ioffset, vcount, icount)) {
        return new EShapeLineUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight).init(shape);
    }
    return null;
};
//# sourceMappingURL=create-line-uploaded.js.map