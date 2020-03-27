/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeLabelUploaded } from "./e-shape-label-uploaded";
export var createLabelUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    var tcount = toTextBufferCount(shape);
    var tvcount = tcount * TEXT_VERTEX_COUNT;
    var ticount = tcount * TEXT_INDEX_COUNT;
    var vcount = tvcount;
    var icount = ticount;
    if (buffer.check(voffset, ioffset, vcount, icount)) {
        return new EShapeLabelUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight).init(shape);
    }
    return null;
};
//# sourceMappingURL=create-label-uploaded.js.map