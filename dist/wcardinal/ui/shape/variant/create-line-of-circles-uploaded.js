/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { CIRCLE_INDEX_COUNT, CIRCLE_VERTEX_COUNT } from "./build-circle";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";
import { EShapeLineOfCirclesUploaded } from "./e-shape-line-of-circles-uploaded";
export var createLineOfCirclesUploaded = function (buffer, shape, voffset, ioffset, antialiasWeight) {
    return createLineOfAnyUploaded(buffer, shape, voffset, CIRCLE_VERTEX_COUNT, ioffset, CIRCLE_INDEX_COUNT, antialiasWeight, EShapeLineOfCirclesUploaded);
};
//# sourceMappingURL=create-line-of-circles-uploaded.js.map