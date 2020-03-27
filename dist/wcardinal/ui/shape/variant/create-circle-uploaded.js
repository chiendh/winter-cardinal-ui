/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { CIRCLE_INDEX_COUNT, CIRCLE_VERTEX_COUNT } from "./build-circle";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeCircleUploaded } from "./e-shape-circle-uploaded";
export var createCircle = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    var tcount = toTextBufferCount(shape);
    var tvcount = tcount * TEXT_VERTEX_COUNT;
    var ticount = tcount * TEXT_INDEX_COUNT;
    var vcount = CIRCLE_VERTEX_COUNT + tvcount;
    var icount = CIRCLE_INDEX_COUNT + ticount;
    if (buffer.check(voffset, ioffset, vcount, icount)) {
        return new EShapeCircleUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight).init(shape);
    }
    return null;
};
//# sourceMappingURL=create-circle-uploaded.js.map