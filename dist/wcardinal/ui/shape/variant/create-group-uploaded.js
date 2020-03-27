/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeGroupUploaded } from "./e-shape-group-uploaded";
export var createGroupUploaded = function (buffer, shape, voffset, ioffset) {
    return new EShapeGroupUploaded(buffer, voffset, ioffset).init(shape);
};
//# sourceMappingURL=create-group-uploaded.js.map