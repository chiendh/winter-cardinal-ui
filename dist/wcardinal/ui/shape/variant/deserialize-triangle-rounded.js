/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeTriangleRounded } from "./e-shape-triangle-rounded";
export var deserializeTriangleRounded = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeTriangleRounded());
};
//# sourceMappingURL=deserialize-triangle-rounded.js.map