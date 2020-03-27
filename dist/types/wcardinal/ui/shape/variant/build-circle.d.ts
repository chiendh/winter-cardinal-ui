import { Matrix, TextureUvs } from "pixi.js";
export declare const CIRCLE_VERTEX_COUNT = 9;
export declare const CIRCLE_INDEX_COUNT = 8;
export declare const CIRCLE_WORLD_SIZE: [number, number];
export declare const buildCircleClipping: (clippings: Float32Array, voffset: number) => void;
export declare const buildCircleIndex: (indices: Uint16Array | Uint32Array, voffset: number, ioffset: number) => void;
export declare const buildCircleVertex: (vertices: Float32Array, voffset: number, originX: number, originY: number, sizeX: number, sizeY: number, strokeAlign: number, strokeWidth: number, internalTransform: Matrix, worldSize: [number, number]) => void;
export declare const buildCircleStep: (steps: Float32Array, clippings: Float32Array, voffset: number, strokeWidth: number, antialiasWeight: number, worldSize: [number, number]) => void;
export declare const buildCircleUv: (uvs: Float32Array, voffset: number, textureUvs: TextureUvs) => void;
