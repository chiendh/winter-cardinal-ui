/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { toLineOfAnyPointCount } from "./build-line-of-any";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
export var createLineOfAnyUploaded = function (buffer, shape, voffset, vcountPerPoint, ioffset, icountPerPoint, antialiasWeight, constructor) {
    var tcount = toTextBufferCount(shape);
    var tvcount = tcount * TEXT_VERTEX_COUNT;
    var ticount = tcount * TEXT_INDEX_COUNT;
    var points = shape.points;
    var pointCount = toLineOfAnyPointCount(points ? points.length : 0);
    var vcount = pointCount * vcountPerPoint + tvcount;
    var icount = pointCount * icountPerPoint + ticount;
    if (buffer.check(voffset, ioffset, vcount, icount)) {
        return new constructor(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight, pointCount).init(shape);
    }
    return null;
};
//# sourceMappingURL=create-line-of-any-uploaded.js.map