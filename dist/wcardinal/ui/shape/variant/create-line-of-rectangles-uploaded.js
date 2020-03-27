/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT } from "./build-rectangle";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";
import { EShapeLineOfRectanglesUploaded } from "./e-shape-line-of-rectangles-uploaded";
export var createLineOfRectanglesUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    return createLineOfAnyUploaded(buffer, shape, voffset, RECTANGLE_VERTEX_COUNT, ioffset, RECTANGLE_INDEX_COUNT, antialiasWeight, EShapeLineOfRectanglesUploaded);
};
//# sourceMappingURL=create-line-of-rectangles-uploaded.js.map