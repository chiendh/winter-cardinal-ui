import { FormatNode } from "./format-node/format-node";
import { NumberFormatter } from "./number-formatter";
/**
 * A NumberFormatter implementation class.
 */
export declare class NumberFormatterImpl implements NumberFormatter {
    protected isDateRequired: boolean;
    protected nodes: FormatNode[];
    protected date: Date;
    constructor(format: string);
    protected toModifiedNodeDatetime2(modifier: string, node: FormatNode): FormatNode;
    protected toModifiedNodeDatetime3(modifier: string, node: FormatNode): FormatNode;
    protected toModifiedNodeNumber(modifier: string, node: FormatNode): FormatNode;
    format(target: number, step: number): string;
}
