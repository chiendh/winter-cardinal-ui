/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLineOfRectangleRoundeds } from "./e-shape-line-of-rectangle-roundeds";
export var deserializeLineOfRectangleRoundeds = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeLineOfRectangleRoundeds());
};
//# sourceMappingURL=deserialize-line-of-rectangle-roundeds.js.map