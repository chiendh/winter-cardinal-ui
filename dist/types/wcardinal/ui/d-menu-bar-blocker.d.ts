import { Container, Point } from "pixi.js";
import { Closeable } from "./d-menu-context";
export declare class DMenuBarBlocker extends Container {
    constructor(target: Closeable & Container);
    containsPoint(global: Point): boolean;
}
