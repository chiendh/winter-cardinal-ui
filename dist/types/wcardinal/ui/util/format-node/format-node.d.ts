export interface FormatNode {
    format(target: number, step: number, date: Date): string;
}
