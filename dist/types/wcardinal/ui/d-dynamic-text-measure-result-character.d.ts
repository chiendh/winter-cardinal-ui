import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";
export declare class DDynamicTextMeasureResultCharacter {
    x: number;
    y: number;
    character: DynamicFontAtlasCharacter;
    constructor(x: number, y: number, character: DynamicFontAtlasCharacter);
    set(x: number, y: number, character: DynamicFontAtlasCharacter): void;
}
