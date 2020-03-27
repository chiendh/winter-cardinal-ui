/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
export var DBaseState;
(function (DBaseState) {
    DBaseState[DBaseState["NONE"] = 0] = "NONE";
    DBaseState[DBaseState["HOVERED"] = 1] = "HOVERED";
    DBaseState[DBaseState["ACTIVE"] = 2] = "ACTIVE";
    DBaseState[DBaseState["ACTIVE_IN"] = 4] = "ACTIVE_IN";
    DBaseState[DBaseState["FOCUSED"] = 8] = "FOCUSED";
    DBaseState[DBaseState["FOCUSED_IN"] = 16] = "FOCUSED_IN";
    DBaseState[DBaseState["UNFOCUSABLE"] = 32] = "UNFOCUSABLE";
    DBaseState[DBaseState["FOCUS_ROOT"] = 64] = "FOCUS_ROOT";
    DBaseState[DBaseState["READ_ONLY"] = 128] = "READ_ONLY";
    DBaseState[DBaseState["DISABLED"] = 256] = "DISABLED";
    DBaseState[DBaseState["DRAGGING"] = 512] = "DRAGGING";
    DBaseState[DBaseState["PRESSED"] = 1024] = "PRESSED";
    DBaseState[DBaseState["INVALID"] = 2048] = "INVALID";
    DBaseState[DBaseState["SUCCEEDED"] = 4096] = "SUCCEEDED";
    DBaseState[DBaseState["FAILED"] = 8192] = "FAILED";
    DBaseState[DBaseState["CUSTOM"] = 1048576] = "CUSTOM";
})(DBaseState || (DBaseState = {}));
//# sourceMappingURL=d-base-state.js.map