/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { __extends } from "tslib";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeWhiteText } from "./d-theme-white-text";
var DThemeWhiteNote = /** @class */ (function (_super) {
    __extends(DThemeWhiteNote, _super);
    function DThemeWhiteNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DThemeWhiteNote.prototype.getWidth = function () {
        return "100%";
    };
    DThemeWhiteNote.prototype.getHeight = function () {
        return "100%";
    };
    DThemeWhiteNote.prototype.getTextAlignHorizontal = function () {
        return DAlignHorizontal.CENTER;
    };
    DThemeWhiteNote.prototype.getInteractive = function () {
        return DBaseInteractive.NONE;
    };
    return DThemeWhiteNote;
}(DThemeWhiteText));
export { DThemeWhiteNote };
//# sourceMappingURL=d-theme-white-note.js.map