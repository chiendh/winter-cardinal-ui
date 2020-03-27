/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DText } from "./d-text";
var DNote = /** @class */ (function (_super) {
    __extends(DNote, _super);
    function DNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNote.prototype.init = function (options) {
        _super.prototype.init.call(this, options);
        this.visible = false;
    };
    DNote.prototype.getType = function () {
        return "DNote";
    };
    return DNote;
}(DText));
export { DNote };
//# sourceMappingURL=d-note.js.map