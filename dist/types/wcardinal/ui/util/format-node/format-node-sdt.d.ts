import { FormatNode } from "./format-node";
export declare class FormatNodesdt implements FormatNode {
    protected Y: FormatNode;
    protected M: FormatNode;
    protected D: FormatNode;
    protected H: FormatNode;
    protected m: FormatNode;
    protected s: FormatNode;
    protected mi: FormatNode;
    constructor(Y: FormatNode, M: FormatNode, D: FormatNode, H: FormatNode, m: FormatNode, s: FormatNode, mi: FormatNode);
    format(target: number, step: number, date: Date): string;
}
