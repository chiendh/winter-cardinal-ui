import { FormatNode } from "./format-node";
export declare class FormatNodeSpace {
    protected node: FormatNode;
    constructor(node: FormatNode);
    format(target: number, step: number, date: Date): string;
}
