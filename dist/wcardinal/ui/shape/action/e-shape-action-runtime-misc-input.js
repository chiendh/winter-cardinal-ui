/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";
var EShapeActionRuntimeMiscInput = /** @class */ (function (_super) {
    __extends(EShapeActionRuntimeMiscInput, _super);
    function EShapeActionRuntimeMiscInput() {
        return _super.call(this) || this;
    }
    EShapeActionRuntimeMiscInput.prototype.execute = function (shape, runtime, time) {
        var _this = this;
        if (!shape.disabled) {
            var data_1 = EShapeActionRuntimeMiscInput.getData();
            if (shape.focused) {
                if (!data_1.isShown(shape)) {
                    setTimeout(function () {
                        data_1.show(shape, shape.text.value, function (_, value) {
                            shape.text.value = value;
                            shape.emit(name, shape, value);
                            var container = _this.toContainer(shape);
                            if (container && ("shape" in container)) {
                                container.shape.emit(name, shape, value);
                            }
                        });
                    }, 0);
                }
            }
            else {
                if (data_1.isShown(shape)) {
                    data_1.onInputChange();
                    data_1.hide();
                }
            }
        }
    };
    EShapeActionRuntimeMiscInput.getData = function () {
        if (EShapeActionRuntimeMiscInput.data == null) {
            EShapeActionRuntimeMiscInput.data = new EShapeActionRuntimeMiscInputData();
        }
        return EShapeActionRuntimeMiscInput.data;
    };
    EShapeActionRuntimeMiscInput.data = null;
    return EShapeActionRuntimeMiscInput;
}(EShapeActionRuntime));
export { EShapeActionRuntimeMiscInput };
//# sourceMappingURL=e-shape-action-runtime-misc-input.js.map