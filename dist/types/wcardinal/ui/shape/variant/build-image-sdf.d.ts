import { Matrix, TextureUvs } from "pixi.js";
export declare const IMAGE_SDF_VERTEX_COUNT = 9;
export declare const IMAGE_SDF_INDEX_COUNT = 8;
export declare const IMAGE_SDF_WORLD_SIZE: [number, number];
export declare const buildImageSdfClipping: (clippings: Float32Array, voffset: number) => void;
export declare const buildImageSdfIndex: (indices: Uint16Array | Uint32Array, voffset: number, ioffset: number) => void;
export declare const buildImageSdfStep: (steps: Float32Array, voffset: number, strokeAlign: number, strokeWidth: number, textureWidth: number, textureHeight: number, antialiasWeight: number, worldSize: [number, number]) => void;
export declare const buildImageSdfVertex: (vertices: Float32Array, voffset: number, originX: number, originY: number, sizeX: number, sizeY: number, internalTransform: Matrix, worldSize: [number, number]) => void;
export declare const buildImageSdfUv: (uvs: Float32Array, voffset: number, textureUv: TextureUvs) => void;
