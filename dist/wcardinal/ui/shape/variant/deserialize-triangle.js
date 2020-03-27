/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeTriangle } from "./e-shape-triangle";
export var deserializeTriangle = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeTriangle());
};
//# sourceMappingURL=deserialize-triangle.js.map