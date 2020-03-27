/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLineOfRectangles } from "./e-shape-line-of-rectangles";
export var deserializeLineOfRectangles = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeLineOfRectangles());
};
//# sourceMappingURL=deserialize-line-of-rectangles.js.map