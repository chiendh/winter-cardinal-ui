/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeCircle } from "./e-shape-circle";
export var deserializeCircle = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeCircle());
};
//# sourceMappingURL=deserialize-circle.js.map