/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { IMAGE_SDF_INDEX_COUNT, IMAGE_SDF_VERTEX_COUNT } from "./build-image-sdf";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeImageSdfUploaded } from "./e-shape-image-sdf-uploaded";
export var createImageSdfUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    var tcount = toTextBufferCount(shape);
    var tvcount = tcount * TEXT_VERTEX_COUNT;
    var ticount = tcount * TEXT_INDEX_COUNT;
    var vcount = IMAGE_SDF_VERTEX_COUNT + tvcount;
    var icount = IMAGE_SDF_INDEX_COUNT + ticount;
    if (buffer.check(voffset, ioffset, vcount, icount)) {
        return new EShapeImageSdfUploaded(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight).init(shape);
    }
    return null;
};
//# sourceMappingURL=create-image-sdf-uploaded.js.map