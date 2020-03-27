/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeNullUploaded } from "./e-shape-null-uploaded";
export var createNullUploaded = function (buffer, shape, voffset, ioffset) {
    return new EShapeNullUploaded(buffer, voffset, ioffset).init(shape);
};
//# sourceMappingURL=create-null-uploaded.js.map