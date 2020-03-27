/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeImageElements } from "../e-shape-image-elements";
import { EShapeImage } from "./e-shape-image";
export var createImage = function (dataUrl) {
    return EShapeImageElements.toImageElement(dataUrl).then(function (imageElement) {
        return new EShapeImage(imageElement);
    });
};
//# sourceMappingURL=create-image.js.map