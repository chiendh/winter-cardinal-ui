/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { RECTANGLE_ROUNDED_INDEX_COUNT, RECTANGLE_ROUNDED_VERTEX_COUNT } from "./build-rectangle-rounded";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";
import { EShapeLineOfRectangleRoundedsUploaded } from "./e-shape-line-of-rectangle-roundeds-uploaded";
export var createLineOfRectangleRoundedsUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    return createLineOfAnyUploaded(buffer, shape, voffset, RECTANGLE_ROUNDED_VERTEX_COUNT, ioffset, RECTANGLE_ROUNDED_INDEX_COUNT, antialiasWeight, EShapeLineOfRectangleRoundedsUploaded);
};
//# sourceMappingURL=create-line-of-rectangle-roundeds-uploaded.js.map