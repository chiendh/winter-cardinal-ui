/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { loadShapeAll } from "../shape/load/load-shape-all";
import { loadMenuItemAll } from "./load-menu-item-all";
export var loadAll = function () {
    loadMenuItemAll();
    loadShapeAll();
};
//# sourceMappingURL=load-all.js.map