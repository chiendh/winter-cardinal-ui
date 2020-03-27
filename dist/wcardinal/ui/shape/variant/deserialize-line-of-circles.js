/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLineOfCircles } from "./e-shape-line-of-circles";
export var deserializeLineOfCircles = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeLineOfCircles());
};
//# sourceMappingURL=deserialize-line-of-circles.js.map