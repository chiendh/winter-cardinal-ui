import { DynamicFontAtlasCharacterOrigin } from "./dynamic-font-atlas-chaaracter-origin";
export declare class DynamicFontAtlasCharacter {
    ref: number;
    life: number;
    x: number;
    y: number;
    width: number;
    height: number;
    advance: number;
    origin: DynamicFontAtlasCharacterOrigin;
    reserved: boolean;
    constructor(advance: number, width: number, height: number, reserved: boolean);
}
