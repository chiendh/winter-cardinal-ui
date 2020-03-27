import { DDynamicTextMeasureResultCharacter } from "./d-dynamic-text-measure-result-character";
import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";
export declare class DDynamicTextMeasureResult {
    count: number;
    width: number;
    height: number;
    characters: DDynamicTextMeasureResultCharacter[];
    clipped: boolean;
    x: number;
    y: number;
    constructor();
    start(): void;
    push(character: DynamicFontAtlasCharacter): void;
    newLine(lineHeight: number): void;
    pop(): boolean;
    end(lineHeight: number): void;
}
