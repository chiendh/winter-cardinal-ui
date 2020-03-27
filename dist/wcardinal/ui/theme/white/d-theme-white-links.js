import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
var DThemeWhiteLinks = /** @class */ (function () {
    function DThemeWhiteLinks() {
    }
    DThemeWhiteLinks.init = function () {
        DThemeWhiteAtlas.add("link_mark", 24, 24, "<g>" +
            "<path fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" " +
            "d=\"M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8\" />" +
            "</g>");
    };
    DThemeWhiteLinks.getImageSource = function (state) {
        return DThemeWhiteAtlas.mappings.link_mark;
    };
    DThemeWhiteLinks.getLinkMenuOptions = function () {
        return {
            sticky: true,
            align: "RIGHT",
            items: [{
                    value: DLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW,
                    text: {
                        value: this.getOpenLinkInNewWindow()
                    }
                }, {
                    value: DLinkMenuItemId.COPY_LINK_ADDRESS,
                    text: {
                        value: this.getCopyLinkAddress()
                    }
                }]
        };
    };
    DThemeWhiteLinks.getOpenLinkInNewWindow = function () {
        return "Open in new window";
    };
    DThemeWhiteLinks.getCopyLinkAddress = function () {
        return "Copy link address";
    };
    return DThemeWhiteLinks;
}());
export { DThemeWhiteLinks };
//# sourceMappingURL=d-theme-white-links.js.map