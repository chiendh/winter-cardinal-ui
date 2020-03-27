import { DynamicAtlas } from "./dynamic-atlas";
import { DynamicSDFFontAtlas } from "./dynamic-sdf-font-atlas";
export declare class DynamicSDFFontAtlases {
    protected _atlases: {
        [family: string]: DynamicSDFFontAtlas;
    };
    constructor();
    begin(): void;
    end(): void;
    add(family: string, targets: string): void;
    get(family: string): DynamicSDFFontAtlas | null;
    update(baseAtlas: DynamicAtlas): void;
    destroy(): void;
}
