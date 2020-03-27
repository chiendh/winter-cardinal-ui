export interface EShapeGradientPointLike {
    color: number;
    alpha: number;
    position: number;
}
export interface EShapeGradientLike {
    serialized?: string;
    points: EShapeGradientPointLike[];
    direction: number;
}
