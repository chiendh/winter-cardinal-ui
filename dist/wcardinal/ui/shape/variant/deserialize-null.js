/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeNull } from "./e-shape-null";
export var deserializeNull = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeNull());
};
//# sourceMappingURL=deserialize-null.js.map