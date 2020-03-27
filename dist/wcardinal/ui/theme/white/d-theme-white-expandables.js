import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
var DThemeWhiteExpandables = /** @class */ (function () {
    function DThemeWhiteExpandables() {
    }
    DThemeWhiteExpandables.init = function () {
        DThemeWhiteAtlas.add("expandable_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
            "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
            "</g>");
        DThemeWhiteAtlas.add("expandable_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
            "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
            "</g>");
    };
    DThemeWhiteExpandables.getImageOpened = function () {
        return DThemeWhiteAtlas.mappings.expandable_opened;
    };
    DThemeWhiteExpandables.getImageClosed = function () {
        return DThemeWhiteAtlas.mappings.expandable_closed;
    };
    return DThemeWhiteExpandables;
}());
export { DThemeWhiteExpandables };
//# sourceMappingURL=d-theme-white-expandables.js.map