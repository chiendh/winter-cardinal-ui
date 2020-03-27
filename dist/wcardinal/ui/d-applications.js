/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
var DApplications = /** @class */ (function () {
    function DApplications() {
    }
    DApplications.add = function (instance) {
        var instances = DApplications.INSTANCES;
        instances.push(instance);
    };
    DApplications.first = function () {
        var instances = DApplications.INSTANCES;
        if (0 < instances.length) {
            return instances[0];
        }
        throw new Error("No application found.");
    };
    DApplications.last = function () {
        var instances = DApplications.INSTANCES;
        if (0 < instances.length) {
            return instances[instances.length - 1];
        }
        throw new Error("No application found.");
    };
    DApplications.get = function (index) {
        var instances = DApplications.INSTANCES;
        if (0 <= index && index < instances.length) {
            return instances[index];
        }
        return null;
    };
    DApplications.indexOf = function (instance) {
        return DApplications.INSTANCES.indexOf(instance);
    };
    DApplications.size = function () {
        return DApplications.INSTANCES.length;
    };
    DApplications.toStage = function (target) {
        var stage = target;
        while (stage.parent) {
            stage = stage.parent;
        }
        if (("application" in stage) && ("layer" in stage)) {
            return stage;
        }
        return null;
    };
    DApplications.find = function (target) {
        var stage = this.toStage(target);
        if (stage) {
            return stage.layer.application;
        }
        return null;
    };
    DApplications.getLayerBase = function (target) {
        var stage = this.toStage(target);
        if (stage) {
            return stage.layer.application.getLayerBase();
        }
        return null;
    };
    DApplications.getLayerOverlay = function (target) {
        var stage = this.toStage(target);
        if (stage) {
            return stage.layer.application.getLayerOverlay();
        }
        return null;
    };
    DApplications.getLayer = function (target) {
        var stage = this.toStage(target);
        if (stage) {
            return stage.layer;
        }
        return null;
    };
    DApplications.update = function (target) {
        if (target) {
            var stage = this.toStage(target);
            if (stage) {
                stage.layer.update();
            }
        }
        else {
            var instances = DApplications.INSTANCES;
            for (var i = 0, imax = instances.length; i < imax; ++i) {
                instances[i].update();
            }
        }
    };
    DApplications.render = function (target) {
        if (target) {
            var stage = this.toStage(target);
            if (stage) {
                stage.layer.render();
            }
        }
        else {
            var instances = DApplications.INSTANCES;
            for (var i = 0, imax = instances.length; i < imax; ++i) {
                instances[i].render();
            }
        }
    };
    DApplications.INSTANCES = [];
    return DApplications;
}());
export { DApplications };
//# sourceMappingURL=d-applications.js.map