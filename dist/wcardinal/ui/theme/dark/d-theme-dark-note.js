/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeDarkText } from "./d-theme-dark-text";
var DThemeDarkNote = /** @class */ (function (_super) {
    __extends(DThemeDarkNote, _super);
    function DThemeDarkNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeDarkNote.prototype.getWidth = function () {
        return "100%";
    };
    DThemeDarkNote.prototype.getHeight = function () {
        return "100%";
    };
    DThemeDarkNote.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeDarkNote.prototype.getInteractive = function () {
        return DBaseInteractive.NONE;
    };
    return DThemeDarkNote;
}(DThemeDarkText));
export { DThemeDarkNote };
//# sourceMappingURL=d-theme-dark-note.js.map