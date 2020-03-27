/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * DBase interactivity.
 * Mouse / touch events are triggered only on interactive objects.
 */
export var DBaseInteractive;
(function (DBaseInteractive) {
    /**
     * Not interactive.
     */
    DBaseInteractive[DBaseInteractive["NONE"] = 0] = "NONE";
    /**
     * Interactive.
     * However children are not interactive.
     */
    DBaseInteractive[DBaseInteractive["SELF"] = 1] = "SELF";
    /**
     * Not interactive.
     * However children are interactive.
     */
    DBaseInteractive[DBaseInteractive["CHILDREN"] = 2] = "CHILDREN";
    /**
     * Interactive.
     * Children are also interactive.
     */
    DBaseInteractive[DBaseInteractive["BOTH"] = 3] = "BOTH";
})(DBaseInteractive || (DBaseInteractive = {}));
//# sourceMappingURL=d-base-interactive.js.map