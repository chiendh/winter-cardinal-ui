import { BaseTexture, Texture } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
export declare class DynamicAtlas {
    protected static INSTANCE: DynamicAtlas | null;
    protected _canvas: HTMLCanvasElement;
    protected _sortedData: DynamicAtlasItem[];
    protected _idToDatum: {
        [id: string]: DynamicAtlasItem;
    };
    protected _baseTexture: BaseTexture;
    protected _isDirty: boolean;
    protected _predefined: {
        [id: string]: DynamicAtlasItem;
    };
    constructor(resolution: number);
    updateFrames(width: number, data: DynamicAtlasItem[]): number;
    renderFrames(width: number, height: number, data: DynamicAtlasItem[]): void;
    applyFrames(data: DynamicAtlasItem[]): void;
    calcCanvasWidth(data: DynamicAtlasItem[]): number;
    cleanup(data: DynamicAtlasItem[]): void;
    begin(): void;
    end(): void;
    repack(forcibly?: boolean): void;
    get(id: string): DynamicAtlasItem | null;
    set(id: string, item: DynamicAtlasItem): DynamicAtlasItem | undefined;
    toDirty(): void;
    getDefaultTexture(): Texture;
    getBaseTexture(): BaseTexture;
    release(id: string): void;
    static ITEM_COMPARATOR: (a: DynamicAtlasItem, b: DynamicAtlasItem) => number;
}
