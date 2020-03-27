/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { TRIANGLE_INDEX_COUNT, TRIANGLE_VERTEX_COUNT } from "./build-triangle";
import { EShapeTriangleUploaded } from "./e-shape-triangle-uploaded";
export var createTriangleUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    var tcount = toTextBufferCount(shape);
    var tvcount = tcount * TEXT_VERTEX_COUNT;
    var ticount = tcount * TEXT_INDEX_COUNT;
    var vcount = TRIANGLE_VERTEX_COUNT + tvcount;
    var icount = TRIANGLE_INDEX_COUNT + ticount;
    if (buffer.check(voffset, ioffset, vcount, icount)) {
        return new EShapeTriangleUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight).init(shape);
    }
    return null;
};
//# sourceMappingURL=create-triangle-uploaded.js.map