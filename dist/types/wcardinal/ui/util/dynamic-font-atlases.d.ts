import { DApplicationLayerLike } from "../d-application-layer-like";
import { DynamicFontAtlas } from "./dynamic-font-atlas";
export declare class DynamicFontAtlases {
    protected _atlases: Map<string, Map<number, DynamicFontAtlas>>;
    protected _resolution: number;
    constructor(layer: DApplicationLayerLike);
    add(fontId: string, fontSize: number, fontColor: number, targets: string): void;
    remove(fontId: string, fontColor: number, targets: string): void;
    get(fontId: string, fontColor: number): DynamicFontAtlas | null;
    update(): void;
    destroy(): void;
}
