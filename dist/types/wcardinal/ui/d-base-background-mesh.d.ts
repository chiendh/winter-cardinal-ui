import { Mesh, MeshMaterial, Renderer, Texture } from "pixi.js";
import { DBaseBackgroundMeshGeometry } from "./d-base-background-mesh-geometry";
import { DCornerMask } from "./d-corner-mask";
export declare class DBaseBackgroundMesh extends Mesh {
    geometry: DBaseBackgroundMeshGeometry;
    shader: MeshMaterial;
    constructor(texture: Texture, borderSize: number, cornerMask: DCornerMask);
    get texture(): Texture;
    set texture(texture: Texture);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    get borderSize(): number;
    set borderSize(borderSize: number);
    get cornerMask(): DCornerMask;
    set cornerMask(cornerMask: DCornerMask);
    protected _render(renderer: Renderer): void;
    update(): void;
}
