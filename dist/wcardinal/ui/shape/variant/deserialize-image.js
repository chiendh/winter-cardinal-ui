/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeImage } from "./e-shape-image";
export var deserializeImage = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeImage());
};
//# sourceMappingURL=deserialize-image.js.map