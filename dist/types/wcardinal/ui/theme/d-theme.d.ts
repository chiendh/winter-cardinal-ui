import { UtilSvgAtlasBuilder } from "../util/util-svg-atlas-builder";
export interface DTheme {
    get<THEME>(type: string): THEME;
    getAtlas(): UtilSvgAtlasBuilder;
}
