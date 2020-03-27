/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeRectangleRounded } from "./e-shape-rectangle-rounded";
export var deserializeRectangleRounded = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeRectangleRounded());
};
//# sourceMappingURL=deserialize-rectangle-rounded.js.map