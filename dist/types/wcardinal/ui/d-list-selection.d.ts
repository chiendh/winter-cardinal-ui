import { Container, utils } from "pixi.js";
import { DBase } from "./d-base";
export declare enum DListSelectionMode {
    NONE = 0,
    SINGLE = 1,
    MULTIPLE = 2
}
export interface DListSelectionOnOptions {
    [name: string]: Function;
}
export interface DListSelectionOptions {
    mode?: DListSelectionMode;
    on?: DListSelectionOnOptions;
}
export declare class DListSelection extends utils.EventEmitter {
    protected _content: Container;
    protected _isDirty: boolean;
    protected _indices: number[];
    protected _mode: DListSelectionMode;
    constructor(content: Container, options?: DListSelectionOptions);
    toDirty(): void;
    update(): void;
    size(): number;
    isEmpty(): boolean;
    first<T>(): T | null;
    get<T>(index: number): T | null;
    getIndex(index: number): number | null;
    clear(): void;
    add<T extends DBase<any, any>>(target: T): void;
    remove<T extends DBase<any, any>>(target: T): void;
}
