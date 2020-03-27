import { Matrix, TextureUvs } from "pixi.js";
export declare const TRIANGLE_VERTEX_COUNT = 7;
export declare const TRIANGLE_INDEX_COUNT = 3;
export declare const TRIANGLE_WORLD_SIZE: [number, number, number];
export declare const buildTriangleClipping: (clippings: Float32Array, voffset: number) => void;
export declare const buildTriangleIndex: (indices: Uint16Array | Uint32Array, voffset: number, ioffset: number) => void;
export declare const buildTriangleVertex: (vertices: Float32Array, voffset: number, originX: number, originY: number, sizeX: number, sizeY: number, strokeAlign: number, strokeWidth: number, internalTransform: Matrix, worldSize: [number, number, number]) => void;
export declare const buildTriangleStep: (steps: Float32Array, clippings: Float32Array, voffset: number, vcount: number, strokeWidth: number, antialiasWeight: number, worldSize: [number, number, number]) => void;
export declare const buildTriangleUv: (uvs: Float32Array, textureUvs: TextureUvs, voffset: number, worldSize: [number, number, number]) => void;
