/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DScalarExpression } from "./d-scalar-expression";
import { isFunction } from "./util/is-function";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";
var POSITION_CENTER = function (p, s) { return (p - s) * 0.5; };
var POSITION_PADDING = function (p, s, d) { return d; };
var SIZE_MAXIMIZED = function (p) { return p; };
var SIZE_PADDING = function (p, s, d) { return p - d; };
var DScalarFunctions = /** @class */ (function () {
    function DScalarFunctions() {
    }
    DScalarFunctions.position = function (coordinate) {
        if (coordinate == null || isNumber(coordinate)) {
            return null;
        }
        else if (isString(coordinate)) {
            switch (coordinate) {
                case "center":
                case "CENTER":
                    return POSITION_CENTER;
                case "padding":
                case "PADDING":
                    return POSITION_PADDING;
            }
            var scalarExpression_1 = new DScalarExpression(coordinate);
            return function (parent, self, padding, current) {
                return scalarExpression_1.calculate(parent, self, padding, current);
            };
        }
        else if (isFunction(coordinate)) {
            return coordinate;
        }
        else {
            var scalar_1 = coordinate;
            return function (parent, self, padding, current) {
                return scalar_1.calculate(parent, self, padding, current);
            };
        }
    };
    DScalarFunctions.size = function (coordinate) {
        if (coordinate == null || isNumber(coordinate)) {
            return null;
        }
        else if (isString(coordinate)) {
            switch (coordinate) {
                case "100%":
                case "maximized":
                case "MAXIMIZED":
                    return SIZE_MAXIMIZED;
                case "padding":
                case "PADDING":
                    return SIZE_PADDING;
            }
            var scalarExpression_2 = new DScalarExpression(coordinate);
            return function (parent, self, padding, current) {
                return scalarExpression_2.calculate(parent, self, padding, current);
            };
        }
        else if (isFunction(coordinate)) {
            return coordinate;
        }
        else {
            var scalar_2 = coordinate;
            return function (parent, self, padding, current) {
                return scalar_2.calculate(parent, self, padding, current);
            };
        }
    };
    return DScalarFunctions;
}());
export { DScalarFunctions };
//# sourceMappingURL=d-scalar-functions.js.map