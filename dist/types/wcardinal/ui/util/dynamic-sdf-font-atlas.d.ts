import { DynamicFontAtlasCharacter } from "./dynamic-font-atlas-character";
import { DynamicFontAtlasCharacters } from "./dynamic-font-atlas-characters";
import { DynamicSDFFontGenerator } from "./dynamic-sdf-font-generator";
export interface DynamicSDFFontAtlasFont {
    family: string;
    size: number;
    italic: boolean;
}
export interface DynamicSDFFontAtlasJson {
    width: number;
    height: number;
    font: DynamicSDFFontAtlasFont;
    characters: DynamicFontAtlasCharacters;
}
export declare class DynamicSDFFontAtlas {
    protected static FONT_FAMILY_AUTO: string | null;
    protected _id: string;
    protected _generator: DynamicSDFFontGenerator | null;
    protected _canvas: HTMLCanvasElement | null;
    protected _font: DynamicSDFFontAtlasFont;
    protected _characters: DynamicFontAtlasCharacters;
    protected _length: number;
    protected _width: number;
    protected _height: number;
    protected _isDirty: boolean;
    constructor(fontFamily: string);
    get id(): string;
    get font(): DynamicSDFFontAtlasFont;
    set font(font: DynamicSDFFontAtlasFont);
    get width(): number;
    get height(): number;
    get canvas(): HTMLCanvasElement | null;
    get generator(): DynamicSDFFontGenerator | null;
    get characters(): DynamicFontAtlasCharacters;
    begin(): void;
    end(): void;
    addAscii(): void;
    addChar(character: string): void;
    add(characters: string): void;
    get(character: string): DynamicFontAtlasCharacter | undefined;
    update(): boolean;
    get length(): number;
    toJson(): DynamicSDFFontAtlasJson;
    toString(): string;
    destroy(): void;
    static toFontFamily(fontFamily: string): string;
    static toPowerOf2(size: number): number;
    static getAutoFontFamily(): string;
}
