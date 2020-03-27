/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLineOfTriangleRoundeds } from "./e-shape-line-of-triangle-roundeds";
export var deserializeLineOfTriangleRoundeds = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeLineOfTriangleRoundeds());
};
//# sourceMappingURL=deserialize-line-of-triangle-roundeds.js.map