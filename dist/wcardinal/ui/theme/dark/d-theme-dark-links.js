import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
var DThemeDarkLinks = /** @class */ (function () {
    function DThemeDarkLinks() {
    }
    DThemeDarkLinks.init = function () {
        DThemeDarkAtlas.add("link_mark", 24, 24, "<g>" +
            "<path fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" " +
            "d=\"M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8\" />" +
            "</g>");
    };
    DThemeDarkLinks.getImageSource = function (state) {
        return DThemeDarkAtlas.mappings.link_mark;
    };
    DThemeDarkLinks.getLinkMenuOptions = function () {
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
    DThemeDarkLinks.getOpenLinkInNewWindow = function () {
        return "Open in new window";
    };
    DThemeDarkLinks.getCopyLinkAddress = function () {
        return "Copy link address";
    };
    return DThemeDarkLinks;
}());
export { DThemeDarkLinks };
//# sourceMappingURL=d-theme-dark-links.js.map