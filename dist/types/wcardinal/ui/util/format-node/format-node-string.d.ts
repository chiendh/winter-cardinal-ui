import { FormatNode } from "./format-node";
export declare class FormatNodeString implements FormatNode {
    protected str: string;
    constructor(str: string);
    format(target: number, step: number, date: Date): string;
}
