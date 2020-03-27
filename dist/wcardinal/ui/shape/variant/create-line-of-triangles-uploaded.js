/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { TRIANGLE_INDEX_COUNT, TRIANGLE_VERTEX_COUNT } from "./build-triangle";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";
import { EShapeLineOfTrianglesUploaded } from "./e-shape-line-of-triangles-uploaded";
export var createLineOfTrianglesUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    return createLineOfAnyUploaded(buffer, shape, voffset, TRIANGLE_VERTEX_COUNT, ioffset, TRIANGLE_INDEX_COUNT, antialiasWeight, EShapeLineOfTrianglesUploaded);
};
//# sourceMappingURL=create-line-of-triangles-uploaded.js.map