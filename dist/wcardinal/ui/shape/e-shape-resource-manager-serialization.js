/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var EShapeResourceManagerSerialization = /** @class */ (function () {
    function EShapeResourceManagerSerialization() {
        this.resources = [];
        this.resourceToIndex = new Map();
    }
    EShapeResourceManagerSerialization.prototype.add = function (resource) {
        var resources = this.resources;
        var resourceToIndex = this.resourceToIndex;
        var result = resourceToIndex.get(resource);
        if (result != null) {
            return result;
        }
        var index = resources.length;
        resources.push(resource);
        resourceToIndex.set(resource, index);
        return index;
    };
    EShapeResourceManagerSerialization.prototype.serialize = function () {
        return this.resources;
    };
    return EShapeResourceManagerSerialization;
}());
export { EShapeResourceManagerSerialization };
//# sourceMappingURL=e-shape-resource-manager-serialization.js.map