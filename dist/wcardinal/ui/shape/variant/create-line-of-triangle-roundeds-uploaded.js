/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { TRIANGLE_ROUNDED_INDEX_COUNT, TRIANGLE_ROUNDED_VERTEX_COUNT } from "./build-triangle-rounded";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";
import { EShapeLineOfTriangleRoundedsUploaded } from "./e-shape-line-of-triangle-roundeds-uploaded";
export var createLineOfTriangleRoundedsUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    return createLineOfAnyUploaded(buffer, shape, voffset, TRIANGLE_ROUNDED_VERTEX_COUNT, ioffset, TRIANGLE_ROUNDED_INDEX_COUNT, antialiasWeight, EShapeLineOfTriangleRoundedsUploaded);
};
//# sourceMappingURL=create-line-of-triangle-roundeds-uploaded.js.map