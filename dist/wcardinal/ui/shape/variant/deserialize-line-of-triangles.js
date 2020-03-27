/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLineOfTriangles } from "./e-shape-line-of-triangles";
export var deserializeLineOfTriangles = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeLineOfTriangles());
};
//# sourceMappingURL=deserialize-line-of-triangles.js.map