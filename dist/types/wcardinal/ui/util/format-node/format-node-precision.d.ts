import { FormatNode } from "./format-node";
export declare abstract class FormatNodePrecision implements FormatNode {
    protected precision: number | undefined;
    constructor(precision?: string);
    abstract format(target: number, step: number, date: Date): string;
}
