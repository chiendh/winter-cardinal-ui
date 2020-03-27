/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeImageSdf } from "./e-shape-image-sdf";
export var deserializeImageSdf = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeImageSdf());
};
//# sourceMappingURL=deserialize-image-sdf.js.map