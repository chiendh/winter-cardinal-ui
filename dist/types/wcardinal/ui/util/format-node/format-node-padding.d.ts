import { FormatNode } from "./format-node";
export declare class FormatNodePadding implements FormatNode {
    protected length: number;
    protected character: string;
    protected node: FormatNode;
    constructor(length: number, character: string, node: FormatNode);
    format(target: number, step: number, date: Date): string;
}
