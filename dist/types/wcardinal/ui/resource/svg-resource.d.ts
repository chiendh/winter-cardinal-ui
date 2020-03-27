import { resources } from "pixi.js";
export declare class SVGResource extends resources.BaseImageResource {
    readonly source: HTMLImageElement;
    readonly svg: string;
    protected _load: Promise<void> | null;
    constructor(source: string, options: any);
    load(): Promise<void>;
    static test(source: unknown, extension: string): boolean;
}
