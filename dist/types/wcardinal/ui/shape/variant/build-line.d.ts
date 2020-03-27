import { Matrix, TextureUvs } from "pixi.js";
import { EShapePointsStyle } from "../e-shape-points-style";
export declare const toLineVertexCount: (pointCount: number) => number;
export declare const buildLineClipping: (clippings: Float32Array, voffset: number, vcount: number, pointCount: number, pointsClosed: boolean) => void;
export declare const buildLineIndex: (indices: Uint16Array | Uint32Array, voffset: number, ioffset: number, icount: number) => void;
export declare const buildLineUv: (uvs: Float32Array, colorFills: Float32Array, voffset: number, vcount: number, pointCount: number, pointsClosed: boolean, textureUvs: TextureUvs, length: number) => void;
export declare const buildLineVertexStepAndColorFill: (vertices: Float32Array, steps: Float32Array, colorFills: Float32Array, voffset: number, vcount: number, pointCount: number, pointsClosed: boolean, pointValues: number[], pointSegments: number[], pointsStyle: EShapePointsStyle, strokeWidth: number, internalTransform: Matrix) => number;
