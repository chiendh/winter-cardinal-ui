import { Graphics } from "pixi.js";
import { DBase, DReflowable } from "./d-base";
export declare class DListItemSeparatorReflowable extends Graphics implements DReflowable {
    constructor(base: DBase);
    onReflow(base: DBase, width: number, height: number): void;
}
