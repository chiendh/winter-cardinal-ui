/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DynamicSDFFontGenerator } from "../../util/dynamic-sdf-font-generator";
import { EShapeImageElements } from "../e-shape-image-elements";
import { EShapeImageSdf } from "./e-shape-image-sdf";
export var createImageSdf = function (dataUrl, convertToSdf) {
    if (convertToSdf) {
        return EShapeImageElements.toImageElement(dataUrl)
            .then(function (imageElement) {
            var generator = DynamicSDFFontGenerator.getInstance().init();
            generator.updateTexture(imageElement);
            generator.render();
            var canvas = document.createElement("canvas");
            generator.read(canvas);
            return createImageSdf(canvas.toDataURL(), false);
        });
    }
    else {
        return EShapeImageElements.toImageElement(dataUrl)
            .then(function (imageElement) {
            return new EShapeImageSdf(imageElement);
        });
    }
};
//# sourceMappingURL=create-image-sdf.js.map