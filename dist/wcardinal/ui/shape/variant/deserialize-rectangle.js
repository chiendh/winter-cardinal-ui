/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeRectangle } from "./e-shape-rectangle";
export var deserializeRectangle = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeRectangle());
};
//# sourceMappingURL=deserialize-rectangle.js.map