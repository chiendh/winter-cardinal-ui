import { DBaseState } from "../../d-base-state";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";
var DThemeWhiteTableBodyCellActions = /** @class */ (function () {
    function DThemeWhiteTableBodyCellActions() {
    }
    DThemeWhiteTableBodyCellActions.init = function () {
        // Material Design icons by Google.
        // Apache license version 2.0.
        DThemeWhiteAtlas.add("action_mark", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
            "<path d=\"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83" +
            " 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm" +
            "-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z\" fill=\"#fff\"/>" +
            "</g>");
    };
    DThemeWhiteTableBodyCellActions.getImageSource = function (state) {
        return DThemeWhiteAtlas.mappings.action_mark;
    };
    DThemeWhiteTableBodyCellActions.getImageTintColor = function (state) {
        return DThemeWhiteTableBodyCells.getImageTintColor(state | DBaseState.ACTIVE);
    };
    return DThemeWhiteTableBodyCellActions;
}());
export { DThemeWhiteTableBodyCellActions };
//# sourceMappingURL=d-theme-white-table-body-cell-actions.js.map