/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { isString } from "../util/is-string";
import { EShapeActionValueDeserializer } from "./action/e-shape-action-value-deserializer";
import { EShapeDeserializers } from "./e-shape-deserializers";
import { EShapeImageElements } from "./e-shape-image-elements";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeSizes } from "./e-shape-sizes";
import { EShapeGradients } from "./variant/e-shape-gradients";
var EShapeDeserializer = /** @class */ (function () {
    function EShapeDeserializer() {
    }
    EShapeDeserializer.toShape = function (item, manager) {
        var shapeDeserializer = EShapeDeserializers[item[0]];
        if (shapeDeserializer != null) {
            return shapeDeserializer(item, manager);
        }
        return null;
    };
    EShapeDeserializer.deserialize = function (item, manager, result) {
        result.id = manager.resources[item[1]] || "";
        result.transform.position.set(item[2], item[3]);
        result.transform.rotation = item[6];
        result.transform.skew.set(item[7], item[7]);
        result.transform.pivot.set(item[21], item[22]);
        result.size.set(EShapeSizes.toNormalized(item[4]), EShapeSizes.toNormalized(item[5]));
        result.fill.deserialize(item[8], manager);
        result.stroke.deserialize(item[9], manager);
        result.cursor = manager.resources[item[10]] || "";
        result.text.deserialize(item[11], manager);
        result.tag.deserialize(item[12], manager);
        result.radius = item[13];
        result.corner = item[14];
        result.interactive = !!(item[23] & 1);
        result.unfocusable = !!(item[23] & 2);
        result.shortcut = (0 <= item[24] ? manager.resources[item[24]] : undefined);
        result.title = (0 <= item[25] ? manager.resources[item[25]] : undefined);
        // Children
        var childrenPromise = null;
        var childrenSerialized = item[20];
        if (0 < childrenSerialized.length) {
            var childrenOrPromises = [];
            for (var i = 0, imax = childrenSerialized.length; i < imax; ++i) {
                var childSerialized = childrenSerialized[i];
                var childOrPromise = EShapeDeserializer.toShape(childSerialized, manager);
                if (childOrPromise != null) {
                    childrenOrPromises.push(childOrPromise);
                }
            }
            childrenPromise = Promise.all(childrenOrPromises).then(function (children) {
                result.children = children;
                for (var i = 0, imax = children.length; i < imax; ++i) {
                    children[i].parent = result;
                }
                result.onChildTransformChange();
                result.toDirty();
                return result;
            });
        }
        // Action
        var serializedActions = item[17];
        for (var i = 0, imax = serializedActions.length; i < imax; ++i) {
            result.action.add(EShapeActionValueDeserializer.deserialize(serializedActions[i], manager));
        }
        // Gradient
        var gradientId = item[19];
        if (0 <= gradientId && gradientId < manager.resources.length) {
            var gradient = manager.resources[gradientId];
            if (isString(gradient)) {
                result.gradient = EShapeGradients.deserializeGradient(gradient);
            }
        }
        // Image
        var imagePromise = null;
        var imageId = item[18];
        if (0 <= imageId && imageId < manager.resources.length) {
            var imageSrc = manager.resources[imageId];
            if (isString(imageSrc)) {
                imagePromise = EShapeImageElements.toImageElement(imageSrc).then(function (imageElement) {
                    result.image = imageElement;
                    return result;
                });
            }
        }
        //
        if (childrenPromise != null) {
            if (imagePromise != null) {
                return Promise.all([childrenPromise, imagePromise]).then(function () {
                    return result;
                });
            }
            else {
                return childrenPromise;
            }
        }
        else {
            if (imagePromise != null) {
                return imagePromise;
            }
            else {
                return result;
            }
        }
    };
    EShapeDeserializer.deserializeAll = function (serializeds, resources) {
        var manager = new EShapeResourceManagerDeserialization(resources);
        var shapes = [];
        for (var i = 0, imax = serializeds.length; i < imax; ++i) {
            var serialized = serializeds[i];
            var shape = EShapeDeserializer.toShape(serialized, manager);
            if (shape == null) {
                if (0 < shapes.length) {
                    Promise.all(shapes).then(function (resolved) {
                        for (var j = 0, jmax = resolved.length; j < jmax; ++j) {
                            resolved[j].destroy();
                        }
                    });
                }
                return null;
            }
            shapes.push(shape);
        }
        if (0 < shapes.length) {
            return Promise.all(shapes);
        }
        return null;
    };
    return EShapeDeserializer;
}());
export { EShapeDeserializer };
//# sourceMappingURL=e-shape-deserializer.js.map