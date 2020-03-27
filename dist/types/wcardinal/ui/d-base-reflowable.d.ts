import { DBase, DReflowable } from "./d-base";
import { DBaseBackgroundMesh } from "./d-base-background-mesh";
import { DBaseBorderMesh } from "./d-base-border-mesh";
import { DBaseOutlineMesh } from "./d-base-outline-mesh";
export declare class DBaseReflowable implements DReflowable {
    protected _lastBackgroundCornerRadius: number;
    protected _lastBorderCornerRadius: number;
    protected _lastBorderWidth: number;
    protected _lastOutlineCornerRadius: number;
    protected _lastOutlineWidth: number;
    protected _backgroundPlane: DBaseBackgroundMesh;
    protected _borderPlane: DBaseBorderMesh;
    protected _outlinePlane: DBaseOutlineMesh;
    constructor(base: DBase);
    onReflow(base: DBase, width: number, height: number): void;
}
