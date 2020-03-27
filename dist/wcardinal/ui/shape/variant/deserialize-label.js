/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLabel } from "./e-shape-label";
export var deserializeLabel = function (item, manager) {
    return EShapeDeserializer.deserialize(item, manager, new EShapeLabel());
};
//# sourceMappingURL=deserialize-label.js.map