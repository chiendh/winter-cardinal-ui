import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
var DThemeDarkExpandables = /** @class */ (function () {
    function DThemeDarkExpandables() {
    }
    DThemeDarkExpandables.init = function () {
        DThemeDarkAtlas.add("expandable_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
            "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
            "</g>");
        DThemeDarkAtlas.add("expandable_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
            "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
            "</g>");
    };
    DThemeDarkExpandables.getImageOpened = function () {
        return DThemeDarkAtlas.mappings.expandable_opened;
    };
    DThemeDarkExpandables.getImageClosed = function () {
        return DThemeDarkAtlas.mappings.expandable_closed;
    };
    return DThemeDarkExpandables;
}());
export { DThemeDarkExpandables };
//# sourceMappingURL=d-theme-dark-expandables.js.map