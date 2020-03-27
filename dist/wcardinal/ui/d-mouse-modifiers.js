/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DMouseModifier } from "./d-mouse-modifier";
var DMouseModifiers = /** @class */ (function () {
    function DMouseModifiers() {
    }
    DMouseModifiers.from = function (e) {
        var oe = ("data" in e ? e.data.originalEvent : e);
        return (oe.ctrlKey ? DMouseModifier.CTRL : DMouseModifier.NONE) |
            (oe.altKey ? DMouseModifier.ALT : DMouseModifier.NONE) |
            (oe.shiftKey ? DMouseModifier.SHIFT : DMouseModifier.NONE);
    };
    DMouseModifiers.match = function (e, modifier) {
        if (modifier & DMouseModifier.OR) {
            return !!(DMouseModifiers.from(e) & modifier);
        }
        else {
            return DMouseModifiers.from(e) === modifier;
        }
    };
    return DMouseModifiers;
}());
export { DMouseModifiers };
//# sourceMappingURL=d-mouse-modifiers.js.map