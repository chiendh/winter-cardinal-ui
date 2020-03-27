/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { EShapeDefaults } from "./shape/e-shape-defaults";
import { EShapeDeserializer } from "./shape/e-shape-deserializer";
var DDiagrams = /** @class */ (function () {
    function DDiagrams() {
    }
    DDiagrams.toSerialized = function (target) {
        if ("data" in target) {
            var result = JSON.parse(target.data);
            result.id = target.id;
            return result;
        }
        return target;
    };
    DDiagrams.newLayer = function (serialized, container) {
        // Layers
        var pflayers = serialized.layers;
        for (var i = 0, imax = pflayers.length; i < imax; ++i) {
            container.create(pflayers[i][0] || "");
        }
        // Activate the first later if it exists
        if (0 < container.size()) {
            container.active = container.children[0];
        }
        // Items
        var pfresources = serialized.resources;
        var pfitems = serialized.items;
        var shapePromises = EShapeDeserializer.deserializeAll(pfitems, pfresources);
        if (shapePromises != null) {
            return shapePromises.then(function (shapes) {
                var layers = container.children;
                for (var i = 0, imax = shapes.length; i < imax; ++i) {
                    var pfitem = pfitems[i];
                    var shape = shapes[i];
                    var layer = layers[pfitem[16]];
                    if (layer != null) {
                        shape.attach(layer);
                    }
                }
                return shapes;
            });
        }
        else {
            return Promise.resolve([]);
        }
    };
    DDiagrams.applyBackground = function (serialized, canvas, canvasContainer) {
        var background = serialized.background;
        var backgroundColor = (background && background.color != null ? background.color : 0xffffff);
        var backgroundAlpha = (background && background.alpha != null ? background.alpha : 1.0);
        if (EShapeDefaults.IS_EDIT_MODE) {
            var canvasBackground = canvas.background;
            canvasBackground.color = backgroundColor;
            canvasBackground.alpha = backgroundAlpha;
        }
        else {
            var canvasContainerBackground = canvasContainer.background;
            canvasContainerBackground.color = backgroundColor;
            canvasContainerBackground.alpha = backgroundAlpha;
        }
    };
    return DDiagrams;
}());
export { DDiagrams };
//# sourceMappingURL=d-diagrams.js.map