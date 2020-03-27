/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createTriangleUploaded } from "../variant/create-triangle-uploaded";
import { deserializeTriangle } from "../variant/deserialize-triangle";
export var loadShapeTriangle = function () {
    EShapeUploadeds[EShapeType.TRIANGLE] = createTriangleUploaded;
    EShapeDeserializers[EShapeType.TRIANGLE] = deserializeTriangle;
};
//# sourceMappingURL=load-shape-triangle.js.map