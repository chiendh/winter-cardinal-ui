import { DisplayObject } from "pixi.js";
export interface Owner {
    focus(): void;
}
export interface Parent {
    parent: unknown;
}
export interface Closeable extends DisplayObject {
    close(): void;
}
export declare class DMenuContext {
    protected _owner: Owner;
    protected _closeables: Closeable[];
    constructor(owner: Owner);
    protected indexOf(target: unknown): number;
    protected close(index: number): void;
    add(closeable: Closeable): void;
    trim(closeable: Closeable | null): void;
    remove(closeable: Closeable): void;
}
