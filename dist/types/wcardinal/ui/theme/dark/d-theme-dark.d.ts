import { UtilSvgAtlasBuilder } from "../../util/util-svg-atlas-builder";
import { DTheme } from "../d-theme";
interface CLASSES {
    [type: string]: new () => any;
}
interface INSTANCES {
    [type: string]: DTheme;
}
export declare class DThemeDark implements DTheme {
    protected static _classes: CLASSES;
    protected _instances: INSTANCES;
    constructor();
    get<THEME>(type: string): THEME;
    getAtlas(): UtilSvgAtlasBuilder;
    static set<THEME>(type: string, themeClass: new () => THEME): void;
}
export {};
