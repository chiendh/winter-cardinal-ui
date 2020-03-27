/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT } from "./build-rectangle";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeRectangleUploaded } from "./e-shape-rectangle-uploaded";
export var createRectangleUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    var tcount = toTextBufferCount(shape);
    var tvcount = tcount * TEXT_VERTEX_COUNT;
    var ticount = tcount * TEXT_INDEX_COUNT;
    var vcount = RECTANGLE_VERTEX_COUNT + tvcount;
    var icount = RECTANGLE_INDEX_COUNT + ticount;
    if (buffer.check(voffset, ioffset, vcount, icount)) {
        return new EShapeRectangleUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight).init(shape);
    }
    return null;
};
//# sourceMappingURL=create-rectangle-uploaded.js.map