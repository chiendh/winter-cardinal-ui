import { FormatNodePrecision } from "./format-node-precision";
export declare class FormatNodefsi extends FormatNodePrecision {
    format(target: number, step: number, date: Date): string;
    protected toAbs(target: number, step: number, date: Date): number;
    protected format_(target: number, unitInverse: number, postfix: string): string;
}
