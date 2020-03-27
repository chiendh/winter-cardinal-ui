import { Graphics, Renderer } from "pixi.js";
import { DBase, DReflowable } from "./d-base";
export declare class DBaseOverflowMaskSimple extends Graphics implements DReflowable {
    constructor(parent: DBase);
    render(renderer: Renderer): void;
    onReflow(base: DBase, width: number, height: number): void;
}
