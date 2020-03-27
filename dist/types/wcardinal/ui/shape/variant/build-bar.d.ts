import { Matrix, TextureUvs } from "pixi.js";
import { EShapePointsStyle } from "../e-shape-points-style";
export declare const BAR_VERTEX_COUNT = 4;
export declare const BAR_INDEX_COUNT = 2;
export declare const buildBarClipping: (clippings: Float32Array, voffset: number) => void;
export declare const buildBarIndex: (indices: Uint16Array | Uint32Array, voffset: number, ioffset: number) => void;
export declare const buildBarVertexStepAndColorFill: (vertices: Float32Array, steps: Float32Array, colorFills: Float32Array, voffset: number, pointValues: number[], pointsStyle: EShapePointsStyle, pointsSize: number, strokeWidth: number, internalTransform: Matrix) => void;
export declare const buildBarUv: (uvs: Float32Array, voffset: number, textureUvs: TextureUvs) => void;
