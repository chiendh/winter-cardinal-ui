import { Graphics } from "pixi.js";
import { DBase, DReflowable } from "./d-base";
import { DScrollBarThumb } from "./d-scroll-bar-thumb";
export declare class DScrollBarThumbReflowableHorizontal extends Graphics implements DReflowable {
    constructor(base: DScrollBarThumb);
    onReflow(base: DBase, width: number, height: number): void;
}
