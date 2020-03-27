import { EShapePointsStyle } from "./e-shape-points-style";
export declare type EShapePointsStyleOption = EShapePointsStyle | keyof typeof EShapePointsStyle | Array<keyof typeof EShapePointsStyle>;
export declare class EShapePointsStyles {
    static from(style: EShapePointsStyleOption): EShapePointsStyle;
}
