import { Mesh, MeshMaterial, Renderer, Texture } from "pixi.js";
import { DBaseBorderMeshGeometry } from "./d-base-border-mesh-geometry";
import { DBorderMask } from "./d-border-mask";
import { DCornerMask } from "./d-corner-mask";
export declare class DBaseBorderMesh extends Mesh {
    geometry: DBaseBorderMeshGeometry;
    shader: MeshMaterial;
    constructor(texture: Texture, borderSize: number, borderMask: DBorderMask, cornerMask: DCornerMask);
    get texture(): Texture;
    set texture(texture: Texture);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get borderSize(): number;
    set borderSize(borderSize: number);
    get borderMask(): DBorderMask;
    set borderMask(borderMask: DBorderMask);
    get cornerMask(): DCornerMask;
    set cornerMask(cornerMask: DCornerMask);
    protected _render(renderer: Renderer): void;
    update(): void;
}
